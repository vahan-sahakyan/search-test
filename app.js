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
  "Verdana",
  "Smbat",
];

info.innerHTML = `TEST DATA <br/><br/>`;
for (let i = 0; i < data.length; i++) {
  info.innerHTML += `${data[i]} <br/>`;
}

let typed = "";
let result = [];

input.oninput = function () {
  list.innerHTML = "";

  typed = input.value;
  for (let i = 0; i < data.length; i++) {
    if (data[i].match(typed)) {
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
};
