import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchProductSlice";
import toast from "react-hot-toast";

const cart = createSlice({
  name: "addToCart",
  initialState: {
    cart: [],
    cartCount: 0,
    totalAmount: 0,
  } as { cart: fetchData[]; cartCount: number; totalAmount: number },

  reducers: {
    addToCart: (state, action) => {
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        toast.success(`product successfully added to cart`, {
          duration: 700,
        });
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      toast.success(`product successfully removed`, {
        duration: 500,
      });
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    cartCount: (state) => {
      const count: number = state.cart.reduce((accumulator, currItem) => {
        return accumulator + currItem.qty;
      }, 0);
      state.cartCount = count;
    },

    totalAmount: (state) => {
      const total = state.cart.reduce((accumulator, currItem) => {
        return accumulator + currItem.price * currItem.qty;
      }, 0);
      state.totalAmount = total;
    },

    placeOrder: (state) => {
      if (state.cart.length > 0) {
        const toastLoading = toast.loading("order placing...");
        setTimeout(() => {
          toast.success("order placed Successfully", {
            id: toastLoading,
            duration: 1000,
          });
        }, 2000);
        state.cart = [];
      } else {
        toast.error("Cart is empty 👾", { duration: 1000 });
      }
    },
  },
});

export const { addToCart, removeFromCart, cartCount, totalAmount, placeOrder } =
  cart.actions;
export default cart.reducer;
