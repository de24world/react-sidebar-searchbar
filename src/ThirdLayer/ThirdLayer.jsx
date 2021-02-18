import React from "react";
import PropTypes from "prop-types";
import "./ThirdLayer.scss";
import SearchBar from "./SearchBar/SearchBar";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

const ThirdLayer = () => {
  return (
    <div>
      <div className="Usercentrics__Wrapper">
        Usercentrics__Wrapper
        <div className="Usercentrics">
          Usercentrics
          <SearchBar />
          <SideBar />
          <Content />
        </div>
      </div>
    </div>
  );
};

ThirdLayer.propTypes = {};
export default ThirdLayer;
