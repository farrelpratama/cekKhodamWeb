const inputName = document.getElementById("name");
const button = document.getElementById("button");
const section = document.getElementById("section");
const listKhodam = [
  "Rehan Wangsap",
  "Ibnu Wazowski",
  "Roger Sumatra",
  "Windah Batubara",
  "Freya JKT48",
  "Zee JKT48",
  "Mr Waduh",
  "Max Verstappen",
  "Raja Crypto",
  "Mas Anies",
];
const numIndex = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", function cekKhodam() {
  // remove element
  const section = document.getElementById("section");
  const sectionh2 = document.querySelector("#section h2");

  section.removeChild(sectionh2);
  section.removeChild(inputName);
  section.removeChild(button);

  // change element
  const title = document.querySelector("h1");
  title.innerHTML = inputName.value + ", Khodam Kamu Adalah";

  const gambar = document.createElement("div");
  section.appendChild(gambar);

  const result = listKhodam[numIndex - 1];
  if (result === "Rehan Wangsap") {
    gambar.classList.add("rehan");
  } else if (result === "Ibnu Wazowski") {
    gambar.classList.add("ibnu");
  } else if (result === "Roger Sumatra") {
    gambar.classList.add("roger");
  } else if (result === "Windah Batubara") {
    gambar.classList.add("windah");
  } else if (result === "Freya JKT48") {
    gambar.classList.add("freya");
  } else if (result === "Zee JKT48") {
    gambar.classList.add("zee");
  } else if (result === "Mr Waduh") {
    gambar.classList.add("waduh");
  } else if (result === "Max Verstappen") {
    gambar.classList.add("max");
  } else if (result === "Raja Crypto") {
    gambar.classList.add("timothy");
  } else {
    gambar.classList.add("anies");
  }

  const label = document.createElement("p");
  const labelText = document.createTextNode(listKhodam[numIndex - 1]);
  label.appendChild(labelText);
  section.appendChild(label);
});
