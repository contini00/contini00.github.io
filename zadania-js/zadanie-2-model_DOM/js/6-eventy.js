// pobieram do zmiennej pierwszy link  z atrybutem href
const link = document.querySelector('[href="http://google.com"]');
const parFirst = document.getElementById('parFirst');
const linkClikCallback = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    alert('Klinąłeś link do google')
}

link.addEventListener('click', linkClikCallback);

parFirst.addEventListener('click', () => {
    alert('Klinąłeś link do google');
});

//po najechaniu na h1 dodaj class body-decor

const h1 = document.querySelector('h1');
const myBody = document.body;
h1.addEventListener('mouseenter', () =>{
    myBody.classList.add('body-decor');
})

h1.addEventListener('mouseleave', () =>{
    myBody.classList.remove('body-decor');
})