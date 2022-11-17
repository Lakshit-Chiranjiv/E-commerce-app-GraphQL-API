
export const Mutation = {
    addCategory: (parent, { input }, { categoriesData }) => {
        const { name } = input

        const newCategory = {
            id: "cid"+categoriesData.length,
            name
        }

        categoriesData.push(newCategory)

        return newCategory
    }
}