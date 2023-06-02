import { useEffect, useState } from "react";
import styles from "./QuestionList.module.css";
import Button from "../ui/Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";

export default function QuestionList({ itemList }) {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const [array, setArray] = useState(itemList);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    shuffleArray();
  }, []);

  const shuffleArray = () => {
    const randomArray = array.map((item, i) => ({
      item,
      index: i,
    }));
    randomArray.sort((a, b) => Math.random() - 0.5);
    setArray(randomArray);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
      setIsOpen(false);
    }
  };

  const onNextClick = () => {
    if (index < array.length - 1) {
      setIndex(index + 1);
      setIsOpen(false);
    }
  };

  return (
    <>
      <article className={styles.article}>
        <section className={styles.question}>
          <div>{array[index].item && array[index].item.question}</div>
          <div className={styles.bookmark}>
            <BsBookmark size="20" />
          </div>
        </section>
        <section className={styles.answer}>
          <div className={!isOpen ? styles.close : styles.open}>
            {array[index].item && array[index].item.answer}
          </div>
        </section>
        <section className={styles.button}>
          <button
            className={styles.move}
            onClick={onPrevClick}
            disabled={index === 0}
          >
            <VscTriangleLeft size="36" />
          </button>
          <Button text="정답확인" onClick={openHandler} />
          <button
            className={styles.move}
            onClick={onNextClick}
            disabled={index === array.length - 1}
          >
            <VscTriangleRight size="36" />
          </button>
        </section>
      </article>
    </>
  );
}
