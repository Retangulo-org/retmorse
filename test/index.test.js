import { expect, test } from "vitest";
import { retmorse } from "../src/index.js";

test("txt to morse", () => {
	expect(retmorse.toMorse("lorem ipsum")).toBe(
		".-.. --- .-. . -- / .. .--. ... ..- --"
	);
});

test("morse to txt", () => {
	expect(retmorse.toTxt(".-.. --- .-. . -- / .. .--. ... ..- --")).toBe(
		"lorem ipsum"
	);
});

test("morse to txt - space test", () => {
	expect(
		retmorse.toTxt("      .-.. --- .-. . -- /   .. .--. ... ..- --      ")
	).toBe("lorem ipsum");
});

test("txt to morse - space test", () => {
	expect(retmorse.toMorse("       lorem   ipsum    ")).toBe(
		".-.. --- .-. . -- / .. .--. ... ..- --"
	);
});

test("txt to morse - paragraph test", () => {
	expect(
		retmorse.toMorse(
			"Praesent maximus sapien eu posuere volutpat. Donec bibendum auctor urna, non dictum metus lobortis dapibus. Praesent sit amet mollis felis. Fusce et arcu finibus, luctus felis eget, pretium ex. Quisque odio est, gravida sit amet rutrum vel, cursus vitae felis. Etiam tincidunt, enim at finibus varius, sem justo vehicula tortor, eget gravida metus augue eu sapien. Curabitur varius consequat arcu ac sodales. Mauris quis lacinia ligula, vel suscipit purus."
		)
	).toBe(
		".--. .-. .- . ... . -. - / -- .- -..- .. -- ..- ... / ... .- .--. .. . -. / . ..- / .--. --- ... ..- . .-. . / ...- --- .-.. ..- - .--. .- - .-.-.- / -.. --- -. . -.-. / -... .. -... . -. -.. ..- -- / .- ..- -.-. - --- .-. / ..- .-. -. .- --..-- / -. --- -. / -.. .. -.-. - ..- -- / -- . - ..- ... / .-.. --- -... --- .-. - .. ... / -.. .- .--. .. -... ..- ... .-.-.- / .--. .-. .- . ... . -. - / ... .. - / .- -- . - / -- --- .-.. .-.. .. ... / ..-. . .-.. .. ... .-.-.- / ..-. ..- ... -.-. . / . - / .- .-. -.-. ..- / ..-. .. -. .. -... ..- ... --..-- / .-.. ..- -.-. - ..- ... / ..-. . .-.. .. ... / . --. . - --..-- / .--. .-. . - .. ..- -- / . -..- .-.-.- / --.- ..- .. ... --.- ..- . / --- -.. .. --- / . ... - --..-- / --. .-. .- ...- .. -.. .- / ... .. - / .- -- . - / .-. ..- - .-. ..- -- / ...- . .-.. --..-- / -.-. ..- .-. ... ..- ... / ...- .. - .- . / ..-. . .-.. .. ... .-.-.- / . - .. .- -- / - .. -. -.-. .. -.. ..- -. - --..-- / . -. .. -- / .- - / ..-. .. -. .. -... ..- ... / ...- .- .-. .. ..- ... --..-- / ... . -- / .--- ..- ... - --- / ...- . .... .. -.-. ..- .-.. .- / - --- .-. - --- .-. --..-- / . --. . - / --. .-. .- ...- .. -.. .- / -- . - ..- ... / .- ..- --. ..- . / . ..- / ... .- .--. .. . -. .-.-.- / -.-. ..- .-. .- -... .. - ..- .-. / ...- .- .-. .. ..- ... / -.-. --- -. ... . --.- ..- .- - / .- .-. -.-. ..- / .- -.-. / ... --- -.. .- .-.. . ... .-.-.- / -- .- ..- .-. .. ... / --.- ..- .. ... / .-.. .- -.-. .. -. .. .- / .-.. .. --. ..- .-.. .- --..-- / ...- . .-.. / ... ..- ... -.-. .. .--. .. - / .--. ..- .-. ..- ... .-.-.-"
	);
});

test("txt to morse - paragraph test", () => {
	expect(
		retmorse.toTxt(
			".--. .-. .- . ... . -. - / -- .- -..- .. -- ..- ... / ... .- .--. .. . -. / . ..- / .--. --- ... ..- . .-. . / ...- --- .-.. ..- - .--. .- - .-.-.- / -.. --- -. . -.-. / -... .. -... . -. -.. ..- -- / .- ..- -.-. - --- .-. / ..- .-. -. .- --..-- / -. --- -. / -.. .. -.-. - ..- -- / -- . - ..- ... / .-.. --- -... --- .-. - .. ... / -.. .- .--. .. -... ..- ... .-.-.- / .--. .-. .- . ... . -. - / ... .. - / .- -- . - / -- --- .-.. .-.. .. ... / ..-. . .-.. .. ... .-.-.- / ..-. ..- ... -.-. . / . - / .- .-. -.-. ..- / ..-. .. -. .. -... ..- ... --..-- / .-.. ..- -.-. - ..- ... / ..-. . .-.. .. ... / . --. . - --..-- / .--. .-. . - .. ..- -- / . -..- .-.-.- / --.- ..- .. ... --.- ..- . / --- -.. .. --- / . ... - --..-- / --. .-. .- ...- .. -.. .- / ... .. - / .- -- . - / .-. ..- - .-. ..- -- / ...- . .-.. --..-- / -.-. ..- .-. ... ..- ... / ...- .. - .- . / ..-. . .-.. .. ... .-.-.- / . - .. .- -- / - .. -. -.-. .. -.. ..- -. - --..-- / . -. .. -- / .- - / ..-. .. -. .. -... ..- ... / ...- .- .-. .. ..- ... --..-- / ... . -- / .--- ..- ... - --- / ...- . .... .. -.-. ..- .-.. .- / - --- .-. - --- .-. --..-- / . --. . - / --. .-. .- ...- .. -.. .- / -- . - ..- ... / .- ..- --. ..- . / . ..- / ... .- .--. .. . -. .-.-.- / -.-. ..- .-. .- -... .. - ..- .-. / ...- .- .-. .. ..- ... / -.-. --- -. ... . --.- ..- .- - / .- .-. -.-. ..- / .- -.-. / ... --- -.. .- .-.. . ... .-.-.- / -- .- ..- .-. .. ... / --.- ..- .. ... / .-.. .- -.-. .. -. .. .- / .-.. .. --. ..- .-.. .- --..-- / ...- . .-.. / ... ..- ... -.-. .. .--. .. - / .--. ..- .-. ..- ... .-.-.-"
		)
	).toBe(
		"Praesent maximus sapien eu posuere volutpat. Donec bibendum auctor urna, non dictum metus lobortis dapibus. Praesent sit amet mollis felis. Fusce et arcu finibus, luctus felis eget, pretium ex. Quisque odio est, gravida sit amet rutrum vel, cursus vitae felis. Etiam tincidunt, enim at finibus varius, sem justo vehicula tortor, eget gravida metus augue eu sapien. Curabitur varius consequat arcu ac sodales. Mauris quis lacinia ligula, vel suscipit purus.".toLowerCase()
	);
});
