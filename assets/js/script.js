
const night = document.getElementById("moon");
const morn = document.getElementById("sun");
const whole = document.querySelector("body");
const showMe = document.getElementById("showMe")
const moree = document.querySelector("more")
const more = document.querySelector(".more")
const less = document.querySelector("showLess")
// const light = document.querySelector(".light_theme")
morn.addEventListener("click", () =>{
  var element = document.body;
   element.classList.toggle("light_theme");
   morn.style.display = 'none';
   night.style.display = 'flex';
   
});

night.addEventListener("click", () =>{
  var element = document.body;
   element.classList.toggle("light_theme");
   morn.style.display = 'flex';
   night.style.display = 'none';
   
});

showMe.addEventListener("click", () =>{
  if (more.style.display === "block") {
    showMe.textContent = "show less"
    less.style.display = "block"
    showMe.style.display = "none"
  }
  else if (showMe.textContent === "show less") {
    more.style.display == "none";
    showMe.style.display = "none";
    less.style.display = "block"
  }
    
  
});
