import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  //   listOfAllPokemons: {
  //     data: null,
  //     isFetching: true,
  //     error: null,
  //   },
  //   singlePokemon: {
  //     pokemon: null,
  //     isFetching: false,
  //     error: null,
  //   },
  //   pokemonVisibilty: false,
  //   filters: {
  //     offset: 20,
  //     pageSize: 20,
  //   },
  //
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

    console.log(response);

    return response;
  }
);
// export const fetchPokemon = createAsyncThunk(
//   "pokemons/fetchPokemon",
//   async pokemonName => {
//     const response = await (
//       await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     ).json();

//     console.log(response);

//     return response;
//   }
// );

export const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    // togglePokemonVisibility: state => {
    //   state.pokemonVisibilty = !state.pokemonVisibilty;
    // },
    // resetPokemonVisibility: state => {
    //   state.pokemonVisibilty = false;
    // },
    // updateOffset: (state, action) => {
    //   if (state.filters.offset === 0) {
    //     state.filters.offset = 20;
    //     alert(
    //       "This is first page with pokemons, you will return to the first page"
    //     );
    //   } else {
    //     state.filters.offset = action.payload;
    //   }
    // },
    // updatePageSize: (state, action) => {
    //   state.filters.pageSize = action.payload;
    // },
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
      });
    //   .addCase(fetchPokemons.pending, state => {
    //     state.listOfAllPokemons.isFetching = true;
    //   })
    //   .addCase(fetchPokemon.pending, state => {
    //     state.singlePokemon.isFetching = true;
    //   })

    //   .addCase(fetchPokemons.fulfilled, (state, action) => {
    //     state.listOfAllPokemons.isFetching = false;
    //     state.listOfAllPokemons.data = action.payload.results;
    //   })
    //   .addCase(fetchPokemon.fulfilled, (state, action) => {
    //     state.singlePokemon.isFetching = false;
    //     state.singlePokemon.pokemon = action.payload;
    //   })

    //   .addCase(fetchPokemons.rejected, (state, action) => {
    //     state.listOfAllPokemons.error = "wystapil błąd";
    //     state.listOfAllPokemons.isFetching = false;
    //   })
    //   .addCase(fetchPokemon.rejected, (state, action) => {
    //     state.singlePokemon.error = "wystapil błąd";
    //     state.singlePokemon.isFetching = false;
    //   });
  },
});

// export const {
//   togglePokemonVisibility,
//   getNewPokemons,
//   getPreviousPokemons,
//   resetPokemonVisibility,
//   updateOffset,
//   updatePageSize,
// } = productsSlice.actions;
// export const selectPokemonsFetching = state =>
//   state.pokemons.listOfAllPokemons.isFetching;
// export const selectPokemonsError = state =>
//   state.pokemons.listOfAllPokemons.error;
// export const selectListOfAllPokemons = state =>
//   state.pokemons.listOfAllPokemons.data;
// export const selectSinglePokemon = state =>
//   state.pokemons.singlePokemon.pokemon;
// export const selectSinglePokemonFetching = state =>
//   state.pokemons.singlePokemon.isFetching;
// export const selectSinglePokemonError = state =>
//   state.pokemons.singlePokemon.error;

// export const selectTogglePokemonVisibility = state =>
//   state.pokemons.pokemonVisibilty;

// export const selectPokemonFilters = state => state.pokemons.filters;
export const selectProducts = state => state.products.productsList.data;
export const selectFilters = state => state.products.filters;

export default productsSlice.reducer;
