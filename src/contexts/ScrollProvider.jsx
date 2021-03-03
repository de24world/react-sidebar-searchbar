import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const test = () => {
    console.log("test Context");
  };
  return (
    <ScrollContext.Provider value={test}>{children}</ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export default ScrollProvider;
