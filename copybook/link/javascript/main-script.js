const body = document.querySelector("body")
const searchInput = document.querySelector(".search-input")
const searchButton = document.querySelector(".search-button")
const searchBox = document.querySelector(".search-box")
const navbarA = document.getElementsByClassName("navbar-a")
const mainSectionButtons = document.getElementsByClassName("main-section-buttons")
const settingButton = document.querySelector(".setting-button");
const settingBox = document.querySelector(".setting-box");
const settingCloseButton = document.querySelector(".setting-box-navbar-close-button")
const radioBlack = document.querySelector(".radio-black")
const radioWhite = document.querySelector(".radio-white")

document.addEventListener("click", function (event) {
    if (!settingBox.contains(event.target) && !settingButton.contains(event.target)) {
        settingBox.style.display = "none";
    }
});

settingCloseButton.addEventListener("click", function(){
    settingBox.style.display = "none";
})

document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        settingBox.style.display = "none";
    } else if (event.altKey && event.key === "s" || event.altKey && event.key === "S") {
        settingBox.style.display = "block";
    }
})

settingButton.addEventListener("click", function () {
    settingBox.style.display = "block";
});

radioWhite.addEventListener("change", function(){
    if(radioWhite.checked){
    
    }
})

radioBlack.addEventListener("change", function() {
    if (radioBlack.checked) {
        
    }
});



searchButton.addEventListener("click", function(){
    if(searchInput.value === "#ABC1234"){
        window.open("./page/page.html")
    }  
})

searchInput.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        if(searchInput.value === "#ABC1234"){
            window.open("./page/page.html")
        }  
    }
})






