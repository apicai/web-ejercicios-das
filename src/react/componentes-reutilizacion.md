# React
## Componentes
### Reutilización

Los componentes React funcionan como etiquetas HTML (`<img>`, `<button>`, etc.) que pueden ser reutilizadas a lo largo de una página web y recibir atributos para hacerlos configurables. 

<div class="sandpack" data-width="70" data-height="400px"><pre data-file="App.js">
// Se declaran con la 1ra letra en mayúscula,
// junto con las propiedades que pueden recibir
function Figura({src, caption}) {
  return (
    &lt;figure>
      &lt;img src={src}/>
      &lt;figcaption>{caption}&lt;/figcaption>
    &lt;/figure>
  );
}
export default function App() { 
  return (
    &lt;section>
      {/* Se utiliza como una etiqueta HTML */}
      &lt;Figura src="https://picsum.photos/50" caption="Fig.1"/>
      &lt;Figura src="https://picsum.photos/75" caption="Fig.2"/>
      &lt;Figura/>
    &lt;/section>
  );
}
</pre></div>

Los atributos de los componentes en React se llaman "props". Opcionalmente, pueden tener valores por defecto: `function NombreComponente({prop1 = valor, prop2, ...})`.

> **❓ Ejercicio 2:** _Modifica el componente `Figura` anterior para que muestre "Sin título" si no se le pasa ningún `caption`._

> **❓ Ejercicio 3:** _Modifica el ejemplo anterior para que, cuando no se pase `url`, se devuelva `<h1>⚠️</h1>` en vez de `<img...>`, utilizando el [operador condicional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) de JS._