document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        for (const item of cart) {
            const listItem = document.createElement('li');
            // Create an image element for the product
            const productImage = document.createElement('img');
            productImage.src = item.imageSrc;
            productImage.alt = 'Product Image';
            productImage.classList.add('cart-product-image');
            // Create a div for product details (name, price, and quantity)
            const productDetails = document.createElement('div');
            productDetails.classList.add('cart-product-details');
            // Product name
            const productName = document.createElement('p');
            productName.textContent = item.name;
            // Product price
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${item.price.toFixed(2)}`;
            // Product quantity
            const productQuantity = document.createElement('p');
            productQuantity.textContent = `Quantity: ${item.quantity}`;
            // Add the product details to the div
            productDetails.appendChild(productName);
            productDetails.appendChild(productPrice);
            productDetails.appendChild(productQuantity);
            // Add the image and product details to the list item
            listItem.appendChild(productImage);
            listItem.appendChild(productDetails);
            // Add the list item to the cart
            cartItems.appendChild(listItem);
            total += item.price * item.quantity;
        }
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Add to cart button click event
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentElement;
            const name = product.querySelector('.product-name').textContent;
            const price = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));
            const imageSrc = product.querySelector('img').src;
            
            // Check if the product is already in the cart
            const existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                // If the product is in the cart, increase its quantity
                existingItem.quantity++;
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                cart.push({ name, price, imageSrc, quantity: 1 });
            }

            updateCart();
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];
    // Function to update the cart display
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            const listItem = document.createElement('li');
            // Create an image element for the product
            const productImage = document.createElement('img');
            productImage.src = item.imageSrc;
            productImage.alt = 'Product Image';
            productImage.classList.add('cart-product-image');
            // Create a div for product details (name, price, and quantity)
            const productDetails = document.createElement('div');
            productDetails.classList.add('cart-product-details');
            // Product name
            const productName = document.createElement('p');
            productName.textContent = item.name;
            // Product price
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${item.price.toFixed(2)}`;
            // Product quantity
            const productQuantity = document.createElement('p');
            productQuantity.textContent = `Quantity: ${item.quantity}`;
            // Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function () {
                cart.splice(i, 1); // Remove the item from the cart array
                updateCart(); // Update the cart display
            });
            // Add the product details and remove button to the list item
            productDetails.appendChild(productName);
            productDetails.appendChild(productPrice);
            productDetails.appendChild(productQuantity);
            productDetails.appendChild(removeButton);
            // Add the image and product details to the list item
            listItem.appendChild(productImage);
            listItem.appendChild(productDetails);
            // Add the list item to the cart
            cartItems.appendChild(listItem);
            total += item.price * item.quantity;
        }
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Add to cart button click event
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentElement;
            const name = product.querySelector('.product-name').textContent;
            const price = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));
            const imageSrc = product.querySelector('img').src;

            // Check if the product is already in the cart
            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                // If the product is in the cart, increase its quantity
                existingItem.quantity++;
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                cart.push({ name, price, imageSrc, quantity: 1 });
            }

            updateCart();
        });
    });
});

