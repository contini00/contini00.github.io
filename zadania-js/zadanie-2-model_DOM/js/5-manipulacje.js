const header = document.getElementsByClassName('header')[0];
// const header = document.querySelector('.header')

//wyświetli się zawartośc
console.log(header.innerHTML);

header.lastElementChild.innerHTML = 'Nowy tekst <br> linka tu moze stawić znacznik';
console.log('========classList=========')
console.log(header.classList);



setTimeout(()=>{
    header.classList.add('decor-header');
    header.style.backgroundColor = 'green';
},
2000
)