
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

        if(0 > Number(categoryId.slice(3)) || Number(categoryId.slice(3)) > db.categoriesData.length)
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

        if(0 > Number(productId.slice(3)) || Number(productId.slice(3)) > db.productsData.length)
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

        if(0 > Number(id.slice(3)) || Number(id.slice(3)) > db.categoriesData.length)
            return "Incorrect Category Id"

        db.categoriesData = db.categoriesData.filter(c => c.id !== id)
        db.productsData = db.productsData.map(p => {
            if(p.categoryId === id)
                return {
                    ...p,
                    categoryId: null
                }
            else
                return p
        })

        return "Successfully deleted "+id
    },

    deleteProduct: (parent, { id }, { db }) => {

        if(0 > Number(id.slice(3)) || Number(id.slice(3)) > db.productsData.length)
            return "Incorrect Product Id"

        db.productsData = db.productsData.filter(p => p.id !== id)
        db.reviewsData = db.reviewsData.filter(r => r.productId !== id)

        return "Successfully deleted "+id
    },

    deleteReview: (parent, { id }, { db }) => {

        if(0 > Number(id.slice(3)) || Number(id.slice(3)) > db.reviewsData.length)
            return "Incorrect Review Id"

        db.reviewsData = db.reviewsData.filter(r => r.id !== id)

        return "Successfully deleted "+id
    },

    updateCategory: (parent,{ id, input }, { db }) => {
        if(0 > Number(id.slice(3)) || Number(id.slice(3)) > db.categoriesData.length)
            return null

        const { name } = input
        let updatedCategory
        const idx = db.categoriesData.findIndex(c => c.id === id)
        db.categoriesData = db.categoriesData.map((c,i) => {
            if(idx === i){
                updatedCategory = {
                    ...c,
                    name
                }
                return {
                    ...c,
                    name 
                }
            }
            else 
                return c
        })

        return updatedCategory
    },

    updateProduct: (parent,{ id, input }, { db }) => {
        if(0 > Number(id.slice(3)) || Number(id.slice(3)) > db.productsData.length)
            return null

        let updatedProduct
        const idx = db.productsData.findIndex(p => p.id === id)
        db.productsData = db.productsData.map((p,i) => {
            if(idx === i){
                updatedProduct = {
                    ...p,
                    ...input
                }
                return {
                    ...p,
                    ...input 
                }
            }
            else 
                return p
        })

        return updatedProduct
    },

    updateReview: (parent,{ id, input }, { db }) => {
        if(0 > Number(id.slice(3)) || Number(id.slice(3)) > db.reviewsData.length)
            return null

        let updatedReview
        const idx = db.reviewsData.findIndex(r => r.id === id)
        db.reviewsData = db.reviewsData.map((r,i) => {
            if(idx === i){
                updatedReview = {
                    ...r,
                    ...input
                }
                return {
                    ...r,
                    ...input 
                }
            }
            else 
                return r
        })

        return updatedReview
    }
}