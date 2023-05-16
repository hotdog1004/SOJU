let image = "";
const images = [
  "237",
  "40",
  "219",
  "200",
  "433",
  "582",
  "577",
  "593",
  "659",
  "718",
];

const addItem = (name, image, content) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
        <img src="${image}" alt="${name}" />
        <span>${content}</span>
    `;

  document.querySelector("#container").appendChild(div);

  const span = document.createElement("span");
  span.innerHTML = `🐈${name}`;
  document.querySelector("#sidebar").appendChild(span);
};

const addItemHandle = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const content = document.getElementById("content").value;

  addItem(name, image, content);
  closeModal();
};

const checkImg = (e) => {
  e.preventDefault();
  image = document.getElementById("image").value;
  if (image === "") {
    alert("등록된 이미지가 없으므로 랜덤 이미지가 등록됩니다.");
    const randomImg = images[Math.floor(Math.random() * images.length)];
    image = `https://picsum.photos/id/${randomImg}/200/300`;
  }
  addItemHandle(e);
};

document.getElementById("addItemForm").addEventListener("submit", checkImg);
