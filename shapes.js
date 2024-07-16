const spiralShape = (length, scale) => {
  const angle = bt.randIntInRange(90, 180);
  const t = new bt.Turtle();
  for (let i = 0; i < length; i++) {
    t.forward(scale + i).right(angle);
  }
  return t.lines();
}
