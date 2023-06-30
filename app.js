const content = document.querySelector('.content');
const info = document.querySelector('.info');
const input = document.querySelector('.input');
const list = document.querySelector('.items-list');
const names1 = ['q', 'qw', 'qwe', 'qwer', 'qwert', 'qwerty'];
const names2 = [
  'Vahan',
  'Vardan',
  'Vahe',
  'Veronika',
  'Varduhi',
  'Vilen',
  'Vlad',
  'Voskan',
  'Volodya',
  'Venera',
  'Smbat',
  'Serob',
  'Sargis',
  'Suren',
  'Simon',
  'Srbuhi',
  'Siranush',
  'Spartak',
  'asdasdasdasd',
];

const renderInfo = () => {
  names.forEach(
    name =>
      (info.innerHTML += `
        <div style="
          text-align: right;
          display: flex;
          justify-content: end;
        ">
          <li class="names-item" style="
            width: fit-content;
            text-align: right;
            border-bottom: 1px solid #fff3;
            margin-right: 0;
            white-space: nowrap;
            margin-bottom:.3rem;
          ">${name}</li>
        </div>
      `)
  );
};

let data = [];
let names = [];
(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  data = await res.json();
  for (const user of data) names.push(user.name);
  renderInfo();
})();

info.innerHTML = '<h3><span>TEST</span><strong>DATA</strong></h3>';

const isMatching = function (name, input) {
  const normalizedInput = input.toLowerCase().replaceAll('.', '').trim();
  return (
    normalizedInput &&
    name.toLowerCase().indexOf(normalizedInput) !== -1 &&
    name.toLowerCase().startsWith(normalizedInput.slice('0'))
  );
};

let results = [];
let timeoutId;
input.addEventListener('input', function () {
  timeoutId && clearTimeout(timeoutId);

  if (!input.value) {
    list.innerHTML = '';
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function () {
    // resets previous output
    list.innerHTML = '';
    console.log(data);

    // check if matching
    names.forEach(name => isMatching(name, input.value) && results.push(name));

    // outputs each result to DOM
    results.forEach(result => (list.innerHTML += `<li>${result}</li>`));

    // if no input resets output
    if (!input.value) {
      list.innerHTML = '';
      clearTimeout(timeoutId);
    }

    results = [];
  }, 300);
});
