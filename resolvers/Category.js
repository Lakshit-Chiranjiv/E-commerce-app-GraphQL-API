
export const Category = {
    products: (parent,args,context) => {
        const { productsData } = context
        const { id } = parent

        return productsData.filter(p => p.categoryId===id)
    }
}