document.getElementById("modal").style.display = "none";

document.getElementById("addItem").onclick = () => {
  document.getElementById("modal").style.display = "block";
};

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

// function closeModal() {
//   document.getElementById("modal").style.display = "none";
// }
