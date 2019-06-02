const form = document.querySelector('#formularz');
const imp1 = document.querySelectorAll('input')[0];
const imp2 = document.querySelectorAll('input')[1];
console.log(form);
console.log(imp1);
console.log(imp2);

const clickCallback = (e) =>{
    console.log(e);
    e.preventDefault();
    const imie = imp1.value;
    const nazwisko = imp2.value;
    alert('Sub poszedł');
    console.log(imie);
    console.log(nazwisko);
}

form.addEventListener('submit', clickCallback);

