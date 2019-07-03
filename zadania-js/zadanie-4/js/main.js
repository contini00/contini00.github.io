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


// Kurwa

console.log = (m) => document.querySelector('#console').innerHTML = m;

/* Suppose there are 5 buttons on the site. What would be output of the following code if user click 1st and 3rd button? */

const nodes = document.getElementsByTagName('button');
let i = 0;
for (i = 0; i < nodes.length; i++) {
		
   nodes[i].addEventListener('click', () => {
      console.log(i + 1);
   });
}



/* Write a function uniq() that will take array "arr" and return an array with unique values. */

console.log = (m) => document.querySelector('#console').innerHTML += "\n" + m;

function uniq(arr) {
    let num = 0;
	arr.forEach(element => {
        let tab = arr[num];
        for (let i = 1; i <= arr.length; i++) {
            if(tab === arr[i]) {
                arr.splice(i-1,1);
            } else {
                console.log('nie jest');
            }
        }
        num ++;
  })
        return arr;
}

const myArr = [1, 9, 2, 5, 7, 8, 9, 5, 2];
console.log(uniq(myArr));