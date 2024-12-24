  // Select the canvas element
function fillcircle(x,y, radius, color = "green"){
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2, false);
  ctx.fillStyle = "green";
  ctx.fill();

}
  const canvas = document.getElementById("game");
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d"); // Get the 2D drawing context

  // Draw a rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, 150, 100);

  // Draw a circle
  ctx.beginPath();
  ctx.arc(300, 150, 50, 0, Math.PI * 2, false);
  ctx.fillStyle = "red";
  ctx.fill();
  fillcircle(width / 2, height / 2, 50, "green")
  // Draw text
  ctx.font = "20px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("Hello Canvas!", 200, 300);