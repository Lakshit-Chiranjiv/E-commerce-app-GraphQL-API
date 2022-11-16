
export const Category = {
    products: (parent,args,context) => {
        const { productsData,reviewsData } = context
        const { id } = parent
        const { filter } = args

        const categoryProducts = productsData.filter(p => p.categoryId===id)
        let filteredCategoryProducts = categoryProducts
        if(filter){
            if(filter.onSale)
                filteredCategoryProducts = filteredCategoryProducts.filter(p => p.onSale)
            else if(filter.onSale === false)
                filteredCategoryProducts = filteredCategoryProducts.filter(p => !p.onSale) 
                
            if([1,2,3,4,5].includes(filter.avgRating)){
                filteredCategoryProducts = filteredCategoryProducts.filter(p => {
                    let sumRating = 0, reviewCount = 0
                
                    reviewsData.forEach(r => {
                        if(r.productId === p.id){
                            sumRating += r.rating
                            reviewCount++
                        }
                    })
                    const avgProductRating = Math.floor(sumRating/reviewCount)

                    return avgProductRating===filter.avgRating
                })
            }
        }
        return filteredCategoryProducts

    }
}