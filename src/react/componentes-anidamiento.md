# React
## Componentes
### Anidamiento

Al igual que en HTML, es habitual anidar unos componentes React en otros para añadirles funcionalidad y/o modificar su presentación.

<div class="sandpack" data-height="400px" data-width="60"><pre data-file="App.js">
// Un componente normal (hijo)
function Figura({src, caption}) {
  return (
    &lt;figure>
      &lt;img src={src}/>
      &lt;figcaption>{caption}&lt;/figcaption>
    &lt;/figure>
  );
}
// Los componentes padre reciben a sus hijos (anidados) en la prop "children"
function Tarjeta({children}) {
  return &lt;div className="tarjeta">{children}&lt;/div>;
}
function Cuadricula({children}) {
  return &lt;div className="cuadricula">{children}&lt;/div>;
}
// Componente principal o raíz
export default function App() { 
  return (
    &lt;Cuadricula>
      &lt;Tarjeta>
        &lt;Figura src="https://picsum.photos/50" caption="Fig.1"/>
      &lt;/Tarjeta>
      &lt;Tarjeta>
        &lt;Figura src="https://picsum.photos/50" caption="Fig.2"/>
      &lt;/Tarjeta>
      &lt;Tarjeta>
        &lt;Figura src="https://picsum.photos/50" caption="Fig.3"/>
      &lt;/Tarjeta>
      &lt;Tarjeta>
        &lt;Figura src="https://picsum.photos/50" caption="Fig.4"/>
      &lt;/Tarjeta>
      &lt;Tarjeta>
        &lt;Figura src="https://picsum.photos/50" caption="Fig.5"/>
      &lt;/Tarjeta>
      &lt;Tarjeta>
        &lt;Figura src="https://picsum.photos/50" caption="Fig.6"/>
      &lt;/Tarjeta>
    &lt;/Cuadricula>
  );
}
</pre><pre data-file="styles.css">
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

> **❓ Pregunta 4:** _¿Cuál será el código HTML resultante del ejemplo anterior que acabará mostrando el navegador?_

> **❓ Ejercicio 5:** _Modifica el JSX del componente `App` anterior para que se muestre de la siguiente manera:_
>
> <object type="image/svg+xml" data="./img/anidamiento.ejercicio.2.svg"></object>