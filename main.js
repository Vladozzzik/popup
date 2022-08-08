const wind = document.createElement("div");
wind.classList.add("wind");
document.body.prepend(wind);

const arrData = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Desna_River_in_Chernihiv.jpg/250px-Desna_River_in_Chernihiv.jpg",
    alt: "Desna",
    info: `<span>Length - 1130 kl.</span> <br>
            <span>Pool - 88 900 kl².</span> <br>
            <span>Water consumption - 360 м³/ы (at the mouth)</span>`,
  },
  {
    src: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
    alt: "Vorskla",
    info: `<span>Length - 	464 kl.</span> <br>
            <span>Pool - 14 700 kl².</span> <br>
            <span>Water consumption - 36,4 м³/ы (at the mouth)</span>`,
  },
  {
    src: "https://klike.net/uploads/posts/2019-11/1574605225_2.jpg",
    alt: "Psel",
    info: `<span>Length - 	717 kl.</span> <br>
            <span>Pool - 22 800 kl².</span> <br>
            <span>Water consumption - 55 м³/ы (at the mouth)</span>`,
  },
  {
    src: "https://mobimg.b-cdn.net/v3/fetch/90/905911947c2947e6dda5a8d9aa2af088.jpeg",
    alt: "Ariel",
    info: `<span>Length - 	346 kl.</span> <br>
            <span>Pool - 9 800 kl².</span> <br>
            <span>Water consumption - 0,41 м³/ы (at the mouth)</span>`,
  },
];

arrData.forEach(createCard);

function createCard(card) {
  const photo = document.createElement("div");
  photo.classList.add("photo");
  photo.innerHTML = `<img src="${card.src}" alt="${card.alt}">
    <h3>${card.alt}</h3>
    <p>${card.info}</p>`;
  wind.append(photo);
  photo.addEventListener("click", watchPhoto);
  return photo;
}

function watchPhoto(e) {
  document.body.prepend(this)
  wind.classList.add("opacity");
  this.classList.add("position");
  this.classList.add("popup");
}


document.addEventListener("click", (e) => {
  const box = document.querySelector(".popup");
  const click = e.composedPath().includes(box);
  console.log(click)
  if (!click) {
    wind.classList.remove("opacity");
    box.classList.remove("position", "popup");
    wind.append(box)
  }
});
document.addEventListener('click', (e) => { 
    const click = e.composedPath(); 
    console.log(click) 
  })
