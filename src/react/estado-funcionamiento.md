# React
## Estado
### Funcionamiento

Para que el estado **no se pierda** entre repintados y, además, **desencadene un repintado cuando cambia**, es necesario el `useState()` de React:

```js
import { useState } from 'react';
...
export default function Componente() {
  // unEstado: contiene el valor para el repintado actual (sólo vale para leerlo)
  // setUnEstado: nos permite cambiar el valor para el siguiente repintado (y dispararlo)
  const [unEstado, setUnEstado] = useState('valor inicial del estado');
  ...
}
```

<div class="sandpack" data-height="500px" data-width="75"><pre data-file="BotonEnviar.js" data-active="true">
import { useState } from 'react';
import enviar from './enviar.js';
&nbsp;
export default function BotonEnviar() {
  // Identificamos 3 posibles estados: READY, INPROGRESS, DONE
  const [envio, setEnvio] = useState('READY');
  // Cambiamos el estado cuando el usuario interacciona
  function envioPulsado() {
    setEnvio('INPROGRESS');
    enviar().then(function() {
      setEnvio('DONE');
    }).catch(function() {
      console.log('Error al enviar');
    });
  }
  // Cambiamos la presentación dependiendo del estado
  const envioBloqueado = envio === 'INPROGRESS';
  function info() {
    switch(envio) {
      case 'INPROGRESS': return 'Enviando ...';
      case 'DONE': return 'Envío realizado';
      default: return '';
    }
  }
  return (
    &lt;>
      &lt;button onClick={envioPulsado} disabled={envioBloqueado}>
        Enviar
      &lt;/button>
      &lt;small> {info()}&lt;/small>
    &lt;/>
  );
}
</pre><pre data-file="App.js">
import BotonEnviar from './BotonEnviar.js';
&nbsp;
export default function App() {
  return &lt;BotonEnviar/>;
}
</pre><pre data-file="enviar.js" data-hidden="true">
let error = true;
export default function enviar(texto) {
  error = !error;
  return new Promise((resolve, reject) => setTimeout(error ? reject : resolve, 3000));
}
</pre></div>

> **❓ Ejercicio 12:** _Comprende cómo funciona el componente anterior, y modifica el código para que, cuando se produzca un error al enviar[^1], en el botón ponga "Reintentar" en vez de "Enviar" y se indique en el detalle (no sólo en la consola)._

[^1]: En el ejemplo, el error se produce al enviar por segunda vez. Puedes refrescar `⟳` para volver al estado inicial.