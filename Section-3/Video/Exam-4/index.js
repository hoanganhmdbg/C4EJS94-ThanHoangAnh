
while(true){
    let name = prompt("Register an username");
    if(name.length > 15){
        alert("Your user name is too long");
    }else{
        alert("Good username");
        break;
    }
}