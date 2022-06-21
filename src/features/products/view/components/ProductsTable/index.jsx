import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import {
  selectProductsError,
  selectProductsIsFetching,
} from "../../../productsSlice";
import CircularProgress from "@mui/material/CircularProgress";
import BoxContainer from "../BoxContainer";

const ProductsTable = ({ products }) => {
  const productsIsFetching = useSelector(selectProductsIsFetching);
  const productsError = useSelector(selectProductsError);
  console.log("prd", productsIsFetching);
  if (productsIsFetching) {
    return (
      <BoxContainer>
        <CircularProgress />
      </BoxContainer>
    );
  }

  if (productsError) {
    return <BoxContainer>Error</BoxContainer>;
  }
  return (
    <>
      <TableContainer sx={{ width: "220px", m: "10px auto" }} component={Paper}>
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
              products.map(product =>
                product === undefined ? (
                  <TableRow>
                    <TableCell
                      sx={{ position: "relative", left: "25%" }}
                      align="center">
                      There is no such ID
                    </TableCell>
                  </TableRow>
                ) : (
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
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsTable;
