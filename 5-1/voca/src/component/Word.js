import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  // 처음엔 뜻이 안 보여야하니 초기값을 false로 준다.
  const [isDone, setIsDone] = useState(word.isDone);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = () => {
    setIsDone(!isDone);
  };
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"} </button>
        <button className="btn_del">삭제 </button>
      </td>
    </tr>
  );
}
