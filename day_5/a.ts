const text = await Deno.readTextFile("./input.txt")
const splitArr = text.split("\n")
const map = new Map<number, string[]>()

splitArr.forEach((str, index) => {
  if (str.includes("move")) {
    const arr = str.split(" from ")
    let itemsCount = parseInt(arr[0].split(" ")[1])
    const positionsArray = arr[1].split(" ")
    const from = parseInt(positionsArray[0])
    const to = parseInt(positionsArray[2])
    const itemsInColumn = map.get(from)!
    const removedItems: string[] = []

    while (itemsCount > 0) {
      const item = itemsInColumn.pop()
      removedItems.push(item!)
      itemsCount--
    }

    map.get(to)?.push(...removedItems)
  } else {
    let column = 1
    let cnt = 0

    for (let i = 0; i < str.length; i++) {
      const ch = str[i]
      if (cnt === 3) {
        cnt = 0
        column++
      } else {
        cnt++
      }

      if (ch === "[") {
        if (!map.has(column)) {
          map.set(column, [])
        }
        map.get(column)?.unshift(str[i + 1])
      }
    }
  }
})

let result = ""
for (let i = 0; i < map.size; i++) {
  const ch = map.get(i + 1)?.pop() ?? ""
  result += ch
}
console.log(result)
