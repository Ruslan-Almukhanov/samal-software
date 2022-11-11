import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <NavLink to="/locomotives">Локомотивы</NavLink>
        </li>
        <li>
          <NavLink to="/map">Карта</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
