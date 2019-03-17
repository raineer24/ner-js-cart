//show cart

(function() {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    cartInfo.addEventListener("click", function() {
        cart.classList.toggle("show-cart");
    });
})();

// add items to the cart

(function(){
 const cartBtn = document.querySelectorAll(".store-item-icon");

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event) {
            //console.log(event.target);

        if(event.target.parentElement.classList.contains("store-item-icon")) {
            
                //console.log(event.target.parentElement.parentElement.previousElementSibling);
                let fullPath = event.target.parentElement.previousElementSibling.src;
                console.log(fullPath);
                let pos = fullPath.indexOf("img") + 3;
               let partPath = fullPath.slice(pos)

               const item = {};
               console.log(`typeof ${typeof item}`);
               item.img = `img-cart${partPath}`;
               

               let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
               item.name = name;

               console.log(name); 



               console.log(item);
        }    
        });
    });

})();