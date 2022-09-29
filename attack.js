window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-199423898-1');
$(document).ready(function () {
  $("body").click(function(event) {
      window.open("#!","_self");
  });	
  $('body').keydown(function(e) {
      if((e.which == 27) || (e.which == 13)) {	// Enter Esc
          window.open("#!","_self");
      }		
  });
});
var message = "Right-click disabled"; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown = clickNS;} 
else{document.onmouseup = clickNS;document.oncontextmenu = clickIE;} 
document.oncontextmenu = new Function("return false");
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var chinese = "01";
chinese = chinese.split("");
var font_size = 16;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
  drops[x] = 1; 
function draw()
{
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);
  
  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for(var i = 0; i < drops.length; i++)
  {
      //a random chinese character to print
      var text = chinese[Math.floor(Math.random()*chinese.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);
      
      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
      
      //incrementing Y coordinate
      drops[i]++;
  }
}

setInterval(draw, 33);

