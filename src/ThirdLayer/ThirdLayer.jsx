import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ThirdLayer.scss";

import SearchBar from "./SearchBar/SearchBar";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

const ThirdLayer = () => {
  const [isSidebar, setSidebar] = useState(true);
  const clickSidebar = () => {
    setSidebar(!isSidebar);
  };

  return (
    <div className="Usercentrics__Wrapper">
      <div className="Usercentrics">
        <div className="ThirdLayer">
          <div className="__header">
            <button onClick={clickSidebar}>hide sidebar</button>
            <SearchBar />
          </div>

          <div className="__body">
            {isSidebar ? <SideBar /> : null}
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
