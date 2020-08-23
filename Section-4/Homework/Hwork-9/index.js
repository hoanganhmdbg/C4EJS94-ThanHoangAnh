const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};
penup();
rt(90);
fd(rect.x);
rt(270);
fd(rect.y)
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.height);
  rt(90);
  fd(rect.width);
  rt(90);
}