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

import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Navigation/Footer";

function App() {

  return (
    <Router>
      <MainNavigation />
      <main>
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
    </Switch>
    </main>
    <Footer />
  </Router>
  )
}

export default App;