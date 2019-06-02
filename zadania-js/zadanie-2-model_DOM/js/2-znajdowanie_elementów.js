const parFirst = document.getElementById('parFirst');

console.log(parFirst);

//pobieranie elementu po klasei

const superlinki = document.getElementsByClassName('superlink');

console.log(superlinki);

// jak pobralismy elementsByClass to dostalismy pseudo tablice i teraz musimy dodac spread [...class] zeby móc zrobic forEach
[...superlinki].forEach((element, index) => {
    console.log(element);
});

//pobieram elementy po nazwie tagu za pomoca getElementsByTagName

const p = document.getElementsByTagName('p');

console.log(p);

//pobiemat wszysktie linki o classie link za pomoca querySelector
//Node list otrzymujemy to nam daje mozliwość korzystania bezpośrednio z forEach

const link = document.querySelectorAll('.link');
console.log(link);

link.forEach((element, index) =>{
    console.log(element);
})

//pobieram pierwszy zanaleziony link po klasie 

const link2 = document.querySelector('.link');
console.log(link2);