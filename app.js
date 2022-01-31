const content = document.querySelector('.content');
const info = document.querySelector('.info');
const input = document.querySelector('.input');
const list = document.querySelector('.items-list');
const names1 = ['q', 'qw', 'qwe', 'qwer', 'qwert', 'qwerty'];

const names = [
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

info.innerHTML = '<h3><span>TEST</span><strong>DATA</strong></h3>';
names.forEach(name => (info.innerHTML += `<li>${name}</li>`));

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
