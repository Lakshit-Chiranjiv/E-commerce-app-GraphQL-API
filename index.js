import { ApolloServer } from "apollo-server";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Products.js";
import { Query } from "./resolvers/Query.js";
import { typeDefs } from "./schema.js";


const resolvers = {
    Query,
    Category,
    Product
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))