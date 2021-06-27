let initialState = {
  products: [
    {
      _id: '5f1a51f01910080017657ed2',
      name: 'TV',
      url: 'https://images.pexels.com/photos/5721880/pexels-photo-5721880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'electronics',
      price: 799.0,
      inStock: 5,
      count: 0,
    },
    {
      _id: '5f1a51f71910080017657ed3',
      name: 'Mobile',
      url: 'https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'electronics',
      price: 599.0,
      inStock: 3,
      count: 0,
    },
    {
      _id: '5f1a51ff1910080017657ed4',
      name: 'Radio',
      url: 'https://images.pexels.com/photos/1213922/pexels-photo-1213922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'electronics',
      price: 99.0,
      inStock: 15,
      count: 0,
    },
    {
      _id: '5f1a52031910080017657ed5',
      name: 'Glasses',
      url: 'https://images.pexels.com/photos/3650926/pexels-photo-3650926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'clothing',
      price: 19.0,
      inStock: 25,
      count: 0,
    },
    {
      _id: '5f1a5f861910080017657ed7',
      name: 'Socks',
      url: 'https://images.pexels.com/photos/5746050/pexels-photo-5746050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'clothing',
      price: 12.0,
      inStock: 0,
      count: 0,
    },
    {
      _id: '5f1a5f761910080017657ed6',
      name: 'Strawberries',
      url: 'https://images.pexels.com/photos/785330/pexels-photo-785330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'food',
      price: 2.99,
      inStock: 500,
      count: 0,
    },
    {
      _id: '5f1a5faf1910080017657ed8',
      name: 'Eggs',
      url: 'https://images.pexels.com/photos/6294249/pexels-photo-6294249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'food',
      price: 1.99,
      inStock: 12,
      count: 0,
    },
    {
      _id: '5f1a5faf1910080017657ed9',
      name: 'Bread',
      url: 'https://images.pexels.com/photos/600620/pexels-photo-600620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'food',
      price: 2.39,
      inStock: 90,
      count: 0,
    },
  ],
};

const products = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let products = initialState.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { products, count: state.count };
    case 'INCREMENT':
      let productList = state.products.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock - 1,
              count: product.count + 1,
            }
          : product
      );
      return { products: productList };
    case 'DECREMENT':
      let newProducts = state.products.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock + payload.count + 1,
              count: product.count - payload.count - 1,
            }
          : product
      );
      return { products: newProducts };
    default:
      return state;
  }
};

export default products;