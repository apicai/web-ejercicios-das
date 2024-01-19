# React
## Estado

Los componentes deben reaccionar a las interacciones que realizan los usuarios sobre ellos (como pulsar botones, teclear texto, etc). Su tratamiento se realiza modificando el estado del componente en 3 pasos:

1. Las interacciones disparan **eventos** que se capturan en los componentes para tratarlos[^1]

1. Dicho tratamiento cambiará el **estado** del componente[^2]

1. El cambio de estado provoca que React vuelva a repintar el componente, el cual retornará un nuevo JSX con el **aspecto visual** para dicho estado (por ejemplo, mostrando un progreso, indicando errores, etc)

<div class="sandpack" data-height="400px" data-width="65"><pre data-file="TextoCorto.js" data-active="true">
import { useState } from 'react';
&nbsp;
export default function TextoCorto({maxChars = 20}) {
  const [gastado, setGastado] = useState(0);
  /* Manejo y cambio del estado del componente */
  function textoCambiado(event) {
    setGastado(event.target.value.length);
  }
  return (
    &lt;>
      {/* Cambio de visualización para cada estado */}
      &lt;small>Texto corto ({gastado}/{maxChars}):&lt;/small>
      &lt;br/>
      {/* Captura del evento de campo cambiado */}
      &lt;textarea onChange={textoCambiado}/>
    &lt;/>
  );
}
</pre><pre data-file="App.js">
import TextoCorto from './TextoCorto.js';
&nbsp;
export default function App() {
  return &lt;TextoCorto/>;
}
</pre><pre data-file="index.js" data-hidden="true">
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(&lt;App />);
</pre></div>

> **❓ Ejercicio 1:** _Añade trazas para comprobar que, efectivamente, las interacciones desencadenan los 3 pasos anteriores. Para ello añade las siguientes líneas en los lugares convenientes del código anterior, y comprueba que se ven en el orden correcto en la consola:_
> ```js
> console.log('Evento capturado')
> ```
> ```js
> console.log('Estado cambiado')
> ```
> ```js
> console.log('Componente repintado')
> ```

> **❓ Ejercicio 2:** _Para evitar que el usuario introduzca más caracteres de los permitidos, añade al elemento `textarea` la prop `maxLength` con el valor adecuado. Explica el comportamiento de las trazas del ejercicio 1 con esta modificación, cuando se llega al máximo número de caracteres permitidos._

> **❓ Ejercicio 3:** _Observa y explica el comportamiento cuando, en lugar de `const [gastado, setGastado] = useState(0)`, se utiliza una variable normal de JS:_
> ```js
> let [gastado, setGastado] = [0, g => gastado = g];
> ```
> <details><summary><strong>Nota:</strong> el código anterior es equivalente al siguiente ...</summary>
> <pre><code class="language-js hljs javascript">let gastado = 0;
> function setGastado(g) { gastado = g; }
> </pre></code>
> </details>

[^1]: Los nombres de las props que capturan los eventos en los componentes son las que empiezan por `on` en [esta lista](https://react.dev/reference/react-dom/components/common#common)

[^2]: Gestionado con el `useState()` de React que veremos a continuación