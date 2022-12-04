"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function createSet(list) {
    const set = new Set();
    for (const str of list) {
        for (const ch of str) {
            set.add(ch);
        }
    }
    return set;
}
function solution1() {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield (yield fs_1.default.promises.readFile("./input.txt"))
            .toString()
            .split("\n");
        const partOneSet = new Set();
        let sum = 0;
        for (const line of lines) {
            const length = line.length;
            const mid = Math.floor(length / 2);
            const firstPart = line.substring(0, mid);
            const secondPart = line.substring(mid, length);
            const firstPartSet = createSet(firstPart);
            for (const ch of secondPart) {
                if (firstPartSet.has(ch)) {
                    if (ch === ch.toLowerCase()) {
                        const priority = ch.charCodeAt(0) - "a".charCodeAt(0) + 1;
                        sum += priority;
                    }
                    else {
                        const priority = ch.charCodeAt(0) - "A".charCodeAt(0) + 27;
                        sum += priority;
                    }
                    break;
                }
            }
        }
        console.log(sum);
    });
}
function solution2() {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield (yield fs_1.default.promises.readFile("./input.txt"))
            .toString()
            .split("\n");
        let set1 = new Set();
        let set2 = new Set();
        let sum = 0;
        let groupCnt = 0;
        for (const line of lines) {
            groupCnt++;
            if (groupCnt === 3) {
                for (const ch of line) {
                    if (set1.has(ch) && set2.has(ch)) {
                        if (ch === ch.toLowerCase()) {
                            const priority = ch.charCodeAt(0) - "a".charCodeAt(0) + 1;
                            sum += priority;
                        }
                        else {
                            const priority = ch.charCodeAt(0) - "A".charCodeAt(0) + 27;
                            sum += priority;
                        }
                        break;
                    }
                }
                groupCnt = 0;
            }
            else {
                if (groupCnt === 1) {
                    set1 = createSet(line);
                }
                else {
                    set2 = createSet(line);
                }
            }
        }
        console.log(sum);
    });
}
// solution1()
solution2();
