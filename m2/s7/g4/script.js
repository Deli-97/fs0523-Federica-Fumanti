// gecHwVS8eYhCn3GiGlnsHGRCsTkZ0sNCb0n1uGeDJHvI78awcBbk31dN
fetch('https://api.pexels.com/v1/search?query=mountains',{
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'gecHwVS8eYhCn3GiGlnsHGRCsTkZ0sNCb0n1uGeDJHvI78awcBbk31dN'
    }
})
.then(res => res.json())
.then(mountains =>{
    
    let target = document.querySelector('#target');

    mountains.forEach(mountain => {
        let clone = getCardClone();
        let img = clone.querySelector('.card-img-top');
        //tasto Hide?
        let correspondingImg = clone.querySelector('#corresponding-img');

        img.src = photo.img;
        //img.dataset.id = photo.id;
        //?.href = `https://www.pexels.com/${photo.url}`;
        correspondingImg.innerText = photo.id;
        
        
        target.append(clone);
    })

});


function getCardClone(){
    let template = document.getElementsByTagName('template')[0];
    return template.content.cloneNode(true)
}