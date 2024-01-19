# React
## Estado
### Arrays

En otras ocasiones interesa tener **un array en el estado**, por ejemplo para la lista de productos en el carrito de la compra online. Para cambiar dicho estado, será necesario crear un nuevo array con los elementos añadidos (usando [`[...array]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals)), eliminados (usando [`filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)) o modificados (con [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).

<div class="sandpack" data-width="63" data-height="400px"><pre data-file="App.js">
import { useState } from 'react';
import Figura from './Figura.js';
import Tarjeta from './Tarjeta.js';
import Cuadricula from './Cuadricula.js';
import productos from './data.js';
&nbsp;
export default function App() {
  const [carrito, setCarrito] = useState([]);
  function actualizaCarrito(prod) {
    // Primero, intentamos eliminarlo del array
    let nuevoCarrito = carrito.filter(id => prod.id !== id);
    // Si no estaba en el array, entonces lo añadimos
    if (nuevoCarrito.length === carrito.length) {
      nuevoCarrito = [...carrito, prod.id];
    }
    setCarrito(nuevoCarrito);
  }
  function nombreProducto(prod) {
    return (carrito.includes(prod.id) ? '🛍' : '') + 
           prod.name;
  }
  return (
  &lt;>
    &lt;Cuadricula>
      {productos.map(prod => 
        &lt;Tarjeta onSelect={() => actualizaCarrito(prod)}>
          &lt;Figura src={prod.img} 
                  caption={nombreProducto(prod)}/>
        &lt;/Tarjeta>
      )}
    &lt;/Cuadricula>
    &lt;hr/>
    &lt;p>
      {carrito.length} de {productos.length} productos en el carrito
    &lt;/p>
  &lt;/>);
}
</pre><pre data-file="Figura.js" data-hidden="true">
export default function Figura({src, caption}) {
  return (
    &lt;figure>
      &lt;img src={src} height="50"/>
      &lt;figcaption>{caption}&lt;/figcaption>
    &lt;/figure>
  );
}
</pre><pre data-file="Tarjeta.js" data-hidden="true">
export default function Tarjeta({children, onSelect}) {
  return (
    &lt;div className="tarjeta" onClick={onSelect}>
      {children}
    &lt;/div>
  );
}
</pre><pre data-file="Cuadricula.js" data-hidden="true">
export default function Cuadricula({children}) {
  return &lt;div className="cuadricula">{children}&lt;/div>;
}
</pre><pre data-file="data.js" data-hidden="true">
// Simula nuestro catálogo de productos
// obtenidos del API de nuestro servicio
export default datos = [{
  id: 1,
  img: "https://picsum.photos/50?random=1",
  name: "Producto1",
  stock: 0
},{
  id: 2,
  img: "https://picsum.photos/50?random=2",
  name: "Producto2",
  stock: 10
},{
  id: 3,
  img: "https://picsum.photos/50?random=3",
  name: "Producto3",
  stock: 0
},{
  id: 4,
  img: "https://picsum.photos/50?random=4",
  name: "Producto4",
  stock: 10
},{
  id: 5,
  img: "https://picsum.photos/50?random=5",
  name: "Producto5",
  stock: 0
},{
  id: 6,
  img: "https://picsum.photos/50?random=6",
  name: "Producto6",
  stock: 10
},{
  id: 7,
  img: "https://picsum.photos/50?random=7",
  name: "Producto7",
  stock: 0
},{
  id: 8,
  img: "https://picsum.photos/50?random=8",
  name: "Producto8",
  stock: 10
},{
  id: 9,
  img: "https://picsum.photos/50?random=9",
  name: "Producto9",
  stock: 0
}];
</pre><pre data-file="styles.css" data-hidden="true">
.tarjeta {
  width: fit-content;
  margin: 5px;
  padding: 10px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
}
.cuadricula {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.cuadricula > * {
  flex: 0 0 auto;
}
figure {
  margin: 0;
}
figcaption {
  font-size: 0.5em;
  line-height: 1em;
}
body {
  font-family: sans-serif;
}
p {
  font-size: 0.8rem;
}
</pre></div>

> **❓ Ejercicio:** _Añade un botón que permita mostrar sólo los productos en el carrito._