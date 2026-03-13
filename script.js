document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(){

document.querySelectorAll("nav a")
.forEach(l => l.classList.remove("active"));

this.classList.add("active");

});
});
