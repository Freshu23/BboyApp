import React from "react";
import Sidebar from "./sidebar/Sidebar";
import styles from "./Layout.module.css";
import { getEvents } from "../../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { incrementByAmount } from "../../redux/reducer/counterSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const getEvent = data => {
    dispatch(incrementByAmount(data));
  };
  useEffect(() => {
    getEvents(getEvent);
  }, []);
  return (
    <div className="content">
      <Sidebar />
      <div className={styles.contentRight}>{children}</div>
    </div>
  );
};

export default Layout;
