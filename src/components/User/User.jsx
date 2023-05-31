import styles from "./User.module.css";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={photoURL} alt={displayName} />
    </div>
  );
}
