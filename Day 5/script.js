let form = document.getElementById("cardForm");
let table = document.getElementById("tableBody");
const STORAGE_KEY = "day5_cards";

function appendRow({ cardNumber, cardHolder, month, year }) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
          <td>${cardNumber}</td>
          <td>${cardHolder}</td>
          <td>${month}/${year}</td>
  `;
  table.appendChild(newRow);
}

function loadCards() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const cards = raw ? JSON.parse(raw) : [];
  cards.forEach(appendRow);
  return cards;
}

function saveCards(cards) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

let cards = loadCards();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let cardNumber = document.getElementById("cardNumber").value;
  let cardHolder = document.getElementById("cardHolder").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  const card = { cardNumber, cardHolder, month, year };
  cards.push(card);
  saveCards(cards);
  appendRow(card);
  form.reset();
});