import '../scss/main.scss';


const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    console.log(`Wartość ENTRY to: ${entry}`);
    result = entry;
}


const inputEntry = document.querySelector('.form__textarea--js');  //pobranie tekstu
inputEntry.value = result;



const buttonSave = document.querySelector('.button__save--js');     //przpięcie button save

buttonSave.addEventListener('click', () => {                        //na klik zapisz do localStorage
    localStorage.setItem('entry', inputEntry.value);
});



const buttonLoad = document.querySelector('.button__load--js');     //przypięcie button load

buttonLoad.addEventListener('click', () => {
    localStorage.getItem('entry', inputEntry.value);                //na klik załaduj z localStorage
});



const buttonClear = document.querySelector('.button__clear--js');     //przypięcie button clear

buttonClear.addEventListener('click', () => {
    localStorage.removeItem('entry', inputEntry.value);                //wyczyszczenie localStorage
});