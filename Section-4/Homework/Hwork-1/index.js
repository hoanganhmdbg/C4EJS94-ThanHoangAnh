const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
    };
    for (let x in product) {
    console.log(x);
    }
    console.log("What does x receives from product, property or value?");
    console.log("x is property")
    console.log("Use the for loop to print/log out the following output");
    for (let x in product) {
        console.log(`${x}: ${product[x]}`);
        }