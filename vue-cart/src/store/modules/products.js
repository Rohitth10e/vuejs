export default {
  namespaced: true,
  state() {
    return {
      products: [
        { id: 1, name: "iPhone", price: 12000 },
        { id: 2, name: "Samsung", price: 13000 },
        { id: 3, name: "Shoes", price: 1999 },
      ],
    };
  },
};