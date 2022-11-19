
export const Product = {
    category: (parent,args,context) => {
        const { db } = context
        const { categoryId } = parent
        return db.categoriesData.find(c => c.id===categoryId)
    },

    reviews: (parent,args,context) => {
        const { db } = context
        const { id } = parent
        return db.reviewsData.filter(r => r.productId===id)
    }
}