# React
## Componentes
### Ficheros

React siempre parte de un componente raíz[^1] en el que estarán anidados otros que completan una página concreta. Normalmente, se suelen separar los componentes en diferentes ficheros para que sea más fácil encontrarlos, mantenerlos y reusarlos en diferentes páginas o componentes.

Para **compartir** un componente de un fichero hay que **exportarlo**, y para **utilizarlo** desde otro componente en otro fichero hay que **importarlo**:

| `Compartido.js` | `Padre.js` |
|-----------------|------------|
| `export default function Compartido() {}` | `import Compartido from './Compartido.js';` |


> **❓ Ejercicio 6:** _Corrige el siguiente código para que se exporten e importen correctamente los componentes utilizados en `App.js`._

<div class="sandpack" data-width="73"><pre data-file="App.js">
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
</pre><pre data-file="Figura.js">
function Figura({src, caption}) {
  return (
    &lt;figure>
      &lt;img src={src}/>
      &lt;figcaption>{caption}&lt;/figcaption>
    &lt;/figure>
  );
}
</pre><pre data-file="Tarjeta.js">
function Tarjeta({children}) {
  return &lt;div className="tarjeta">{children}&lt;/div>;
}
</pre><pre data-file="Cuadricula.js">
function Cuadricula({children}) {
  return &lt;div className="cuadricula">{children}&lt;/div>;
}
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

[^1]: En los ejemplos anteriores, ese componente raíz era `App`.