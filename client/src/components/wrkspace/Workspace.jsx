import { useEffect, useState } from "react";
import ComposedContainer from "../charts/ComposedContainer";
import LineChartWrapper from "../charts/LineChartWrapper";
import PieChartWrapper from "../charts/PieChartWrapper";
import RadialBarChartWrapper from "../charts/RadialBarChartWrapper";
import Header from "../header/Header";
import styles from "./Workspace.module.css";
import axios from "axios";

const Workspace = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // Api Call
    const API_URL = `https://reqres.in/api/users?page=2`;
    try {
      const res = await axios.get(API_URL);
      // console.log(res);

      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.workspaceSection}>
      {/* Header section here   */}
      <Header />
      {/* User Data Here  */}
      <div className={styles.chartSection}>
        <PieChartWrapper data={data} />
        <RadialBarChartWrapper data={data} />
        <LineChartWrapper data={data} />
        <ComposedContainer data={data} />
      </div>
    </div>
  );
};

export default Workspace;
