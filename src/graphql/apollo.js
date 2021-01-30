import {ApolloClient, HttpLink, InMemoryCache, gql} from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4000/GRAPHQL"
    })
})

export const query = gql`
    query{
        prueba
    }
`
