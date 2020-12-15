export function reverse(value: string) {
  return value === undefined ? value : value.split("").reverse().join("");
}
