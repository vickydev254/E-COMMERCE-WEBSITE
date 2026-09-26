function filterItems(category) {
    const cards = document.querySelectorAll('.item-chart');

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  let cartCount = 0;
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      document.getElementById('cart-count').textContent = cartCount;

      alert("Item added to cart!");
    });
  });

  const buyButtons = document.querySelectorAll('.buy-btn');
  const placeOrder = document.getElementById("place-order");
   const shopSection = document.getElementById("views");

  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      shopSection.style.display="none";
      placeOrder.style.display ="block";

      window.scrollTo(0,placeOrder.offsetTop);
    });
  });
