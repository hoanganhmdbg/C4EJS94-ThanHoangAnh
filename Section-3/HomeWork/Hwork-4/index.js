
let noty;
let items = ['Jeans', 'T-Shirt', 'Socks'];
while(true){
    noty = prompt("Hi there, welcome to shop admin panel, What do you want(C, R, U, D)");
    if(noty == "r"){
        let str = "The current items are :\n";
        for (let index = 0; index < items.length; index++) {
            str +=` ${index + 1} : ${items[index]} \n`; 
        }
        alert(str);
    }else if(noty == "c"){
        let newItem = prompt("Enter the name of new item");
        items.push(newItem);
        alert("Done");
    }else if(noty == "u"){
        let index = Number(prompt("Enter position you want to update"));
        let updateItem = prompt("Enter the new name");
        items[index-1] = updateItem;
        alert("Done");
    }else if(noty == "d"){
        let index = Number(prompt("Enter the position you want to update"));
        items.splice((index-1),1);
        alert("Done");
    }else{
        alert("This command is not supported");
    }
}