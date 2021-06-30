let initialState = {
  products: [],
  display: []
};

const products = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      return { products: payload, display: state.display };
    case 'ACTIVE':
      let products = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { products: state.products, display: products };
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
      let displayList = state.display.map((product) =>
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
      return { products: productList, display: displayList };
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
      let newDisplayProducts = state.display.map((product) =>
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
      return { products: newProducts, display: newDisplayProducts };
      case 'SET_ACTIVE_ITEM':
        let product = state.products.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock ,
              count: product.count ,
            }
          : product
      );
      let DisplayProduct = state.display.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock ,
              count: product.count ,
            }
          : product
          );
        return {products:product,display:DisplayProduct };
    default:
      return state;
  }
};
export const productDetailPage = data => {
  return {
    type:'SET_ACTIVE_ITEM',
    payload: data
  }
}
export default products;
