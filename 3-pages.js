var fuel = document.getElementById(`fuel`)

if (sessionStorage.fuel !== undefined){
    fuel.style.display = sessionStorage.fuel;
    fuel2.style.display = sessionStorage.fuel2;
}

fuel.addEventListener("click",function(){
 fuel.style.display = "none"
 fuel2.style.display = "block"
 sessionStorage.fuel = "none"
 sessionStorage.fuel2 = "block"
})

