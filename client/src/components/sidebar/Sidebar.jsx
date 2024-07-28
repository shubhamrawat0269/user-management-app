import styles from "./Sidebar.module.css";
import { useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.userData);
  const { username } = currentUser?.data;

  return (
    <div className={styles.sidebarSection}>
      {/* user info */}

      <h3 className={styles.name}>
        Welcome, <span className={styles.username}>{username}</span>
      </h3>
      <ul className={styles.menuContainer}>
        <li className={styles.menuList}>
          <FaHome size={20} color="white" />
          <span>Main Dashboard</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
