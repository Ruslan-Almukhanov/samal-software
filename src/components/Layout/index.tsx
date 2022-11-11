import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "components/Sidebar";
import styles from "./Layout.module.scss";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/locomotives");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={styles.layout} data-testid="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
