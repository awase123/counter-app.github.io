let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector("#reset");

//To increment the value of the counter
incrementBtn.addEventListener("click", (e) => {
  counter++;
  counterValue.innerHTML = counter;
});

//To decrement the value of the counter
decrementBtn.addEventListener("click", (e) => {
  counter--;
  counterValue.innerHTML = counter;
});

//To reset the value of the counter
resetBtn.addEventListener("click", e =>{
    counter = 0;
    counterValue.innerHTML = counter;
});


