
function randomQuote() {
    let a = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[a].quoteText;
    document.getElementById('author').innerHTML = quotes[a].quoteAuthor;
}
randomQuote();