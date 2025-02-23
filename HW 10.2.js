let words = ["Wonderful", "Happiness", "Task", "Joyful", "Apple", "Time"];
let pattern  = /^[^Aa]{6,}$/;

const result = words.filter(pattern.test, pattern);

console.log(result); 