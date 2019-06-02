const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const btn = document.getElementById('btn');

const zmianatla = (e) =>{
    p1.classList.add('czerwony');
    p2.setAttribute('class', 'zolty');
}

const zmianatla2 = (e) =>{
    console.log(e);
    p1.classList.remove('czerwony');
    p2.classList.remove('zolty');
}
btn.addEventListener('click', zmianatla);
btn.addEventListener('dblclick', zmianatla2);