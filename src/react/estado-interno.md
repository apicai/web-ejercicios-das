# React
## Estado
### Interno

Si un componente implementa varias funcionalidades, es probable que utilice más de un estado gestionado internamente[^1].

<div class="sandpack" data-height="500px" data-width="75"><pre data-file="EnvioTextoCorto.js" data-active="true">
import { useState } from 'react';
import enviar from './enviar.js';
&nbsp;
export default function EnvioTextoCorto({maxChars = 20}) {
  const [texto, setTexto] = useState('');
  const [envio, setEnvio] = useState('READY');
  const envioBloqueado = envio === 'INPROGRESS' || texto.length === 0;
  function envioPulsado() {
    setEnvio('INPROGRESS');
    enviar(texto).then(function() {
      setEnvio('DONE');
      setTimeout(_ => setEnvio('READY'), 3000);
    });
  }
  function textoCambiado(event) {
    setTexto(event.target.value);
  }
  function info() {
    switch(envio) {
      case 'INPROGRESS': return 'Enviando ...';
      case 'DONE': return 'Envío realizado';
      default: return '';
    }
  }
  return (
    &lt;>
      &lt;small>Texto corto ({texto.length}/{maxChars}):&lt;/small>
      &lt;br/>
      &lt;textarea value={texto} onChange={textoCambiado}/>
      &lt;hr/>
      &lt;button onClick={envioPulsado} disabled={envioBloqueado}>
        Enviar
      &lt;/button>
      &lt;small> {info()}&lt;/small>
    &lt;/>
  );
}
</pre><pre data-file="App.js">
import EnvioTextoCorto from './EnvioTextoCorto.js';
&nbsp;
export default function App() {
  return &lt;EnvioTextoCorto/>;
}
</pre><pre data-file="enviar.js" data-hidden="true">
export default function enviar(texto) {
  return new Promise(resolve => setTimeout(_ => {
    console.log("Envío realizado: " + texto);
    resolve();
  }, 3000));
}
</pre></div>

> **❓ Ejercicio 1:** _Comprende cómo funciona el componente anterior. Modifica el código para que se borre el texto una vez se ha realizado su envío._

> **❓ Ejercicio 2:** _Explica por qué es necesario el `value={texto}` del `textarea` observando qué ocurre cuando no está puesto._

[^1]: A estos componentes se les denomina "uncontrolled" ya que su estado no puede ser controlado desde fuera mediante props