# HTTP
## Cookies

Las cookies son datos creados en el servidor que se envían[^1] a los navegadores para que los almacenen y reenvíen[^2] en cada futura petición al mismo servidor (URL). Esos datos pueden contener información de:

- <details><summary><strong>Acceso (autenticación) ...</strong></summary><br><object type="image/svg+xml" data="./files/cookies.acceso.svg" width="100%"></object></details>
- Estado (carrito de la compra) 
- <details><summary><strong>Rastreo (publicidad) ...</strong></summary><br><object type="image/svg+xml" data="./files/cookies.rastreo.svg" width="100%"></object></details>
- Configuración (tema Look&Feel), etc.

Las **cookies de sesión** se borran cuando se cierra el navegador, y las **cookies permanentes** las deja de enviar el navegador en la fecha indicada por el servidor. Repite los **pasos 1, 2 y 3** de la página anterior, y usa esta respuesta:
```http
HTTP/1.0 200 OK
Set-Cookie: mi-cookie-1=valor
Set-Cookie: mi-cookie-2=valor; Max-Age=60
Content-Length: 0

```
Vuelve a repetir los **3 primeros pasos**, y comprueba que ahora el navegador envía las cookies en la petición. 

> **❓ Ejercicio 22:** _Indica cuál de las dos cookies anteriores es permanente y qué has hecho para demostrarlo._

> **❓ Ejercicio 23:** _De los 4 tipos de información que pueden contener las cookies, razona en cuáles usarías una cookie de sesión y en cuáles una permanente._

Además de la caducidad, una cookie puede tener otras características, muchas de ellas relacionadas con su seguridad[^3]. Repite los **3 pasos iniciales** y envía esta respuesta:
```http
HTTP/1.1 200 OK
Set-Cookie: mi-cookie-3=valor; Path=/ruta
Set-Cookie: mi-cookie-4=valor; HttpOnly
Connection: keep-alive
Content-Type: text/html; charset=utf-8
Content-Length: 318

<!DOCTYPE html><html><head></head><body><p>Cookies leídas por JS: <code></code></p><form action="/ruta"><input type="submit" value="Envía a /ruta"></form><script>document.getElementsByTagName("code")[0].innerHTML=document.cookie.split("; ").filter(a => a.startsWith("mi-cookie-")).join("<br/>");</script></body></html>

```
La página muestra las cookies que JavaScript (JS) es capaz de leer. El botón enviará una nueva petición al servidor pero a otra ruta. Antes de pulsarlo, vuelve a hacer el **paso 1** de la página anterior.

> **❓ Ejercicio 24:** _Compara las cookies mostradas en la página con las que llegan al servidor, y deduce por qué JS no ve todas las cookies, y cuándo se reenvía la cookie `mi-cookie-3`._

> ⚠️ **Importante**: _para o borra el [Codespace](https://github.com/codespaces) al terminar de usarlo._

[^1]: Como cabeceras HTTP de la respuesta.

[^2]: Como cabeceras HTTP de la petición.

[^3]: El robo de las cookies de acceso es un problema típico en el mundo web.