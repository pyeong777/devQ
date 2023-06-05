import { useQuery } from "@tanstack/react-query";
import { getBookMark } from "../../api/firebase";
import QuestionList from "../../components/QuestionList/QuestionList";
import Loading from "../../components/Loading/Loading";
import { useAuthContext } from "../../context/AuthContext";
import NoList from "../../components/NoList/NoList";

export default function BookMark() {
  const { uid } = useAuthContext();
  const {
    isLoading,
    error,
    data: bookmark,
  } = useQuery(["bookmark"], () => {
    return getBookMark(uid);
  });

  const isMark = true;
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {bookmark && bookmark.length > 0 && (
        <QuestionList itemList={bookmark} isMark={isMark} />
      )}
      {bookmark && bookmark.length == 0 && <NoList />}
    </>
  );
}
