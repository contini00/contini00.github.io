const div = document.getElementById('parFirst').children[1];

console.log(div);

//tworymy nowy element i wstawiomy go do diva 

const newElement = document.createElement('p');

//dodajemy text ktory pozniej uzyjemy 

const newText = document.createTextNode('Nowy paragraf dodany magiczna sztuczka');

//wstawiamy tekst do paragrafu

newElement.appendChild(newText);

//wstawienie tego do pustego diva

div.appendChild(newElement);

// szybszy sposób

const newElement2 = document.createElement('h2');
newElement2.textContent = 'treść hadwójki!';
newElement2.setAttribute('class', 'przykładowa-klasa');
div.appendChild(newElement2);


//usuwam ze strony aby usunac pobieramy rodzica i na nim wywolujemy metode remove
setTimeout(()=>{
    
div.removeChild(newElement2);
},
2000
)

//insertBefore wstawiamy paragraf miedzy link 3 a link 4 

const div2 = document.querySelector('#parFirst');

let p2 = document.createElement('p');
p2.textContent = ('Paragraf przed ostanim linkiem');

setTimeout(()=> {

    div2.insertBefore(p2, div2.lastElementChild);

},
4000)