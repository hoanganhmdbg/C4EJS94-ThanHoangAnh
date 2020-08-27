let lwords = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life',
 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
 let count = {};
 for(let a of lwords){
    let word = a;
    if(count[word]){
        count[word]++;
    }else{
        count[word] = 1;
    }
 }
 console.log(count);