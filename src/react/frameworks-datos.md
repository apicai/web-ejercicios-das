# React
## Frameworks
### Navegación
#### Datos

Es habitual que **los componentes presenten datos provenientes del servidor**. React Router nos facilita cargar esos datos cuando se navegue a dichos componentes. 

Para ello, en la configuración de cada ruta y componente se indica la función que carga sus datos, y el componente a cargar en caso de que falle su recuperación:

```js
[{
  path: 'una-ruta',
  element: <UnComponente/>,
  errorElement: <ComponenteError/>,
  loader: () => fetch('/api/un-recurso')
}, ... otras rutas ... ];
```

En el componente se recuperan los datos, cargados durante la navegación, utilizando:

```js
import {useLoaderData} from "react-router-dom";
...
export default function UnComponente() {
  const datosComponente = useLoaderData();
  ...
}
```

<div class="sandpack" data-height="350px" data-width="65" data-navigator="true"><pre data-file="Padre.jsx">
import { Outlet, NavLink, useNavigation } from "react-router-dom";
export default function Padre() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  function getLinkStyle({ isActive, isPending }) {
    return isPending ? "pending" : isActive ? "active" : "";
  }
  return (
    &lt;>
      &lt;header>
        &lt;nav>
          &lt;ul>
            &lt;li>
              &lt;NavLink to='seccion1' 
                className={getLinkStyle}>Sección 1&lt;/NavLink>
            &lt;/li>
            &lt;li>
              &lt;NavLink to='seccion2' 
                className={getLinkStyle}>Sección 2&lt;/NavLink>
            &lt;/li>
          &lt;/ul>
        &lt;/nav>
      &lt;/header>
      &lt;main className={isLoading ? "loading" : ""}>
        &lt;Outlet/>
      &lt;/main>
      &lt;footer>
        {isLoading && &lt;>&lt;span className='spinner'>&lt;/span> Cargando datos ...&lt;/>}
      &lt;/footer>
    &lt;/>
  );
}
</pre><pre data-file="Seccion1.jsx" data-hidden="true">
import { useLoaderData } from "react-router-dom";
export default function Seccion1() {
  const datosComponente = useLoaderData();
  return (
    &lt;article>
      &lt;p>Has mandado {Object.keys(datosComponente.headers).length} cabeceras&lt;/p>
    &lt;/article>
  );
}
</pre><pre data-file="Seccion2.jsx">
import { useLoaderData } from "react-router-dom";
export default function Seccion2() {
  const datosComponente = {};
  return (
    &lt;article>
      &lt;p>Tu IP es {datosComponente.origin}&lt;/p>
    &lt;/article>
  );
}
</pre><pre data-file="Error.jsx" data-hidden="true">
export default function Error() {
  return (
    &lt;article>
      &lt;h1>⚠️&lt;/h1>
      &lt;p>Error al cargar los datos&lt;/p>
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
  height: 0.7rem;
  font-size: 0.7rem;
  color: #503C3C;
}
.pending {
  color: gold;
}
.loading {
  opacity: 0.25;
  transition: opacity 200ms;
  transition-delay: 100ms;
}
.spinner {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='black' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9' /%3E%3C/svg%3E");
  animation: spin 1s infinite linear;
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</pre><pre data-file="api.js">
export function getHeaders() {
  return fetch('https://httpbin.org/delay/2');
}
export function getIp() {
  return fetch('https://httpbin.org/delay/1');
}
export function getDataWithError() {
  throw new Error('¡Uyyy!');
}
</pre><pre data-file="main.jsx" data-active="true">
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getHeaders, getIp, getDataWithError } from "./api.js";
import Padre from "./Padre";
import Seccion1 from "./Seccion1";
import Seccion2 from "./Seccion2";
import Error from "./Error";
import "./styles.css";
// Configuración de rutas y componentes
const router = createBrowserRouter([{
  path: "/",
  element: &lt;Padre/>,
  children: [{
    path: "seccion1",
    element: &lt;Seccion1/>,
    errorElement: &lt;Error/>,
    loader: () => getHeaders()
  },{
    path: "seccion2",
    element: &lt;Seccion2/>,
    errorElement: &lt;Error/>
  }],
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

> **❓ Ejercicio 34:** _Estudia el código anterior y comprende cómo se ha configurado la carga de los datos de la "Sección 1". Completa el código para que en la "Sección 2" se carguen los datos que devuelve el API `getIp()`. Luego, utiliza `getDataWithError()` en su lugar y describe el comportamiento._

> **❓ Ejercicio 35:** _Identifica en `Padre.jsx` el código que detecta que se están cargando datos para modificar la presentación e indicarlo al usuario._