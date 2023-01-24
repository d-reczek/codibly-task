import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({ open, handleClose, color, name, year, id }) => {


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box style={{ backgroundColor: color }} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ID: {id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name color: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Year: {year}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default ProductModal;
