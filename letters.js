// available characters:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!.,abcdefghijklmnopqrstuvwxyz

const TEXT = "Hello World!";
const FONT_SIZE = 12; // pt

const SIDE_MARGIN = 5; // mm
const TOP_MARGIN = 5; // mm

const DOC_WIDTH = 125; // mm
const DOC_HEIGHT = 125; // mm

const PAGE_WIDTH = 74; // mm
const PAGE_HEIGHT = 105; // mm

// - - - - - - - - - -

let page_start;

setDocDimensions(DOC_WIDTH, DOC_HEIGHT);
drawPage(PAGE_WIDTH, PAGE_HEIGHT, DOC_WIDTH, DOC_HEIGHT);
drawText(TEXT, FONT_SIZE, SIDE_MARGIN, TOP_MARGIN, PAGE_WIDTH);

function drawPage(w, h, dw, dh) {
  const sq = new bt.Turtle();
  for (let i = 0; i < 4; i++) sq.forward(1).right(90);
  const page = bt.scale(sq.lines(), [w, h]);
  bt.translate(page, [dw / 2, dh / 2], bt.bounds(page).cc);
  page_start = bt.bounds(page).lt;
  drawLines(page);
}

function drawText(input, fs, sm, tm, w) {
  let letter_height = fs / 72 * 25.4;
  let letter_width = letter_height * 0.5;
  let x = page_start[0] + sm;
  let y = page_start[1] - letter_height - tm;
  let splitText = input.split(" ");
  for (let i = 0; i < splitText.length; i++) {
    drawWord(splitText[i], letter_height, letter_width, x, y, fs, sm, w);
  }
}

function drawWord(input, lh, lw, x, y, fs, sm, w) {
  let splitText = input.split("");
  for (let i = 0; i < splitText.length; i++) {
    drawChar(splitText[i], x, y, lw, lh);
    x = x + lw + fs / 24;
    if ((x > page_start[0] + w - sm) && (splitText[i + 1] != ' ')) {
      y = y - lh * 1.5 - fs / 12;
      x = page_start[0] + sm;
    }
  }
}

function drawChar(letter, x, y, w, h) {
  let t = y + h;
  let b = y;
  let l = x;
  let r = x + w;

  let bl = [x, y];
  let br = [x + w, y];
  let tl = [x, y + h];
  let tr = [x + w, y + h];

  let lines;

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
    lines = [line_0, line_1, line_2];
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
    lines = [line_0, line_3, line_4];
  } else if (letter == 'C') {
    let line_0 = [
      tr,
      tl,
      bl,
      br
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
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
    lines = [line_0, line_2];
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
    lines = [line_0, line_1, line_2, line_3];
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
    lines = [line_0, line_1, line_2];
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
    lines = [line_1, line_2];
  } else if (letter == 'H') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      [l, t - h / 2],
      [r, t - h / 2]
    ];
    let line_2 = [
      tr,
      br
    ];
    lines = [line_0, line_1, line_2];
  } else if (letter == 'I') {
    let line_0 = [
      [r - w / 2, t],
      [r - w / 2, b]
    ];
    let line_1 = [
      [l + w / 4, t],
      [r - w / 4, t]
    ];
    let line_2 = [
      [l + w / 4, b],
      [r - w / 4, b]
    ];
    lines = [line_0, line_1, line_2];
  } else if (letter == 'J') {
    let line_0 = [
      [r, t],
      [r, b + h / 4]
    ];
    let line_1 = [
      [r, b + h / 4],
      br,
      bl,
      [l, b + h / 6]
    ];
    let line_2 = [
      [r - w / 4, t],
      tr
    ];
    let line_3 = bt.nurbs(line_1);
    lines = [line_0, line_2, line_3];
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
    lines = [line_0, line_1, line_2];
  } else if (letter == 'L') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      bl,
      br
    ];
    lines = [line_0, line_1];
  } else if (letter == 'M') {
    let line_0 = [
      bl,
      tl,
      [r - w / 2, t - h / 2],
      tr,
      br
    ];
    lines = [line_0];
  } else if (letter == 'N') {
    let line_0 = [
      bl,
      tl,
      br,
      tr
    ];
    lines = [line_0];
  } else if (letter == 'O') {
    let line_0 = [
      tr,
      tl,
      bl,
      br,
      tr
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
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
    lines = [line_0, line_2];
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
    lines = [line_1, line_2];
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
    lines = [line_0, line_2, line_3];
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
    lines = [line_1];
  } else if (letter == 'T') {
    let line_0 = [
      [r - w / 2, t],
      [r - w / 2, b]
    ];
    let line_1 = [
      tl,
      tr
    ];
    lines = [line_0, line_1];
  } else if (letter == 'U') {
    let line_0 = [
      tl,
      bl,
      br,
      tr
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == 'V') {
    let line_0 = [
      tl,
      [r - w / 2, b],
      tr
    ];
    lines = [line_0];
  } else if (letter == 'W') {
    let line_0 = [
      tl,
      [l + w / 6, b],
      [r - w / 2, t - h / 2],
      [r - w / 6, b],
      tr
    ];
    lines = [line_0];
  } else if (letter == 'X') {
    let line_0 = [
      tl,
      br
    ];
    let line_1 = [
      tr,
      bl
    ];
    lines = [line_0, line_1];
  } else if (letter == 'Y') {
    let line_0 = [
      tl,
      [r - w / 2, t - h / 2],
      tr
    ];
    let line_1 = [
      [r - w / 2, t - h / 2],
      [r - w / 2, b]
    ];
    lines = [line_0, line_1];
  } else if (letter == 'Z') {
    let line_0 = [
      tl,
      tr,
      bl,
      br
    ];
    lines = [line_0];
  } else if (letter == '1') {
    let line_0 = [
      [l + w / 6, t - w / 2],
      [r - w / 2, t],
      [r - w / 2, b]
    ];
    let line_1 = [
      [l + w / 6, b],
      [r - w / 6, b]
    ];
    lines = [line_0, line_1];
  } else if (letter == '2') {
    let line_0 = [
      [l, t - h / 6],
      tl,
      tr,
      [r, t - h / 2],
      bl
    ];
    let line_1 = [
      bl,
      br
    ];
    let line_2 = bt.nurbs(line_0);
    lines = [line_1, line_2];
  } else if (letter == '3') {
    let line_0 = [
      tl,
      tr,
      [r, t - h / 2],
      [l + w / 3, t - h / 2]
    ];
    let line_1 = [
      [l + w / 3, t - h / 2],
      [r, t - h / 2],
      br,
      bl
    ];
    let line_2 = bt.nurbs(line_0);
    let line_3 = bt.nurbs(line_1);
    lines = [line_2, line_3];
  } else if (letter == '4') {
    let line_0 = [
      [r, b + h / 3],
      [l, b + h / 3],
      [r - w / 3, t],
      [r - w / 3, b]
    ];
    lines = [line_0];
  } else if (letter == '5') {
    let line_0 = [
      tr,
      tl,
      [l, t - h / 2]

    ];
    let line_1 = [
      [l, t - h / 2],
      [r, t - h / 2],
      br,
      bl
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == '6') {
    let line_0 = [
      [r, t - h / 8],
      tr,
      tl,
      [l, t - h / 2],
      bl,
      br,
      [r, t - h / 2],
      [l, b + h / 2],
      [l, b + h / 3]
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == '7') {
    let line_0 = [
      tl,
      tr,
      bl
    ];
    lines = [line_0];
  } else if (letter == '8') {
    let line_0 = [
      tr,
      tl,
      [l, t - h / 2],
      [r, t - h / 2],
      br,
      bl,
      [l, t - h / 2],
      [r, t - h / 2],
      [r, t]
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == '9') {
    let line_0 = [
      [l, b + h / 8],
      bl,
      br,
      [r, b + h / 2],
      tr,
      tl,
      [l, b + h / 2],
      [r, t - h / 2],
      [r, t - h / 3]
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == '0') {
    let line_0 = [
      tr,
      tl,
      bl,
      br,
      tr
    ];
    let line_1 = [
      [r - w / 8, t - h / 8],
      [l + w / 8, b + h / 8]
    ];
    let line_2 = bt.nurbs(line_0);
    lines = [line_1, line_2];
  } else if (letter == '?') {
    let line_0 = [
      [l, t - h / 6],
      tl,
      tr,
      [r, t - h / 2],
      [r - w / 2, b + h / 3],
      [r - w / 2, b + h / 6]
    ];
    let line_1 = [
      [l + w / 2 + w / 16, b + h / 32],
      [l + w / 2, b],
      [r - w / 2 - w / 16, b + h / 32],
      [l + w / 2, b + h / 16],
      [l + w / 2 + w / 16, b + h / 32]
    ];
    let line_2 = bt.nurbs(line_0);
    let line_3 = bt.nurbs(line_1);
    lines = [line_2, line_3];
  } else if (letter == '!') {
    let line_0 = [
      [r - w / 2, t],
      [r - w / 2, b + h / 6]
    ];
    let line_1 = [
      [l + w / 2 + w / 16, b + h / 32],
      [l + w / 2, b],
      [r - w / 2 - w / 16, b + h / 32],
      [l + w / 2, b + h / 16],
      [l + w / 2 + w / 16, b + h / 32]
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == '.') {
    let line_0 = [
      [l + w / 2 + w / 16, b + h / 32],
      [l + w / 2, b],
      [r - w / 2 - w / 16, b + h / 32],
      [l + w / 2, b + h / 16],
      [l + w / 2 + w / 16, b + h / 32]
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == ',') {
    let line_0 = [
      [r - w / 2, b + h / 20],
      [l + w / 4, b - w / 4]
    ];
    lines = [line_0];
  } else if (letter == 'a') {
    let line_0 = [
      [l, t - h / 2],
      [l + w / 10, t - h / 2],
      [r, t - h / 2],
      [r, b + h / 10],
      br
    ];
    let line_1 = [
      [r, b + h / 4],
      [r, b + h / 3],
      [l, b + h / 3],
      bl,
      br,
      [r, b + h / 10]
    ];
    let line_2 = bt.nurbs(line_0);
    let line_3 = bt.nurbs(line_1);
    lines = [line_2, line_3];
  } else if (letter == 'b') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      [l, b + h / 3],
      [l, t - h / 2],
      [r, t - h / 2],
      br,
      bl,
      [l, b + h / 3]
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == 'c') {
    let line_0 = [
      [r, t - h / 2],
      [r - w / 10, t - h / 2],
      [l, t - h / 2],
      bl,
      [r - w / 10, b],
      br
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == 'd') {
    let line_0 = [
      tr,
      br
    ];
    let line_1 = [
      [r, b + h / 3],
      [r, t - h / 2],
      [l, t - h / 2],
      bl,
      br,
      [r, b + h / 3]
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == 'e') {
    let line_0 = [
      [l, b + h / 3],
      [r, b + h / 3]
    ];
    let line_1 = [
      [r, b + h / 3],
      [r, t - h / 2],
      [l, t - h / 2],
      bl,
      br,
      [r, b + h / 10]
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == 'f') {
    let line_0 = [
      [r - w / 2, b],
      [r - w / 2, t - h / 4],
      [r - w / 2, t],
      tr
    ];
    let line_1 = [
      [l + w / 10, t - h / 3],
      [r - w / 10, t - h / 3]
    ];
    let line_2 = bt.nurbs(line_0);
    lines = [line_1, line_2];
  } else if (letter == 'g') {
    let line_0 = [
      [r, b + h / 3],
      [r, t - h / 2],
      [l, t - h / 2],
      bl,
      br,
      [r, b + h / 3]
    ];
    let line_1 = [
      [l, b - h / 3],
      [l, b - h / 2],
      [r, b - h / 2],
      br,
      [r, b + h / 2]
    ];
    let line_2 = bt.nurbs(line_0);
    let line_3 = bt.nurbs(line_1);
    lines = [line_2, line_3];
  } else if (letter == 'h') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      bl,
      [l, b + h / 8],
      [l, t - h / 2],
      [r, t - h / 2],
      [r, b + h / 8],
      br
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == 'i') {
    let line_0 = [
      [r - w / 2, t - h / 2],
      [r - w / 2, b]
    ];
    let line_1 = [
      [l + w / 4, t - h / 2],
      [r - w / 2, t - h / 2]
    ];
    let line_2 = [
      [l + w / 4, b],
      [r - w / 4, b]
    ];
    let line_3 = [
      [l + w / 2 + w / 16, t - h / 3],
      [l + w / 2, t - h / 3 - h / 32],
      [r - w / 2 - w / 16, t - h / 3],
      [l + w / 2, t - h / 3 + h / 32],
      [l + w / 2 + w / 16, t - h / 3]
    ];
    let line_4 = bt.nurbs(line_3);
    lines = [line_0, line_1, line_2, line_4];
  } else if (letter == 'j') {
    let line_0 = [
      [r - w / 2, t - h / 2],
      [r - w / 2, b],
      [r - w / 2, b - h / 4],
      [l + w / 4, b - h / 4]
    ];
    let line_1 = [
      [l + w / 4, t - h / 2],
      [r - w / 2, t - h / 2]
    ];
    let line_2 = [
      [l + w / 2 + w / 16, t - h / 3],
      [l + w / 2, t - h / 3 - h / 32],
      [r - w / 2 - w / 16, t - h / 3],
      [l + w / 2, t - h / 3 + h / 32],
      [l + w / 2 + w / 16, t - h / 3]
    ];
    let line_3 = bt.nurbs(line_0);
    let line_4 = bt.nurbs(line_2);
    lines = [line_1, line_3, line_4];
  } else if (letter == 'k') {
    let line_0 = [
      tl,
      bl
    ];
    let line_1 = [
      [l, b + h / 4],
      [r, t - h / 2]
    ];
    let line_2 = [
      [l + w / 4, b + h / 4 + h / 16],
      br
    ];
    lines = [line_0, line_1, line_2];
  } else if (letter == 'l') {
    let line_0 = [
      [r - w / 2, t],
      [r - w / 2, b]
    ];
    let line_1 = [
      [l + w / 4, t],
      [r - w / 2, t]
    ];
    let line_2 = [
      [l + w / 4, b],
      [r - w / 4, b]
    ];
    lines = [line_0, line_1, line_2];
  } else if (letter == 'm') {
    let line_0 = [
      [l, b + h / 2],
      bl
    ];
    let line_1 = [
      bl,
      [l, b + h / 8],
      [l, t - h / 2],
      [l + w / 2, t - h / 2],
      [l + w / 2, b + h / 8],
      [l + w / 2, b]
    ];
    let line_2 = [
      [l + w / 2, b],
      [l + w / 2, b + h / 8],
      [l + w / 2, t - h / 2],
      [r, t - h / 2],
      [r, b + h / 8],
      br
    ];
    let line_3 = bt.nurbs(line_1);
    let line_4 = bt.nurbs(line_2);
    lines = [line_0, line_3, line_4];
  } else if (letter == 'n') {
    let line_0 = [
      [l, b + h / 2],
      bl
    ];
    let line_1 = [
      bl,
      [l, b + h / 8],
      [l, t - h / 2],
      [r, t - h / 2],
      [r, b + h / 8],
      br
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == 'o') {
    let line_0 = [
      [r, t - h / 2],
      [l, t - h / 2],
      bl,
      br,
      [r, t - h / 2]
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == 'p') {
    let line_0 = [
      [l, b + h / 3],
      [l, t - h / 2],
      [r, t - h / 2],
      br,
      bl,
      [l, b + h / 3]
    ];
    let line_1 = [
      [l, b - h / 3],
      [l, b + h / 2]
    ];
    let line_2 = bt.nurbs(line_0);
    lines = [line_1, line_2];
  } else if (letter == 'q') {
    let line_0 = [
      [r, b + h / 3],
      [r, t - h / 2],
      [l, t - h / 2],
      bl,
      br,
      [r, b + h / 3]
    ];
    let line_1 = [
      [r, b - h / 3],
      [r, b + h / 2]
    ];
    let line_2 = bt.nurbs(line_0);
    lines = [line_1, line_2];
  } else if (letter == 'r') {
    let line_0 = [
      [l + w / 3 - w / 4, b],
      [l + w / 3 + w / 4, b]
    ];
    let line_1 = [
      [l, b + h / 2],
      [l + w / 3, b + h / 2],
      [l + w / 3, b + h / 10],
      [l + w / 3, b]
    ];
    let line_2 = [
      [l + w / 3, b],
      [l + w / 3, b + h / 10],
      [l + w / 3, b + h / 2],
      [r, b + h / 2]
    ];
    let line_3 = bt.nurbs(line_1);
    let line_4 = bt.nurbs(line_2);
    lines = [line_0, line_3, line_4];
  } else if (letter == 's') {
    let line_0 = [
      [r, t - h / 2],
      [l, t - h / 2],
      [l, b + h / 4],
      [r, b + h / 4],
      br,
      bl
    ];
    let line_1 = bt.nurbs(line_0);
    lines = [line_1];
  } else if (letter == 't') {
    let line_0 = [
      [r - w / 2, t],
      [r - w / 2, b + h / 4],
      [r - w / 2, b],
      br
    ];
    let line_1 = [
      [l + w / 10, t - h / 3],
      [r - w / 10, t - h / 3]
    ];
    let line_2 = bt.nurbs(line_0);
    lines = [line_1, line_2];
  } else if (letter == 'u') {
    let line_0 = [
      [r, b + h / 2],
      br
    ];
    let line_1 = [
      [l, t - h / 2],
      [l, b + h / 3],
      bl,
      br,
      [r, b + h / 3],
      [r, t - h / 2]
    ];
    let line_2 = bt.nurbs(line_1);
    lines = [line_0, line_2];
  } else if (letter == 'v') {
    let line_0 = [
      [l, b + h / 2],
      [l + w / 2, b],
      [r, b + h / 2]
    ];
    lines = [line_0];
  } else if (letter == 'w') {
    let line_0 = [
      [l, b + h / 2],
      [l + w / 4, b],
      [l + w / 2, b + h / 3],
      [r - w / 4, b],
      [r, b + h / 2]
    ];
    lines = [line_0];
  } else if (letter == 'x') {
    let line_0 = [
      [l, b + h / 2],
      br
    ];
    let line_1 = [
      [r, b + h / 2],
      bl
    ];
    lines = [line_0, line_1];
  } else if (letter == 'y') {
    let line_0 = [
      [l, t - h / 2],
      bl,
      br,
      [r, b + h / 3]
    ];
    let line_1 = [
      [l, b - h / 3],
      [l, b - h / 2],
      [r, b - h / 2],
      br,
      [r, b + h / 2]
    ];
    let line_2 = bt.nurbs(line_0);
    let line_3 = bt.nurbs(line_1);
    lines = [line_2, line_3];
  } else if (letter == 'z') {
    let line_0 = [
      [l, t - h / 2],
      [r, t - h / 2],
      bl,
      br
    ];
    lines = [line_0];
  } else if (letter != ' ') {
    let line_0 = [
      tl,
      br
    ];
    let line_1 = [
      tr,
      bl
    ];
    let line_2 = [
      tr,
      tl,
      bl,
      br,
      tr
    ];
    lines = [line_0, line_1, line_2];
  }
  drawLines(lines);
}
