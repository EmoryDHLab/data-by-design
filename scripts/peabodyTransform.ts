const actorColors = {
  England: "rgb(119,43,21)",
  Americas: "rgb(222,145,49)",
  France: "rgb(60,100,100)",
  Holland: "rgb(68,108,73)",
  Sweden: "rgb(217,182,17)",
  Spain: "rgb(209,42,5)",
  Mexico: "rgb(209,42,5)",
  Native: "native",
};

async function run() {
  const file = Deno.args[0];
  const peabodyDataText = await Deno.readTextFile(file);
  const peabodyData = JSON.parse(peabodyDataText);
  const yearSquares = new Array(100);
  for (let { year, squares, actors } of peabodyData) {
    if (squares === "full") {
      let eventSquares;
      if (actors.length === 3) {
        const topActor = actorColors[actors[0]];
        const leftActor = actorColors[actors[1]];
        const bottomActor = actorColors[actors[2]];
        eventSquares = [
          [topActor, leftActor, topActor, leftActor, "trigger edge case"],
          [topActor],
          [topActor, bottomActor],
          [leftActor],
          [topActor, leftActor, bottomActor],
          [bottomActor],
          [leftActor, bottomActor],
          [bottomActor],
          [bottomActor],
        ];
      } else if (actors.length === 2) {
        const top = [actorColors[actors[0]]];
        const bottom = [actorColors[actors[1]]];
        const both = [actorColors[actors[0]], actorColors[actors[1]]];
        eventSquares = [
          top,
          top,
          both,
          top,
          both,
          bottom,
          both,
          bottom,
          bottom,
        ];
      } else {
        eventSquares = [
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
          [actorColors[actors[0]]],
        ];
      }
      yearSquares[year - 1601] = eventSquares;
    } else {
      if (yearSquares[year - 1601] === undefined) {
        yearSquares[year - 1601] = new Array(9);
      }
      for (const square of squares) {
        const colors = actors.map((a) => actorColors[a]);
        yearSquares[year - 1601][square - 1] = colors;
      }
    }
  }

  await Deno.writeTextFile(Deno.args[1], JSON.stringify(yearSquares));
}

run();
