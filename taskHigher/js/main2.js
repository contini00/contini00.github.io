let btn = document.querySelector('button');

let container = document.querySelector('#container');


let num = 3; 
let num2 = 0;
let Photos = () =>{
    console.log('nastepne')
    fetch('https://picsum.photos/v2/list')
    .then(response =>response.json())
    .then(response=>{
        num2 = num;
        for (let i = (num2 -3); i < num2; i++){
            let img = document.createElement('img');
            container.appendChild(img);
            img.setAttribute('class', 'photo');
            img.setAttribute("src",`${response[i].download_url}`);
            num += 1;
        }
        console.log(num);
        console.log(num - 3)

    });

}
Photos();

/* button to render next images */
btn.addEventListener('click', Photos);