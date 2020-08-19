const arr = [3, 4, 6, -9, 10, -88, 2];
let num = Number(prompt("Enter a number"));
let found = false;
for (let index = 0; index < arr.length; index++) {
    if(num == arr[index]){
        alert(num + " is found in my array at index " + index);
        found = true;
        break;
    }
}
if(!found){
    alert(num + " is NOT found in my array");
}