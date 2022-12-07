const text = await Deno.readTextFile("./input.txt")

type File = {
  type: "file"
  name: string
  size: number
}

type Directory = {
  type: "directory"
  name: string
  childrens: Array<File | Directory>
  prevDirectory?: Directory
}

type Node = File | Directory

function findNodeSize(node: Node) {
  if (node.type === "file") {
    return node.size
  }

  let sum = 0
  for (const child of node.childrens) {
    sum += findNodeSize(child)
  }

  return sum
}

function createRoot() {
  const lines = text.split("\n")
  const root: Directory = {
    type: "directory",
    childrens: [
      {
        type: "directory",
        name: "/",
        childrens: [],
      },
    ] as Array<File | Node>,
    name: "base",
  }
  let currDir = root

  for (const line of lines) {
    if (line.includes("$")) {
      if (line.includes("cd")) {
        const splitArr = line.split(" ")
        const nextDirName = splitArr[2]
        if (nextDirName === "..") {
          currDir = currDir.prevDirectory!
        } else {
          const dir = currDir.childrens.find(
            (node) => node.name === nextDirName
          )! as Directory
          currDir = dir
        }
      }
    } else {
      const nodeSplit = line.split(" ")
      const isDir = nodeSplit[0] === "dir"
      if (isDir) {
        currDir.childrens.push({
          type: "directory",
          childrens: [],
          name: nodeSplit[1],
          prevDirectory: currDir,
        })
      } else {
        currDir.childrens.push({
          type: "file",
          size: parseInt(nodeSplit[0]),
          name: nodeSplit[1],
        })
      }
    }
  }
  return root
}

function findAllDirs(root: Node) {
  const dirs = [] as Directory[]
  if (root.type === "directory") {
    dirs.push(root)
    for (const node of root.childrens) {
      dirs.push(...findAllDirs(node))
    }
  }
  return dirs
}

const base = createRoot()
const root = base.childrens[0] as Directory
const possibleDirs = [] as number[]
const rootSize = findNodeSize(root)
const unusedSpace = 70000000 - rootSize
if (unusedSpace >= 30000000) {
  possibleDirs.push(rootSize)
}
const allDirs = findAllDirs(root)

for (const dir of allDirs) {
  const dirSize = findNodeSize(dir)
  if (unusedSpace + dirSize >= 30000000) {
    possibleDirs.push(dirSize)
  }
}

let min = Infinity
for (const elem of possibleDirs) {
  if (elem < min) {
    min = elem
  }
}
console.log(min)
