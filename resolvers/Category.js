
export const Category = {
    products: (parent,args,context) => {
        const { productsData } = context
        const { id } = parent
        const { filter } = args

        const categoryProducts = productsData.filter(p => p.categoryId===id)
        let filteredCategoryProducts = categoryProducts
        if(filter){
            if(filter.onSale)
                filteredCategoryProducts = filteredCategoryProducts.filter(p => p.onSale)
            else
                filteredCategoryProducts = filteredCategoryProducts.filter(p => !p.onSale)  
        }
        return filteredCategoryProducts

    }
}