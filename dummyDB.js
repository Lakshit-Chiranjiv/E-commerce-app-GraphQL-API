export const productsData = [
    {
        id: "pid1",
        name: 'Laptop',
        description: 'Good laptop',
        price: 4885.23,
        quantity: 30,
        onSale: true,
        categoryId: "cid1"
    },
    {
        id: "pid2",
        name: 'Smartphone',
        description: 'Good smartphone',
        price: 387.23,
        quantity: 50,
        onSale: true,
        categoryId: "cid1"
    },
    {
        id: "pid3",
        name: 'Umbrella',
        description: 'Good umbrella',
        price: 45.73,
        quantity: 10,
        onSale: true,
        categoryId: "cid3"
    },
    {
        id: "pid4",
        name: 'Notebook',
        description: 'Good notebook',
        price: 12.55,
        quantity: 110,
        onSale: false,
        categoryId: "cid2"
    }
]

export const categoriesData = [
    {
        id: 'cid1',
        name: 'Electronics'
    },
    {
        id: 'cid2',
        name: 'Stationary'
    },
    {
        id: 'cid3',
        name: 'Accessories'
    }
]

export const reviewsData = [
    {
        id: "rid1",
        title: "Great product",
        comment: "This product has really been very much helpful",
        rating: 4,
        date: "07-11-2022",
        productId: "pid2"
    },
    {
        id: "rid2",
        title: "Not so cool",
        comment: "Was quite good, but over the time it really pissed me off",
        rating: 2,
        date: "18-09-2022",
        productId: "pid3"
    },
    {
        id: "rid3",
        title: "Up to the mark",
        comment: "Won't say very good, but it was up to the expectations",
        rating: 3,
        date: "02-05-2021",
        productId: "pid4"
    },
    {
        id: "rid4",
        title: "Awesome",
        comment: "Its really awesome and wonderful",
        rating: 5,
        date: "26-04-2021",
        productId: "pid1"
    },
    {
        id: "rid5",
        title: "Total waste",
        comment: "It was really a waste of time and money, really disappointed",
        rating: 1,
        date: "12-10-2020",
        productId: "pid2"
    },
    {
        id: "rid6",
        title: "Nice one",
        comment: "Bit of queries but still it was useful and good",
        rating: 4,
        date: "17-09-2021",
        productId: "pid1"
    },
    {
        id: "rid7",
        title: "Too bad",
        comment: "It was already a broken one, so bad service",
        rating: 1,
        date: "11-07-2022",
        productId: "pid3"
    },
]
