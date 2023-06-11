import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import defaultImg from "../src/assets/cat1.jpg";
import cat2 from "../src/assets/cat2.jpg";
import cat3 from "../src/assets/cat3.jpg";
import cat4 from "../src/assets/cat4.jpg";
import cat5 from "../src/assets/cat5.jpg";

export default function App() {
  const dataList = [
    {
      name: "신입딱지",
      content: "출근하는 딱지여요",
      image: defaultImg,
      title: "👔딱지",
    },
    {
      name: "씨씨티비딱지",
      content: "CCTV 딱지여요",
      image: cat2,
      title: "👀딱지",
    },
    {
      name: "귀찮딱지",
      content: "LAZY 딱지여요",
      image: cat3,
      title: "😴딱지",
    },
    {
      name: "메롱딱지",
      content: "메롱 딱지여요",
      image: cat4,
      title: "👅딱지",
    },
    {
      name: "졸린딱지",
      content: "졸린 딱지여요",
      image: cat5,
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

  const onErrorImg = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <>
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
            {data.map((item) => (
              <span key={item.name}>{item.title}</span>
            ))}
          </div>
          <section className="container scroll" id="container">
            {data.map((item) => (
              <div className="card" key={item.name}>
                <img src={item.image} alt={item.name} onError={onErrorImg} />
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
    </>
  );
}
