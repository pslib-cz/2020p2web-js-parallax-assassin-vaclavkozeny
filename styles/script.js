let man = document.getElementsByClassName("layer-man")
let rocks = document.getElementsByClassName("layer-2")
let castle = document.getElementsByClassName("layer-4")
let bg = document.getElementsByClassName("layer-background")
console.log(man)
window.onscroll = function(){
    let value = window.scrollY

    man[0].style.right = value+ "px"
    rocks[0].style.top = value*0.2+"px"
    castle[0].style.left = value+"px"
    bg[0].style.top = -value + "px"
}
