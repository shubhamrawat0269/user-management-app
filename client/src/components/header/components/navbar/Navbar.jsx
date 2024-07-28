import styles from "./Navbar.module.css";
import { FaMoon, FaSearch } from "react-icons/fa";
import { Button, Navbar, TextInput } from "flowbite-react";
import { useLocation, Link } from "react-router-dom";

const NavbarWrapper = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className={styles.navbarWrapper}>
      {/* logo */}
      <Link to="/" className={styles.logo}>
        <span>Blogger's</span>
      </Link>
      {/* search form  */}
      <form onSubmit={() => {}}>
        <TextInput
          type="text"
          className={styles.textInputBox}
          placeholder="Search..."
          rightIcon={FaSearch}
        />
      </form>
      <Button color="gray" className={styles.searchBtn} pill>
        <FaSearch />
      </Button>
      <div className={styles.btnWrapper}>
        <Button className={styles.darkThemeBtn}>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarWrapper;
