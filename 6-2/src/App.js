import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

export default function App() {
  const dataList = [
    {
      name: "신입딱지",
      content: "출근하는 딱지여요",
      image: "./assets/cat1.jpg",
      title: "👔딱지",
    },
    {
      name: "씨씨티비딱지",
      content: "CCTV 딱지여요",
      image: "./assets/cat2.jpg",
      title: "👀딱지",
    },
    {
      name: "귀찮딱지",
      content: "LAZY 딱지여요",
      image: "./assets/cat3.jpg",
      title: "😴딱지",
    },
    {
      name: "메롱딱지",
      content: "메롱 딱지여요",
      image: "./assets/cat4.jpg",
      title: "👅딱지",
    },
    {
      name: "졸린딱지",
      content: "졸린 딱지여요",
      image: "./assets/cat5.jpg",
      title: "😪딱지",
    },
  ];

  const [isModalShow, setIsModalShow] = useState(false);
  const [data, setData] = useState(dataList);

  let handleModal = (value) => {
    setIsModalShow(value);
  };

  let handleAddItem = (item) => {
    setData([...data, item]);
  };

  return (
    <div className="App">
      <header>
        <span className="title">나는 고양이 딱지🐱 너는 누구?</span>
      </header>
      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            id="add-item"
            onClick={() => handleModal(true)}
          >
            추가
          </button>
          {dataList.map((item) => (
            <span key={item.name}>{item.title}</span>
          ))}
        </div>
        <section className="container scroll" id="container">
          {dataList.map((item) => (
            <div className="card" key={item.name}>
              <img src={require(`${item.image}`)} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal
        isModalShow={isModalShow}
        handleModal={handleModal}
        handleAddItem={handleAddItem}
      />
    </div>
  );
}
