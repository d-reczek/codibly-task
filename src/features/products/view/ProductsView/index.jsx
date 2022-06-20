import ProductsTable from "../components/ProductsTable";
import SearchBar from "../components/SearchBar";
import {
  fetchProduct,
  fetchProducts,
  selectFilters,
  selectProductError,
  selectProducts,
  updatePage,
} from "../../productsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Icon, Typography } from "@mui/material";
import ChangePageButton from "../components/ChangePageButton";
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const ProductsView = () => {
  const { page, pageSize } = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    dispatch(fetchProducts({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const products = useSelector(selectProducts);
  const noProductId = useSelector(selectProductError);
  //   const filtredProducts =
  //     Array.isArray(products) &&
  //     products.filter(product => {
  //       if (product.id === "") {
  //         return product;
  //       } else {
  //         return Array.isArray(product) && product.id.includes(inputValue);
  //       }
  //     });
  return (
    <PageWrapper>
      <SearchBar />
      <ButtonContainer>
        {/* <Button
          variant="outlined"
          onClick={() => dispatch(updatePage(page - 1))}>
          prev
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(updatePage(page + 1))}>
          next
          <Icon sx={{ fontSize: "50px" }}>arrow_back_ios</Icon>
        </Button> */}
        <ChangePageButton
          type="back"
          name="prev"
          handleOnClick={() => dispatch(updatePage(page - 1))}
        />
        <Typography
          sx={{
            backgroundColor: "rgb(25 118 210 / 50%)",
            width: "20px",

            m: "10px",
            p: "10px",
            borderRadius: "20px",
            textAlign: "center",
          }}
          variant="span">
          {page}
        </Typography>
        <ChangePageButton
          type="forward"
          name="next"
          handleOnClick={() => dispatch(updatePage(page + 1))}
        />
      </ButtonContainer>

      <ProductsTable products={products} />
    </PageWrapper>
  );
};

export default ProductsView;
