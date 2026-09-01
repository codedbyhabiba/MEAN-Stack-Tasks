let button = document.getElementById("getData");
let productsContainer = document.getElementById("products");

button.addEventListener("click", () => {

    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {

            productsContainer.innerHTML = "";

            data.forEach((product) => {

                let card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${product.image}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                    <span>${product.category}</span>
                `;

                productsContainer.appendChild(card);
            });

        })
        .catch((error) => {
            console.log(error);
        });

});