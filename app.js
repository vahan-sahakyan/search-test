const content = document.querySelector(".content");
const info = document.querySelector(".info");
const input = document.querySelector(".input");
const list = document.querySelector(".items-list");
// const data = ["q", "qw", "qwe", "qwer", "qwert", "qwerty"];

const data = [
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
];

info.innerHTML = `TEST DATA <br/><br/>`;
for (let i = 0; i < data.length; i++) {
  info.innerHTML += `${data[i]} <br/>`;
}

let result = [];

input.addEventListener("input", function () {
  list.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
      result.push(data[i]);
    }
  }

  // print the results in DOM
  for (let i = 0; i < result.length; i++) {
    list.innerHTML += `${result[i]} <br/>`;
  }

  // if no input reset output
  if (!input.value) {
    list.innerHTML = "";
  }

  result = [];
});
