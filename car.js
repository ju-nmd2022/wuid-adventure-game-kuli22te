var car = document.getElementById(`car`)

if (sessionStorage.fuel !== undefined){
    car.style.display = sessionStorage.car;
    car2.style.display = sessionStorage.car2;
}

car.addEventListener("click",function(){
 car.style.display = "none"
 car2.style.display = "block"
 sessionStorage.car = "none"
 sessionStorage.car2 = "block"
})