
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 700,
   debug:true
  //debug:false
});

var colorlist = [
new Rune.Color('hsv', 222, 35, 30),
new Rune.Color('hsv', 21, 65, 82),
new Rune.Color('hsv', 34, 51, 83),
new Rune.Color('hsv', 197, 31, 64),
new Rune.Color('hsv', 4, 77, 77),
new Rune.Color('hsv', 50, 8, 29),
new Rune.Color('hsv', 7, 59, 84),
new Rune.Color('hsv', 156, 28, 54),
new Rune.Color('hsv', 33, 8, 54),
new Rune.Color('hsv', 244, 20, 31),
new Rune.Color('hsv', 178, 26, 58),
new Rune.Color('hsv', 14, 67, 82),
new Rune.Color('hsv', 42, 11, 85),
new Rune.Color('hsv', 206, 57, 53),
new Rune.Color('hsv', 10, 27, 78)
]

function randomColor(){
var index = Math.round(Rune.random(colorlist.length-1));
return colorlist[index];


}

// draw background
r.rect(0, 0, r.width, r.height).fill(30);

for(var degree = 0; degree <= 360; degree += 20) {
  
  var x = Math.cos(Rune.radians(degree)) * 140;
  var y = Math.sin(Rune.radians(degree)) * 165;

  var rectHeight = y/2.5;

  x += r.width/4;
  y += r.height/2;

  r.polygon(x, y)
    .lineTo(Rune.random(50, 80), Rune.random(0, 5))
    .lineTo(Rune.random(110,125), 10)
    .lineTo(180,rectHeight)
    .lineTo(100, rectHeight)
    .fill(randomColor())
    .stroke(200)
    .rotate(Rune.random(10, 20), 100, 450)
  //r.rect(x, y, 100, 50).fill(255)
}


r.draw();