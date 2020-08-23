const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
    {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },

    {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
    {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
];
for (let i = 0; i < cmds.length; i++) {
    if (cmds[i].shape == 'square') {
        penup();
        rt(90);
        fd(cmds[i].x);
        rt(270);
        fd(cmds[i].y)
        pendown();
        for (let j = 0; j < 4; j++) {
            fd(cmds[i].width);
            rt(90);
        }
        home();
    } else if (cmds[i].shape == 'rect') {
        penup();
        rt(90);
        fd(cmds[i].x);
        rt(270);
        fd(cmds[i].y)
        pendown();
        for (let j = 0; j < 2; j++) {
            fd(cmds[i].height);
            rt(90);
            fd(cmds[i].width);
            rt(90);
        }
        home();
    } else {
        penup();
        rt(90);
        fd(cmds[i].x);
        rt(270);
        fd(cmds[i].y-cmds[i].radius);
        pendown();
        let width = (2 * Math.PI * cmds[i].radius) / 1000
        lt(90);
        for (let i = 0; i < 1000; i++) {
            fd(width);
            rt(180 - 998 * 180 / 1000);
        }
    }
}
