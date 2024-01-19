# HTTP
## Peticiones

La petición HTTP más sencilla se compone de `{MÉTODO} /{recurso} HTTP/{version}\r\n\r\n`. El método[^1] indica la acción a realizar, y el recurso[^2] indica la entidad sobre la que realizar la acción. Adicionalmente, se pueden incluir cabeceras y un cuerpo para enviar datos.

1. `GET` permite recuperar el recurso de la ruta indicada. 

   > **❓ Ejercicio 5:** _Utilizando `telnet` construye una petición `GET` a `http://httpbin.org/anything?param1=value1&param2=value2`._

   > 🔍 **Nota:** _[httpbin.org](https://httpbin.org) es un servicio para jugar con diversas funcionalidades de HTTP. La petición a `/anything`, por ejemplo, nos responde con lo que le ha llegado en la petición._

   > **❓ Ejercicio 6:** _Realiza la misma petición pero con el valor del `param1` cambiado: `http://httpbin.org/anything?param1=?&#=&param2=value2`. ¿Qué problema sucede con el nuevo valor de `param1` (compara la respuesta del ejercicio 1 con la del 2)?_

   > **❓ Ejercicio 7:** _Realiza la misma petición pero con el valor del `param1` cambiado: `http://httpbin.org/anything?param1=%3F%26%23%3D&param2=value2`. Razona la necesidad de [codificar los valores](#2) comparando la respuesta del ejercicio 2 con la del 3._

1.  `POST` permite enviar datos al servidor. Conéctate con `telnet` al servicio anterior y manda:
    ```http
    POST /anything HTTP/1.0
    Content-Length: 5

    12345

    ```
    > **❓ Ejercicio 8:** _¿Qué ocurre si indicamos un tamaño del contenido inferior a lo que realmente mandamos?_

1. Cuando mandamos datos, normalmente también se indica qué tipo de datos son (texto, imagen, binario,etc.)[^3]. Existe la posibilidad de mandar en la misma petición varios datos de diferente tipo. Para ello se usan envíos "multipart". 
   1. Entra en [Httpie](https://httpie.io/app).
   2. Envía un `POST` multipart a `https://httpbin.org/anything`.
   3. Previsualiza la petición enviada.
   > **❓ Ejercicio 9:** _Como usuario de páginas web, ¿en qué caso de uso real has podido usar "multipart"?_

   > 🔍 **Nota:** _Aparte de los navegadores web y sus herramientas para desarrolladores, existen muchas aplicaciones para hacer peticiones HTTP. La más popular es [Postman](https://www.postman.com/), aunque hay muchas más con interfaz gráfica. También hay clientes por línea de comandos como [`curl`](https://curl.se/) y [`wget`](https://en.wikipedia.org/wiki/Wget). [Httpie](https://httpie.io/) tiene versión gráfica y por línea de comandos._

1. Hasta ahora, hemos usado HTTP 1.0 y 1.1. HTTP 2 y 3 son protocolos binarios y, HTTP/3 además no usa TCP, por lo que no podemos probarlo con `telnet`. Además, no todos los clientes y servidores los implementan por lo que para usarlos se necesita negociar el protocolo previamente mediante HTTP o TLS. Ejecuta los siguientes comandos:
   ```bash
   # Negociación vía HTTP/1.1:
   curl http://httpbin.org/anything -d "12345" -v --http2
   # Negociación vía TLS/ALPN:
   curl https://httpbin.org/anything -d "12345" -v --http2
   ```
   > **❓ Ejercicio 10:** _¿Cuál de las dos peticiones anteriores acaba finalmente usando HTTP 2? Indica una línea de la respuesta que así lo confirma._

[^1]: Los métodos o verbos están definidos en la [especificación](https://httpwg.org/specs/rfc9110.html#methods). Los más comunes son `GET` y `POST`.

[^2]: La ruta al recurso se puede componer de `/path?query#fragment`, y la `query` a su vez se compone de `param1=value1&param2=value2&...`. Los nombres y valores de la `query` deben codificarse usando [URL encoding](https://en.wikipedia.org/wiki/URL_encoding).

[^3]: `Content-Type` es la cabecera que indica el tipo de datos que se envían. Se utilizan [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers) para identificarlos. Además, puede venir acompañada de la codificación de caracteres utilizada en los datos. Por ejemplo, para las peticiones que hemos hecho usaríamos `Content-Type: text/plain; charset=utf-8`.