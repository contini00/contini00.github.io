
//obiekty

/* let car = {
    marka:'Ferrari',
    moc: 500,
    kolor:'czerwony',
    przedstawSie() {
        return `Jestem ${this.marka} mam moc ${this.moc} km i mam kolor ${this.kolor} !! `
        },
    odpal(){
        console.log('Brum ------------------------>')
    }
}

const instacjaCar1 = car.przedstawSie();
console.log(instacjaCar1);


car.marka = 'Fiat';
car.moc = 80;
const instacjaCar2 = car.przedstawSie();
console.log(instacjaCar2);

car.odpal();

 */

 class Ogloszenie{
     constructor(id, tytuł, tresc, cena, lokalizacja){
         this.id = id;
         this.title = tytuł;
         this.tresc = tresc;
         this.cena = cena;
         this.lokalizacja = lokalizacja;
     }
     wyswietl() {
         document.write(
            `---------------------------<br>
            Ogłoszenie numer ${this.id}<br>
            Tytuł: ${this.title}<br>
            Treść: ${this.tresc}<br>
            Cena: ${this.cena} zł<br>
            Lokalizacja: ${this.lokalizacja}<br>
            ---------------------------<br>
            `
         )
     }
 }

 let ogloszenie1 = new Ogloszenie(00000001, 'Sprzedam samochód', 'jezdzony tylko latem, nie kręcony', 5000, 'Warszawa')
 ogloszenie1.wyswietl();

 let ogloszenie2 = new Ogloszenie(00000002, 'Sprzedam kubek', 'Piłem tylko wodę, ale z oblizem', 20, 'Kielce')
 ogloszenie2.wyswietl();