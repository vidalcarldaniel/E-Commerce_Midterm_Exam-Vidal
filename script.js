const products = [
    { "id": 1, "name": "Laptop", "price": 1500, "stock": 5, "image": "https://img.freepik.com/premium-psd/laptop-mock-up_1310-197.jpg" },
    { "id": 2, "name": "Headphones", "price": 100, "stock": 10, "image": "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg" },
    { "id": 3, "name": "Keyboard", "price": 50, "stock": 20, "image": "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708005.jpg" },
  ];
  
  function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
      const productCard = `
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Price: $${product.price}</p>
              <p class="card-text stock" id="stock-${product.id}">Stock: ${product.stock}</p>
              <button class="btn btn-primary" id="add-to-cart-${product.id}">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      productGrid.innerHTML += productCard;
  
      // Add event listener to the button
      document.getElementById(`add-to-cart-${product.id}`).addEventListener('click', () => addToCart(product));
    });
  }
  
  function addToCart(product) {
    if (product.stock > 0) {
      product.stock--;
      document.getElementById(`stock-${product.id}`).innerText = `Stock: ${product.stock}`;
      alert(`${product.name} has been added to your cart!`);
    } else {
      alert(`Sorry, ${product.name} is out of stock!`);
    }
  }
  
  // Call displayProducts after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', displayProducts);  
