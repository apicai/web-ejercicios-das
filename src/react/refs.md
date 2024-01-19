# React
## Refs

Refs son otro tipo de "estado" que permite **guardar valores que no intervienen en el repintado** del componente. Se definen con `useRef` y, al contrario que con `useState`, cuando cambian su valor no disparan un repintado.

```js
import { useRef } from 'react';
...
export default function Componente() {
  const algoRef = useRef('valor inicial');
  ...
  function handler() {
    algoRef.current = 'valor actualizado';
  }
  ...
}
```

Típicamente, se utilizan para acceder al DOM, y para guardar los [timeout IDs de `setTimeout/setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#return_value) entre repintados.

<div class="sandpack" data-height="350px" data-width="75"><pre data-file="App.js">
import { useState } from 'react';
import { useRef } from 'react';
&nbsp;
export default function App() {
  const [frame, setFrame] = useState(0);
  const timeoutIdRef = useRef();
  function relojPulsado() {
    if (timeoutIdRef.current) {
      return;
    } else {
      timeoutIdRef.current = setInterval(function () {
        setFrame(frame => (frame + 1) % 12);
      }, 100);
    }
  }
  return &lt;button onClick={relojPulsado}>{frames[frame]}&lt;/button>;
}
&nbsp;
const frames=['🕛','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚'];
</pre><pre data-file="styles.css" data-hidden="true">
button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font-size: 8em;
	cursor: pointer;
	outline: inherit;
  width: 100%;
}
</pre></div>

> **❓ Ejercicio:** _Añade el código necesario para que al pulsar sobre el reloj anterior, éste se pause o se reanude utilizando [`clearInverval`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)_

> 🔍 **Nota:** _En el ejemplo anterior, en vez de usar el `setFrame(frame + 1)` habitual, utilizamos `setEstado(frame => frame + 1)` por que, para calcular el siguiente valor, necesitamos su valor más actual (que nos proporciona React cuando llama a esa función)._