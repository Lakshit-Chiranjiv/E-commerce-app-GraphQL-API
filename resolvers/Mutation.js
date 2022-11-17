
export const Mutation = {
    addCategory: (parent, { input }, { categoriesData }) => {
        const { name } = input

        const newCategory = {
            id: "cid"+(categoriesData.length+1),
            name
        }

        categoriesData.push(newCategory)

        return newCategory
    },

    addProduct: (parent, { input }, { categoriesData, productsData }) => {
        const { name,description,price,quantity,onSale,categoryId } = input

        if(0 > Number(categoryId.slice(-1)) || Number(categoryId.slice(-1)) > categoriesData.length)
            return null

        const newProduct = {
            id: "pid"+(productsData.length+1),
            name,
            description,
            price,
            quantity,
            onSale,
            categoryId
        }

        productsData.push(newProduct)

        return newProduct
    }
}