import { hexToRgb, blackColor } from "assets/jss/material-dashboard-react.js";

const cardImagenStyle = {
  cardImagen: {
    "&$cardImagen img": {
      maxWidth: "130px",
      height: "auto",
      display: "flex"
    }
  },
  cardImagenProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardImagenPlain": {
      marginTop: "0",
      maxWidth: "130px"
    }
  },
  cardImagenPlain: {}
};

export default cardImagenStyle;