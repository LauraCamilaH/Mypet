/*eslint-disable*/
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classnames from "classnames";
export default function FixedPlugin(props) {

  return (
    <div
      className={classnames("fixed-plugin", {
        "rtl-fixed-plugin": props.rtlActive
      })}
    >
    </div>
  );
}

FixedPlugin.propTypes = {

  rtlActive: PropTypes.bool,

};
