import { expect, test } from "vitest";
import { printChristmasTree } from "./tree";

function countX(tree: string): number {
  return (tree.match(/x/g) || []).length; // Conta quantos "x" existem na árvore
}

function countTrunk(tree: string): number {
  return (tree.match(/\|/g) || []).length; // Conta quantos "|" existem (deve ser 1)
}

test("prints a Christmas tree of height 1", () => {
  const tree = printChristmasTree(1);
  expect(countX(tree)).toBe(1); // 1 "x"
  expect(countTrunk(tree)).toBe(1); // 1 tronco "|"
});

test("prints a Christmas tree of height 2", () => {
  const tree = printChristmasTree(2);
  expect(countX(tree)).toBe(4); // 4 "x"
  expect(countTrunk(tree)).toBe(1); // 1 tronco "|"
});

test("prints a Christmas tree of height 3", () => {
  const tree = printChristmasTree(3);
  expect(countX(tree)).toBe(9); // 9 "x"
  expect(countTrunk(tree)).toBe(1); // 1 tronco "|"
});

test("prints a Christmas tree of height 4", () => {
  const tree = printChristmasTree(4);
  expect(countX(tree)).toBe(16); // 16 "x"
  expect(countTrunk(tree)).toBe(1); // 1 tronco "|"
});

test("throws an error for invalid height", () => {
  expect(() => printChristmasTree(0)).toThrow("Height must be at least 1");
});
