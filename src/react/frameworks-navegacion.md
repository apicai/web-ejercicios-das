# React
## Frameworks
### Navegación

[React Router](https://reactrouter.com/en/main/start/overview) es una librería que gestiona la navegación y la carga de los componentes React dentro de una página.

Para ello hay que **crear una configuración** que indica qué componente se muestra para cada ruta:

```js
[{
  path: 'una-ruta',
  element: <UnComponente/>,
}, ... otras rutas ... ];
```

Y en lugar de utilizar los habituales `<a href='...'>...</a>`, todos **los enlaces que intervienen en la navegación entre componentes** deben construirse con:

```html
<NavLink to='una-ruta'>Muestra UnComponente</NavLink>
```

En ocasiones, un **componente padre** tiene una sección (`<Outlet/>`) donde alternativamente **muestra un hijo diferente dependiendo de la ruta actual**. Esas rutas y los componentes hijos asociados se definen en la configuración anterior bajo la propiedad `children`.

<div class="sandpack" data-height="350px" data-width="55" data-navigator="true"><pre data-file="Padre1.jsx">
import { Outlet, NavLink } from "react-router-dom";
export default function Padre1() {
  return (
    &lt;>
      &lt;header>
        &lt;nav>
          &lt;ul>
            &lt;li>
              &lt;NavLink to='seccion1'>Sección 1&lt;/NavLink>
            &lt;/li>
            &lt;li>
              &lt;NavLink to='seccion2'>Sección 2&lt;/NavLink>
            &lt;/li>
          &lt;/ul>
        &lt;/nav>
      &lt;/header>
      {/* Aquí dentro se mostrarán los hijos */}
      &lt;main>&lt;Outlet/>&lt;/main>
      &lt;footer>Este componente en marrón es Padre1 en la ruta /&lt;/footer>
    &lt;/>
  );
}
</pre><pre data-file="Padre2.jsx">
import { Outlet, NavLink } from "react-router-dom";
export default function Padre2() {
  return (
    &lt;>
      &lt;header className="azul">
        &lt;nav>
          &lt;ul>
            &lt;li>
              &lt;NavLink to='seccion3'>Sección 3&lt;/NavLink>
            &lt;/li>
            &lt;li>
              &lt;NavLink to='seccion4'>Sección 4&lt;/NavLink>
            &lt;/li>
            &lt;li>
              &lt;a>Sección 5&lt;/a>
            &lt;/li>
          &lt;/ul>
        &lt;/nav>
      &lt;/header>
      {/* Aquí dentro se mostrarán los hijos */}
      &lt;main>&lt;Outlet/>&lt;/main>
      &lt;footer className="azul">Este componente en azul es Padre2 en la ruta /padre2&lt;/footer>
    &lt;/>
  );
}
</pre><pre data-file="Seccion1.jsx" data-hidden="true">
import { NavLink } from "react-router-dom";
export default function Seccion1() {
  return (
    &lt;article>
      &lt;p>Este componente es Seccion1&lt;/p>
      &lt;NavLink to='/padre2'>
        &lt;button type="button">Pulsa para ir a Padre2&lt;/button>
      &lt;/NavLink>
    &lt;/article>
  );
}
</pre><pre data-file="Seccion2.jsx" data-hidden="true">
import { NavLink } from "react-router-dom";
export default function Seccion2() {
  return (
    &lt;article>
      &lt;p>Este componente es Seccion2&lt;/p>
      &lt;NavLink to='/seccion1'>
        &lt;button type="button">Pulsa para ir a Seccion1&lt;/button>
      &lt;/NavLink>
    &lt;/article>
  );
}
</pre><pre data-file="Seccion3.jsx" data-hidden="true">
import { NavLink } from "react-router-dom";
export default function Seccion3() {
  return (
    &lt;article>
      &lt;p>Este componente es Seccion3&lt;/p>
    &lt;/article>
  );
}
</pre><pre data-file="Seccion4.jsx" data-hidden="true">
import { NavLink } from "react-router-dom";
export default function Seccion4() {
  return (
    &lt;article>
      &lt;p>Este componente es Seccion4&lt;/p>
      &lt;NavLink to='/padre2/seccion3'>
        &lt;button type="button">Pulsa para ir a Seccion3&lt;/button>
      &lt;/NavLink>
    &lt;/article>
  );
}
</pre><pre data-file="Seccion5.jsx">
import { NavLink } from "react-router-dom";
export default function Seccion5() {
  return (
    &lt;article>
      &lt;p>Este componente es Seccion5&lt;/p>
      &lt;button type="button">Pulsa para ir a Seccion1&lt;/button>
    &lt;/article>
  );
}
</pre><pre data-file="styles.css" data-hidden="true">
@font-face {
  font-family: "Virgil";
  src: url("https://virgil.excalidraw.com/Virgil.woff2");
}
body {
  margin: 0;
  font-family: Virgil, Segoe UI Emoji;
}
header {
  background-color: #503C3C;
  color: #fff;
  display: flex;
  padding: 10px 0 10px 0;
}
header.azul {
  background-color: #00A9FF !important;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
}
nav a:hover, .active {
  background-color: #A87C7C;
}
.azul nav a:hover, .azul .active {
  background-color: #89CFF3 !important;
}
nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
}
main {
  text-align: center;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px dotted #503C3C;
  padding: 5px;
  font-size: 9px;
  color: #503C3C;
}
footer.azul {
  border-top: 1px dotted #00A9FF;
  color: #00A9FF;
}
</pre><pre data-file="main.jsx" data-active="true">
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Padre1 from "./Padre1";
import Padre2 from "./Padre2";
import Seccion1 from "./Seccion1";
import Seccion2 from "./Seccion2";
import Seccion3 from "./Seccion3";
import Seccion4 from "./Seccion4";
import Seccion5 from "./Seccion5";
import "./styles.css";
// Configuración de rutas y componentes
const router = createBrowserRouter([{
  path: "/",
  element: &lt;Padre1/>,
  children: [{
    path: "seccion1",
    element: &lt;Seccion1/>,
  },{
    path: "seccion2",
    element: &lt;Seccion2/>,
  }],
}, {
  path: "/padre2",
  element: &lt;Padre2/>,
  children: [{
    path: "seccion3",
    element: &lt;Seccion3/>,
  },{
    path: "seccion4",
    element: &lt;Seccion4/>,
  },],
}]);
createRoot(document.getElementById("root")).render(
  &lt;React.StrictMode>
    &lt;RouterProvider router={router} />
  &lt;/React.StrictMode>
);
</pre><pre data-file="package.json" data-hidden="true">
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.0",
    "react-router-dom": "^6.21.2"
  },
  "main": "/main.jsx",
  "devDependencies": {}
}
</pre></div>

> **❓ Ejercicio 33:** _Estudia el código anterior y comprende cómo se ha configurado la navegación entre componentes. Completa el código para que el componente con la Sección 5 se muestre al pulsar en dicho menú. Después, completa el código de Sección5 para que funcione el botón en su interior._