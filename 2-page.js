var corona = document.getElementById(`corona`)

if (sessionStorage.corona !== undefined){
    corona.style.display = sessionStorage.corona;
    corona2.style.display = sessionStorage.corona2;
}

corona.addEventListener("click",function(){
 corona.style.display = "none"
 corona2.style.display = "block"
 sessionStorage.corona = "none"
 sessionStorage.corona2 = "block"
})


var hotdog = document.getElementById(`hotdog`)

if (sessionStorage.hotdog !== undefined){
    hotdog.style.display = sessionStorage.hotdog;
    hotdog2.style.display = sessionStorage.hotdog2;
}


hotdog.addEventListener("click",function(){
 hotdog.style.display = "none"
 hotdog2.style.display = "block"
 sessionStorage.hotdog = "none"
 sessionStorage.hotdog2 = "block"
})




