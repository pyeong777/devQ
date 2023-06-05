import { useEffect, useState } from "react";
import styles from "./QuestionList.module.css";
import Button from "../ui/Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { useAuthContext } from "../../context/AuthContext";
import {
  addToBookMark,
  getIsBookMark,
  removeFromBookMark,
} from "../../api/firebase";

export default function QuestionList({ itemList }) {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const { uid } = useAuthContext();

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

  //개행 적용
  const answerList =
    array[index].item &&
    (array[index].item.answer || "").replaceAll("<br />", "\n");

  const questionList = array[index].item && array[index].item.question;

  const id = array[index].item && array[index].item.id;

  // const [isMark, setIsMark] = useState(false);

  // const handleBookMark = () => {
  //   const quest = { answer: answerList, question: questionList, id };
  //   addToBookMark(uid, quest);
  //   removeFromBookMark(uid, quest.id);
  // };
  console.log(getIsBookMark(uid, id));
  return (
    <>
      <article className={styles.article}>
        <section className={styles.question}>
          <div>{questionList}</div>
          {/* <div className={styles.bookmark} onClick={handleBookMark}> */}
          <div className={styles.bookmark}>
            {/* {isMark ? <BsBookmark size="20" /> : <BsBookmarkFill size="20" />} */}
            <BsBookmark size="20" />
          </div>
        </section>
        <section className={styles.answer}>
          <div className={!isOpen ? styles.close : styles.open}>
            {answerList}
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
