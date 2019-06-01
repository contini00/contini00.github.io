let liczba1 = 121;
let liczba2 = 25;

let wynik = liczba1 + liczba2;
let wynik2 = liczba1 - liczba2;
let wynik3 = liczba1 * liczba2;
let wynik4 = liczba1 / liczba2;
let wynik5 = liczba1 % liczba2;    


console.log(wynik, wynik2, wynik3, wynik4, wynik5);


wynik2 += 12;
console.log(wynik2);

// wynik2 -= 12;
// wynik2 *= 12;
// wynik2 /= 12;
 wynik3 %= 12;

 console.log(wynik3);

 if (liczba1 == liczba2) {
     console.log('Zgadza się')
 }else {
     console.log('Nie  kurwa')
 }

 //operatory logiczne

 let fileExist = true;
 let fileSize = 85;

 //negacja
 console.log(fileExist, !fileExist);

 if(fileExist ==true || fileSize <= 50) {
     console.log('Mozesz ładować');
 }else{
     console.log('Nie istnieje albo jest za duzy');
 }

 let color1 = 'red';
 let color2 = 'yellow';

 if(color1 ==  'yellow' || color2 == 'yellow'){
     console.log(404);
 }else {
     console.log('MAM CIĘ')
 }

 let wynik10 = (color1 == 'blue') ? 144 : 'kolor jest inny';
 console.log(wynik10);