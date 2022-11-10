import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        name: String,
        age: Int,
        balance: Float,
        isBest: Boolean,
        roll: Int!
        # ! specifies it can't be null
    }
`

const resolvers = {
    Query: {
        name: () => {
            return "Lakshit Chiranjiv Sagar"
        },
        age: () => {
            return 21
        },
        balance: () => {
            return 9999999.99999
        },
        isBest: () => true,
        roll: () => {
            return 586
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))