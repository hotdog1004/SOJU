import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

export default function Day() {
  // dummy.words 이용
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
