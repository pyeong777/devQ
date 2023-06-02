import styles from "./Home.module.css";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiInstructure, SiJavascript } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <article className={styles.article}>
        <section>
          <div className={styles.fadein}>
            <p>devQ와 함께</p>
            <p>프론트엔드 면접 준비를 해보세요!</p>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.fadeinLogo}>
            <AiOutlineHtml5 size="100" color="#E34F26" />
          </div>
          <div className={styles.fadeinLogo}>
            <FaCss3Alt size="100" color="#1572B6" />
          </div>
          <div className={styles.fadeinLogo}>
            <SiJavascript size="90" color="#F7DF1E" />
          </div>
          <div className={styles.fadeinLogo}>
            <FaReact size="100" color="#61DAFB" />
          </div>
          <div className={styles.fadeinLogo}>
            <RiComputerLine size="100" color="#B7178C" />
          </div>
          <div className={styles.fadeinLogo}>
            <SiInstructure size="100" color="#2AB1AC" />
          </div>
        </section>
      </article>
    </>
  );
}
