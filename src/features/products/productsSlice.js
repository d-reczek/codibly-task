import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  productsList: {
    data: null,
    isFetching: false,
    error: null,
  },
  filters: {
    page: 1,
    pageSize: 5,
  },
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async filters => {
    const { page, pageSize } = filters;
    const response = await (
      await fetch(
        `https://reqres.in/api/products?page=${page}&per_page=${[pageSize]}`
      )
    ).json();

    return response;
  }
);
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async id => {
    const response = await (
      await fetch(`https://reqres.in/api/products?id=${id}`)
    ).json();

    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    updatePage: (state, action) => {
      state.filters.page = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.productsList.isFetching = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsList.data = action.payload.data;
        state.productsList.isFetching = false;
      })
      .addCase(fetchProducts.rejected, state => {
        state.productsList.isFetching = false;
        state.productsList.error = true;
      })
      .addCase(fetchProduct.pending, state => {
        state.productsList.isFetching = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productsList.data = [action.payload.data];
        state.productsList.isFetching = false;
      })
      .addCase(fetchProduct.rejected, state => {
        state.productsList.error = true;
        state.productsList.isFetching = false;
      });
  },
});

export const { updatePage } = productsSlice.actions;

export const selectProducts = state => state.products.productsList.data;
export const selectFilters = state => state.products.filters;
export const selectProductsIsFetching = state =>
  state.products.productsList.isFetching;
export const selectProductsError = state => state.products.productsList.error;
export default productsSlice.reducer;
