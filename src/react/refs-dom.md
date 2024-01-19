# React
## Refs
### DOM

`useRef` también se usa para **obtener una referencia a un elemento del DOM generado por React** y, así, poder acceder a sus capacidades (como hacer foco, scroll, controlar su reproducción, etc):

<div class="sandpack" data-height="350px" data-width="75"><pre data-file="App.js">
import { useState } from 'react';
import { useRef } from 'react';
import BotonValidarEnviar from './BotonValidarEnviar.js'
import enviar from './enviar.js';
&nbsp;
export default function App() {
  const [campos, setCampos] = useState(valorInicial);
  // 1. Definimos un ref sin dato inicial
  const nombreRef = useRef();
  function validarCampos() {
    if(!campos.nombre) {
      // 3. El elemento DOM estará en el campo "current" del ref
      scrollYFoco(nombreRef.current);
      return false;
    }
    return true;
  }
  function enviarCampos() {
    return enviar(campos).then(() => setCampos(valorInicial));
  }
  function cambioCampo(e) {
    setCampos({...campos, [e.target.id]: e.target.value});
  }
  return (
    &lt;form>
      &lt;label htmlFor="nombre">Nombre*&lt;/label>
      {/* 2. React guardará en "nombreRef.current" 
      el elemento del DOM generado para este input */}
      &lt;input id="nombre" ref={nombreRef}
             value={campos.nombre} onChange={cambioCampo}/>
      &lt;label htmlFor="apellidos">Apellidos&lt;/label>
      &lt;input id="apellidos" 
             value={campos.apellidos} onChange={cambioCampo}/>
      &lt;label htmlFor="domicilio">Domicilio&lt;/label>
      &lt;input id="domicilio" 
             value={campos.domicilio} onChange={cambioCampo}/>
      &lt;label htmlFor="localidad">Localidad&lt;/label>
      &lt;input id="localidad" 
             value={campos.localidad} onChange={cambioCampo}/>
      &lt;label htmlFor="cp">Código postal&lt;/label>
      &lt;input id="cp" 
             value={campos.cp} onChange={cambioCampo}/>
      &lt;label htmlFor="telefono">Teléfono&lt;/label>
      &lt;input id="telefono"
             value={campos.telefono} onChange={cambioCampo}/>
      &lt;label htmlFor="email">Email&lt;/label>
      &lt;input id="email"
             value={campos.email} onChange={cambioCampo}/>
      &lt;hr/>
      &lt;BotonValidarEnviar validar={validarCampos} enviar={enviarCampos}/>
    &lt;/form>
  );
}
&nbsp;
// Funciones y objetos auxiliares
function scrollYFoco(nodoDOM) {
  nodoDOM.scrollIntoView({behavior: 'smooth', block: 'end'});
  setTimeout(_ => nodoDOM.focus(), 500);
}
const valorInicial = {
  nombre: '', apellidos: '', 
  domicilio: '', localidad: '', cp: '',
  telefono: '', email: ''
};
</pre><pre data-file="BotonValidarEnviar.js">
import { useState } from 'react';
&nbsp;
export default function BotonValidarEnviar({validar, enviar}) {
  const [envio, setEnvio] = useState('READY');
  const envioBloqueado = envio === 'INPROGRESS' || envio === 'DONE';
  function botonPulsado() {
    if (!validar()) {
      setEnvio('INVALID');
      return;
    }
    setEnvio('INPROGRESS');
    enviar().then(function() {
      setEnvio('DONE');
      setTimeout(_ => setEnvio('READY'), 3000)
    });
  }
  function info() {
    switch(envio) {
      case 'INVALID': return 'Datos inválidos';
      case 'INPROGRESS': return 'Enviando ...';
      case 'DONE': return 'Envío realizado';
      default: return '';
    }
  }
  return (
    &lt;>
      &lt;button type="button"
              onClick={botonPulsado} disabled={envioBloqueado}>
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
  margin: 10px 0 2px 0;
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
form {
  margin-bottom: 150px;
}
</pre><pre data-file="index.js" data-hidden="true">
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(&lt;App />);
</pre></div>

> **❓ Ejercicio 1:** _Añade trazas al código anterior para demostrar que `nombreRef` en el primer "render" no tiene valor pero que, tras él, React ya ha generado el elemento del DOM ([durante el "commit"](./tecnologias.html)) y lo ha asignado al ref._

> **❓ Ejercicio 2:** _Añade el código necesario para que el campo email también sea obligatorio._