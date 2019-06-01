
let miesiac= 'maj';
let wyplata = '4800';
let premia = 1400;
let calkowityDochod;

console.log(typeof miesiac);
console.log(typeof wyplata);

console.log(typeof calkowityDochod);

// Number() daje nam pewnośc, że używana zmienna jest numerem nawet jak wczesniej jest stringiem
calkowityDochod = Number(wyplata) + Number(premia);

console.log(calkowityDochod);
console.log(typeof calkowityDochod);

//typ boolean 

const slonce = false;
console.log('====================================')
console.log(typeof slonce)

if(slonce == true) {
    console.log('slonce istnieje');
}else {
    console.log('slonce to ściema')
}

//typ null

const btn = document.querySelector('button');
console.log(btn);
console.log(typeof btn);

// template string

const imie = 'Wojciech';
const text =`Cześć jestem ${imie} i dzis sie ucze wiele`;

console.log(text);