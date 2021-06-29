let initialState = {
  categories: [
    {
      name: 'food',
      display_name: 'Food',
      description: 'Good food = Good mood',
    },
    {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'Making your life easier, one volt at a time',
    },
    {
      name: 'clothing',
      display_name: 'Clothing',
      description: 'You are what you wear',
    },
  ],
  activeCategories: {},
};

const categories = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let activeCategories = initialState.categories.find((category)=>category.name === payload);
      return { categories: initialState.categories, activeCategories};
    default:
      return state;
  }
};

export default categories;
