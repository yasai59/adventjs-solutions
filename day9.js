function adjustLights(lights) {
  const init = lights[0];
  console.log(init);
  let rev = false;
  let count1 = 0;
  let count2 = 0;
  for (const light of lights) {
    console.log(rev);
    count1 += rev ? light == init : light != init;
    rev = !rev;
  }

  rev = true;
  for (const light of lights) {
    console.log(rev);
    count2 += rev ? light == init : light != init;
    rev = !rev;
  }

  count1 = Math.min(count1, count2);

  // Code here
  return count1;
}
