clear();
const circle = {
shape: 'circle',
x: 100,
y: 50,
radius: 30,
};
penup();
rt(90);
fd(circle.x);
rt(270);
fd(circle.y-circle.radius);
pendown();
let width = (2 * Math.PI * circle.radius) / 1000
lt(90);
for(let i = 0;i < 1000; i ++){
	fd(width);
  	rt(180-998*180/1000);
}