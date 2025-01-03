import { expect, test } from "vitest";
import { MorseToTxt, TxtToMorse } from "../index.js";

test("txt to morse", () => {
	expect(TxtToMorse("lorem ipsum")).toBe(
		".-.. --- .-. . -- / .. .--. ... ..- --"
	);
});

test("morse to txt", () => {
	expect(MorseToTxt(".-.. --- .-. . -- / .. .--. ... ..- --")).toBe(
		"lorem ipsum"
	);
});
