import { useQuery } from "@tanstack/react-query";
import { getReactList } from "../../api/firebase";
import QuestionList from "../../components/QuestionList/QuestionList";
import Loading from "../../components/Loading/Loading";

export default function ReactJs() {
  const {
    isLoading,
    error,
    data: react,
  } = useQuery(["react"], () => {
    return getReactList();
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {react && <QuestionList itemList={react} />}
    </>
  );
}
