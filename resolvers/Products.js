
export const Product = {
    category: (parent,args,context) => {
        const { categoriesData } = context
        const { categoryId } = parent
        return categoriesData.find(c => c.id===categoryId)
    }
}