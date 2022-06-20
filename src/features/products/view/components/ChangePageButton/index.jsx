import { Button, Icon } from "@mui/material";

const ChangePageButton = ({ handleOnClick, type, name }) => {
  return (
    <Button
      sx={{
        gap: "10px",
        flexDirection: `${type === "back" ? "row" : "row-reverse"}`,
      }}
      variant="outlined"
      onClick={handleOnClick}>
      <Icon sx={{ fontSize: "20px" }}>arrow_{type}_ios</Icon>
      {name}
    </Button>
  );
};

export default ChangePageButton;
