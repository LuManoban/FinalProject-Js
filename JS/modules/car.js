document.addEventListener('DOMContentLoaded', () => {
    const btnsAddToCart = document.querySelectorAll('.btn-add-cart');
    let total = 0;

    btnsAddToCart.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const price = e.target.getAttribute('data-price');
            const name = e.target.getAttribute('data-name');
            total += parseFloat(price);
            updateCartTotal(total);
            alert(`Añadido ${name} al carrito.`);
        });
    });

    function updateCartTotal(total) {
        document.getElementById('total-amount').textContent = total.toFixed(2);
    }
});