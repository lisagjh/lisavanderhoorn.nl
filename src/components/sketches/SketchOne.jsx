export default function sketch(p) {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.fill(255, 0, 150);
    p.ellipse(p.width / 2, p.height / 2, 100, 100);
  };
}
