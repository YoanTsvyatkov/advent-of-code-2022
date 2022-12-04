import fs from "fs"

const results: Record<string, number> = {
  "A X": 1 + 3,
  "A Y": 2 + 6,
  "A Z": 3,
  "B X": 1,
  "B Y": 2 + 3,
  "B Z": 3 + 6,
  "C X": 1 + 6,
  "C Y": 2,
  "C Z": 3 + 3,
}

async function solution1() {
  const lines = await (await fs.promises.readFile("./input.txt"))
    .toString()
    .split("\n")
  let score = 0

  for (const line of lines) {
    score += results[line] ?? 0
    console.log("Result: ", results[line])
  }

  console.log(score)
}

async function solution2() {
  const lines = await (await fs.promises.readFile("./input.txt"))
    .toString()
    .split("\n")
  let score = 0

  for (const line of lines) {
    const [opponentMove, result] = line.split(" ")
    if (result === "X") {
      //lose
      if (opponentMove === "A") {
        const res = results["A Z"] ?? 0
        score += res
      } else if (opponentMove === "B") {
        const res = results["B X"] ?? 0
        score += res
      } else {
        const res = results["C Y"] ?? 0
        score += res
      }
    } else if (result === "Y") {
      //draw
      if (opponentMove === "A") {
        const res = results["A X"] ?? 0
        score += res
      } else if (opponentMove === "B") {
        const res = results["B Y"] ?? 0
        score += res
      } else {
        const res = results["C Z"] ?? 0
        score += res
      }
    } else {
      //win
      if (opponentMove === "A") {
        const res = results["A Y"] ?? 0
        score += res
      } else if (opponentMove === "B") {
        const res = results["B Z"] ?? 0
        score += res
      } else {
        const res = results["C X"] ?? 0
        score += res
      }
    }
  }

  console.log(score)
}
// solution1()
solution2()
