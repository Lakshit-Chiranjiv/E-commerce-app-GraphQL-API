
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
    },

    addReview: (parent, { input }, { reviewsData, productsData }) => {
        const { title, comment, date, rating ,productId } = input

        if(0 > Number(productId.slice(-1)) || Number(productId.slice(-1)) > productsData.length)
            return null

        const newReview = {
            id: "rid"+(reviewsData.length+1),
            title,
            comment,
            rating,
            date,
            productId
        }

        reviewsData.push(newReview)

        return newReview
    },

    deleteCategory: (parent, { id }, { categoriesData, productsData }) => {

        if(0 > Number(id.slice(-1)) || Number(id.slice(-1)) > categoriesData.length)
            return "Incorrect Category Id"

        categoriesData = categoriesData.filter(c => c.id !== id)
        productsData.map(p => {
            if(p.categoryId === id)
                p.categoryId = null
        })

        return "Successfully deleted "+id
    }
}