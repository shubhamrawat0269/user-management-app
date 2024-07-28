import { Outlet } from "react-router-dom";
import "./Header.css";
import NavbarWrapper from "./components/navbar/Navbar";
import FooterWrapper from "../footer/FooterWrapper";

const Header = () => {
  return (
    <div className="workspaceWrapper">
      <NavbarWrapper />
      <Outlet />
      <FooterWrapper />
    </div>
  );
};

export default Header;
