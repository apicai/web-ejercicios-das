# HTTP
## Servidor

En una comunicación HTTP, los servidores permanecen a la escucha de peticiones en un puerto concreto. A continuación, vamos a usar [netcat](https://en.wikipedia.org/wiki/Netcat) para abrir un puerto TCP y simular respuestas HTTP.

1. Desde el terminal ejecuta:
   ```bash
   nc -l -s 0.0.0.0 -p 8080
   ```

1. Abre en el navegador la URL que se indica al ejecutar el comando anterior en el terminal de Codespaces.

1. Vuelve al terminal y comprueba que ha llegado la petición.

   > **❓ Ejercicio 17:** _Indica qué cabeceras de la petición HTTP recibida nos permitirían devolver una respuesta adaptada al tipo de dispositivo y navegador del usuario, y en el idioma en el que lo usa._

1. En el terminal pega esta respuesta y observa lo que se ve en el navegador:
   ```http
   HTTP/1.0 200 OK
   Content-Type: text/plain
   Content-Length: 9

   Respuesta
   ```
   > **❓ Ejercicio 18:** _¿Qué ocurre en el navegador cuando devolvemos la respuesta indicando un tamaño de contenido mayor del que realmente tiene (por ejemplo 19)?_

1. Repite los **pasos anteriores** pero esta vez incluye en la respuesta esta cabecera:
   ```http
   Content-Disposition: attachment; filename="respuesta.txt"
   ```
   > **❓ Ejercicio 19:** _Explica la diferencia en el comportamiento del navegador._

1. Vuelve a repetir los **pasos 1, 2 y 3**, y usa esta otra respuesta:
   ```http
   HTTP/1.0 302 Found
   Content-Length: 0
   Location: https://www.google.com/search?q=301+vs+302+redirect+use+cases

   ```
   > **❓ Ejercicio 20:** _Explica qué ha ocurrido en el navegador._

1. Vamos a ver cómo el navegador manda los datos de un formulario web. Repite el **paso 1**, sustituye `http://localhost:8080` del `<form>` del HTML por la URL indicada en el entorno[^1], rellena el formulario y envíalo[^2].

   <details><summary>Formulario...</summary>
   <div class="sandpack" data-template="vanilla" data-height="300px">
   <pre data-file="index.js" data-hidden="true"></pre>
   <pre data-file="index.html" data-active="true">
   &lt;form id="myForm" action="http://localhost:8080" method="post">
    &lt;fieldset>
     &lt;label for="name">Text Input:&lt;/label>
     &lt;input type="text" name="name" id="name" value="" tabindex="1">
    &lt;/fieldset>
    &lt;fieldset>
     &lt;label for="radio-choice-1">Choice 1&lt;/label>
     &lt;input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1">
     &lt;label for="radio-choice-2">Choice 2&lt;/label>
     &lt;input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2">
    &lt;/fieldset>
    &lt;fieldset>
     &lt;label for="select-choice">Select Dropdown Choice:&lt;/label>
     &lt;select name="select-choice" id="select-choice">
      &lt;option value="Choice 1">Choice 1&lt;/option>
      &lt;option value="Choice 2">Choice 2&lt;/option>
      &lt;option value="Choice 3">Choice 3&lt;/option>
     &lt;/select>
    &lt;/fieldset>
    &lt;fieldset>
     &lt;label for="textarea">Textarea:&lt;/label>
     &lt;textarea rows="2" cols="25" name="textarea" id="textarea">&lt;/textarea>
    &lt;/fieldset>
    &lt;fieldset>
     &lt;label for="checkbox">Checkbox:&lt;/label>
     &lt;input type="checkbox" name="checkbox">
    &lt;/fieldset>
    &lt;fieldset>
     &lt;input type="submit" value="Submit">
    &lt;/fieldset>
   &lt;/form>
   </pre></div></details>

   Edita el HTML y quita el `method="post"`. Repite el **paso 1** y envía el formulario con ese cambio.

   > **❓ Ejercicio 21:** _Explica las diferencias en las peticiones recibidas con y sin `method="post"`._


[^1]: Para obtener la URL puedes copiarla de la pestaña que se abre al pulsar "Abrir en el navegador" en el Codespace: es siempre la misma durante el ejercicio.

[^2]: Tras enviar, tal vez se quede el marco del formulario en blanco. Para recuperarlo, pulsa en su botón `⟳`. También, puede saltar una advertencia de envío dentro de ese mismo marco, que se puede aceptar sin problema.