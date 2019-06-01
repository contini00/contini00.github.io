
let panstwa = ['Portugalia', 'Argentyna', 'Polska', 'Dominikana'];
let nmb = 15;

panstwa.push('Indie', 'Jemen', 'Usa');

panstwa.pop();
const deleted = panstwa.pop();

//dodamy na poczatku 

panstwa.unshift('Arabia','Italy', 'Norway');

const deletedCountries = panstwa.shift();
console.log(panstwa);
console.log(`Z tablicy usuwam ${deletedCountries} oraz ${deleted}  i co mi zrobicie`)
console.log(panstwa[1]);
console.log(`Moja tablica składa się z ${panstwa.length} elementów`);
console.log(`moja ${panstwa} hej`);


// reverse

console.log(panstwa.reverse());
console.log(panstwa);

//join
console.log(panstwa.join('--->>---'));
console.log(panstwa);

//indexOF || includes ES6
//indexOF jak nie bedzie to wyświetlni się -1 a jak bedzie to bedzie number
//przy includes wartości to true i false ( boolen variable)

console.log(panstwa.indexOf('Dominikana'));

console.log(panstwa.includes('Dominikana'));

// isArray sprawdza czy to jest tablica
console.log(Array.isArray(panstwa));
console.log(Array.isArray(nmb));

//toString

console.log(panstwa.toString());

//sort

console.log(panstwa.sort());

//łączenie tablic concat


let miasta = ['Warszawa', 'Gdańsk', 'Kielce'];

let zbior = miasta.concat(panstwa);

console.log(zbior);

//łączenie tablic w ES6

let zbiór2 = [...miasta, ...panstwa, ... zbior];

console.log(zbiór2);
console.log(zbiór2.sort());