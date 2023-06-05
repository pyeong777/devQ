import { useQuery } from "@tanstack/react-query";
import { getHtmlList } from "../../api/firebase";
import QuestionList from "../../components/QuestionList/QuestionList";
import Loading from "../../components/Loading/Loading";

export default function Html() {
  const {
    isLoading,
    error,
    data: html,
  } = useQuery(["html"], () => {
    return getHtmlList();
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {html && <QuestionList itemList={html} />}
    </>
  );
}
