let num = parseInt(prompt("Enter the total number of 1's nad 0's?"));
console.log(num + " 1's and 0's in total");
for (let index = 1; index <= num; index++) {
    if(index % 2 == 1){
        console.log("0\n");
    }else{
        console.log("1\n");
    }
    
}