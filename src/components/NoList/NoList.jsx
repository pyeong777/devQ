import styles from "./NoList.module.css";

export default function NoList() {
  return (
    <>
      <div className={styles.flexbox}>
        <div className={styles.div}>북마크가 비어있습니다!</div>
      </div>
    </>
  );
}
