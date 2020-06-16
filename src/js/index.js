import '../scss/main.scss';


const inputEntry = document.querySelector('.form__textarea--js');  
const buttonSave = document.querySelector('.button__save--js');
const buttonLoad = document.querySelector('.button__load--js');
const buttonClear = document.querySelector('.button__clear--js');

const entry = localStorage.getItem('entry');


let result = '';

if (entry) {
    console.log(`Wartość ENTRY to: ${entry}`);
    result = entry;
}


buttonSave.addEventListener('click', (e) => {  
    e.preventDefault();                     
    localStorage.setItem('entry', inputEntry.value);
});


buttonLoad.addEventListener('click', (e) => {
    e.preventDefault(); 
    inputEntry.value = localStorage.getItem('entry');
});


buttonClear.addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.removeItem('entry', inputEntry.value);                
});