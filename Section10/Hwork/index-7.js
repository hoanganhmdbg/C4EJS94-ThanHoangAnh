async function getData(){
    const conn = await fetch('http://quotes.rest/qod.json');
    const data = await conn.json();
    print(data);
}
getData();
//
function print(data){
    console.log(data);
    console.log(data.contents.quotes[0]);
    document.getElementById('quote').innerHTML = data.contents.quotes[0].quote;
    document.getElementById('author').innerHTML = data.contents.quotes[0].author;
}