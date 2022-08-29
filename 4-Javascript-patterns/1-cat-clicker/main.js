// my code

const nameCats = ['Dubby', 'Chal'];
const imagesCats = ['./assets/cat.jpg', './assets/cat2.jpg', './assets/cat3.jpg']

const Cats = [
  {
    name: 'Dubby',
    image: './assets/cat.jpg'
  },
  {
    name: 'Chal',
    image: './assets/cat2.jpg'
  }

]

const essay = document.getElementById('essay')
essay.src = imagesCats[2]

const catImages = document.querySelectorAll('img')
const catArray= Array.from(catImages)

const cat1 = document.getElementById('cat-1')
const cat2 = document.getElementById('cat-2')

const spanClickCat1 = document.getElementById('span-cat1')
const spanClickCat2 = document.getElementById('span-cat2')

const spanName = document.querySelectorAll('.name_cat')
const arraySpanNames = Array.from(spanName)

arraySpanNames.forEach((cat,idx) => {
  cat.innerHTML = nameCats[idx]
})

let countCat1 = 0;
let countCat2 = 0;

cat1.addEventListener('click', () => {
  incrementCat1()
})

cat2.addEventListener('click', () => {
  incrementCat2()
})


function incrementCat1(){
  countCat1 = countCat1 + 1
  spanClickCat1.innerHTML = countCat1 + 1
}

function incrementCat2(){
  countCat2 = countCat2 + 1
  spanClickCat2.innerHTML = countCat2 + 1
}


