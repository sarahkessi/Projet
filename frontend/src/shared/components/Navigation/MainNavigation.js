import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <h1 className="main-navigation-titre">
        <Link to="/">
          <img
          src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png"
          alt="college"
          />
        </Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
