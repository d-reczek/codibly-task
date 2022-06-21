import { Box } from "@mui/system";

const BoxContainer = ({ children }) => {
  return (
    <Box
      sx={{
        marginBottom: "30px",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {children}
    </Box>
  );
};

export default BoxContainer;
