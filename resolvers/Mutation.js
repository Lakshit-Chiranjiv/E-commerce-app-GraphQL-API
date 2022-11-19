
export const Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input

        const newCategory = {
            id: "cid"+(db.categoriesData.length+1),
            name
        }

        db.categoriesData.push(newCategory)

        return newCategory
    },

    addProduct: (parent, { input }, { db }) => {
        const { name,description,price,quantity,onSale,categoryId } = input

        if(0 > Number(categoryId.slice(-1)) || Number(categoryId.slice(-1)) > db.categoriesData.length)
            return null

        const newProduct = {
            id: "pid"+(db.productsData.length+1),
            name,
            description,
            price,
            quantity,
            onSale,
            categoryId
        }

        db.productsData.push(newProduct)

        return newProduct
    },

    addReview: (parent, { input }, { db }) => {
        const { title, comment, date, rating ,productId } = input

        if(0 > Number(productId.slice(-1)) || Number(productId.slice(-1)) > db.productsData.length)
            return null

        const newReview = {
            id: "rid"+(db.reviewsData.length+1),
            title,
            comment,
            rating,
            date,
            productId
        }

        db.reviewsData.push(newReview)

        return newReview
    },

    deleteCategory: (parent, { id }, { db }) => {

        if(0 > Number(id.slice(-1)) || Number(id.slice(-1)) > db.categoriesData.length)
            return "Incorrect Category Id"

        db.categoriesData = db.categoriesData.filter(c => c.id !== id)
        db.productsData.map(p => {
            if(p.categoryId === id)
                p.categoryId = null
        })

        return "Successfully deleted "+id
    }
}