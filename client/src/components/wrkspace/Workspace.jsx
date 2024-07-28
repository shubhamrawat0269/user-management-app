import Header from "../header/Header";
import styles from "./Workspace.module.css";

const Workspace = () => {
  return (
    <div className={styles.workspaceSection}>
      {/* Header section here   */}
      <Header />
      {/* User Data Here  */}
    </div>
  );
};

export default Workspace;
