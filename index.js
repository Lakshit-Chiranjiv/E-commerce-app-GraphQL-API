import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        name: String
    }
`

const resolvers = {
    Query: {
        name: () => {
            return "Lakshit"
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))