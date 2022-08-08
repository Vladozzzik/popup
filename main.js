const wind = document.createElement('div')
wind.classList.add('wind')
document.body.prepend(wind)

const arrData = [
    {   src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Desna_River_in_Chernihiv.jpg/250px-Desna_River_in_Chernihiv.jpg',
        alt: 'Desna',
        info: `<span>Length - 1130 kl.</span> <br>
            <span>Pool - 88 900 kl².</span> <br>
            <span>Water consumption - 360 м³/ы (at the mouth)</span>`,
    },
    {   src: 'https://aborigen.org/images/reki/reka-vorskla1.jpg',
        alt: 'Vorskla',
        info:  `<span>Length - 	464 kl.</span> <br>
            <span>Pool - 14 700 kl².</span> <br>
            <span>Water consumption - 36,4 м³/ы (at the mouth)</span>`,
    },
    {   src: 'https://photographers.ua/thumbnails/pictures/2894/800x_pered_vorozhboym.jpg',
        alt: 'Psel',
        info:  `<span>Length - 	717 kl.</span> <br>
            <span>Pool - 22 800 kl².</span> <br>
            <span>Water consumption - 55 м³/ы (at the mouth)</span>`,
    },
    {   src: 'https://img.freepik.com/free-photo/grain-transport-barge-going-up-the-tiete-river-tieteparana-waterway-drone-view_90251-1566.jpg',
        alt: 'Ariel',
        info: `<span>Length - 	346 kl.</span> <br>
            <span>Pool - 9 800 kl².</span> <br>
            <span>Water consumption - 0,41 м³/ы (at the mouth)</span>`,
    },
]

arrData.forEach(createCard)

function createCard(card) {
    const photo = document.createElement('div')
    photo.classList.add('photo')
    photo.classList.add('popup')
    photo.classList.add('active')
    photo.innerHTML = 
    `<img src="${card.src}" alt="${card.alt}">
    <h3>${card.alt}</h3>
    <p>${card.info}</p>`
    wind.append(photo)
    photo.addEventListener("click", watchPhoto)
     return photo
}


function watchPhoto(e) {
    document.body.prepend(this)
    wind.classList.add('opacity')
    this.classList.add('position')
    this.classList.remove("float")
}


document.addEventListener("click", function(e) {
    let actMenu = document.querySelector(".popup.active");
    if (actMenu && e.target !== actMenu && !actMenu.contains(e.target)) {
      const abc = document.querySelector('.popup');
      abc.classList.remove("position")
      abc.classList.add('float')
      wind.classList.remove("opacity")
    }
  });
document.addEventListener('click', (e) => {
    const click = e.composedPath();
    console.log(click)
  })