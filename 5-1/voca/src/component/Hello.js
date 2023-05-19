import styles from "./Hello.module.css";
import { useState } from "react";

export default function Hello() {
  const [fruit, setFruit] = useState("Apple");
  // setFruit 함수를 호출해서 값이 변하면 리액트는 화면을 재랜더링해준다.

  return (
    <div>
      <h1>state</h1>
      <h2 id="fruit">{fruit}</h2>
      <button
        onClick={() => {
          setFruit(fruit === "Apple" ? "Banana" : "Apple");
        }}
      >
        click me!
      </button>
    </div>
  );
}
