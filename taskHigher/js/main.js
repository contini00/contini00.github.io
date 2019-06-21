let btn = document.querySelector('button');

let container = document.querySelector('#container');

let num = 1; 

let addPhotos = () =>{
    fetch(`https://picsum.photos/v2/list?page=${num}&limit=3`)
    .then(response =>response.json())
    .then(response=>{
        
        for (let i = 0; i < 3; i++){
            let img = document.createElement('img');
            container.appendChild(img);
            img.setAttribute('class', 'photo');
            img.setAttribute("src",`${response[i].download_url}`);
            num += 1;
        }
    });

}

let removePhotos = () =>{
    for (let i = 0; i < 3; i++){
    let img = document.querySelector('.photo');

    img.remove()
    }
};
addPhotos();

let buttonFunction = () => {
    removePhotos();
    addPhotos();
}
/* button to render next images */
btn.addEventListener('click', buttonFunction);