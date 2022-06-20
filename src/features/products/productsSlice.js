import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  productsList: {
    data: null,
    isFetching: false,
    error: null,
  },
  product: {
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

    console.log(response);

    return response;
  }
);
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async id => {
    const response = await (
      await fetch(`https://reqres.in/api/products?id=${id}`)
    ).json();

    console.log(response);

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
        state.productsList.error = true;
      })
      .addCase(fetchProduct.pending, state => {
        state.product.isFetching = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productsList.data = [action.payload.data];
        state.product.isFetching = false;
      })
      .addCase(fetchProduct.rejected, state => {
        state.product.error = true;
      });
  },
});

export const { updatePage } = productsSlice.actions;

export const selectProducts = state => state.products.productsList.data;
export const selectFilters = state => state.products.filters;
export const selectProductError = state => state.products.error;
export default productsSlice.reducer;
