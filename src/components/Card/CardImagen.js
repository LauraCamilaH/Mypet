import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import styles from "assets/jss/material-dashboard-react/components/cardImagenStyle.js";

const useStyles = makeStyles(styles);

export default function CardImagen(props) {
  const classes = useStyles();
  const { children, className, plain, profile, ...rest } = props;
  const cardImagenClasses = classNames({
    [classes.CardImagen]: true,
    [classes.cardImagenProfile]: profile,
    [classes.cardImagenPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardImagenClasses} {...rest}>
      {children}
    </div>
  );
}

CardImagen.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool
};
