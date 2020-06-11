import '../scss/main.scss';

const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    console.log(`Wartość ENTRY to: ${entry}`);
    result = entry;
}

const inputEntry = document.querySelector('.form__textarea--js');
inputEntry.value = result;

const buttonSave = document.querySelector('.button__save--js');

console.log(buttonSave);

buttonSave.addEventListener('click', () => {
    localStorage.setItem('entry', inputEntry.value);
});