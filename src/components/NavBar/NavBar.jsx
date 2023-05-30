import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./NavBar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { DiReact } from "react-icons/di";
import { FiX } from "react-icons/fi";
import { navmenu, path } from "./../../constants/constants";
import { useState } from "react";

export default function NavBar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.head}>
          <Link className={styles.logo} to="/">
            <DiReact className={styles.react} size="48" />
            <h1 className={styles.h1}>devQ</h1>
          </Link>
          <div className={styles.hamburger} onClick={handleToggleOpen}>
            {isToggleOpen ? (
              <FiX className={styles.fix} size="24" />
            ) : (
              <RxHamburgerMenu size="24" />
            )}
          </div>
        </div>

        {isToggleOpen ? (
          <ul className={styles.ul}>
            {navmenu.map((menu, index) => (
              <Link className={styles.link} key={index} to={`/${path[index]}`}>
                <li
                  className={styles.li}
                  key={index}
                  onClick={handleToggleOpen}
                >
                  {menu}
                </li>
              </Link>
            ))}
            <li className={styles.li} onClick={handleToggleOpen}>
              <Button text={"Login"} />
            </li>
          </ul>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
