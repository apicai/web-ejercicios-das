# React
## Estado
### Objetos

En ocasiones interesa mantener los **datos del estado en un objeto JS**. Por ejemplo, los campos introducidos en un formulario podemos gestionarlos en único objeto y estado, en lugar de tener varios estados para cada campo.

<div class="sandpack" data-height="500px" data-width="75"><pre data-file="App.js">
import { useState } from 'react';
import enviar from './enviar.js';
import BotonEnviar from './BotonEnviar.js';
&nbsp;
export default function App() {
  const valorInicial = {destinatario: '', mensaje: ''};
  const [campos, setCampos] = useState(valorInicial);
  function cambioDestinatario(event) {
    setCampos({...campos, destinatario: event.target.value});
  }
  function cambioMensaje(event) {
    setCampos({...campos, mensaje: event.target.value});
  }
  function enviarCampos() {
    return enviar(campos).then(() => setCampos(valorInicial));
  }
  const envioBloqueado = !campos.destinatario || !campos.mensaje;
  return (
    &lt;form>
      &lt;label htmlFor="destinatario">Destinatario:&lt;/label>
      &lt;input id="destinatario" 
             value={campos.destinatario} 
             onChange={cambioDestinatario}/>
      &lt;label htmlFor="mensaje">Mensaje:&lt;/label>
      &lt;textarea id="mensaje" 
                value={campos.mensaje} 
                onChange={cambioMensaje}/>
      &lt;hr/>
      &lt;BotonEnviar deshabilitado={envioBloqueado} 
                   alPulsar={enviarCampos}/>
    &lt;/form>
  );
}
</pre><pre data-file="BotonEnviar.js" data-hidden="true">
import { useState } from 'react';
&nbsp;
export default function BotonEnviar({deshabilitado, alPulsar}) {
  const [envio, setEnvio] = useState('READY');
  const envioBloqueado = envio !== 'READY' || deshabilitado;
  function envioPulsado() {
    setEnvio('INPROGRESS');
    alPulsar().then(function() {
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
</pre><pre data-file="enviar.js" data-hidden="true">
export default function enviar(texto) {
  return new Promise(resolve => setTimeout(_ => {
    console.log("Envío realizado:", texto);
    resolve();
  }, 3000));
}
</pre><pre data-file="styles.css" data-hidden="true">
label {
  margin-top: 10px;
  font-size: 0.7rem;
  display: block;
}
textarea, input {
  width: 100%;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
</pre></div>

> **❓ Ejercicio 18:** _Añade un campo adicional "Título" al formulario._

> **❓ Ejercicio 19:** _¿Por qué no es correcto utilizar `campo.mensaje = event.target.value` en lugar de `setCampos({...campos, mensaje: event.target.value});` para actualizar su valor en el estado?_

> 🔍 **Nota:** _El tratamiento de los cambios en los campos de formulario se puede simplificar utilizando una sola función para todos ellos. Esta función hace uso de conceptos avanzados de JS y React:_
> ```js
> function cambioCampo(e) {
>   setCampos({...campos, [e.target.id]: e.target.value});
> }
> ```
> <details><summary>Pulsa para mostrar su explicación...</summary>
> <object type="image/svg+xml" data="./img/usestate.set.function.svg" width="100%"></object>
> </details>

> **❓ Ejercicio 20:** _Reemplaza las funciones de cambio en los campos del formulario anterior por la indicada en la nota._