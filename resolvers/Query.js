import { categoriesData, productsData } from "../dummyDB.js"

export const Query = {
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
}