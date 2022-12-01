

 var img4 = document.getElementById(`img4`)

if (sessionStorage.img4 !== undefined){
    img4.style.display = sessionStorage.img4;
    img5.style.display = sessionStorage.img5;
}

 img4.addEventListener("click",function(){
  img4.style.display = "none"
  img5.style.display = "block"
  sessionStorage.img4 = "none"
  sessionStorage.img5 = "block"
 })


