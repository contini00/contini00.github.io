
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