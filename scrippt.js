const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
let products = [];

productForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productNameInput = document.getElementById('productName');
  const productPriceInput = document.getElementById('productPrice');

  const productName = productNameInput.value.trim();
  const productPrice = parseFloat(productPriceInput.value);

  if (productName === '' || isNaN(productPrice)) {
    alert('Please enter valid product name and price.');
    return;
  }

  const newProduct = {
    name: productName,
    price: productPrice.toFixed(2),
  };

  products.push(newProduct);
  productNameInput.value = '';
  productPriceInput.value = '';

  renderProductList();
});

function deleteProduct(index) {
  products.splice(index, 1);
  renderProductList();
}

function renderProductList() {
  productList.innerHTML = '';

  products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteProduct(index));

    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(deleteButton);

    productList.appendChild(productItem);
  });
}

renderProductList();
