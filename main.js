canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
ctx.beginpath();
ctx.strokestyle = "red";
ctx.linewidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "black";
ctx.linewidth = 5;
ctx.arc(210, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = "blue";
ctx.linewidth = 5;
ctx.arc(330, 210, 40, 0, 2 * Math.PI);
ctx.stroke();