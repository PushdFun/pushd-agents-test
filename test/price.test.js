import { test } from "node:test";
import assert from "node:assert";
import { sum } from "../src/price.js";

test("sum adds a list", () => assert.equal(sum([1, 2, 3]), 6));
