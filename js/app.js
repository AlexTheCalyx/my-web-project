const products = {
  "1": {
    image:        "images/vase1.jpg",
    name:         "Ceramic Vase",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:        "R320",
  },
  "2": {
    image:        "images/vase2.jpg",
    name:         "Glass Vase",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:        "R280",
  },
  "3": {
    image:        "images/vase3.jpg",
    name:         "Glass Vase",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:        "R280",
  },
  "4": {
    image:        "images/vase4.jpg",
    name:         "Glass Vase",
    description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:        "R1000",
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products[id];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const product = products[id];

  if (!product) 
  {
    // document.body.innerHTML = "<h1>Product not found</h1>";
    return;
  }
  document.getElementById("product-image").src               = product.image;
  document.getElementById("product-name").textContent        = product.name;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-price").textContent       = product.price;



    let quantity = 1;

    const qtyDisplay  = document.getElementById("quantity");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const buyBtn      = document.getElementById("buy-btn");

    increaseBtn.addEventListener("click", () => {
      quantity++;
      qtyDisplay.textContent = quantity;
    });
    
    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });

    let cart = [];
    let cantClick = false;

          buyBtn.addEventListener("click", () => {

            if (cantClick) return;
            cantClick = true;

            console.log({
              productId: id,
              quantity: quantity
            });


              buyBtn.classList.add("added");
              buyBtn.textContent = "Added ✔";

              setTimeout(() => {
                cantClick = false;
                buyBtn.classList.remove("added");
                buyBtn.textContent = "Add to Cart";
                buyBtn.style.pointerEvents = "auto";
            }, 5000);
          });
});
