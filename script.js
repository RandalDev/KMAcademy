let searchmobile = document.getElementById("search-bar")
let searchBar = document.getElementById("magnyfing-glass-icon")
let menuIcon = document.getElementById("menu-icon")
let glassIcon = document.getElementById("magnyfing-glass-icon")
let KMAcademy = document.getElementById("kmacademy")
let closeIcon = document.getElementById("close-icon")

//Courses Variables
//Excel
let excelCourse = document.getElementById("excel-course")
let excelInfo = document.getElementById("excel-info")
let excelImg = document.getElementById("excel-img")

//English
let englishCourse = document.getElementById("english-course")
let englishInfo = document.getElementById("english-info")
let englishImg = document.getElementById("english-img")

//Data Analytics

let dataCourse = document.getElementById("data-course")
let dataInfo = document.getElementById("data-info")
let dataImg = document.getElementById("data-img")

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

excelCourse.addEventListener("mouseover", excelMouseover, true)
excelCourse.addEventListener("mouseleave", excelMouseLeave, true)

function excelMouseover (){
    excelInfo.classList.remove("invisible-course")
    excelImg.classList.add("invisible-course")
    excelImg.classList.remove("visible-course")
}

excelMouseover()

function excelMouseLeave (){
    excelImg.classList.add("visible-course")
    excelInfo.classList.add("invisible-course")
    excelImg.classList.remove("invisible-course")

}

excelMouseLeave()




englishCourse.addEventListener("mouseover", englishMouseover, true)
englishCourse.addEventListener("mouseleave", englishMouseLeave, true)

function englishMouseover (){
    englishInfo.classList.remove("invisible-course")
    englishImg.classList.add("invisible-course")
    englishImg.classList.remove("visible-course")
}

englishMouseover()

function englishMouseLeave (){
    englishImg.classList.add("visible-course")
    englishInfo.classList.add("invisible-course")
    englishImg.classList.remove("invisible-course")

}

englishMouseLeave()




dataCourse.addEventListener("mouseover", dataMouseover, true)
dataCourse.addEventListener("mouseleave", dataMouseLeave, true)

function dataMouseover (){
    dataInfo.classList.remove("invisible-course")
    dataImg.classList.add("invisible-course")
    dataImg.classList.remove("visible-course")
}

dataMouseover()

function dataMouseLeave (){
    dataImg.classList.add("visible-course")
    dataInfo.classList.add("invisible-course")
    dataImg.classList.remove("invisible-course")

}

dataMouseLeave()

 
