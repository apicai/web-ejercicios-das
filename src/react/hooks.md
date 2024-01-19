# React
## Hooks

Los `useState`, `useRef` y `useEffect` que hemos visto se denominan ["hooks" en React](https://react.dev/reference/react/hooks). Nos permiten añadir funcionalidad al componente para que React la llame en los momentos adecuados. A continuación, resumimos los tipos de hooks más importantes.

| Hook | Objetivo | Repintado | Casos | Uso |
|------|----------|-----------|-------|------------|
| [**`useState`**](https://react.dev/reference/react/useState) | Guarda variables para el repintado | Disparado al cambiar el valor del estado | Tras interacciones del usuario u otros eventos | Frecuente |
| [**`useRef`**](https://react.dev/reference/react/useRef) | Guarda variables no relacionadas con el pintado | No lo dispara | Para acceder a los elementos del DOM y timeout IDs | Esporádico |
| [**`useEffect`**](https://react.dev/reference/react/useEffect) | Código a ejecutar tras el repintado | Puede dispararlo si cambia estados | Peticiones de datos a presentar en el componente, sincronizaciones con sistemas externos, etc | A evitar |
| [**`useContext`**](https://react.dev/reference/react/useContext) | Para pasar props a componentes hijos en diferentes niveles de anidamiento | Disparado al cambiar de valor | Para pasar el usuario logado, el theme utilizado, el idioma seleccionado, etc. | En aplicaciones con muchos componentes anidados |
| [**`useMemo`**](https://react.dev/reference/react/useMemo) | Cachea el resultado de un cálculo utilizado en el repintado | Lo evita si se usa su valor cacheado | Para evitar repetir cálculos costosos entre repintados | Cuando se manejan muchos datos |
| [**`useCallback`**](https://react.dev/reference/react/useCallback) | Cachea una función utilizada como prop o dependencia | Lo evita si se usa su función cacheada | Para evitar renderizar todo el árbol de componentes hijos | En aplicaciones con muchos componentes anidados |
| [**A medida**](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) | Combinar varios hooks para dar una funcionalidad común | Disparado si usa hooks que lo disparan | Para compartir lógica entre componentes, en librerías | A fomentar |



