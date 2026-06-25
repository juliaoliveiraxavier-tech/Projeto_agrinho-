const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let target = +counter.dataset.target;
let count = 0;

let update = () => {

count += target / 100;

if(count < target){
counter.innerText = Math.floor(count);
requestAnimationFrame(update);
}else{
counter.innerText = target;
}
};

update();
});

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document
.querySelectorAll("section")
.forEach(section => {

section.classList.add("reveal");

observer.observe(section);

});

document
.getElementById("contactForm")
.addEventListener("submit", e => {

e.preventDefault();

alert("Mensagem enviada com sucesso! 🌱");

});