const START_X = 20
const START_Y = 250
const LETTER_WIDTH = 12
const LETTER_HEIGHT = 22
const LETTER_GAP = 2
const TEXT = "A AAA A"

// - - - - - - - - - - 

const width = 200;
const height = 300;
setDocDimensions(width, height);

function drawLetter(letter, x, y, w, h) {
  let t = y + h;
  let b = y;
  let l = x;
  let r = x + w;

  let bl = [x, y];
  let br = [x + w, y];
  let tl = [x, y + h];
  let tr = [x + w, y + h];

  if (letter == 'A') {
    let line_0 = [
      bl,
      [l + w / 2, t]
    ];
    let line_1 = [
      [l + w / 2, t],
      br
    ];
    let line_2 = [bt.bounds([line_0]).cc, bt.bounds([line_1]).cc];

    let lines = [line_0, line_1, line_2];
    drawLines(lines);

  } else if (letter == 'B') {
    let line_0 = [
      [x, y],
      [x, h]
    ];
    let line_1 = [
      [x, h],
      [w, h],
      [w, h / 2],
      [x, h / 2]
    ];
    let line_2 = [
      [x, h / 2],
      [w, h / 2],
      [w, y],
      [x, y]
    ];
    let line_3 = bt.nurbs(line_1);
    let line_4 = bt.nurbs(line_2);

    let lines = [line_0, line_3, line_4];
    drawLines(lines);
  } else if (letter == 'C') {
    let line_0 = [
      [w, h],
      [x, h],
      [x, y],
      [w, y]
    ];

    let line_1 = bt.nurbs(line_0);

    let lines = [line_1];
    drawLines(lines);
  } else if (letter == 'D') {
    let line_0 = [
      [x, y],
      [x, h]
    ];
    let line_1 = [
      [x, h],
      [w, h],
      [w, y],
      [x, y]
    ];
    let line_2 = bt.nurbs(line_1);

    let lines = [line_0, line_2];
    drawLines(lines);
  } else if (letter == 'E') {
    let line_0 = [
      [x, y],
      [x, h]
    ];
    let line_1 = [
      [x, h],
      [w, h]
    ];
    let line_2 = [
      [x, h / 2],
      [w, h / 2]
    ];
    let line_3 = [
      [x, y],
      [w, y]
    ];

    let lines = [line_0, line_1, line_2, line_3];
    drawLines(lines);
  } else if (letter == 'F') {
    let line_0 = [
      [x, y],
      [x, h]
    ];
    let line_1 = [
      [x, h],
      [w, h]
    ];
    let line_2 = [
      [x, h / 2],
      [w, h / 2]
    ];
    let line_3 = [
      [x, y],
      [w, y]
    ];

    let lines = [line_0, line_1, line_2];
    drawLines(lines);
  } else if (letter == 'G') {
    let line_0 = [
      [w, h],
      [x, h],
      [x, y],
      [w, y]
    ];
    let line_1 = [
      [w, y],
      [w, h / 2],
      [x + (w - x) / 2, h / 2]
    ];
    let line_2 = bt.nurbs(line_0);

    let lines = [line_1, line_2];
    drawLines(lines);
  }
}

let splitText = TEXT.split("")
for (let i = 0; i < splitText.length; i++) {
  drawLetter(splitText[i], START_X + i * (LETTER_WIDTH + LETTER_GAP), START_Y, LETTER_WIDTH, LETTER_HEIGHT);
}
