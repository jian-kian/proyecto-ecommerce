// Menú
const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menuButton");
const closeMenu = document.querySelector("#closeMenu");

if (menu && menuButton && closeMenu) {
    menuButton.addEventListener("click", () => {
        menu.classList.add("menu--active");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("menu--active");
    });
}

// Carrito
const buttons = document.querySelectorAll(".products-grid__button");
const badge = document.querySelector("#cartBadge");
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart__products");
const closeCart = document.querySelector("#closeCart");
let total = 0;

if (cartIcon && cart) {
    cartIcon.addEventListener("click", () => {
        cart.classList.toggle("cart--active");
    });
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        total++;
        if (badge) badge.textContent = total;

        const product = button.parentElement;
        const image = product.querySelector("img").src;
        const alt = product.querySelector("img").alt;
        const title = product.querySelector("h3").textContent;
        const price = product.querySelector(".products-grid__price").textContent;
        const item = document.createElement("div");

        item.className = "cart__item";
        item.innerHTML = `
            <img src="${image}" alt="${alt}" class="cart__img">
            <div class="cart__info">
                <h3>${title}</h3>
                <p>${price}</p>
            </div>
            <button class="cart__remove" type="button" aria-label="Eliminar ${title} del carrito">✕</button>
        `;

        if (cartContainer) cartContainer.appendChild(item);

        const removeButton = item.querySelector(".cart__remove");
        removeButton.addEventListener("click", () => {
            item.remove();
            total = Math.max(0, total - 1);
            if (badge) badge.textContent = total;
        });
    });
});

if (closeCart && cart) {
    closeCart.addEventListener("click", () => {
        cart.classList.remove("cart--active");
    });
}
