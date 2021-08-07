module.exports = function reverse (n) {
  n = Math.abs(n);
  let b = String(n);
  let a = b.split('').reverse().join('');
  
  return a;
}
