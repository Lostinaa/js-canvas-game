  // Select the canvas element
function fillcircle(ctx,x,y, radius)
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

  // Draw text
  ctx.font = "20px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("Hello Canvas!", 200, 300);