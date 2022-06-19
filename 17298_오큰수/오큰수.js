const input = require('fs').readFileSync(__dirname+'/text.txt').toString().trim().split(/\s+/);
const [repeat, ...arr] = input.map(Number);
let stack = [];

for (let i = 0; i < repeat; i ++) {
  while(stack.length !== 0 && arr[i] > arr[stack[stack.length-1]]){
    arr[stack.pop()] = arr[i];
  }
  stack.push(i);
}
while (stack.length !== 0){
  arr[stack.pop()] = -1;
}
console.log(arr.join(' ').trim());