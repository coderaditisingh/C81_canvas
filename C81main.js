var canvas=document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color="purple";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth =4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
console.log(color);
mouse_X=e.clientX - canvas.offsetLeft;
mouse_Y=e.clientY - canvas.offsetTop;
console.log("X= "+ mouse_X +" Y= "+ mouse_Y);
circle(mouse_X, mouse_Y);
}
function circle(mouse_X, mouse_Y)
{
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth =4;
ctx.arc(mouse_X,mouse_Y, 40,0,2*Math.PI);
ctx.stroke();
}
function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}