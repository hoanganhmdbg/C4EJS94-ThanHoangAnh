let poly = parseInt(prompt("How many polygons?"));
for (let index = 0; index < 5; index++) {
    let corner = (3+index-2)*180/(3+index);
    for (let index1 = 0; index1 < 3 + index; index1++) {
        fd(100);
        rt(180-corner);
    }
    
}