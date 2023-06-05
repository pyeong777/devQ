import { useQuery } from "@tanstack/react-query";
import QuestionList from "../../components/QuestionList/QuestionList";
import { getCssList } from "../../api/firebase";
import Loading from "../../components/Loading/Loading";

export default function Css() {
  const {
    isLoading,
    error,
    data: css,
  } = useQuery(["css"], () => {
    return getCssList();
  });
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {css && <QuestionList itemList={css} />}
    </>
  );
}
