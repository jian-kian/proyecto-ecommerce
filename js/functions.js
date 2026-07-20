//Menu
const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menuButton");
const closeMenu = document.querySelector("#closeMenu");

//Abrir Menu
menuButton.addEventListener("click",()=>{
    menu.classList.add("menu--active");
});

//Cerrar Menu
closeMenu.addEventListener("click",()=>{
    menu.classList.remove("menu--active");
});

//Botton agregar producto a carrito
const buttons = document.querySelectorAll(".products-grid__button");
const badge = document.querySelector("#cartBadge");
let total = 0;
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click",()=>{
    cart.classList.toggle("cart--active");
});

const cartContainer = document.querySelector(".cart__products");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        total++;
        badge.textContent = total;
        const product = button.parentElement;
        //Item de carrito
        const image = product.querySelector("img").src;
        const title = product.querySelector("h3").textContent;
        const price = product.querySelector(".products-grid__price").textContent;
        const item = document.createElement("div");

        item.className = "cart__item";

        item.innerHTML = `
            <img src="${image}" class="cart__img">

            <div class="cart__info">
                <h4>${title}</h4>
                <p>${price}</p>
            </div>

            <button class="cart__remove">
                ✕
            </button>
        `;

        cartContainer.appendChild(item);

        const removeButton = item.querySelector(".cart__remove");

        removeButton.addEventListener("click", () => {

            item.remove();
            total--;

            if (total < 0) {
                total = 0;
            }

            badge.textContent = total;
        });
    });
});

//Cerrar Carrito
if (closeCart) {
    closeCart.addEventListener("click", () => {
        cart.classList.remove("cart--active");
    });
}

//Eliminar item de carrito
const remove = item.querySelector(".remove");

remove.addEventListener("click", () => {
    item.remove();
    total--;
    badge.textContent = total;
});