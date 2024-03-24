# Django
## Tests
### Extremo a extremo

Con el [`LiveServerTestCase`](https://docs.djangoproject.com/en/dev/topics/testing/tools/#liveservertestcase) de Django podemos hacer llamadas HTTP reales al servidor, ya que esta clase automáticamente lo levanta al empezar y lo para al finalizar.

Otra alternativa para hacer pruebas E2E, es utilizar herramientas externas de testing como [Postman](https://www.postman.com/), [Httpie](https://httpie.io/) o REST Client. Tienen como ventaja que permiten probar servidores desplegados en otras máquinas, y no ejecutándose en local.

En el caso de [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client#usage) podemos probar definiendo las peticiones en un fichero de texto:

```http
### Creación

POST http://localhost:8000/api/recurso/
Content-Type: application/json

{
  "campo": "petición"
}

### Recuperación

GET http://localhost:8000/api/recurso/1
Cabecera: valor

### Otras peticiones ...

```

> **❓ Ejercicio 24:** _En el fichero `api.http` del proyecto crea las peticiones a todos los endpoints del [API](../html/intro.md) creada, para probarlas con el plugin REST Client. Dependiendo de la petición, deberás incluir la cabecera `Cookie: session=valor-retornado-por-el-servidor-previamente`. Antes de probar, deberás levantar el servidor con: `python manage.py runserver`._

> **❓ Ejercicio 25:** _Añade una petición `PATCH` al fichero anterior similar a la de `PUT`. Explica su diferente comportamiento a partir de las respuestas recibidas cuando se envían todos o solo algunos campos en el cuerpo._