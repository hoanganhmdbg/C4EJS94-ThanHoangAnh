let apromise = new Promise((resolve,reject) => {
    setTimeout(() => resolve('promise is da best'), 5000);
});
// apromise.then(
//     msg => alert(msg)
// );
apromise.then(alert);