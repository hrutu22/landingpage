const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Button Click Effects

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function(){

        this.style.transform = "scale(0.95)";

        setTimeout(()=>{
            this.style.transform = "scale(1)";
        },150);

    });

});

//script.java
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

//dark light mode

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
themeToggle.innerHTML="☀";
}else{
themeToggle.innerHTML="🌙";
}

});

//ai try on

const upload = document.getElementById("upload");
const fileName = document.getElementById("file-name");

upload.addEventListener("change", () => {
    if(upload.files.length > 0){
        fileName.textContent =
        "✅ " + upload.files[0].name;
    }
});

//product slider

const images=[
"images/frame1.jpg",
"images/frame2.jpg",
"images/frame3.jpg",
"images/frame4.jpg"
];

let current=0;

const slideImage =
document.getElementById("slideImage");

document.getElementById("next")
.addEventListener("click",()=>{

current=(current+1)%images.length;

slideImage.src=images[current];

});

document.getElementById("prev")
.addEventListener("click",()=>{

current=
(current-1+images.length)%images.length;

slideImage.src=images[current];

});

//card popup
const cartPopup =
document.getElementById("cartPopup");

const closeCart =
document.getElementById("closeCart");

function openCart(){

cartPopup.style.display="block";

}

closeCart.addEventListener("click",()=>{

cartPopup.style.display="none";

});

//java script
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=
+counter.getAttribute("data-target");

const current=
+counter.innerText;

const increment=
target/200;

if(current<target){

counter.innerText=
Math.ceil(current+increment);

setTimeout(update,10);

}else{

counter.innerText=target;

}

};

update();

});


/*menu*/

const menuBtn =
document.getElementById("menuBtn");

const dropdownMenu =
document.getElementById("dropdownMenu");

menuBtn.addEventListener("click",()=>{

dropdownMenu.classList.toggle("active");

});

//*subscription*//
const subscribeBtn =
document.querySelector(".newsletter button");

const successMsg =
document.getElementById("successMsg");

subscribeBtn.addEventListener("click", () => {

    successMsg.innerHTML =
    "✅ Successfully Subscribed!";

    successMsg.style.color = "#7CFC00";
    successMsg.style.marginTop = "15px";

});