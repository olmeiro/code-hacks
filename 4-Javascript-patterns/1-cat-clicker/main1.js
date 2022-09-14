// second solution cat clicker

// model
const data = {
  currentCat: null,
  cats: [
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
  ],
};

// octopus
const octopus = {
  init: function () {
    viewList.init();
  },

  getCats: function () {
    const catsAvailable = data.cats.filter((cat) => cat.available === true);
    return catsAvailable;
  },

  getCatById: function (id) {
    const catToGrab = data.cats.filter((cat) => cat.id === parseInt(id));
    return catToGrab;
  },

  getCurrentCat: function (){
    let current = data.currentCat
    if( current === null){
      current = 1
    }
    return current
  },

  setCurrentCat: function (id){
    data.currentCat = id
  },

  incrementCountCat: function (id) {
    const catId = parseInt(id)
    const [catToIncrementCounter] = this.getCatById(catId)
    
    catToIncrementCounter.count = catToIncrementCounter.count + 1
    let catIncrement = catToIncrementCounter.count
    return catIncrement;
  },

  changeData: function (dataForm, idCurrentCat) {
    console.log("idCurrentCat", idCurrentCat)

    const {count, image, name } = dataForm

    let catToUpdate = this.getCatById(idCurrentCat)
    catToUpdate[0].name = name
    catToUpdate[0].image = image
    catToUpdate[0].count = parseInt(count)

    const areaCard = document.querySelector('.area-card')
    viewList.resetCard()
    viewCard.buildCard(catToUpdate,idCurrentCat,areaCard, "card-to-show")
  },
};

// views
const viewList = {
  init: function () {
    this.divList = document.getElementById("list-cats");

    this.title = document.createElement("h2");
    this.title.textContent = "Cat List:";
    this.list = document.createElement("ul");

    this.divList.appendChild(this.title);
    this.divList.appendChild(this.list);

    this.render();
  },

  listenEventName: function (toListen) {
    toListen.forEach((item) => {
      item.addEventListener("click", (e) => {
        const areaCard = document.querySelector(".area-card");
        
        this.resetCard()

        // const idCat = e.target.getAttribute("cat-id");
        const idCat = e.target.getAttribute("cat-id");

        octopus.setCurrentCat(parseInt(idCat))
        console.log(octopus.getCurrentCat())

        const catToShow = octopus.getCatById(idCat);
        // console.log("catToShow", catToShow)

        viewCard.buildCard(catToShow, idCat, areaCard, "card-to-show");
      });
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

  resetCard: function() {
    const cardClicked = document.querySelector(".card-to-show");

    if (cardClicked !== null) {
      cardClicked.remove();
    }
  },

  render: function () {
    const cats = octopus.getCats();

    cats.forEach((cat, idx) => {
      this.buildListCats(cat, idx, this.list, "item-cat");
    });
    const areaCard = document.querySelector(".area-card");
    viewCard.buildCard([cats[0]], 0, areaCard, "card-to-show");
    viewAdmin.adminEvent();

    // listen event click name:
    const toListen = document.querySelectorAll(".item-cat");
    this.listenEventName(toListen);
  },
};

const viewAdmin = {
  adminEvent: function () {
    const btnAdmin = document.querySelector(".btn-admin");

    btnAdmin.addEventListener("click", () => {
      const areaAdmin = document.querySelector(".area-admin_form");
      const divForm = document.querySelector(".area_admin_form-form");
      areaAdmin.style.display = "flex";

      const currentCatId = octopus.getCurrentCat()
      const [dataCat] = octopus.getCatById(parseInt(currentCatId))

      const [id, name, url, clicks] = divForm;
      id.value = dataCat.id;
      name.value = dataCat.name;
      url.value = dataCat.image;
      clicks.value = dataCat.count;

      divForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        octopus.changeData(data, currentCatId);
      });

      this.cancelEvent();
    });
  },

  cancelEvent: function () {
    const btnCancel = document.querySelector(".btn-cancel");

    btnCancel.addEventListener("click", () => {
      const areaAdmin = document.querySelector(".area-admin_form");
      areaAdmin.style.display = 'none'
    });
  },
};

const viewCard = {
  listenEventImage: function () {
    const grabImage = document.querySelector(".image-cat");
    const current = octopus.getCurrentCat()
    grabImage.addEventListener("click", () => {
      const spanCard = document.querySelector(".span-cat");
      const dataCat = octopus.incrementCountCat(current);
      spanCard.textContent = dataCat;
    });
  },

  buildCard: function (cat, idx, root, classDiv) {
    // console.log("cat", cat)
    const { name, image, count } = cat[0];

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
    spanClicks.textContent = count;

    paragraphClics.append(spanClicks);

    div.appendChild(title);
    div.appendChild(imageCat);
    div.appendChild(paragraphClics);
    div.appendChild(paragraphClics);
    div.appendChild(spanClicks);

    root.append(div);
    this.listenEventImage();
  },
};

octopus.init();
