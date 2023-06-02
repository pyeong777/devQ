import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.fof}>
          <h1>Error 404</h1>
          <p>
            <Link to="/">go to home &rarr;</Link>
          </p>
        </div>
      </div>
    </>
  );
}
