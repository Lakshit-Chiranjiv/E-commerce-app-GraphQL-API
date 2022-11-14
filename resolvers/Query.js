
export const Query = {
    name: () => {
        return "Lakshit Chiranjiv Sagar"
    },

    age: () => {
        return 21
    },

    balance: () => {
        return 9999999.99999
    },

    isBest: () => true,

    roll: () => {
        return 586
    },
    
    scores: () => [90,99,98],

    products: (parent,{filter},{productsData, reviewsData}) => {
        let filteredProducts = productsData
        if(filter){
            const { onSale, avgRating } = filter
            if(onSale)
                filteredProducts = productsData.filter(p => p.onSale)
            else
                filteredProducts = productsData.filter(p => !p.onSale)  

            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter(p => {
                    let sumRating = 0, reviewCount = 0
                
                    reviewsData.forEach(r => {
                        if(r.productId === p.id){
                            sumRating += r.rating
                            reviewCount++
                        }
                    })
                    const avgProductRating = Math.floor(sumRating/reviewCount)

                    return avgProductRating===avgRating
                })
            }
        }
        return filteredProducts
    },
    
    product: (parent,{id},{productsData}) => {
        return productsData.find(p => p.id===id)
    },
    
    categories: (parent,args,{categoriesData}) => categoriesData,
    
    category: (parent,{id},{categoriesData}) => {
        return categoriesData.find(c => c.id === id)
    }
}