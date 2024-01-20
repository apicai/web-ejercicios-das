# HTTP
## Conexiones

En una comunicación HTTP, los clientes siempre crean la conexión. A continuación, vamos a usar [telnet](https://en.wikipedia.org/wiki/Telnet) para crear una conexión TCP y simular una comunicación HTTP.

1. Desde el terminal teclea:
   ```bash
   telnet httpbin.org 80
   ```
   y cuando se conecte pega este contenido (las **2** líneas)[^1]:
   ```http
   HEAD /html HTTP/1.0

   ```
   > **❓ Ejercicio 1:** _Para establecer una conexión TCP, ¿qué parámetros son necesarios? De los 2 que hemos utilizado, `telnet` ha traducido uno de ellos para poder establecer la conexión ¿cuál y a qué valor?_

1. El servidor contesta con un `OK` y unas cabeceras de respuesta sin cuerpo. Vuelve a hacer el **paso 1** pero esta vez pon `HTTP/1.1`.

1. La respuesta esta vez es `Bad Request` porque esta versión obliga a enviar la cabecera `Host`[^2]. Repite el **paso 1** con esta petición:
   ```http
   HEAD /html HTTP/1.1
   Host: httpbin.org

   ```
   El servidor responde `OK` pero ahora el comando `telnet` no termina, continúa conectado. En HTTP 1.0 la conexión la cierra el servidor inmediatamente tras enviar la respuesta, mientras que en HTTP 1.1 se mantiene abierta a la espera de nuevas peticiones.

   > **❓ Ejercicio 2:** _Identifica la cabecera HTTP en cada una de las dos respuestas obtenidas con `OK` del servidor que indica dicho comportamiento._

   > 🔍 **Nota:** _Si esperamos unos segundos más, el comando `telnet` termina porque la conexión la cierra el servidor. Por un lado, las conexiones TCP son costosas de establecer por lo que interesa mantenerlas abiertas si seguidamente se va a hacer otra petición. Pero por otro lado, mantener una conexión consume recursos del servidor que no puede malgastar con un cliente que no envía datos._

   > **❓ Ejercicio 3:** _El timeout para la lectura de datos permite al servidor desconectar a clientes que no envían datos. ¿Para qué valdrá un timeout similar en el lado del cliente? Identifica una situación en la que como usuario de un servicio web te haya podido suceder ese tipo de timeout._

1. Hasta ahora hemos usado el puerto TCP 80 que es el de por defecto para conexiones HTTP. El puerto por defecto para conexiones seguras HTTPS es 443. Repite el **paso 1** usando ese puerto.

1. El servidor nos responde con error porque espera que enviemos los mensajes de negociación de TLS para cifrar la comunicación antes de enviar nada. Repite el **paso 1** usando `openssl` en lugar de `telnet`[^3]:
   ```bash
   openssl s_client -state -connect httpbin.org:443
   ```
   > **❓ Ejercicio 4:** _`openssl` se encarga de cifrar y descifrar los mensajes que enviamos y recibimos con la clave de cifrado intercambiada[^4]. Esta forma de funcionar, ¿a qué arquitectura o modelo conceptual basado en capas se asemeja?_

[^1]: La línea en blanco (en realidad **dos** retorno de carro + nueva línea o `CRLF` o `\r\n`) indica el fin del mensaje de la petición, y en ese momento el servidor envía el mensaje de respuesta.

[^2]: Es necesaria para que una misma IP pueda servir diferentes dominios web.

[^3]: TLS es bastante más complicado que HTTP y no podemos escribir sus mensajes con `telnet`.

[^4]: Al comienzo de la salida del comando `openssl` se pueden ver los mensajes TLS intercambiados entre cliente y servidor negociando el cifrado.