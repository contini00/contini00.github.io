
let photo = document.querySelector('#img');

let btn = document.querySelector('button');

let container = document.querySelector('#container');

let zdjecia = ['https://images.pexels.com/photos/1123401/pexels-photo-1123401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1123401/pexels-photo-1123401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1123401/pexels-photo-1123401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']


 fetch('https://picsum.photos/v2/list')
    .then(response =>response.json())
    .then(response=>{
        
        for (let i = 0; i < 3; i++){
            let img = document.createElement('img');
            container.appendChild(img);
            img.setAttribute('class', 'photo');
            img.setAttribute("src",`${response[i].url}`);
        }
    });
        // console.log(response[2].url);
    
let Photos = () =>{
    console.log('nastepne')

}
/* button to render next images */
btn.addEventListener('click', Photos);