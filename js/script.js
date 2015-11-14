
var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form-container")

link.addEventListener("click",function(event){
event.preventDefault();
popup.classList.toggle("search-form--active")
});
