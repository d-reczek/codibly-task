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
import { Grow } from "@mui/material";

const ProductsTable = ({ products }) => {
  const productsIsFetching = useSelector(selectProductsIsFetching);
  const productsError = useSelector(selectProductsError);

  const handleClick = () => {
    console.log("dzilaaa");
  };
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
      <TableContainer sx={{ width: "250px", m: "10px auto" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>

          <TableBody onClick={handleClick}>
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
                  <Grow key={product.id} in timeout={500}>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        backgroundColor: `${product.color}`,
                      }}>
                      <TableCell align="left">{product.id}</TableCell>
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.year}</TableCell>
                    </TableRow>
                  </Grow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsTable;
