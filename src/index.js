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

const retmorse = {
	toMorse: function (input) {
		let formatedInput = input
			.toLowerCase()
			.replace(/^\s+|\s+$/g, "")
			.replace(/\s+/g, " ");
		let string = "";

		for (var key in formatedInput) {
			string += morse[formatedInput[key]];
			string += " ";
		}

		return string.replace(/^\s+|\s+$/g, "");
	},
	toTxt: function (input) {
		let formatedInput = input.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
		let string = "";

		for (var key in formatedInput.split(" ")) {
			string += invertedMorse[formatedInput.split(" ")[key]];
		}

		return string;
	},
};

console.log(retmorse.toMorse("retmorse"));

export { retmorse };
