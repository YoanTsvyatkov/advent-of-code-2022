import fs from "fs"

function createSet(list: string) {
  const set = new Set<string>()
  for (const str of list) {
    for (const ch of str) {
      set.add(ch)
    }
  }
  return set
}

async function solution1() {
  const lines = await (await fs.promises.readFile("./input.txt"))
    .toString()
    .split("\n")
  const partOneSet = new Set<string>()
  let sum = 0

  for (const line of lines) {
    const length = line.length
    const mid = Math.floor(length / 2)
    const firstPart = line.substring(0, mid)
    const secondPart = line.substring(mid, length)
    const firstPartSet = createSet(firstPart)

    for (const ch of secondPart) {
      if (firstPartSet.has(ch)) {
        if (ch === ch.toLowerCase()) {
          const priority = ch.charCodeAt(0) - "a".charCodeAt(0) + 1
          sum += priority
        } else {
          const priority = ch.charCodeAt(0) - "A".charCodeAt(0) + 27
          sum += priority
        }
        break
      }
    }
  }
  console.log(sum)
}

async function solution2() {
  const lines = await (await fs.promises.readFile("./input.txt"))
    .toString()
    .split("\n")
  let set1 = new Set<string>()
  let set2 = new Set<string>()
  let sum = 0
  let groupCnt = 0

  for (const line of lines) {
    groupCnt++

    if (groupCnt === 3) {
      for (const ch of line) {
        if (set1.has(ch) && set2.has(ch)) {
          if (ch === ch.toLowerCase()) {
            const priority = ch.charCodeAt(0) - "a".charCodeAt(0) + 1
            sum += priority
          } else {
            const priority = ch.charCodeAt(0) - "A".charCodeAt(0) + 27
            sum += priority
          }
          break
        }
      }
      groupCnt = 0
    } else {
      if (groupCnt === 1) {
        set1 = createSet(line)
      } else {
        set2 = createSet(line)
      }
    }
  }

  console.log(sum)
}
solution1()
solution2()
