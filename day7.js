function drawGift(size, symbol) {
  let str = "";

  for (let i = 0; i < size * 2 - 1; i++) {
    let esp = size - 1 - i;
    let esp2 = size - 1 - i;
    esp = esp < 0 ? 0 : esp;
    for (let j = 0; j < size * 2 - 1; j++) {
      if (esp2 < 0 && j === size * 2 - 2 + esp2) {
        str += "#";
        break;
      }
      if (j < esp) {
        str += " ";
        continue;
      }
      if (j - esp === size - 1) {
        str += "#";
        continue;
      }

      if (j === esp) {
        str += "#";
        continue;
      }
      if (i === size - 1 && j < size) {
        str += "#";
        continue;
      }

      if (i === 0 || i === size * 2 - 2) {
        str += "#";
      } else {
        if (j === 0 || j === size * 2 - 2) {
          str += "#";
        } else {
          str += symbol;
        }
      }
    }
    str += "\n";
  }

  // Code here
  return str;
}

console.log(drawGift(1, "*"));
console.log(drawGift(5, "*"));
console.log(drawGift(2, "*"));
