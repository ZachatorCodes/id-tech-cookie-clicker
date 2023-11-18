function generateRandNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateRandNum(10, 5))