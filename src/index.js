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

const TxtToMorse = (input) => {
	let inputToLowerCase = input
		.toLocaleLowerCase()
		.replace(/^\s+|\s+$/g, "")
		.replace(/\s+/g, " ");
	let string = "";

	for (var key in inputToLowerCase) {
		string += morse[inputToLowerCase[key]];
		string += " ";
	}

	return string.replace(/^\s+|\s+$/g, "");
};

const MorseToTxt = (input) => {
	let removeExtraSpaces = input.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
	let string = "";

	for (var key in removeExtraSpaces.split(" ")) {
		string += invertedMorse[removeExtraSpaces.split(" ")[key]];
	}

	return string;
};

export { TxtToMorse, MorseToTxt };
