// my code
// first solution

// model
const Cats = [
  {
    id:1,
    name: "Dubby",
    image: "./assets/cat.jpg",
    count: 0
  },
  {
    id:2,
    name: "Chal",
    image: "./assets/cat2.jpg",
    count: 0
  },
  {
    id:3,
    name: "Bum",
    image: "./assets/cat3.jpg",
    count: 0
  },
  {
    id:4,
    name: "Tony",
    image: "./assets/cat4.jpg",
    count: 0
  },
  {
    id:5,
    name: "Spicy",
    image: "./assets/cat5.jpg",
    count: 0
  },
];

// octopus:

const main = document.getElementById("root");

Cats.forEach((cat, idx) => {
  buildCard(cat, idx, main, 'card')
});

const catImages = document.querySelectorAll("img");

catImages.forEach((cat, idx) => {
  cat.addEventListener("click", () => {
    const spanToShowClicks = document.querySelectorAll(`.span-cat${idx + 1}`);
    Cats[idx].count = Cats[idx].count + 1;
    spanToShowClicks.forEach(span => {
      span.textContent = Cats[idx].count
    })
  });
});

const namesCatToListen = document.querySelectorAll('.name_cat')


namesCatToListen.forEach((name, idx) => {
  name.addEventListener('click', () => {
    let cardClicked = document.querySelector('.cardClicked')
    console.log(cardClicked)
    if(cardClicked !== null){
      cardClicked.remove()
    }
    
    let area = document.querySelector('.areaClick')
    let cat = Cats[idx];
    buildCard(cat, idx, area, 'cardClicked')
  })
})


// Views:
function buildCard (cat, idx, root, classDiv) {
  const { name, image } = cat;

  const div = document.createElement("div");
  div.className = classDiv

  const title = document.createElement("h2");
  title.textContent = "NAME:";
  const spanTitle = document.createElement("span");
  spanTitle.textContent = name;
  spanTitle.className = "name_cat";
  title.append(spanTitle);

  const imageCat = document.createElement("img");
  imageCat.src = image;
  imageCat.alt = "cat click app images";
  imageCat.id = `cat-${idx + 1}`;

  const paragraphClics = document.createElement("p");
  paragraphClics.textContent = "number of clicks:";
  paragraphClics.style.fontWeight = 600;

  const spanClicks = document.createElement("span");
  spanClicks.className = `span-cat${idx + 1}`;
  spanClicks.textContent = cat.count;

  paragraphClics.append(spanClicks);

  div.appendChild(title);
  div.appendChild(imageCat);
  div.appendChild(paragraphClics);
  div.appendChild(paragraphClics);
  div.appendChild(spanClicks);

  root.append(div);
}
