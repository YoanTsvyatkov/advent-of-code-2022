const text = await Deno.readTextFile("./input.txt")
const lines = text.split("\n")
let count = 0
for (const line of lines) {
  const [first, second] = line.split(",")
  const [startFirst, endFirst] = first.split("-").map((elem) => parseInt(elem))
  const [startSecond, endSecond] = second
    .split("-")
    .map((elem) => parseInt(elem))
  if (
    (startFirst >= startSecond && startFirst <= endSecond) ||
    (startSecond >= startFirst && startSecond <= endFirst)
  ) {
    count++
  }
}
console.log(count)
