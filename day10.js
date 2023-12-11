function createChristmasTree(ornaments, height) {
  let tree = "";
  let count = 0;

  // pyramid
  for (let i = 0; i < height; i++) {
    let line = "";
    // spaces
    line += " ".repeat(height - i - 1);
    // ornaments

    for (let j = 0; j < i + 1; j++) {
      let dec = ornaments[count] ?? ornaments[0];
      count++;
      if (count == ornaments.length) count = 0;
      if (j == i) {
        line += `${dec}`;
        break;
      }
      line += `${dec} `;
    }

    // add to the tree
    tree += line + "\n";
  }

  // trunk
  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}

console.log(createChristmasTree("123", 4));
