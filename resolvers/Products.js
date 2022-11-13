
export const Product = {
    category: (parent,args,context) => {
        const { categoriesData } = context
        const { categoryId } = parent
        return categoriesData.find(c => c.id===categoryId)
    },

    reviews: (parent,args,context) => {
        const { reviewsData } = context
        const { id } = parent
        return reviewsData.filter(r => r.productId===id)
    }
}