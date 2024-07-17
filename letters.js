const width = 200;
const height = 300;

setDocDimensions(width, height);

function drawLetter(letter, x, y, size) {
  if (letter == 'A') {
    let w = x + size * 0.5;
    let h = y + size;

    let polyline_0 = [
      [x, y],
      [w / 2, h]
    ];
    let polyline_1 = [
      [w / 2, h],
      [w, y]
    ];
    let polyline_2 = [bt.bounds([polyline_0]).cc, bt.bounds([polyline_1]).cc];

    let polylines = [polyline_0, polyline_1, polyline_2];
    drawLines(polylines);

  } else if (letter == 'B') {
    let w = x + size * 0.5;
    let h = y + size;

    let polyline_0 = [
      [x, y],
      [x, h]
    ];
    let polyline_1 = [
      [x, h],
      [w, h],
      [w, h /2],
      [x, h / 2]
    ];
    let polyline_2 = [
      [x, h/2],
      [w, h/2],
      [w, y],
      [x, y]
    ];
    let polyline_3 = bt.nurbs(polyline_1)
    let polyline_4 = bt.nurbs(polyline_2)


    let polylines = [polyline_0, polyline_3, polyline_4];
    drawLines(polylines);
  }
}

drawLetter('A', 0, 0, 90);
drawLetter('B', 50, 0, 90);
