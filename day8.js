function organizeGifts(gifts) {
  const giftList = gifts.split(/(\D)/);
  let str = "";
  for (let i = 0; i < giftList.length; i += 2) {
    let num = Number(giftList[i]);
    let name = giftList[i + 1];

    const cajas = Math.floor((num / 10) % 5);
    const sobra = num % 10;
    const palets = Math.floor(num / 50);
    str += `${`[${name}]`.repeat(palets)}`;
    str += `${`{${name}}`.repeat(cajas)}`;
    str += `(${`${name}`.repeat(sobra)})`.repeat(sobra > 0);
  }
  // Code here
  return str;
}
