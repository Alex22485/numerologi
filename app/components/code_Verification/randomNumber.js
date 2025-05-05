export default function randomNumber(min, max) {
  const minDigit = Math.ceil(min);
  const maxDigit = Math.floor(max);
  return Math.floor(Math.random() * (maxDigit - minDigit + 1) + minDigit);
}
