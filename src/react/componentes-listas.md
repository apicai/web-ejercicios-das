# React
## Componentes
### Listas

En las aplicaciones web, son habituales las listas (de productos, de contactos, de mensajes, etc.). En React se utiliza la función [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) para presentarlas.

<div class="sandpack" data-width="60" data-height="350px"><pre data-file="App.js">
import productos from './api.js';
export default function App() {
  return (
    &lt;Cuadricula>
      {productos.map(prod => 
        &lt;Tarjeta>
          &lt;Figura src={prod.img} caption={prod.name}/>
        &lt;/Tarjeta>
      )}
    &lt;/Cuadricula>
  );
}
function Figura({src, caption}) {
  return (
    &lt;figure>
      &lt;img src={src}/>
      &lt;figcaption>{caption}&lt;/figcaption>
    &lt;/figure>
  );
}
function Tarjeta({children}) {
  return &lt;div className="tarjeta">{children}&lt;/div>;
}
function Cuadricula({children}) {
  return &lt;div className="cuadricula">{children}&lt;/div>;
}
</pre><pre data-file="api.js">
// Simula nuestro catálogo de productos
// obtenidos del API de nuestro servicio
export default productos = [{
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
}
body {
  font-family: sans-serif;
}
</pre></div>

> **❓ Ejercicio 7:** _React necesita identificar unívocamente cada elemento de la lista para poder optimizar su repintado cuando cambia (al ordenarla, o al añadir o borrar elementos). Observa el error que aparece en la consola e intenta resolverlo leyendo la referencia indicada en el mensaje._

> **❓ Ejercicio 8:** _Otra funcionalidad típica en las aplicaciones web es permitir al usuario filtrar los resultados obtenidos. Modifica el código anterior para mostrar solo los productos con stock, utilizando la función [`filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)._
