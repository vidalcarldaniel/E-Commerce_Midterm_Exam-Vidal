const products = [
    { "id": 1, "name": "Laptop", "price": 1500, "stock": 5, "image": "https://img.freepik.com/premium-psd/laptop-mock-up_1310-197.jpg" },
    { "id": 2, "name": "Headphones", "price": 100, "stock": 10, "image": "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg" },
    { "id": 3, "name": "Keyboard", "price": 50, "stock": 20, "image": "https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708005.jpg" },
  ];

  function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
      const productCard = `
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  }

    displayProducts();