import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Accueil from "./Page Accueil/Accueil"
import DeroulementStagiaires from "./DeroulementStagiaires/DeroulementStagiaires";
import FAQ from "./FAQ/FAQ";
import ProfilsCompetences from "./ProfilsCompetences/ProfilsCompetences";
import FormulaireEmployeurs from "./FormulaireEmployeurs/FormulaireEmployeurs";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import Footer from "./shared/components/Navigation/Footer";
import NewStage from "./stages/pages/NewStage";
import Stages from "./stages/pages/Stages";
import UpdateStage from "./stages/pages/UpdateStage";
import NewEtudiant from "./user/pages/NewEtudiant";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Accueil/>
      </Route>
      <Route path="/stagiaires" exact>
        <DeroulementStagiaires />
      </Route>
      <Route path="/employeurs" exact>
        <FormulaireEmployeurs />
      </Route>
      <Route path="/profils" exact>
        <ProfilsCompetences/>
      </Route>
      <Route path="/FAQ" exact>
        <FAQ/>  
      </Route>
      <Route path="/stages/nouveau" exact>
        <NewStage/>
      </Route>
      <Route path="/stages" exact>
        <Stages/>
      </Route>
      <Route path="/etudiants" exact>
        <Users/>
      </Route>
      <Route path="/stages/:stageId">
          <UpdateStage />
        </Route>
        <Route path="/etudiants/nouveau" exact>
          <NewEtudiant/>
        </Route>
    </Switch>
  )

  return (
    <Router>
      <MainNavigation/>
      <main>{routes}</main>
      <Footer/>
      </Router>
);
 }

export default App;