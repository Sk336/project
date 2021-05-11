function removeDuplicate(arr) {
  let a;
  let len = arr.length;
  let result = [];
  let obj = {};
  for (a = 0; a < len; a++) {
    obj[arr[a]] = 0;
  }
  for (a in obj) {
    result.push(a);
  }
  return result;
}

var myArr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
console.log(removeDuplicate(myArr));
