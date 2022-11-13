import { ApolloServer } from "apollo-server";
import { categoriesData, productsData } from "./dummyDB.js";
import { typeDefs } from "./schema.js";


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
            const { id } = args

            return productsData.find(p => p.id===id)
        },
        categories: () => categoriesData,
        category: (parent,args,context) => {
            const { id } = args

            return categoriesData.find(c => c.id === id)
        }
    },

    Category: {
        products: (parent,args,context) => {
            const { id } = parent

            return productsData.filter(p => p.categoryId===id)
        }
    },

    Product: {
        category: (parent,args,context) => {
            const { categoryId } = parent
            return categoriesData.find(c => c.id===categoryId)
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => console.log("Server running on",url))