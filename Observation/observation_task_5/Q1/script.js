// Selecting DOM Elements from HTML page to add functionality to them
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productQuantityInput = document.getElementById('productQuantity');

const displayName = document.getElementById('displayName');
const totalPriceDisplay = document.getElementById('totalPrice');

const priceError = document.getElementById('priceError');
const quantityError = document.getElementById('quantityError');


function calculateTotal() {
    // Parse input values as they are strings by default and float because price can be decimal
    const price = parseFloat(productPriceInput.value);
    const quantity = parseInt(productQuantityInput.value, 10);
    const name = productNameInput.value.trim();

    let isValid = true;

    // Validate Price field if price is greater than 0 or not a number or empty
    if (isNaN(price) || price < 0) {
        priceError.style.display = 'block';
        isValid = false;
    } else {
        priceError.style.display = 'none';
    }

    // Validate Quantity field same as price but quantity should be greater than 0
    if (isNaN(quantity) || quantity < 1) {
        quantityError.style.display = 'block';
        isValid = false;
    } else {
        quantityError.style.display = 'none';
    }

    // Update Product Name display dynamically
    displayName.textContent = name !== "" ? name : "N/A";

    // Update Total Price display if inputs are valid
    if (isValid) {
        const total = price * quantity;
        totalPriceDisplay.textContent = `${total.toFixed(2)}`;
    } else {
        totalPriceDisplay.textContent = "0.00";
    }
}

// Attach Event Listeners for continuous input changes (triggers without page refresh)
productNameInput.addEventListener('input', calculateTotal);
productPriceInput.addEventListener('input', calculateTotal);
productQuantityInput.addEventListener('input', calculateTotal);

// Initial calculation call when the page loads
calculateTotal();