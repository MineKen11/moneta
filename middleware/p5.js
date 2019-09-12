import p5 from "p5";

function runner(p5) {
  const HEIGHT = 100;
  let WIDTH = p5.windowWidth;
  const SIZE = HEIGHT / 2;
  const LETTERS = "MONETA";
  const GAP = WIDTH / (LETTERS.length + 3);

  let toggle = true;
    
  p5.setup = () => {
    const canvas = p5.createCanvas(WIDTH, HEIGHT);
    canvas.parent("p5");
    p5.windowResized = () => {
      WIDTH = p5.windowWidth;
      p5.resizeCanvas(WIDTH, HEIGHT);
      p5.redraw();
    }
  };

  p5.draw = () => {
    p5.background(254);

    p5.colorMode(p5.HSB, 100);
    p5.fill(57, 90, 90);
    p5.strokeWeight(6);
    p5.stroke(0, 0, 30);

    p5.textStyle(p5.BOLD);
    p5.textSize(70);
    p5.textAlign(p5.CENTER);
    p5.text(LETTERS, WIDTH / 2, 80);
  };

  /*p5.mouseReleased = () => {
    if (p5.mouseY > HEIGHT) {
      return;
    }
    for (const char of chars) {
      char.color = p5.int(p5.random(100));
      if (toggle) {
        char.vx = (char.x - p5.mouseX) / 30 + p5.randomGaussian(0, 2);
        char.vy = (char.y - p5.mouseY) / 30 + p5.randomGaussian(0, 2);
      } else {
        char.vx = 0;
        char.vy = 0;
      }
    }
    toggle = !toggle;
  };*/
}

export default function() {
  new p5(runner);
}
