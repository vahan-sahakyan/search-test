const content = document.querySelector(".content");
const info = document.querySelector(".info");
const input = document.querySelector(".input");
const list = document.querySelector(".items-list");
const names1 = ["q", "qw", "qwe", "qwer", "qwert", "qwerty"];

const names = [
  "Vahan",
  "Vardan",
  "Vahe",
  "Veronika",
  "Varduhi",
  "Vilen",
  "Vlad",
  "Voskan",
  "Volodya",
  "Venera",
  "Smbat",
  "Serob",
  "Sargis",
  "Suren",
  "Simon",
  "Srbuhi",
  "Siranush",
  "Spartak",
  "asdasdasdasdasdasdasdasd",
];

info.innerHTML = "<h3><span>TEST</span><strong>DATA</strong></h3>";
for (const item of names) {
  info.innerHTML += `<li>${item}</li>`;
}

const isMatching = function (name, input) {
  let normalizedInput = input
    .toLowerCase()
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll(" ", "");

  return (
    name.toLowerCase().indexOf(normalizedInput) !== -1 &&
    name.toLowerCase().startsWith(normalizedInput.slice("0"))
  );
};

let results = [];
let timeoutId;
input.addEventListener("input", function () {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  if (!input.value) {
    list.innerHTML = "";
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function () {
    // resets previous output
    list.innerHTML = "";

    // check if matching
    for (const name of names) {
      if (isMatching(name, input.value)) results.push(name);
    }

    // outputs each result to DOM
    for (const result of results) {
      list.innerHTML += `<li>${result}</li>`;
    }

    // if no input resets output
    if (!input.value) {
      list.innerHTML = "";
      clearTimeout(timeoutId);
    }

    results = [];
  }, 500);
});
