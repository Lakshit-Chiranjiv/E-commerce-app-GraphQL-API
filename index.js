import { ApolloServer } from "apollo-server";
import { db } from "./dummyDB.js";
import { Category } from "./resolvers/Category.js";
import { Mutation } from "./resolvers/Mutation.js";
import { Product } from "./resolvers/Products.js";
import { Query } from "./resolvers/Query.js";
import { typeDefs } from "./schema.js";

const resolvers = {
    Query,
    Mutation,
    Category,
    Product
}

const context = {
    db
}

const server = new ApolloServer({typeDefs, resolvers, context})

server.listen().then(({url}) => console.log("Server running on",url))