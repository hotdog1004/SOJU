export default function Modal() {
  const closeModal = () => {
    // closeModal
  };

  const onSubmit = () => {
    //onSubmit
  };

  return (
    <div className="modal-background" id="modal">
      <form className="modal" id="addItemForm">
        <span className="modal-close" onClick={closeModal}>
          X
        </span>
        <label for="name" className="label">
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="이름을 입력하세요"
          className="input"
          maxLength={10}
          required
        />
        <label for="image" className="label">
          사진
        </label>
        <input
          id="image"
          type="text"
          placeholder="URL을 입력하세요"
          className="input"
        />
        <label for="content" className="label">
          내용
        </label>
        <input
          id="content"
          type="text"
          placeholder="내용을 입력하세요."
          className="input"
          required
        />
        <button type="submit" className="submit-button" onClick={onSubmit}>
          저장
        </button>
      </form>
    </div>
  );
}
