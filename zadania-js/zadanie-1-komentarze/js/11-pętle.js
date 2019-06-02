
for(i=0; i<8; i++){
    document.write(`Obrót pętli <b> nr ${i + 1}</b>, watość zmiennej <b>"i" = ${i}</b> <br>`)
}

const imiona =['Magda', 'Gabrysia', 'Lycyfer', 'Włóczykij'];

const count = imiona.length;

for (let i=0; i < count; i++){
    console.log(`Imię ${imiona[i]}--->---`);
}

//forEach nie mozna uzyc w obiektach

console.log('====================');
imiona.forEach((element,index)=>{
    console.log(`Wartość indeksu ${index} tablicy imiona to: ${element}`);
}
    )

//for in - do obiektów

const samochod = {
    marka: 'opel',
    moc: 70,
    stan: 'Używany'
}

for(let i  in samochod) {
    console.log(`Nazwa właściwości obiektu to: ${i}, a jej wartość to ${samochod[i]}`)
}

// while i do while
let item = 0;
while(item<10) {
    document.write(`Item <b>${item}</b>`);
    item++;
}

//do while wykona sie zawsze 

do{
    document.write(`Item <b>${item}</b>`);
    item++;
}while(item < 10)

//break and continue - nie dziala w forEach

for(let i=0; i<= 20; i++){
    if(i % 2 == 0){
        //opuści liczby parzyste ale bedzie kontynuowal
        continue;
    }

    if(i >= 10){
        //pętla zostanie przerwana na 10 
        break;
    }
    console.log(`Obrót pętli - zmienna i =${i}`);
}

