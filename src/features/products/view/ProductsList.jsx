import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { fetchProducts, selectFilters, selectProducts } from "../productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PageWrapper = styled.div`
  background-color: red;
`;
const ProductsList = () => {
  const products = useSelector(selectProducts);
  const { page, pageSize } = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  return (
    <div>
      <TableContainer sx={{ width: "80%", m: "30px auto" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(products) &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: `${product.color}`,
                  }}>
                  <TableCell align="left">{product.id}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.year}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsList;
