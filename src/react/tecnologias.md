# React
## Tecnologías

JS y HTML son las tecnologías nativas[^1] del desarrollo web. Sin embargo, crear aplicaciones web directamente con ellas es costoso y complejo, en particular por su API del DOM[^2].

React simplifica el desarrollo controlando por su cuenta el DOM. Mediante un lenguaje intermedio (JSX) podemos combinar JS y HTML, y definir cómo se deben mostrar los componentes gráficos sin usar el DOM.

<object type="image/svg+xml" data="./img/react.rendering.steps.svg" width="100%"></object>

Esta arquitectura permite generar interfaces de usuario para otras plataformas (móvil, TV, escritorio, etc) siguiendo la misma filosofía, únicamente sustituyendo el último paso del proceso[^3].

[^1]: Las entiende directamente el navegador sin ningún tipo de compilado

[^2]: El Document Object Model hace de puente entre JS y HTML, permitiendo actualizar programáticamente la interfaz de usuario

[^3]: Por ejemplo, con [React Native](https://reactnative.dev/) se generarán componentes nativos de iOS (`UITextField`, `UIImageView`, `UIScrollView`, etc)