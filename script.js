const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = Number(counter.dataset.target);

let count = 0;

const update = () => {

count += target / 100;

if(count < target){

counter.innerText = Math.floor(count);
requestAnimationFrame(update);

}else{

counter.innerText = target;
}
};

update();

observer.unobserve(counter);
}
});
});

counters.forEach(counter=>{
observer.observe(counter);
});

const darkBtn = document.getElementById("darkToggle");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
darkBtn.innerHTML =
'<i class="fas fa-sun"></i>';
}else{
darkBtn.innerHTML =
'<i class="fas fa-moon"></i>';
}
});

for(let i=0;i<40;i++){

const particle =
document.createElement("div");

particle.classList.add("circle");

let size = Math.random()*25+10;

particle.style.width=size+"px";
particle.style.height=size+"px";

particle.style.left=
Math.random()*100+"%";

particle.style.animationDuration=
(10+Math.random()*15)+"s";

document
.getElementById("particles")
.appendChild(particle);
}

document
.getElementById("formulario")
.addEventListener("submit",e=>{

e.preventDefault();

alert(
"Obrigado por apoiar a sustentabilidade 🌱"
);

}); v