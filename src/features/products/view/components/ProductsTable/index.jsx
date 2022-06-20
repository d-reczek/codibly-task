import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { selectProductError } from "../../../productsSlice";

const ProductsTable = ({ products }) => {
  const noProductId = useSelector(selectProductError);
  console.log("prd", products);

  Array.isArray(products) &&
    products.map(product => {
      if (product === undefined) {
        return <div>didapdapdapdapdp</div>;
      }
    });

  return (
    <>
      <TableContainer sx={{ width: "80%", m: "10px auto" }} component={Paper}>
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
