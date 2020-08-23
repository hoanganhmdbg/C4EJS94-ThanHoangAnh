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
products[0].providers = ['Phu kien zero','Dientuccc'];
products[1].providers = ['tgdd','ddghn','vhstore'];
products[2].providers = ['tgdd'];
products[3].providers = ['tgdd'];
let provid = prompt("Enter provider?");
for (let index = 0; index < products.length; index++) {
    for (let i = 0; i < products[index].providers.length; i++) {
        if(products[index].providers[i] == provid){
            console.log("-----------------------");
            console.log(`Name : ${products[index].name}`);
            console.log(`brand : ${products[index].brand}`);
            console.log(`Price : ${products[index].price}`);
            console.log(`Color : ${products[index].color}`);
            console.log(`Category : ${products[index].category}`);
            console.log(`providers : ${products[index].providers}`);
            break;
        }
        
    }
    
}