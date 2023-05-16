// const addItem = (name, image, content) => {
function addItem(name, image, content) {
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
}

// const addItemHandle = (e) => {
function addItemHandle(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  addItem(name, image, content);
  closeModal();
}

document
  .getElementById("addItemForm")
  .addEventListener("submit", addItemHandle);
