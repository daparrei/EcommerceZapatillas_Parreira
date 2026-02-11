const getProducts = () => {
    // Function to fetch products from the API
return fetch('https://69071d72b1879c890ed8d89d.mockapi.io/productos')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error fetching products:', error));
};


const getProductsById = (id) => {
    // Function to fetch products from the API
return fetch(`https://69071d72b1879c890ed8d89d.mockapi.io/productos/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error fetching products:', error));
};

const addProduct = (newProduct) => {
    return fetch('https://69071d72b1879c890ed8d89d.mockapi.io/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error adding product:', error));
};

const deleteProduct = (id) => {
    return fetch(`https://69071d72b1879c890ed8d89d.mockapi.io/productos/${id}`, {
        method: 'DELETE'    
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error deleting product:', error));
}




export { getProducts };

export { getProductsById };

export { addProduct };

export { deleteProduct };


