const pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//pobieram rodzica elementu pierwszy div

const parentDiv = pierwszyDiv.parentElement;
console.log(parentDiv);

console.log('----------------pobieram wszystkie dzieci(nodes) elementu pierwszyDiv-----------------');

const wszystkieDzieci = pierwszyDiv.childNodes;

console.log(wszystkieDzieci);
console.log('----------------pobieram ze wszystkich o indexie  elementu pierwszyDiv-----------------');
console.log(wszystkieDzieci[1]);
// sa komentarze itp

console.log('----------------pobieram tylko te dzieci ktore sa elemetami html dzieci(nodes) elementu pierwszyDiv-----------------');

const tylkoHtml = pierwszyDiv.children;

console.log(tylkoHtml);
//nie ma komentarzy

for (let i =0; i < tylkoHtml.length; i++) {
    console.log(tylkoHtml[i]);
}

let num = [1,2,3,4];
let sum = 0;
for (let i = 0; i < num.length; i++){
    sum += num[i];
}
console.log(sum);

console.log('----------------nastepnego brata/sioste elementu pierwszyDiv-----------------');

const nastepneBro = pierwszyDiv.nextElementSibling;
console.log(nastepneBro);

console.log('----------------poprzedniego brata/sioste elementu pierwszyDiv-----------------');
const poprzednieBro = pierwszyDiv.previousElementSibling;


console.log(poprzednieBro);

console.log('----------------pierwsze dziecko elementu pierwszyDiv-----------------');

const pierwszeDziecko = pierwszyDiv.firstElementChild;
console.log(pierwszeDziecko)

console.log('----------------ostatnie dziecko elementu pierwszyDiv-----------------');

const ostanieDzieko = pierwszyDiv.lastElementChild;
console.log(ostanieDzieko);
