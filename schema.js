import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        name: String,
        age: Int,
        balance: Float,
        isBest: Boolean,
        roll: Int!,
        scores: [Int!]!,
        products(filter: ProductFilterInput): [Product!]!,
        product(id: ID!): Product,
        categories: [Category!]!,
        category(id: ID!): Category
        # ! specifies it can't be null
    }

    type Product {
        id: ID!,
        name: String!,
        description: String,
        price: Float!,
        quantity: Int!,
        onSale: Boolean!,
        category: Category,
        reviews: [Review!]
    }

    type Category {
        id: ID!,
        name: String!,
        products: [Product!]
    }

    type Review {
        id: ID!,
        title: String!,
        comment: String,
        rating: Int!,
        date: String!
    }

    input ProductFilterInput {
        onSale: Boolean
    }
`