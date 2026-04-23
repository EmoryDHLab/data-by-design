/*!
 * This file is adapted from Space Type Generator (c) Kiel Mutschelknaus
 *
 * This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 */

let particles = [];
let steps = 70;
let pgTextSize = 50;

let depthUnit = -2;
let curveStop = 5;
let stripCount = 1;
let textureUnit = 5;
let currentTextureUnit = 5;
let stripChoice = 0;
let stripCountChoice = 1;
let partCount = 2;
let squiggleCount = 1;
let stripHeight = 45;

let culmDist = [];
let foreColor, bkgdColor;
let mainText1 = "Loading text...";
let currentMainText;
let rSpeed = [];
let roundCap = false;
let handleColor;
let handleAlpha = 255;

let drgHL = 45;
let drgStartX,
  drgStartY,
  drgA = 0;
let clickedIn = false,
  draggedIn = false,
  noneSelected = true;

// Create simple variables to replace UI elements
let selectedFont;
let c1, c2, c3, c4, c5, c6;

// Toggle for straight text mode
let straightTextMode = false;

function preload() {
  font0 = loadFont("../fonts/VTCDubois/VTCDuBois-Regular.woff");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  rectMode(CENTER);

  // Set tracks preset values
  mainText1 = "Loading text...";
  currentMainText = mainText1;
  stripHeight = 40;
  stripCount = 1;
  stripChoice = 0;
  stripCountChoice = 1;
  roundCap = false;

  handleColor = color(0, 0, 255);
  selectedFont = font0;

  // Set tracks colors
  c1 = color("#ffffff");
  c2 = color("#0d0d0d");
  c3 = color("#000000");
  c4 = color("#b7b7b7");
  c5 = color("#e2e2e2");
  c6 = color("#ffffff");
  foreColor = color("#2A2423");
  bkgdColor = color("#2A2423");

  culmDist[0] = [];
  particles[0] = [];

  for (let r = 0; r < 20; r++) {
    var rs = random(5, 20);
    rSpeed[r] = rs / 20;
  }

  initTracksPreset();
}

function draw() {
  clear();
  background(bkgdColor);

  if (textureUnit != currentTextureUnit || mainText1 != currentMainText) {
    drawTextures();
    currentTextureUnit = textureUnit;
    currentMainText = mainText1;
  }

  push();
  translate(-width / 2, -height / 2);

  // Draw preview line when dragging to create new point (hide when in straight text mode)
  if (!straightTextMode) {
    let particleCt = particles[squiggleCount - 1].length;
    if (draggedIn) {
      stroke(0, 0, 255);
      strokeWeight(1);
      noFill();
      bezier(
        particles[squiggleCount - 1][particleCt - 1].x,
        particles[squiggleCount - 1][particleCt - 1].y,
        -2,
        particles[squiggleCount - 1][particleCt - 1].althx,
        particles[squiggleCount - 1][particleCt - 1].althy,
        -2,
        drgStartX + cos(drgA) * drgHL,
        drgStartY + sin(drgA) * drgHL,
        -2,
        drgStartX,
        drgStartY,
        -2
      );
      line(
        drgStartX + cos(drgA) * drgHL,
        drgStartY + sin(drgA) * drgHL,
        -2,
        drgStartX - cos(drgA) * drgHL,
        drgStartY - sin(drgA) * drgHL,
        -2
      );
    } else if (particles[squiggleCount - 1].length > 1) {
      stroke(handleColor);
      strokeWeight(1);
      noFill();
      bezier(
        particles[squiggleCount - 1][particleCt - 1].x,
        particles[squiggleCount - 1][particleCt - 1].y,
        -2,
        particles[squiggleCount - 1][particleCt - 1].althx,
        particles[squiggleCount - 1][particleCt - 1].althy,
        -2,
        mouseX + drgHL,
        mouseY,
        -2,
        mouseX,
        mouseY,
        -2
      );
    } else {
      stroke(handleColor);
      strokeWeight(1);
      noFill();
      bezier(
        particles[squiggleCount - 1][0].x,
        particles[squiggleCount - 1][0].y,
        -2,
        particles[squiggleCount - 1][0].althx,
        particles[squiggleCount - 1][0].althy,
        -2,
        mouseX + drgHL,
        mouseY,
        -2,
        mouseX,
        mouseY,
        -2
      );
      ellipse(mouseX, mouseY, stripHeight / 2, stripHeight / 2);
    }
  }

  // Draw track outlines (hide in straight text mode)
  if (!straightTextMode) {
    for (var n = 0; n < squiggleCount; n++) {
      if (true && roundCap == false) {
        noFill();
        stroke(foreColor);
        strokeWeight(((2 / stripCount) * stripHeight) / 60);

        let xStart = particles[n][0].x;
        let yStart = particles[n][0].y;
        let aStart = particles[n][0].a;

        let xEnd = particles[n][particles[n].length - 1].x;
        let yEnd = particles[n][particles[n].length - 1].y;
        let aEnd = particles[n][particles[n].length - 1].a;

        push();
        translate(xStart, yStart);
        rotateZ(aStart);
        line(0, -stripHeight / 2, 0, stripHeight / 2);
        pop();

        push();
        translate(xEnd, yEnd, -2);
        rotateZ(aEnd);
        line(-1, -stripHeight / 2, -1, stripHeight / 2);
        pop();
      }
    }
  }

  // Draw track textures
  drawCurvedTracks();

  translate(0, 0, 1);
  for (var n = 0; n < squiggleCount; n++) {
    for (var j = 0; j < particles[n].length; j++) {
      particles[n][j].update();
      particles[n][j].over();
      particles[n][j].show();
      particles[n][j].w = stripHeight / 2;
      particles[n][j].h = stripHeight / 2;
    }
  }

  pop();

  handleColor.setAlpha(handleAlpha);

  if (handleAlpha >= 0) {
    handleAlpha -= 15;
  }
}

function mouseMoved() {
  if (handleAlpha < 255) {
    handleAlpha += 30;
  }
}

function mouseClicked() {
  // Don't interact with tracks if clicking on button area or in straight text mode
  if (mouseY > height - 60 || straightTextMode) return;

  noneSelected = true;
  for (var n = 0; n < squiggleCount; n++) {
    for (var j = 0; j < particles[n].length; j++) {
      particles[n][j].pressed();
      if (
        particles[n][j].dragging ||
        particles[n][j].draggingHandle ||
        particles[n][j].draggingHandleAlt
      ) {
        noneSelected = false;
      }
      particles[n][j].released();
    }
  }

  if (noneSelected) {
    let particleCt = particles[squiggleCount - 1].length;
    particles[squiggleCount - 1][particleCt] = new Particle(
      drgStartX,
      drgStartY,
      drgA,
      drgHL
    );
    drgA = 0;
    drgHL = stripHeight;
  }
}

function mousePressed() {
  // Don't create drag lines in straight text mode
  if (straightTextMode) return;

  clickedIn = true;
  drgStartX = mouseX;
  drgStartY = mouseY;

  for (var n = 0; n < squiggleCount; n++) {
    for (var j = 0; j < particles[n].length; j++) {
      particles[n][j].pressed();
    }
  }
}

function mouseDragged() {
  // Don't create drag lines in straight text mode
  if (straightTextMode) return;

  drgHL = dist(drgStartX, drgStartY, mouseX, mouseY);
  drgA = atan2(drgStartY - mouseY, drgStartX - mouseX);

  draggedIn = true;
}

function mouseReleased() {
  for (var n = 0; n < squiggleCount; n++) {
    for (var j = 0; j < particles[n].length; j++) {
      particles[n][j].released();
    }
  }
  clickedIn = false;
  draggedIn = false;
}

function keyPressed() {
  if (keyCode === ENTER) {
    squiggleCount++;
    particles[squiggleCount - 1] = [];
    culmDist[squiggleCount - 1] = [];
    if (mouseX < width / 2) {
      particles[squiggleCount - 1][0] = new Particle(
        mouseX + 10,
        mouseY,
        drgA,
        drgHL
      );
    } else {
      particles[squiggleCount - 1][0] = new Particle(
        mouseX - 10,
        mouseY,
        drgA,
        drgHL
      );
    }
  }
}

function drawCurvedTracks() {
  for (var n = 0; n < squiggleCount; n++) {
    for (var m = 0; m < stripCount; m++) {
      culmDist[n][m] = 0;
      for (var j = particles[n].length; j > 0; j--) {
        if (j < particles[n].length) {
          let stripSelect = pgT;

          texture(stripSelect);
          textureMode(NORMAL);

          let heightRatio =
            (stripSelect.width * (stripHeight / stripCount)) /
            stripSelect.height;

          beginShape(TRIANGLE_STRIP);
          for (var k = 0; k <= steps; k++) {
            let x = particles[n][j].x;
            let y = particles[n][j].y;
            let preX = particles[n][j - 1].x;
            let preY = particles[n][j - 1].y;
            let hX = particles[n][j].hx;
            let hY = particles[n][j].hy;
            let hPreX = particles[n][j - 1].althx;
            let hPreY = particles[n][j - 1].althy;

            let t = k / steps;
            let pointX = bezierPoint(x, hX, hPreX, preX, t);
            let pointY = bezierPoint(y, hY, hPreY, preY, t);
            let tangentX = bezierTangent(x, hX, hPreX, preX, t);
            let tangentY = bezierTangent(y, hY, hPreY, preY, t);
            let pointAngle = atan2(tangentY, tangentX);

            pointAngle -= HALF_PI;

            let u = map(
              (culmDist[n][m] + frameCount * rSpeed[m]) % heightRatio,
              0,
              heightRatio,
              0,
              1
            );

            var stripHeightBottom =
              -stripHeight / 2 + (m * stripHeight) / stripCount;
            var stripHeightTop =
              -stripHeight / 2 + ((m + 1) * stripHeight) / stripCount;

            let preT = (k - 1) / steps;
            let prePointX = bezierPoint(x, hX, hPreX, preX, preT);
            let prePointY = bezierPoint(y, hY, hPreY, preY, preT);

            let thisStepDist = abs(dist(pointX, pointY, prePointX, prePointY));

            if (k != steps) {
              culmDist[n][m] += thisStepDist;
            }

            vertex(
              pointX + cos(pointAngle) * stripHeightBottom,
              pointY + sin(pointAngle) * stripHeightBottom,
              u,
              1
            );
            vertex(
              pointX + cos(pointAngle) * stripHeightTop,
              pointY + sin(pointAngle) * stripHeightTop,
              u,
              0
            );

            if (
              (culmDist[n][m] - thisStepDist + frameCount * rSpeed[m]) %
                heightRatio >
              heightRatio - thisStepDist
            ) {
              vertex(
                pointX + cos(pointAngle) * stripHeightBottom,
                pointY + sin(pointAngle) * stripHeightBottom,
                0,
                1
              );
              vertex(
                pointX + cos(pointAngle) * stripHeightTop,
                pointY + sin(pointAngle) * stripHeightTop,
                0,
                0
              );
            }

            if (thisStepDist > textureUnit) {
              textureUnit = thisStepDist;
            }
          }
          endShape();
        }
      }
    }
  }
}

function initTracksPreset() {
  for (var n = 0; n < squiggleCount; n++) {
    while (particles[n] && particles[n].length > 0) {
      particles[n].pop();
    }
  }

  squiggleCount = 1;
  particles[0] = [];
  culmDist[0] = [];

  drawTextures();

  for (var j = 0; j < 28; j++) {
    let angleStep = map(j, 0, 28, 0, 19 * PI) + PI / 4;

    // change values here to adjust rendering
    particles[0][j] = new Particle(
      width / 2 + cos(angleStep) * random(0, width * 0.4),
      height / 2 + sin(angleStep / PI) * random(0, height * 0.4),
      angleStep - PI / 2,
      random((width * 1) / 12, width / 6)
    );
  }
}

// Simplified texture creation
function drawTextures() {
  createText();
}

function createText() {
  console.log("Creating text with mainText1:", mainText1);
  textSize(pgTextSize);
  textFont(selectedFont);
  let repeatSize = round(textWidth(mainText1)) + textureUnit * 4;

  pgT = createGraphics(repeatSize, pgTextSize);
  pgT.background(c1);
  pgT.fill(foreColor);
  pgT.noStroke();
  pgT.textAlign(CENTER);
  pgT.textSize(pgTextSize);
  pgT.textFont(selectedFont);
  pgT.text(mainText1, pgT.width / 2, pgT.height / 2 + (pgTextSize * 0.7) / 2);
  console.log("Text created with size:", pgT.width, "x", pgT.height);

  // Add outline for tracks preset
  pgT.noFill();
  pgT.strokeWeight(4);
  pgT.stroke(foreColor);
  pgT.rect(-10, 0, pgT.width + 20, pgT.height);
}
