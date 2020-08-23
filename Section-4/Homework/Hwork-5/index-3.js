let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'while',
        category: 'charger',
    },
    {
        name: 'VSmart active 1',
        brand: 'Vsmart',
        price: 5438,
        color: 'black',
        category: 'phone',
    },
    {
        name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'gray',
        category: 'phone',
    },
    {
        name: 'SamSung Galaxy A9',
        brand: 'SamSung',
        price: 8490,
        category: 'phone',
    },
];
console.log("printing/logging out the products based on category");
let cate = prompt("Enter your category?");
for (let index = 0; index < products.length; index++) {
    if (products[index].category == cate) {
        console.log("----------------");
        console.log(`Name : ${products[index].name}`);
        console.log(`Price : ${products[index].price}`);
    }
}