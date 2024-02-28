

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-img");
elemc.addEventListener("mouseenter", function(){
    fixed.style.display="block"  
});

var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-img");
elemc.addEventListener("mouseleave", function(){
    fixed.style.display="none"  
});

var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-img")
        fixed.style.backgroundImage= `url(${image})`
        })
        
})

  var loader = document.querySelector("#loader")

setTimeout(function () {
    loader.style.top = "-100%"
}, 4000)

var menu=document.querySelector("nav h3")
var full=document.querySelector('#full-scr')
var navimg=document.querySelector("nav img")
var dum=0
menu.addEventListener("click",function(){
    if(dum==0){
    full.style.top=0
    navimg.style.opacity=0
    dum=1

    }
    else{
    full.style.top="-200%"
    full.style.transition="all ease out 2s"
    navimg.style.opacity=1
    dum=0

    }
    

})
    
