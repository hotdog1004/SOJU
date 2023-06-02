import React, { useState } from "react";

export default function Input() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };
  return (
    <div>
      <h2>hello inputs!!!</h2>
      <input
        name="name"
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={name}
      />
      <br />
      <input
        name="nickname"
        placeholder="닉네임을 입력하세요"
        onChange={onChange}
        value={nickname}
      />
      <br />
      <button onClick={onReset}>초기화</button>

      <div>
        {name}님의 닉네임은 {nickname}입니다.
      </div>
    </div>
  );
}
