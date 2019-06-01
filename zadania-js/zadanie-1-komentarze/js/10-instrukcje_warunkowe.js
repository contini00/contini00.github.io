let cenaChlebaZabrze = 2.35;
let cenachlebaPoznan = 2.45;

if (cenaChlebaZabrze > cenachlebaPoznan) {
    document.write('Jade do Pozniania');
    console.log('2 i 3 nie działa');
}else if (cenaChlebaZabrze == cenachlebaPoznan) {
    document.write('Jade obojętnie gdzie');
    console.log('1 i 3 nie działa');
}else{
    document.write('Jade do Zabrza');
    console.log('1 i 2 nie działa');
}


//switch

const weekDay = new Date().getDay();

console.log(weekDay);

switch(weekDay){
    case 1:
        console.log('Poniedziałek');
        break;
    case 2:
        console.log('Wtorek');
        break;
    case 3:
        console.log('Środa');
        break;
    case 4: 
        console.log("Czwartek");
        break;
    case 5:
        console.log('Piątek');
        break;
    case 6:
        console.log('Sobota');
        break;
    case 7:
        console.log('Niedziela')
        break;
    default:
        console.log('Nie wiem Kurwa')
        break;
}

//tydzien w tablicy

const week = ['Pon', 'Wt', 'Śro', 'Czwartek', 'Pt', 'Sob', 'Niedziela'];

console.log(week[weekDay - 1]);