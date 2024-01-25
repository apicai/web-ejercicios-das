# React
## Construcción

Hasta ahora hemos utilizado React en un sandbox[^1]. En un proyecto real, es necesario un proceso de construcción que genera los ficheros de la aplicación web optimizados[^2] a desplegar en un servidor web en producción.

<object type="image/svg+xml" data="./img/construccion.svg" width="100%"></object>

NodeJS es el entorno de ejecución que nos permite montar el entorno de desarrollo local y construir el proyecto React. Instala los [prerrequisitos](./prerrequisitos.md) y ejecuta en un terminal (PowerShell en Windows) los siguientes comandos:

1. ```bash
   npm create vite@latest mi-app-react -- --template react
   ```
1. ```bash
   cd mi-app-react
   npm install
   npm run dev
   ```
1. Teclea <kbd>o</kbd> <kbd>↲</kbd> en el terminal
1. Abre el directorio `mi-app-react` con el VSCode, y modifica el fichero `src/App.jsx` varias veces y observa el resultado en el navegador
1. Vuelve al terminal y teclea <kbd>q</kbd> <kbd>↲</kbd>, y ejecuta:
   ```bash
   npm run build
   npm run preview
   ```
1. Vuelve a repetir los pasos 3 y 4

> **❓ Ejercicio:** _Observando el resultado de los comandos ejecutados y el comportamiento del entorno, explica qué hace cada comando `npm`[^3] asociándolos a los símbolos ⓐⓑⓒⓓⓔ en el diagrama anterior._

[^1]: En concreto, en un entorno de desarrollo en la nube llamado [Sandpack](https://sandpack.codesandbox.io/), que viene con todo lo necesario para probar código en React

[^2]: La optimización consiste en ["transpilar"](https://es.wikipedia.org/wiki/Transpilador) el código para hacerlo compatible con la versión de JS soportada por la mayoría de navegadores, y en paquetizar todas las dependencias y el código del proyecto (eliminando el código no utilizado, ["minificando"](https://en.wikipedia.org/wiki/Minification_(programming)) el código para reducir su tamaño, y dividiéndolo en módulos independientes para cargar sólo los necesarios al entrar)

[^3]: [npm](https://en.wikipedia.org/wiki/Npm) es el gestor de dependencias de NodeJS, que también permite ejecutar scripts relacionados con ellas