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
// Oponent
// A - Rock
// B - Paper
// C - cissors
//Me
// X - Rock
// Y - Paper
// Z - cissors
// The winner of the whole tournament is the player with the highest score.
// Your total score is the sum of your scores for each round.
// The score for a single round is the score for the shape you selected
//  (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round
//  (0 if you lost, 3 if the round was a draw, and 6 if you won).
const results = {
    "A X": 1 + 3,
    "A Y": 2 + 6,
    "A Z": 3,
    "B X": 1,
    "B Y": 2 + 3,
    "B Z": 3 + 6,
    "C X": 1 + 6,
    "C Y": 2,
    "C Z": 3 + 3,
};
function solution1() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield (yield fs_1.default.promises.readFile("./input.txt"))
            .toString()
            .split("\n");
        let score = 0;
        for (const line of lines) {
            score += (_a = results[line]) !== null && _a !== void 0 ? _a : 0;
            console.log("Result: ", results[line]);
        }
        console.log(score);
    });
}
function solution2() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield (yield fs_1.default.promises.readFile("./input.txt"))
            .toString()
            .split("\n");
        let score = 0;
        for (const line of lines) {
            const [opponentMove, result] = line.split(" ");
            if (result === "X") {
                //lose
                if (opponentMove === "A") {
                    const res = (_a = results["A Z"]) !== null && _a !== void 0 ? _a : 0;
                    score += res;
                }
                else if (opponentMove === "B") {
                    const res = (_b = results["B X"]) !== null && _b !== void 0 ? _b : 0;
                    score += res;
                }
                else {
                    const res = (_c = results["C Y"]) !== null && _c !== void 0 ? _c : 0;
                    score += res;
                }
            }
            else if (result === "Y") {
                //draw
                if (opponentMove === "A") {
                    const res = (_d = results["A X"]) !== null && _d !== void 0 ? _d : 0;
                    score += res;
                }
                else if (opponentMove === "B") {
                    const res = (_e = results["B Y"]) !== null && _e !== void 0 ? _e : 0;
                    score += res;
                }
                else {
                    const res = (_f = results["C Z"]) !== null && _f !== void 0 ? _f : 0;
                    score += res;
                }
            }
            else {
                //win
                if (opponentMove === "A") {
                    const res = (_g = results["A Y"]) !== null && _g !== void 0 ? _g : 0;
                    score += res;
                }
                else if (opponentMove === "B") {
                    const res = (_h = results["B Z"]) !== null && _h !== void 0 ? _h : 0;
                    score += res;
                }
                else {
                    const res = (_j = results["C X"]) !== null && _j !== void 0 ? _j : 0;
                    score += res;
                }
            }
        }
        console.log(score);
    });
}
// solution1()
solution2();
