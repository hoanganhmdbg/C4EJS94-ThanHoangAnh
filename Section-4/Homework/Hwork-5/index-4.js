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
products[1].providers = ['Tgdd','ddghn','vhstore'];
products[2].providers = ['tgdd'];
products[3].providers = ['tgdd'];
for (let index = 0; index < products.length; index++) {
    console.log(`#${index+1}. ${products[index].name}`);
    console.log(`Price: ${products[index].price}`);
    console.log(`Providers: ${products[index].providers}`)
}