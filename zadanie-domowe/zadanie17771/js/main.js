$(function () {

let btn = $('#btn');

btn.click(function() {
    
    $('.div hr:last').remove();
    
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
.then(response => response.json())
.then(response=>{

    let div = document.createElement('div');

    let linia = document.createElement('hr');
    let linia2 = document.createElement('hr');

    let paragraf1 = document.createElement('p');
    let textP = document.createTextNode(`Imię: ${response.imie}`);

    let paragraf2 = document.createElement('p');
    let textP2 = document.createTextNode(`Nazwisko: ${response.nazwisko}`);

    let paragraf3 = document.createElement('p');
    let textP3 = document.createTextNode(`Zawód: ${response.zawod}`);

    let paragraf4 = document.createElement('p');
    let textP4 = document.createTextNode(`Firma: ${response.firma}`);

    document.body.appendChild(div);
    $('div').addClass('div');

    div.appendChild(linia);
    
    div.appendChild(paragraf1);
    paragraf1.appendChild(textP);

    div.appendChild(paragraf2);
    paragraf2.appendChild(textP2);

    div.appendChild(paragraf3);
    paragraf3.appendChild(textP3);

    div.appendChild(paragraf4);
    paragraf4.appendChild(textP4);

    div.appendChild(linia2);

    
});

});



});