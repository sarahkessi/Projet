import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/stages" exact>
          Stages
        </NavLink>
      </li>
      <li>
        <NavLink to="/stagiaires" exact>
          Déroulement des stages (Étudiants)
        </NavLink>
      </li>
      <li>
        <NavLink to="/employeurs" exact>
          Déroulement des stages (Employeurs)
        </NavLink>
      </li>
      <li>
        <NavLink to="/FAQ" exact>
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink to="/profils" exact>
          Profils et Compétences
        </NavLink>
      </li>
      <li>
          <NavLink to="/stages/nouveau">Ajouter stage</NavLink>
        </li>
    </ul>
  );
};

export default NavLinks;
