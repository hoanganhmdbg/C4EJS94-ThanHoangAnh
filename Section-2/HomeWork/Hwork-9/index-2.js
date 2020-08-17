let num = parseInt(prompt("Enter the total number of L's and H's?"));
console.log( num +" L’s and H’s in total");
for (let index = 1; index <= num; index++) {
    if(index % 2 == 1){
        console.log("L");
    }
}
for (let index = 1; index <= num; index++) {
    if(index % 2 == 0){
        console.log("H");
    }
}