import { useQuery } from "@tanstack/react-query";
import { getJsList } from "../../api/firebase";
import QuestionList from "../../components/QuestionList/QuestionList";
import Loading from "./../../components/Loading/Loading";

export default function Javascript() {
  const {
    isLoading,
    error,
    data: javascript,
  } = useQuery(["javascript"], () => {
    return getJsList();
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {javascript && <QuestionList itemList={javascript} />}
    </>
  );
}
