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

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!,
        addProduct(input: AddProductInput!): Product,
        addReview(input: AddReviewInput!): Review,
        deleteCategory(id: ID!): String!,
        deleteProduct(id: ID!): String!,
        deleteReview(id: ID!): String!,
        updateCategory(id: ID!,input: UpdateCategoryInput!): Category,
        updateProduct(id: ID!, input: UpdateProductInput!): Product
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
        products(filter: ProductFilterInput): [Product!]
    }

    type Review {
        id: ID!,
        title: String!,
        comment: String,
        rating: Int!,
        date: String!
    }

    input ProductFilterInput {
        onSale: Boolean,
        avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }

    input UpdateCategoryInput {
        name: String!
    }

    input AddProductInput {
        name: String!,
        description: String,
        price: Float!,
        quantity: Int!,
        onSale: Boolean!,
        categoryId: String!
    }

    input UpdateProductInput {
        name: String,
        description: String,
        price: Float,
        quantity: Int,
        onSale: Boolean,
        categoryId: String
    }

    input AddReviewInput {
        title: String!,
        comment: String,
        rating: Int!,
        date: String!,
        productId: String!
    }
`