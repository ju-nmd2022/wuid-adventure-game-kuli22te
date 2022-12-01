let button = document.getElementById("flip");
            let result = document.getElementById("result");
        
            function fnClick(event) {
              let num = Math.random();
        
              if (num < 0.5) {
                result.innerHTML = img2.style.display = "none"
              } else {
                result.innerHTML = img2.style.display = "block"
              }
            }
            
            button.addEventListener("click", fnClick);




      