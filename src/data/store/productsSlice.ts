import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, productsCollectionsRef } from "@/data";
import { getDocs } from "firebase/firestore";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getDocs(productsCollectionsRef);
    return response.docs.map((doc) => doc.data());
  },
);

interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      });
  },
});

export const productsActions = productsSlice.actions;
