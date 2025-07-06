export default {
  namespaced: true,
  state() {
    return {
      items: [
        { id: 1, name: "apple iphone 16 pro", price: 12000, quantity: 2 },
      ],
    };
  },
  mutations: {
    addToCart(state, product) {
      const isExisting = state.items.find((item) => item.id === product.id);
      if (isExisting) {
        isExisting.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.items = state.items.filter((item) => item.id != productId);
    },
    incrementQuantity(state, productId) {
      const product = state.items.find((item) => item.id === productId);
      product.quantity++;
    },
    decrementQuantity(state, productId) {
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    clearCart(state) {
        state.items = []
    },
  },
  getters: {
    cartItems: (state) => state.items,
    cartTotal(state) {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {},
};
