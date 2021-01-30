import React from "react";
import { ApolloProvider } from "@apollo/client";
import {client, query} from "./graphql/apollo";
import Autenticacion from "./paginas/Autenticacion";
import './App.css';

function App() {
  
client.query({query})
.then((response)=>{
    console.log(response.data.prueba)
})

  return (
    <ApolloProvider client={client}>
      <Autenticacion />
    </ApolloProvider>
  );
}

export default App;
