import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <span className="title">나는 고양이 딱지🐱 너는 누구?</span>
      </header>
      <main>
        <div className="sidebar">
          <button type="button" className="add-button" id="add-item">
            추가
          </button>
          <span>👔딱지</span>
          <span>👀딱지</span>
          <span>😴딱지</span>
          <span>👅딱지</span>
          <span>😪딱지</span>
        </div>
        <section className="container scroll" id="container">
          <div className="card">
            <span>출근하는 딱지여요</span>
          </div>
          <div className="card">
            <span>CCTV 딱지여요</span>
          </div>
          <div className="card">
            <span>LAZY 딱지여요</span>
          </div>
          <div className="card">
            <span>메롱 딱지여요</span>
          </div>
          <div className="card">
            <span>졸린 딱지여요</span>
          </div>
        </section>
      </main>
    </div>
  );
}
