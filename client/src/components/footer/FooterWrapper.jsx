import { Footer } from "flowbite-react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterWrapper = () => {
  return (
    <Footer container className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.primarySection}>
          <div className="mt-5">
            <Link to="/" className={styles.logo}>
              <span>Blogger's</span>
            </Link>
          </div>
          <div className={styles.primaryCategory}>
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://i-portfolio-zeta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/shubhamrawat0269?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className={styles.secondarySection}>
          <Footer.Copyright
            href="#"
            by="Blogger's"
            year={new Date().getFullYear()}
          />
          <div className={styles.footerIcons}>
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/sahandghavidel"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterWrapper;
