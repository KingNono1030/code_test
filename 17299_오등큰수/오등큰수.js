Object.defineProperties(Array.prototype, {
  count: {
      value: function(value) {
          return this.filter(x => x==value).length;
      }
  }
});

const input = require('fs').readFileSync(__dirname+'/text.txt').toString().trim().split(/\s+/);
const [repeat, ...arr] = input.map(Number);
const newArr = [];
const answerArr = [];
let stack = [];


for (let i = 0; i < repeat; i ++) {
  newArr.push(arr.count(arr[i]));
}
console.log(newArr);

for (let i = 0; i < repeat; i ++) {
  while(stack.length !== 0 && newArr[i] > newArr[stack[stack.length-1]]){
    arr[stack.pop()] = arr[i];
  }
  stack.push(i);
}
while (stack.length !== 0){
  arr[stack.pop()] = -1;
}

console.log(arr.join(' ').trim());
