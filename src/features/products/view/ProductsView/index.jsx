import ProductsTable from "../components/ProductsTable";
import SearchBar from "../components/SearchBar";
import {
  fetchProduct,
  fetchProducts,
  selectFilters,
  selectProductError,
  selectProducts,
} from "../../productsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-conten: center;
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
      {noProductId ? <div>No id</div> : <ProductsTable products={products} />}
    </PageWrapper>
  );
};

export default ProductsView;
