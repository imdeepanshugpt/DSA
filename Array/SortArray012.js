let count = [0, 0, 0];
let arr = [0, 1, 2, 0, 2, 2, 1];
arr.forEach((number) => {
  count[number] = count[number] + 1;
});

console.log(count);
console.log(
  []
    .concat(new Array(count[0]).fill(0))
    .concat(new Array(count[1]).fill(1))
    .concat(new Array(count[2]).fill(2))
);
