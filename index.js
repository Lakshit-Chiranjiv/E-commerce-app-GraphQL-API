import { ApolloServer } from "apollo-server";
import { categoriesData, productsData } from "./dummyDB.js";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Products.js";
import { Query } from "./resolvers/Query.js";
import { typeDefs } from "./schema.js";

const resolvers = {
    Query,
    Category,
    Product
}

const context = {
    categoriesData,
    productsData
}

const server = new ApolloServer({typeDefs, resolvers, context})

server.listen().then(({url}) => console.log("Server running on",url))