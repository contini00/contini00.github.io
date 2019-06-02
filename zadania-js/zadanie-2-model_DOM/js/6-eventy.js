// pobieram do zmiennej pierwszy link  z atrybutem href
const link = document.querySelector('[href="http://google.com"]');
const parFirst = document.getElementById('parFirst');
const linkClikCallback = (e) => {
    e.preventDefault();
    alert('Klinąłeś link do google')
}

link.addEventListener('click', linkClikCallback);

parFirst.addEventListener('click', () => {
    alert('Klinąłeś link do google');
});
