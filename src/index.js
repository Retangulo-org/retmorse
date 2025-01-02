const morse = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
	0: "-----",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----.",
	".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"'": ".----.",
	"!": "-.-.--",
	"/": "-..-.",
	"(": "-.--.",
	")": "-.--.-",
	"&": ".-...",
	":": "---...",
	";": "-.-.-.",
	"=": "-...-",
	"+": ".-.-.",
	"-": "-....-",
	_: "..--.-",
	'"': ".-..-.",
	$: "...-..-",
	"@": ".--.-.",
	" ": "/",
	"/": " ",
};

const invertedMorse = Object.fromEntries(
	Object.entries(morse).map(([key, value]) => [value, key])
);

function TxtToMorse(input) {
	let inputToLowerCase = input.toLocaleLowerCase();
	let array = [];
	let string = "";

	for (var key in inputToLowerCase) {
		array.push(morse[inputToLowerCase[key]]);
		array.push(" ");
	}

	for (var key in array) {
		string += array[key];
	}

	return string.replace(/^\s+|\s+$/g, "");
}

function MorseToTxt(input) {
	let array = [];
	let string = "";
	let removeSpaces = input.replace(/^\s+|\s+$/g, "");

	for (var key in removeSpaces.split(" ")) {
		array.push(invertedMorse[removeSpaces.split(" ")[key]]);
	}

	for (var key in array) {
		string += array[key];
	}

	return string;
}
