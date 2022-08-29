// my code
const little_cat = document.getElementById('little-cat');
const spanClick = document.getElementById('clicks')

let count = 0;

little_cat.addEventListener('click', () => {
  increment()
})

function increment(){
  count = count + 1;
  spanClick.innerHTML = count
}


