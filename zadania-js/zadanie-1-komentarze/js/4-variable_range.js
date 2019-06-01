// przestrzen globalna
//zmienne stworzone jako globalne są widoczne wszędzie

let number = 426;
console.log(number);

const addNumber = () => {
    //wchodząć do bloku kodu i tworząc tu zmienna jest ona dostępna tylko wewnątrz tego zasięgu lokalnego
    console.log(number);

    let localNumber = 1821;
    console.log(localNumber);
}

addNumber();
console.log(localNumber); 