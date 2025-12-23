import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState = {
  cartItems: []
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.cartItems.push(action.payload)
        Toast.fire({
          icon: "success",
          title: "Success",
          text: "Product Added successfully",
          color: "#008c00",
          background: "#fff"
        });
      } else {
        Toast.fire({
          icon: "error",
          iconColor: "#ff7970",
          title: "Sorry",
          text: "Product Already Exists in Cart!",
          color: "#ff7970",
          background: "white)"
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
    },

    clearCart: (state) => {
      state.cartItems = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;