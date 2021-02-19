import React from "react";
import PropTypes from "prop-types";
import "./ThirdLayer.scss";

import SearchBar from "./SearchBar/SearchBar";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

const ThirdLayer = () => {
  return (
    <div className="Usercentrics__Wrapper">
      <div className="Usercentrics">
        <div className="ThirdLayer">
          <div className="__header">
            <SearchBar />
          </div>

          <div className="__body">
            <SideBar />
            <Content />
          </div>

          <div className="__footer">
            <button>Speichern und Schließen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ThirdLayer.propTypes = {};

export default ThirdLayer;
