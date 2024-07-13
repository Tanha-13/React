import './style.css'

let counter = 0;


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Creating a counter project using JavaScript and Vite</h1>
      <p id="value">The value is ${counter}</p>
      <button id="increase-btn" type="button">Count Up</button>
      <button id="decrease-btn" type="button">Count Down</button>
  </div>
`

function increaseCount(){
  counter++;
  document.querySelector("#value").innerHTML = `The value is ${counter}`
}
function decreaseCount(){
  if(!counter <= 0){
    counter--;
  }
  document.querySelector("#value").innerHTML = `The value is ${counter}`
}

document.querySelector("#increase-btn").addEventListener('click', increaseCount);
document.querySelector("#decrease-btn").addEventListener('click', decreaseCount);