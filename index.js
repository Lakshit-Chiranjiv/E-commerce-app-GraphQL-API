import { ApolloServer, gql } from "apollo-server";

const productsData = [
    {
        id: "pid1",
        name: 'Laptop',
        description: 'Good laptop',
        price: 4885.23,
        quantity: 30,
        onSale: true
    },
    {
        id: "pid2",
        name: 'Smartphone',
        description: 'Good smartphone',
        price: 387.23,
        quantity: 50,
        onSale: true
    },
    {
        id: "pid3",
        name: 'Umbrella',
        description: 'Good umbrella',
        price: 45.73,
        quantity: 10,
        onSale: true
    },
    {
        id: "pid4",
        name: 'Notebook',
        description: 'Good notebook',
        price: 12.55,
        quantity: 110,
        onSale: false
    }
]

const categoriesData = [
    {
        id: 'cid1',
        name: 'Electronics'
    },
    {
        id: 'cid2',
        name: 'Stationary'
    },
    {
        id: 'cid3',
        name: 'Accessories'
    }
]

const typeDefs = gql`
    type Query {
        name: String,
        age: Int,
        balance: Float,
        isBest: Boolean,
        roll: Int!,
        scores: [Int!]!,
        products: [Product!]!,
        product(id: ID!): Product
        # ! specifies it can't be null
    }

    type Product {
        id: ID!,
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
        scores: () => [90,99,98],
        products: () => productsData,
        product: (parent,args,context) => {
            const pid = args.id

            const prod = productsData.find(p => p.id===pid)
            return prod
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))