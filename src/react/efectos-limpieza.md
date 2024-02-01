# React
## Efectos
### Limpieza

Algunos efectos realizan tareas que deben "pararse" o "limpiarse". Por ejemplo, si se conectan o solicitan algo deberían desconectarse o cancelar/ignorar las solicitudes pendientes. Para ello, React espera que el código del `useEffect` retorne un función de limpieza, que ejecutará cuando cambian sus parámetros (dependencias) o desmonte el componente.

```js
useEffect(() => { 
  // Código que requiere "deshacerse" ...
  return () => { /* Código que lo deshace ... */ }
}, [dep1, ...]);
```

El siguiente componente utiliza un efecto para cargar los datos iniciales del producto seleccionado. Devuelve una función que permite ignorar solicitudes de productos que ya no están seleccionados.

<div class="sandpack" data-height="400px" data-width="70"><pre data-file="App.js">
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import fetchProd from './api.js';
&nbsp;
export default function App() {
  const camposRef = useRef({});  
  const [idProd, setIdProd] = useState(1);
  const [campos, setCampos] = useState(null);
  useEffect(() => {
    let ignore = false;
    setCampos(null);
    fetchProd(idProd).then(result => {
      if (ignore) return;
      setCampos(result);
      focoCampoVacio(camposRef.current);
    });
    return () => ignore = true;
  }, [idProd]);
  function cambioCampo(e) {
    setCampos({...campos, [e.target.id]: e.target.value});
  }
  function campoRef(domElem) {
    if (domElem) camposRef.current[domElem.id] = domElem;
  }
  return (
    &lt;form>
      &lt;label htmlFor="producto">Producto:&lt;/label>
      &lt;select id="producto" value={idProd}
              onChange={e => setIdProd(e.target.value)}>
        &lt;option value="1">Cosa 1&lt;/option>
        &lt;option value="2">Cosa 2&lt;/option>
        &lt;option value="3">Cosa 3&lt;/option>
        &lt;option value="4">Cosa 4&lt;/option>
      &lt;/select>
      {!campos && &lt;small> Cargando...&lt;/small>}
      &lt;hr />
      &lt;label htmlFor="imagen">Imagen:&lt;/label>
      &lt;input id="imagen" disabled={!campos} ref={campoRef}
             value={campos ? campos.imagen : ''} 
             onChange={cambioCampo}/>
      &lt;label htmlFor="stock">Existencias:&lt;/label>
      &lt;input id="stock" disabled={!campos} ref={campoRef}
             value={campos ? campos.stock : ''} 
             onChange={cambioCampo}/> 
      &lt;label htmlFor="descripcion">Descripción:&lt;/label>
      &lt;textarea id="descripcion" disabled={!campos} ref={campoRef}
                value={campos ? campos.descripcion : ''} 
                onChange={cambioCampo}/>
    &lt;/form>
  );
}
// Función auxiliar para poner el foco en el 1er campo vacío
function focoCampoVacio(campos) {
  setTimeout(_ => {
    const campoVacio = Object.values(campos).find(c => !c.value);
    if (campoVacio) campoVacio.focus();
  }, 200);
}
</pre><pre data-file="api.js" data-hidden="true">
// Simula nuestro catálogo de productos
// obtenidos del API de nuestro servicio
const productos = [{
  id: 1,
  imagen: "https://picsum.photos/50?random=1",
  nombre: "Cosa 1",
  descripcion: "Cosa 1 te mejorará la vida",
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
  descripcion: "Cosa 3 es un súper ventas!",
  stock: ""
},{
  id: 4,
  imagen: "",
  nombre: "Cosa 4",
  descripcion: "Cosa 4 está temporalmente agotado",
  stock: 0
}];
export default function fetchProd(id) {
  return new Promise(resolve => setTimeout(_ => {
    resolve(productos[id-1]);
  }, id * 1000));
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
small {
  color: gray;
}
</pre></div>

> **❓ Ejercicio 30:** _Explica por qué es necesaria la dependencia `[idProd]` en el efecto._

> **❓ Ejercicio 31:** _Elimina la función de limpieza del efecto. A continuación, selecciona el producto "Cosa 4" y, seguidamente, sin esperar a que carguen sus datos, selecciona el "Cosa 1". Explica qué ha sucedido, por qué, y cómo la función de limpieza lo resuelve._