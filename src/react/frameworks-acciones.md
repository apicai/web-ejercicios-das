# React
## Frameworks
### Navegación
#### Acciones

Los componentes, además de presentar datos, permiten al usuario realizar **acciones que crean, actualizan o borran datos en el servidor**. React Router facilita implementar esas operaciones mediante su componente `<Form>` y una función de envío que definimos en el `action` de la configuración de la ruta.

```js
import { Form } from "react-router-dom";
...
export default function UnComponente() {
  return (
    <Form method="post" action="/una-ruta">
      ...
      <button type="submit">Enviar</button>
    </Form>
  );
}
```

```js
import { redirect } from "react-router-dom";
...
[{
  path: '/una-ruta',
  action: () => {
    fetch('/api/recurso/', {method: 'post', body: ...});
    return redirect('/otra-ruta');
  }
}, ... otras rutas ... ];
```

<div class="sandpack" data-height="350px" data-width="65"><pre data-file="Login.jsx">
import { Form, useNavigation } from "react-router-dom";
export default function Login() {
  const navigation = useNavigation();
  const busy = navigation.state === 'submitting' || 
               navigation.state === 'loading';
  return (
    &lt;>
      &lt;main>
        &lt;Form method="post" action="/login">
          &lt;fieldset disabled={busy}>
            &lt;legend>Login&lt;/legend>
            &lt;label>
              Email: &lt;input type="email" name="email" required/>
            &lt;/label>
            &lt;label>
              Clave: &lt;input type="password" name="pass" required/>
            &lt;/label>
          &lt;/fieldset>
          &lt;button type="submit" disabled={busy}>Entrar&lt;/button>
        &lt;/Form>
      &lt;/main>
      &lt;footer>
        {busy && &lt;>&lt;span className='spinner'>&lt;/span> Entrando ...&lt;/>}
      &lt;/footer>
    &lt;/>
  );
}
</pre><pre data-file="Inicio.jsx">
import { 
  Form, useLoaderData, useNavigation 
} from "react-router-dom";
export default function Inicio() {
  const datosUsuario = useLoaderData();
  const navigation = useNavigation();
  const busy = navigation.state === 'submitting' || 
               navigation.state === 'loading';
  return (
    &lt;>
      &lt;main>
        &lt;p>Bienvenido, {datosUsuario.email}.&lt;/p>
        &lt;button type="submit" disabled={busy}>Salir&lt;/button>
      &lt;/main>
      &lt;footer>
        {busy && &lt;>&lt;span className='spinner'>&lt;/span> Saliendo ...&lt;/>}
      &lt;/footer>
    &lt;/>
  );
}
</pre><pre data-file="styles.css" data-hidden="true">
@font-face {
  font-family: "Virgil";
  src: url("https://virgil.excalidraw.com/Virgil.woff2");
}
body {
  margin: 10px;
  box-sizing: border-box;
  font-family: Virgil, Segoe UI Emoji;
}
label {
  display: block;
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
button {
  margin: 10px;
}
</pre><pre data-file="api.js" data-hidden="true">
const user = {email: null};
export function login(email, pass) {
  user.email = email;
  const body = JSON.stringify({});
  return fetch('https://httpbin.org/delay/2', {method: 'post', body});
}
export function logout() {
  return fetch('https://httpbin.org/delay/1');
}
export function getUser() {
  return fetch('https://httpbin.org/delay/1').then(() => user);
}
</pre><pre data-file="main.jsx" data-active="true">
import React from "react";
import { createRoot } from "react-dom/client";
import { 
  redirect, createBrowserRouter, RouterProvider 
} from "react-router-dom";
import { login, logout, getUser } from "./api.js";
import Login from "./Login";
import Inicio from "./Inicio";
import "./styles.css";
// Configuración de rutas y componentes
const router = createBrowserRouter([{
  path: "/",
  element: &lt;Login/>
},{
  path: "/login",
  action: async ({ request }) => {
    const formData = await request.formData();
    const loginRes = await login(
      formData.get("email"), formData.get("pass"));
    return redirect(`/inicio`);
  }
},{
  path: "/inicio",
  element: &lt;Inicio/>,
  loader: () => getUser()
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

> **❓ Ejercicio 36:** _Estudia el código anterior y comprende cómo se ha implementado el login. Completa el código para que al pulsar el botón "Salir" se llame al API `logout()` y se redirija a la ruta inicial de login._