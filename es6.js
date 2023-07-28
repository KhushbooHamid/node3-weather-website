// const name = 'khushi'
// const userAge = 22

// const user = {
//     name,
//     age: userAge,
//     location: 'srinagar'
// }

// console.log(user)

//obj destructuring
const product={
    label: 'red notes',
    price: 3,
    stock: 211,
    salePrice: undefined
}

// const label=product.label
// const stock = product.stock
const {label: Plabel, stock} = product // we renamed variable label to plabel and we can now only access it using plabel
console.log(Plabel)
console.log(stock)

