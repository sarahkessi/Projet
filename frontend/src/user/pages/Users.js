import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import EtudiantsList from "../components/EtudiantsList";

const Users = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [etudiants, setEtudiants] = useState();

  useEffect(() => {
    const recupererUtilisateurs = async () => {
      try {
        const reponseData = await sendRequest("http://localhost:5000/api/etudiants");

        setEtudiants(reponseData.etudiants);
      } catch (err) {
        
      }
    };
    recupererUtilisateurs();
  }, [sendRequest]);



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
     {etudiants && <EtudiantsList items={etudiants} />};
    </React.Fragment>
  );
};

export default Users;