import React, { useState, useRef } from "react";
// import PropTypes from "prop-types";
import "./ThirdLayer.scss";

import SearchBar from "./SearchBar/SearchBar";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";

const ThirdLayer = () => {
  const [isSidebar, setSidebar] = useState(true);
  const clickSidebar = () => {
    setSidebar(!isSidebar);
  };

  const refAbout = useRef();
  // useRef 는 document.getelementbyID 와 같음

  const scrollToAbout = (e) => {
    e.preventDefault(
      refAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
    );
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
            {isSidebar ? <SideBar scrollToAbout={scrollToAbout} /> : null}
            <Content ref={refAbout} />
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
