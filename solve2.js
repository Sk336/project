const arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
// const arr = [1,0,0,0,0,1,0,0,0,1];
const findMaxConsecutiveOnes = (arr = []) => {
  let a = 0;
  let b = 0;
  let max = 0;
  while (b < arr.length) {
    if (arr[b] === 0) {
      if (b - a > max) {
        max = b - a;
      }
      b++;
      a = b;
    } else {
      b++;
    }
  }
  return b - a > max ? b - a : max;
};

console.log(findMaxConsecutiveOnes(arr));
