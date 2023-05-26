import { useState } from "react";

interface IProps {
  word: IWord;
}
export interface IWord {
  day : string,
  eng : string,
  kor : string,
  isDone : boolean,
  id : number
}

export default function Word({ word: w }: IProps) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  // 처음엔 뜻이 안 보여야하니 초기값을 false로 준다.
  const [isDone, setIsDone] = useState(word.isDone);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = () => {
    // setIsDone(!isDone);
    // isDone 부분을 기억할 수 있도록 처리해보자
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const del = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          // 삭제가 잘 처리 됐으면 word의 id를 0으로 세팅한다.
          setWord({ 
            ...word,
            id: 0,
           });
        }
      });
    }
  };

  if (word.id === 0) return null;

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"} </button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
