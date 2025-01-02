# RETMORSE

Tradutor de código morse.

## Como usar

Instalar:

```bash
npm install retmorse
```

Usar:

```js
import { TxtToMorse, MorseToTxt } from "retmorse";

console.log(TxtToMorse("lorem ipsum"));
// output: .-.. --- .-. . -- / .. .--. ... ..- --

console.log(MorseToTxt(".-.. --- .-. . -- / .. .--. ... ..- --"));
// output: lorem ipsum
```
