# React
## Estado
### Externo

Diseñar un componente con varias responsabilidades no es conveniente para su mantenimiento y reutilización. En su lugar, se suele dividir en varios componentes más sencillos que pueden **compartir su estado** externamente[^1]. Para ello:

1. Se mueve el estado a compartir entre los componentes al componente padre común
2. Los valores del estado se pasan desde el padre a los hijos mediante props[^2]
3. Para cambiar el estado desde los hijos, se utilizan funciones del padre pasadas como props

<div class="sandpack" data-height="350px" data-width="75"><pre data-file="TextoCorto.js">
export default function TextoCorto({maxChars=20, texto='', alCambiar}) {
  function textoCambiado(event) { alCambiar(event.target.value); }
  return (
    &lt;>
      &lt;small>Texto corto ({texto.length}/{maxChars}):&lt;/small>
      &lt;br/>
      &lt;textarea value={texto} onChange={textoCambiado}/>
    &lt;/>
  );
}
</pre><pre data-file="BotonEnviar.js">
import { useState } from 'react';
import enviar from './enviar.js';
&nbsp;
export default function BotonEnviar({deshabilitado, datos}) {
  const [envio, setEnvio] = useState('READY');
  const envioBloqueado = envio !== 'READY' || deshabilitado;
  function envioPulsado() {
    setEnvio('INPROGRESS');
    enviar(datos).then(function() {
      setEnvio('DONE');
      setTimeout(_ => setEnvio('READY'), 3000)
    });
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
      &lt;button onClick={envioPulsado} disabled={envioBloqueado}>
        Enviar
      &lt;/button>
      &lt;small> {info()}&lt;/small>
    &lt;/>
  );
}
</pre><pre data-file="App.js">
import { useState } from 'react';
import TextoCorto from './TextoCorto.js';
import BotonEnviar from './BotonEnviar.js';
&nbsp;
export default function App() {
  const [texto, setTexto] = useState('');
  return (
    &lt;>
      &lt;TextoCorto />
      &lt;hr/>
      &lt;BotonEnviar />
    &lt;/>
  );
}
</pre><pre data-file="enviar.js" data-hidden="true">
export default function enviar(texto) {
  return new Promise(resolve => setTimeout(_ => {
    console.log("Envío realizado: " + texto);
    resolve();
  }, 3000));
}
</pre></div>

> **❓ Ejercicio 1:** _Estudia cómo se ha externalizado el estado en las props de los componentes anteriores. Termina de implementar la funcionalidad de envío del texto dando valores a las props de los componentes usados en `App`._

> **❓ Ejercicio 2:** _Modifica `App` y `BotonEnviar` para que, en lugar de pasarle los datos, se le pase una función que realiza el envío desde el padre de la siguiente manera:_
> ```js
> import enviar from './enviar.js';
> ...
>   function envioPulsado() {
>     return enviar(texto).then(() => setTexto(''));
>   }
> ...
>   <BotonEnviar alPulsar={envioPulsado} .../>
> ...
> ```

> **❓ Ejercicio 3:** _Explica qué funcionalidad extra nos ha permitido implementar el cambio anterior y qué característica general hemos mejorado del componente `BotonEnviar`._

[^1]: A estos componentes se les denomina "controlled" ya que su estado puede ser controlado desde fuera mediante props

[^2]: Pasar otros valores de props a los componentes hijos también desencadena que React ejecute su repintado