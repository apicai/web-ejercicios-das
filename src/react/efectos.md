# React
## Efectos

Hasta ahora, hemos visto que los repintados de los componentes se disparaban por interacciones del usuario. Pero, ¿y si necesitamos repintar sin que haya un evento de usuario de por medio? Por ejemplo, tras descargar los datos iniciales a presentar en el componente o para enviar estadísticas internas de uso del mismo.

Para estos casos usamos los efectos de React, que **contienen código que se ejecuta después del renderizado** del componente:

<object type="image/svg+xml" data="./img/hooks.lifecycle.svg" width="100%"></object>

> **❓ Pregunta 1:** _¿Cómo podría producirse un bucle infinito de repintados viendo el diagrama anterior?_

> **❓ Pregunta 2:** _¿Cómo podríamos hacer que un elemento del DOM obtuviera el foco al montar por primera vez el componente React que lo contiene? En el ejemplo de uso de Refs [anterior](./refs-dom.md), el foco se obtenía tras una interacción del usuario. En este caso queremos poner el foco sin intervención del usuario._