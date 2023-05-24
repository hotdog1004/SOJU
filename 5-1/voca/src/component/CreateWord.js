import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  // 통신 중에는 버튼을 여러번 클릭해도 반응하지 않도록 하기 위해 변수로 처리
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e) => {
    // 버튼 클릭시 새로고침되는 걸 막기 위해 추가
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다!");
          navigate(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  };

  // input 태그에 적힌 값을 얻기 위해 useRef() 훅 사용
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
