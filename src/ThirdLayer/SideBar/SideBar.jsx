import React from "react";
// import PropTypes from "prop-types";
import "./SideBar.scss";

const SideBar = ({ scrollToAbout }) => {
  return (
    <div className="SideBarNav">
      SideBarNav
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li onClick={scrollToAbout}>20</li>
      </ul>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
