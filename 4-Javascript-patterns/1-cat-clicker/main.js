// my code

const nameCats = ["Dubby", "Chal"];
const imagesCats = [
  "./assets/cat.jpg",
  "./assets/cat2.jpg",
  "./assets/cat3.jpg",
];

const Cats = [
  {
    name: "Dubby",
    image: "./assets/cat.jpg",
  },
  {
    name: "Chal",
    image: "./assets/cat2.jpg",
  },
  {
    name: "Bum",
    image: "./assets/cat3.jpg",
  },
];

{
  /* <div>
        <h2>Cat Name:
          <span class="name_cat">name1</span>
        </h2>
        <img id="cat-1" src="./assets/cat.jpg" alt="">
        <p>number of clicks:</p>
        <span class="span-cat1"></span>
      </div> */
}

const main = document.getElementById("root");

Cats.forEach((cat, idx) => {
  const { name, image } = cat;

  const div = document.createElement("div");

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
  spanClicks.textContent = 0;

  paragraphClics.append(spanClicks);

  div.appendChild(title);
  div.appendChild(imageCat);
  div.appendChild(paragraphClics);
  div.appendChild(paragraphClics);
  div.appendChild(spanClicks);

  main.append(div);
});

let countCat1 = 0;
let countCat2 = 0;

const catImages = document.querySelectorAll("img");

catImages.forEach((cat, idx) => {
  cat.addEventListener("click", (e) => {
    const spanToShowClicks = document.querySelector(`.span-cat${idx + 1}`);
    let countClicks = parseInt(spanToShowClicks.innerHTML);
    countClicks = countClicks + 1;
    spanToShowClicks.textContent = countClicks;
  });
});
