import { useQuery } from "@tanstack/react-query";
import { getCsList } from "../../api/firebase";
import Loading from "../../components/Loading/Loading";
import QuestionList from "../../components/QuestionList/QuestionList";

export default function ComputerScience() {
  const {
    isLoading,
    error,
    data: cs,
  } = useQuery(["cs"], () => {
    return getCsList();
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {cs && <QuestionList itemList={cs} />}
    </>
  );
}
