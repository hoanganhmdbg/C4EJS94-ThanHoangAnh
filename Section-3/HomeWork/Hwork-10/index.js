let names = prompt("Enter a sequence of names");
let arr = names.split(",");
let arr1 = arr.map(x => "<" + x + ">");
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