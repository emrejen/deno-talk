export function reverse(value) {
  return value === undefined ? value : value.split("").reverse().join("");
}
