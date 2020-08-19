let numbers = prompt("Enter a sequence number");
let arr = numbers.split(",");
let arr1 = arr.filter(x => x %2 == 1);
let str = "";
for (let index = 0; index < arr.length; index++) {
    if (index == (arr.length - 1)) {
        str += arr[index];
    } else {
        str += arr[index] + ", ";
    }
}
str += " => ";
for (let index = 0; index < arr1.length; index++) {
    if (index == (arr1.length - 1)) {
        str += arr1[index];
    } else {
        str += arr1[index] + ", ";
    }

}
alert(str);