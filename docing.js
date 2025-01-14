  // Select the canvas element
function fillcircle(ctx, x,y, radius, color = "black"){
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "#866BF0";
    ctx.fill();

}
      const canvas = document.getElementById("game");
      const width = canvas.width;
      const height = canvas.height;
      const ctx = canvas.getContext("2d"); // Get the  2D drawing context

  let start;
  let radius = 100;
  let x = width /2
  let y = height /2
  let dx = 100
  let dy = 100  

    function step(timestamp){
        if (start === undefined) {
            start = timestamp;
 }
    const dt = (timestamp - start)/1000;
      start = timestamp;

  if (x + radius >= width || x - radius <= 0) dx = -dx;
  if (y + radius >= height || y - radius <= 0) dy = -dy;
  
  x += dx * dt;
  y += dy * dt;



  ctx.clearRect(0, 0, width, height);

  fillcircle(ctx, x,  y, 70, "btellack")      
    window.requestAnimationFrame(step);
}
          window.requestAnimationFrame(step);
  

    // Draw a rectangle
      ctx.fillStyle = "#54B5CD";
      ctx.fillRect(50, 50, 150, 100);

    // Draw a circle
      fillcircle(ctx, x,  y, 70, "black")
    
    