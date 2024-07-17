const START_X = 0
const START_Y = 250
const LETTER_WIDTH = 5
const LETTER_HEIGHT = 10
const LETTER_GAP = 1
const TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
      bl,
      tl
    ];
    let line_1 = [
      tl,
      tr,
      [r, t - h / 2],
      [l, t - h / 2]
    ];
    let line_2 = [
      [l, t - h / 2],
      [r, t - h / 2],
      br,
      bl
    ];
    let line_3 = bt.nurbs(line_1);
    let line_4 = bt.nurbs(line_2);

    let lines = [line_0, line_3, line_4];
    drawLines(lines);
  } else if (letter == 'C') {
    let line_0 = [
      tr,
      tl,
      bl,
      br
    ];

    let line_1 = bt.nurbs(line_0);

    let lines = [line_1];
    drawLines(lines);
  } else if (letter == 'D') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      tl,
      tr,
      br,
      bl
    ];
    let line_2 = bt.nurbs(line_1);

    let lines = [line_0, line_2];
    drawLines(lines);
  } else if (letter == 'E') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      tl,
      tr
    ];
    let line_2 = [
      [r, t - h / 2],
      [l, t - h / 2]
    ];
    let line_3 = [
      bl,
      br
    ];

    let lines = [line_0, line_1, line_2, line_3];
    drawLines(lines);
  } else if (letter == 'F') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      tl,
      tr
    ];
    let line_2 = [
      [r, t - h / 2],
      [l, t - h / 2]
    ];

    let lines = [line_0, line_1, line_2];
    drawLines(lines);
  } else if (letter == 'G') {
    let line_0 = [
      tr,
      tl,
      bl,
      br
    ];
    let line_1 = [
      br,
      [r, t - h / 2],
      [r - w / 2, t - h / 2]
    ];
    let line_2 = bt.nurbs(line_0);

    let lines = [line_1, line_2];
    drawLines(lines);
  } else if (letter == 'H') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      [l, t - h / 2],
      [r, t - h / 2],
    ];
    let line_2 = [
      tr,
      br
    ];
    let lines = [line_0, line_1, line_2];
    drawLines(lines);
  } else if (letter == 'I') {
    let line_0 = [
      [r - w / 2, t],
      [r - w / 2, b],
    ];
    let line_1 = [
      [l + w / 4, t],
      [r - w / 4, t],
    ];
    let line_2 = [
      [l + w / 4, b],
      [r - w / 4, b],
    ];
    let lines = [line_0, line_1, line_2];
    drawLines(lines);
  } else if (letter == 'J') {
    let line_0 = [
      [r, t],
      [r, b + h / 4],
    ];
    let line_1 = [
      [r, b + h / 4],
      br,
      bl,
      [l, b + h / 6]
    ];
    let line_2 = [
      [r - w / 4, t],
      tr,
    ];
    let line_3 = bt.nurbs(line_1);
    let lines = [line_0, line_2, line_3];
    drawLines(lines);
  } else if (letter == 'K') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      [l, t - h / 2],
      tr
    ];
    let line_2 = [
      [l, t - h / 2],
      br
    ];
    let lines = [line_0, line_1, line_2];
    drawLines(lines);
  } else if (letter == 'L') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      bl,
      br
    ];

    let lines = [line_0, line_1];
    drawLines(lines);
  } else if (letter == 'M') {
    let line_0 = [
      bl,
      tl,
      [r - w / 2, t - h / 2],
      tr,
      br
    ];

    let lines = [line_0];
    drawLines(lines);
  } else if (letter == 'N') {
    let line_0 = [
      bl,
      tl,
      br,
      tr
    ];

    let lines = [line_0];
    drawLines(lines);
  } else if (letter == 'O') {
    let line_0 = [
      tr,
      tl,
      bl,
      br,
      tr
    ];
    let line_1 = bt.nurbs(line_0);
    let lines = [line_1];
    drawLines(lines);
  } else if (letter == 'P') {
    let line_0 = [
      bl,
      tl
    ];
    let line_1 = [
      tl,
      tr,
      [r, t - h / 2],
      [l, t - h / 2]
    ];

    let line_2 = bt.nurbs(line_1);

    let lines = [line_0, line_2];
    drawLines(lines);
  } else if (letter == 'Q') {
    let line_0 = [
      tr,
      tl,
      bl,
      br,
      tr
    ];
    let line_1 = [
      [r - w / 4, b + h / 8],
      br
    ];
    let line_2 = bt.nurbs(line_0);
    let lines = [line_1, line_2];
    drawLines(lines);
  } else if (letter == 'R') {
    let line_0 = [
      bl,
      tl
    ];
    let line_1 = [
      tl,
      tr,
      [r, t - h / 2],
      [l, t - h / 2]
    ];
    let line_2 = [
      [l, t - h / 2],
      br
    ];
    let line_3 = bt.nurbs(line_1);

    let lines = [line_0, line_2, line_3];
    drawLines(lines);
  } else if (letter == 'S') {
    let line_0 = [
      tr,
      tl,
      [l, t - h / 3],
      [r, b + h / 3],
      br,
      bl
    ];
    let line_1 = bt.nurbs(line_0);

    let lines = [line_1];
    drawLines(lines);
  }

}

let splitText = TEXT.split("")
for (let i = 0; i < splitText.length; i++) {
  drawLetter(splitText[i], START_X + i * (LETTER_WIDTH + LETTER_GAP), START_Y, LETTER_WIDTH, LETTER_HEIGHT);
}
