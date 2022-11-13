
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

    products: (parent,args,{productsData}) => productsData,
    
    product: (parent,{id},{productsData}) => {
        return productsData.find(p => p.id===id)
    },
    
    categories: (parent,args,{categoriesData}) => categoriesData,
    
    category: (parent,{id},{categoriesData}) => {
        return categoriesData.find(c => c.id === id)
    }
}