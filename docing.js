  // Select the canvas element
function fillcircle(ctx, x,y, radius, color = "black"){
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2, false);
  ctx.fillStyle = "#866BF0";
  ctx.fill();

}
let start;

function step(timestamp){
 if (start === undefined) {
  start = timestamp;
 }
  const elapsed = timestamp - start;
  start = timestamp;
  
  console.log(elapsed);
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
  const canvas = document.getElementById("game");
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d"); // Get the 2D drawing context

  // Draw a rectangle
  ctx.fillStyle = "#54B5CD";
  ctx.fillRect(50, 50, 150, 100);

  // Draw a circle
  fillcircle(ctx, width / 2, height / 2, 50, "black")
  
  // Draw text
  ctx.font = "20px Arial";
  ctx.fillStyle = "indigo";
  ctx.fillText("Hello Canvas!", 200, 300);