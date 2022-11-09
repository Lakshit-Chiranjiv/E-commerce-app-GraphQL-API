import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        name: String
    }
`

const server = new ApolloServer()

server.listen().then(({url}) => console.log("Server running on",url))