import React, {useState, useMemo, useEffect} from "react";
import { ApolloProvider } from "@apollo/client";
import {client, query} from "./graphql/apollo";
import Autenticacion from "./paginas/Autenticacion";
import usuarioContext from "context/usuarioContext";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";
import Navegacion from "rutas/Navegacion";
import './App.css';

function App() {
  const [autenticado, setAutenticado] = useState(undefined);

useEffect(() =>{
  if(localStorage.getItem("usuario")){
    console.log("sii")
    jwt.verify(localStorage.getItem("usuario"), 'secretkey12546542020secretsecret45324544', function(err, decoded) {
      if(err){
        console.log(localStorage.getItem("usuario"))
        setAutenticado(null);
        localStorage.removeItem("usuario");
        console.log("error");
        console.log(err.message);
      }else{
        console.log(localStorage.getItem("usuario"), "pasa")
        setAutenticado(decoded)
        console.log(decoded)
        console.log(autenticado)
      } 
    });
  }else{
    setAutenticado(null);
    console.log(autenticado)
    console.log("no hay usuario")

  }
}, []);
  
client.query({query})
.then((response)=>{
    console.log(response.data.prueba)
})

const decodificarToken = (token) =>{
  localStorage.setItem("usuario", token);
  const usuario = jwtDecode(token);
  console.log(usuario);
  setAutenticado(usuario);
  
}

const actualizar = (data) => {
  setAutenticado(data)
}

const cerrarSesion = () =>{
  setAutenticado(null);
  localStorage.removeItem("usuario");
}

const usuarioInfo = useMemo(
  () => ({
    autenticado,
    actualizar,
    cerrarSesion,
    decodificarToken

  }),
  [autenticado]);

  if(autenticado === undefined) return null;

  return (
   
    <ApolloProvider client={client}> 
      <usuarioContext.Provider value={usuarioInfo}>
      {
        autenticado !== null && autenticado !== undefined ? <Navegacion /> : <Autenticacion />
      } 
      </usuarioContext.Provider>
    </ApolloProvider>
   
  );
}

export default App;
