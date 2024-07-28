import { Sidebar, Workspace } from "../../components";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardSection}>
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default Dashboard;
