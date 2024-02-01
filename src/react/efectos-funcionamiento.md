# React
## Efectos
### Funcionamiento

Para definir un efecto en React se utiliza `useEffect` de la siguiente forma:

```js
import { useEffect } from 'react';
...
export default function Componente() {
  useEffect(() => {
    // El código de aquí se ejecutará tras cada repintado
  });
  ...
}
```

En el siguiente ejemplo, `useEffect` se utiliza para poner el foco en el primer campo que está vacío:

<div class="sandpack" data-height="350px" data-width="70"><pre data-file="App.js">
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import productos from './data.js';
&nbsp;
export default function App() {
  const [campos, setCampos] = useState(productos[2]);
  const camposRef = useRef({});
  useEffect(() => {
    focoCampoVacio(camposRef.current);
  });
  function cambioCampo(e) {
    setCampos({...campos, [e.target.id]: e.target.value});
  }
  function campoRef(domElem) {
    if (domElem) camposRef.current[domElem.id] = domElem;
  }
  return (
    &lt;form>
      &lt;label htmlFor="nombre">Producto&lt;/label>
      &lt;input id="nombre" value={campos.nombre} ref={campoRef}
             onChange={cambioCampo}/>
      &lt;label htmlFor="imagen">Imagen&lt;/label>
      &lt;input id="imagen" value={campos.imagen} ref={campoRef}
             onChange={cambioCampo}/>
      &lt;label htmlFor="stock">Existencias&lt;/label>
      &lt;input id="stock" value={campos.stock} ref={campoRef}
             onChange={cambioCampo}/>
      &lt;label htmlFor="descripcion">Descripción&lt;/label>
      &lt;textarea id="descripcion" value={campos.descripcion} 
                ref={campoRef} onChange={cambioCampo}/>
    &lt;/form>
  );
}
// Función auxiliar para poner el foco en el 1er campo vacío
function focoCampoVacio(campos) {
  const campoVacio = Object.values(campos).find(c => !c.value);
  if (campoVacio) setTimeout(_ => campoVacio.focus(), 200);
}
</pre><pre data-file="data.js" data-hidden="true">
// Simula nuestro catálogo de productos
// obtenidos del API de nuestro servicio
export default productos = [{}, {
  id: 1,
  imagen: "https://picsum.photos/50?random=1",
  nombre: "Cosa 1",
  descripcion: "Este producto te mejorará la vida",
  stock: 10
},{
  id: 2,
  imagen: "https://picsum.photos/50?random=2",
  nombre: "Cosa 2",
  descripcion: "",
  stock: 10
},{
  id: 3,
  imagen: "https://picsum.photos/50?random=3",
  nombre: "Cosa 3",
  descripcion: "Súper ventas!",
  stock: ""
},{
  id: 4,
  imagen: "",
  nombre: "Cosa 4",
  descripcion: "Temporalmente agotado",
  stock: 0
}];
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

> **❓ Pregunta 27:** _La implementación de la funcionalidad anterior provoca un problema de usabilidad, ¿cuál y por qué ocurre?_

> **❓ Pregunta 28:** _¿Por qué se produciría un bucle infinito si añadimos `setCampos(campos + 1)` dentro de `useEffect`?_