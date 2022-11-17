
export const Mutation = {
    addCategory: (parent, { input }, { categoriesData }) => {
        const { name } = input

        const newCategory = {
            id: "cid"+(categoriesData.length+1),
            name
        }

        categoriesData.push(newCategory)

        return newCategory
    }
}