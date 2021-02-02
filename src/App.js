import React, {useState, useMemo, useEffect} from "react";
import { ApolloProvider } from "@apollo/client";
import {client, query} from "./graphql/apollo";
import Autenticacion from "./paginas/Autenticacion";
import InicioComponent from "./paginas/Inicio";
import usuarioContext from "context/usuarioContext";
import jwtDecode from "jwt-decode";
import './App.css';

function App() {
  const [autenticado, setAutenticado] = useState(undefined);

useEffect(() =>{
  if(localStorage.getItem("usuario")){
    console.log(JSON.parse(localStorage.getItem("usuario")), "pasa")
    setAutenticado(JSON.parse(localStorage.getItem("usuario",{})))
  }else{
    setAutenticado(null);
  }
}, []);
  
client.query({query})
.then((response)=>{
    console.log(response.data.prueba)
})

const decodificarToken = (token) =>{
  const usuario = jwtDecode(token);
  console.log(usuario);
  localStorage.setItem("usuario", JSON.stringify(usuario));
  setAutenticado(usuario);
  
}

const actualizar = (data) => {
  setAutenticado(data)
}

const cerrarSesion = () =>{
  setAutenticado(null);
}

const usuarioInfo = useMemo(
  () => ({
    autenticado,
    actualizar,
    cerrarSesion,
    decodificarToken

  }),
  [autenticado]);

  return (
   
    <ApolloProvider client={client}> 
      <usuarioContext.Provider value={usuarioInfo}>
      {
        autenticado !== null || autenticado !== undefined ? <InicioComponent /> : <Autenticacion />
      } 
      </usuarioContext.Provider>
    </ApolloProvider>
   
  );
}

export default App;
