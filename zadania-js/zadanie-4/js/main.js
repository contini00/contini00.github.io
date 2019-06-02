const submit = document.querySelector('#formularz').lastElementChild;
const imie = document.querySelectorAll('input')[0].value;
const nazwisko = document.querySelectorAll('input')[1].value;
console.log(submit);

const clikCallback = (e) =>{
    e.preventDefault();
    alert('Sub poszedł');
    console.log(imie);
    console.log(nazwisko);
}

submit.addEventListener('click', clikCallback);

