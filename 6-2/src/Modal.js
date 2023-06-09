import { useState } from "react";

export default function Modal(isModalShow, handleModal, handleAddItem) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image, title });
    handleModal(false);
  };

  return (
    <div className="modal-background" hidden={!isModalShow}>
      <form className="modal" onSubmit={onSubmit}>
        <span className="modal-close" onClick={() => handleModal(false)}>
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="이름을 입력하세요"
          className="input"
          maxLength={10}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="title" className="label">
          이름
        </label>
        <input
          id="title"
          type="text"
          placeholder="타이틀을 입력하세요"
          className="input"
          maxLength={10}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="image" className="label">
          사진
        </label>
        <input
          id="image"
          type="text"
          placeholder="URL을 입력하세요"
          className="input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <input
          id="content"
          type="text"
          placeholder="내용을 입력하세요."
          className="input"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-button">
          저장
        </button>
      </form>
    </div>
  );
}
