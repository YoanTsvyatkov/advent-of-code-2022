const text = await Deno.readTextFile("./input.txt")
const areUnique = (str: string, start: number, end: number) => {
    for (let i = start; i < end; i++) {
        for(let j = i + 1; j <= end; j++) {
           if (str[i] === str[j]) {
            return false;
           } 
        }
    }
    return true;
}
for (let i = 13; i < text.length; i++) {
    if (areUnique(text, i - 13, i)) {
        console.log(i + 1);
        break;
    }
}