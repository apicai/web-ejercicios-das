# React
## Efectos
### Dependencias

**Para evitar que el efecto se ejecute tras cada repintado**, se le puede pasar una lista de dependencias[^1] que serán comparadas entre repintados: si no cambian no se ejecutará el código del efecto.

```js
useEffect(() => { 
  // Se ejecuta solo al montar el componente por 1ra vez
}, []);
...
useEffect(() => { 
  // Se ejecuta al montar y, después, si dep1 o dep2 cambian
}, [dep1, dep2]);
```

> **❓ Pregunta:** _¿Cómo se arreglaría el problema de usabilidad del componente de la página anterior?_

[^1]: En general, serán estados o props del componente, o cualquier variable calculada para el repintado