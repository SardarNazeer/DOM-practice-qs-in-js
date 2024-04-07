// q1) Create a h2 heading wuth text - "Hello Javascript".append "from apna college students" to this text using js 

// let heading = document.querySelector("h2");

// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from sardar nazeer";

// q2) create 3 div with common class name - 'box' acces them & add some unique text to each of them 

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "js is hard val 1";
// divs[1].innerText = "js is hard but will make it easy val 2";
// divs[2].innerText = "js is hard but will make it easy by practicing daily val 3";


// q3) Create new button element give it a text "click me" bg color of red & text color of white,
// inserrt the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = 'click me';

newBtn.style.color = 'white';
newBtn.style.backgroundColor = 'red';

document.querySelector("body").prepend(newBtn);

// q4) create a p tag in html, give it a class & some styling
// now create a new class in CSS and try to append this class to the p Element
// Did you notice how you overwrite the class name when you add a new class solve this problem using classList

let para = document.querySelector("p");
para.classList.add("newPara");