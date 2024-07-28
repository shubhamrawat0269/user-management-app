import styles from "./Navbar.module.css";
import { FaMoon, FaSearch } from "react-icons/fa";
import { Button, Navbar, TextInput } from "flowbite-react";

const NavbarWrapper = () => {
  return (
    <Navbar className={styles.navbarWrapper}>
      {/* logo */}
      <div className={styles.logo}>
        <span>Main Dashboard</span>
      </div>
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
        <Button className={styles.darkThemeBtn} outline>
          <FaMoon size={20} />
        </Button>
        <div>
          <Button>Sign Out</Button>
        </div>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default NavbarWrapper;
