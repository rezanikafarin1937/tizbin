import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import styles from "./Navbar.module.scss";

function Navbar() {
  const location = useLocation();

  return (
    <ul className={styles.parent}>
      {routes.map(
        (route) =>
          route.title && (
            <li
              key={route.path}
              className={
                location.pathname === route.path ? styles.parent__navLine : ""
              }
            >
              <Link
                className={
                  location.pathname === route.path ? styles.parent__navActive : ""
                }
                to={route.path}
                aria-current={
                  location.pathname === route.path ? "page" : undefined
                }
              >
                {route.title}
              </Link>
            </li>
          ),
      )}
    </ul>
  );
}

export default Navbar;
