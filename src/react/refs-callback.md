# React
## Refs
### Callback

Cuando se necesitan referencias a muchos elementos (como en el caso de un formulario con muchos campos), se utiliza el siguiente patrón para no tener que crear muchos `useRef`:

```js
import { useRef } from 'react';
...
export default function Componente() {
  // El ref inicial es un objeto vacío que se irá rellenando
  const camposRef = useRef({});
  ...
  // React llamará a esta función con el elemento DOM asociado
  function campoRef(domElem) {
    // Guardamos los elementos en el objeto del ref
    if (domElem) camposRef.current[domElem.id] = domElem;
  }
  ...
  return (
    {/* Este elemento se guardará en camposRef.current.campo1 */}
    <input id="campo1" ref={campoRef}/>
    {/* Este elemento se guardará en camposRef.current.campo2 */}
    <input id="campo2" ref={campoRef}/>
    ...
  );
}
```

A la función que se pasa dentro de `ref={}` se le llama "ref callback" por que **React la llamará pasándo el elemento DOM asociado**. En los siguientes ejemplos de componentes usaremos este patrón a menudo.
