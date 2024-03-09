# React frameworks
## Estilos

Existen varios **sistemas para gestionar la presentación** de una aplicación React:
- Utilizando un CSS global para todos los componentes[^1]
- Importando un CSS específico para cada componente
- Utilizando [modulos CSS](https://github.com/css-modules/css-modules) para evitar colisiones de estilos entre CSS de distintos componentes
- Definiendo el CSS en JS utilizando una [librería](https://emotion.sh/docs/introduction)
- Utilizando un framework CSS con [estilos](https://tailwindcss.com/) o [componentes UI](https://mui.com/material-ui/) predefinidos

> **❓ Ejercicio 7:** _Abre con el VSCode el proyecto `mi-app-react` generado anteriormente, e identifica cuál de los sistemas anteriores utiliza para gestionar la presentación._

> **❓ Ejercicio 8:** _Ejecuta `npm run dev` en el terminal y teclea <kbd>o</kbd> <kbd>↲</kbd>, añade la clase CSS `.card {padding: 20em;}` al fichero `src/index.css`, e identifica el problema que se produce con los estilos._

> **❓ Ejercicio 9:** _Para solventar el problema:_
> 1. _Crea el fichero `src/App.module.css` con este contenido: `.card {padding: 2em;}`_
> 2. _En `src/App.jsx` añade `import styles from './App.module.css';` y cambia `className="card"` por `className={styles.card}`_
>
> _Utilizando el inspector de elementos del navegador, identifica el nombre final que se ha dado a la clase CSS, y explica por qué ya no sucede el problema del anterior ejercicio._

[^1]: Este sistema es el nativo del navegador y no requiere de ningún sistema de construcción como el resto.