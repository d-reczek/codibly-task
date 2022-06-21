import ProductsTable from "../components/ProductsTable";
import SearchBar from "../components/SearchBar";
import {
  fetchProducts,
  selectFilters,
  selectProducts,
  updatePage,
} from "../../productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ChangePageButton from "../components/ChangePageButton";
import { Slide, Typography } from "@mui/material";
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const ProductsView = () => {
  const { page, pageSize } = useSelector(selectFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  const products = useSelector(selectProducts);

  return (
    <PageWrapper>
      <SearchBar />

      <ProductsTable products={products} />
      <Slide direction="up" in timeout={500}>
        <ButtonContainer>
          <ChangePageButton
            type="back"
            name="prev"
            handleOnClick={() =>
              dispatch(updatePage(page === 1 ? 1 : page - 1))
            }
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
            handleOnClick={() =>
              dispatch(updatePage(page === 3 ? 3 : page + 1))
            }
          />
        </ButtonContainer>
      </Slide>
    </PageWrapper>
  );
};

export default ProductsView;
