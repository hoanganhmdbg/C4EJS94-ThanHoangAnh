const fetchPromist = fetch(`https://tobitheme.net/api/qod.json`);
fetchPromist.then(connection => {
    console.log('connection');
    console.log(connection);
    const jsonPromise = connection.json();
    show(jsonPromise);
});
function show(jsonPromise){
    console.log(jsonPromise);
}