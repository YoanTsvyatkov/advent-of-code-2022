const fs = require("fs")
const readline = require("readline")

function addToTopThree(topThree: number[], num: number) {
  if (num > topThree[0]) {
    const tmp = topThree[1]
    topThree[1] = topThree[0]
    topThree[2] = tmp
    topThree[0] = num
  } else if (num > topThree[1]) {
    topThree[2] = topThree[1]
    topThree[1] = num
  } else if (num > topThree[2]) {
    topThree[2] = num
  }
}

async function solution() {
  const fileStream = fs.createReadStream("input.txt")
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  const topThree = [0, 0, 0]
  let current = 0
  for await (const line of rl) {
    if (line === "") {
      addToTopThree(topThree, current)
      current = 0
    } else {
      current += Number.parseInt(line)
    }
  }

  if (current !== 0) {
    addToTopThree(topThree, current)
  }

  const sum = topThree.reduce((acc, curr) => acc + curr)
  console.log(sum)
}

solution()
