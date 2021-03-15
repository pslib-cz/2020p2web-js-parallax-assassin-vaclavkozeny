let man = document.getElementsByClassName("layer-man")
let rocks = document.getElementsByClassName("layer-2")
let castle = document.getElementsByClassName("layer-4")
let bg = document.getElementsByClassName("layer-background")
let pruh = document.getElementsByClassName("layer-1")
console.log(man)
window.onscroll = function(){
    let value = window.scrollY
    man[0].style.transform = "translate("+ -value*1.4 +"px," + -value+"px) perspective(100px)"
    rocks[0].style.transform = "translate("+ -value*1.1 +"px," + -value+"px)"
    pruh[0].style.transform = "translateY("+  -value + "px)"
    castle[0].style.transform =  "translate("+ value*0.2 +"px," + value*0.5+"px) "
    bg[0].style.transform
}
