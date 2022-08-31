// second solution cat clicker

// model
const data = [
  {
    id: 1,
    name: "Dubby",
    image: "./assets/cat.jpg",
    available: true,
    count: 0,
  },
  {
    id: 2,
    name: "Chal",
    image: "./assets/cat2.jpg",
    available: true,
    count: 0,
  },
  {
    id: 3,
    name: "Bum",
    image: "./assets/cat3.jpg",
    available: true,
    count: 0,
  },
  {
    id: 4,
    name: "Tony",
    image: "./assets/cat4.jpg",
    available: true,
    count: 0,
  },
  {
    id: 5,
    name: "Spicy",
    image: "./assets/cat5.jpg",
    available: true,
    count: 0,
  },
];

// octopus
const octopus = {
  init: function () {
    view.init();
  },

  getCats: function () {
    const catsAvailable = data.filter((cat) => cat.available === true);
    return catsAvailable;
  },

  getCatById: function (id) {
    const catToGrab = data.filter((cat) => cat.id === parseInt(id));
    return catToGrab;
  },

  incrementCountCat: function (id) {
    const catIncrement = data[id];
    catIncrement.count = catIncrement.count + 1;
    return catIncrement;
  },
};

// views
const view = {
  init: function () {
    const divList = document.getElementById("list-cats");
    const title = document.createElement("h2");
    title.textContent = "Cat List:";

    const list = document.createElement("ul");

    divList.appendChild(title);
    divList.appendChild(list);
    const cats = octopus.getCats();
    cats.forEach((cat, idx) => {
      this.buildListCats(cat, idx, list, "item-cat");
    });

    const toListen = document.querySelectorAll(".item-cat");
    this.listenEventName(toListen);
  },

  listenEventName: function (toListen) {
    toListen.forEach((item) => {
      item.addEventListener("click", (e) => {
        const areaCard = document.querySelector(".area-card");
        let cardClicked = document.querySelector(".card-to-show");

        if (cardClicked !== null) {
          cardClicked.remove();
        }
        const idCat = e.target.getAttribute("cat-id");
        const catToShow = octopus.getCatById(idCat);
        this.buildCard(catToShow, idCat, areaCard, "card-to-show");
        this.listenEventImage();
      });
    });
  },

  listenEventImage: function () {
    const grabImage = document.querySelector(".image-cat");
    let idImage = grabImage.getAttribute("id");
    grabImage.addEventListener("click", () => {
      const spanCard = document.querySelector(".span-cat");
      const dataCat = octopus.incrementCountCat(parseInt(idImage) - 1);
      spanCard.textContent = dataCat.count;
    });
  },

  buildListCats: function (cat, idx, root, classDiv) {
    const { name } = cat;

    const itemCat = document.createElement("li");
    itemCat.textContent = name;
    itemCat.setAttribute("cat-id", idx + 1);
    itemCat.className = classDiv;

    root.appendChild(itemCat);
  },

  buildCard: function (cat, idx, root, classDiv) {
    const { name, image } = cat[0];
    const div = document.createElement("div");
    div.className = classDiv;

    const title = document.createElement("h2");
    title.textContent = "NAME:";
    const spanTitle = document.createElement("span");
    spanTitle.textContent = name;
    spanTitle.className = "name_cat";
    title.append(spanTitle);

    const imageCat = document.createElement("img");
    imageCat.src = image;
    imageCat.alt = "cat click app images";
    imageCat.id = idx;
    imageCat.className = "image-cat";

    const paragraphClics = document.createElement("p");
    paragraphClics.textContent = "number of clicks:";
    paragraphClics.style.fontWeight = 600;

    const spanClicks = document.createElement("span");
    spanClicks.className = `span-cat`;
    spanClicks.textContent = cat.count;

    paragraphClics.append(spanClicks);

    div.appendChild(title);
    div.appendChild(imageCat);
    div.appendChild(paragraphClics);
    div.appendChild(paragraphClics);
    div.appendChild(spanClicks);

    root.append(div);
  },

  render: function () {
    let cardClicked = document.querySelector(".card-to-show");

    if (cardClicked !== null) {
      cardClicked.remove();
    }
  },
};

octopus.init();
