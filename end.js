
            let button = document.getElementById("flip");
            let result = document.getElementById("result");
        
            function fnClick(event) {
              let num = Math.random();
        
              if (num < 0.5) {
                result.innerHTML = img2.style.display = "block"
              } else if (num < 0.8) {
                result.innerHTML = img3.style.display = "block"
              } else {
                result.innerHTML = img4.style.display = "block"
              }
            }
            
            button.addEventListener("click", fnClick);




      