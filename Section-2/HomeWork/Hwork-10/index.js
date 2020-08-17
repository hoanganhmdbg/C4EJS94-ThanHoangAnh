let weight = prompt("Your weight in kg?");
let height = prompt("Your height in cm");
let bmi = weight*10000/(height*height);
if(bmi < 16){
    alert("Your BMI is " + bmi.toFixed(1));
    alert("you are Serverely underweight");
}else if(bmi >=16 && bmi <18.5){
    alert("Your BMI is " + bmi.toFixed(1));
    alert("you are Underweight");
}else if(bmi >= 18.5 && bmi < 25){
    alert("Your BMI is " + bmi.toFixed(1));
    alert("you are Serverely Normal");
}else if(bmi >=25 && bmi <30){
    alert("Your BMI is " + bmi.toFixed(1));
    alert("you are Overweight");
}else{
    alert("Your BMI is " + bmi.toFixed(1));
    alert("you are Obese");
}