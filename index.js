import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        name: String,
        age: Int,
        balance: Float,
        isBest: Boolean,
        roll: Int!,
        scores: [Int!]!
        # ! specifies it can't be null
    }

    type Product {
        name: String!,
        description: String,
        price: Float!,
        quantity: Int!,
        onSale: Boolean!
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
        },
        scores: () => [90,99,98]
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))