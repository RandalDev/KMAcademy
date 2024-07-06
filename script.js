let searchmobile = document.getElementById("search-bar")
let searchBar = document.getElementById("magnyfing-glass-icon")
let menuIcon = document.getElementById("menu-icon")
let glassIcon = document.getElementById("magnyfing-glass-icon")
let KMAcademy = document.getElementById("kmacademy")
let closeIcon = document.getElementById("close-icon")

const doc = document

function search(){
searchBar.addEventListener("click", ()=>{
    console.log("It Works")
    menuIcon.classList.add("invisible")
    menuIcon.classList.remove("menu-icon")
    glassIcon.classList.add("invisible")
    glassIcon.classList.remove("magnyfing-glass-icon")
    KMAcademy.classList.add("invisible")


    searchmobile.classList.remove("invisible")
    closeIcon.classList.remove("invisible")
    
})
}

search()

function closeMenu(){
    closeIcon.addEventListener("click", ()=>{
    menuIcon.classList.remove("invisible")
    glassIcon.classList.remove("invisible")
    KMAcademy.classList.remove("invisible")
    searchmobile.classList.add("invisible")
    closeIcon.classList.add("invisible")
})
}

closeMenu()