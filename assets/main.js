function displayCart() {
    const cartThumbnail = document.querySelector('.cart-thumbnail');
    
    if (cartThumbnail.style.display === "none") {
        cartThumbnail.style.display = "flex";
    } else {
        cartThumbnail.style.display = "none";
    }

    alert('Toggling The Cart');
    console.log('Toggling the cart thumbnail');
}


