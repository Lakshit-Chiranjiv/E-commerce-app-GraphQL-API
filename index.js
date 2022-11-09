import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        name: String,
        age: Int
    }
`

const resolvers = {
    Query: {
        name: () => {
            return "Lakshit"
        },
        age: () => {
            return 21
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))