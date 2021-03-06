import { Slide } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  fetchProducts,
  selectFilters,
} from "../../../productsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector(selectFilters);
  const handleFetchProduct = inputValue => {
    if (inputValue === "") {
      dispatch(fetchProducts({ page, pageSize }));
    } else {
      dispatch(fetchProduct(inputValue));
    }
  };

  return (
    <Slide direction="down" in timeout={500}>
      <Box
        component="form"
        sx={{
          m: "20px auto",
        }}
        autoComplete="off">
        <TextField
          type="number"
          label="search ID"
          variant="outlined"
          onChange={e => handleFetchProduct(e.target.value)}
        />
      </Box>
    </Slide>
  );
};
export default SearchBar;
