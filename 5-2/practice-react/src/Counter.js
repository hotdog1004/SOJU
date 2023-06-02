import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트한다.
    document.title = `You clicked ${count} times!`;
  });

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p> 총 {count} 번 클릭했습니다. </p>
      <button onClick={onClick}>click</button>
    </div>
  );
}
