let arr = ['Batman','Up','Attack on titans','My boss mu hero'];
for (let index = 0; index < arr.length; index++) {
    console.log( arr[index]);
}
console.log('');
for (let index = 0; index < arr.length/2; index++) {
    console.log(arr[index]);
}
console.log('');
for (let index = 0; index < arr.length; index++) {
    console.log(`${index+1}.` + arr[index]);
}