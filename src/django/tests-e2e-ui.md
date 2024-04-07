# Django
## Tests
### Extremo a extremo
#### UI

En este tipo de pruebas, además del backend, **se prueba el frontend** como si se fuera un usuario final. Se pueden realizar de forma manual, o automáticamente con herramientas que controlan el navegador.

Vamos a probar un frontend que interacciona con el API que has construido. Para ello, desplegaremos sus ficheros en el propio servidor Django[^1].

> **❓ Ejercicio 26:** _[Descomprime este frontend](./files/web.zip) en la raíz del proyecto (a la misma altura que el fichero `requirements.txt`). Levanta el servidor con `python manage.py runserver`. Prueba manualmente interaccionando con la [web](http://127.0.0.1:8000), e indica si alguna operación con tu API falla._

Vamos a probar automáticamente el frontend con [Cypress](https://www.cypress.io/). Para ello descarga [la aplicación](https://download.cypress.io/app) y ábrela. En la aplicación:
1. Añade el proyecto Django
2. Elige hacer "E2E Testing". 
3. Elige un navegador para ejecutarlo
4. Crea una nueva "spec", ábrela con un editor, y copia este JavaScript:
   ```js
   describe('Registro', () => {
     it('correcto', () => {
       cy.visit('http://localhost:8000/')
       cy.contains('Registrarse').click()
       cy.url().should('include', '/registro')
       cy.get('[name="nombre"]').type('Nombre')
       cy.get('[name="nombre"]').should('have.value', 'Nombre')
       cy.get('[name="tel"]').type('555-555-555')
       cy.get('[name="tel"]').should('have.value', '555-555-555')
       cy.get('[name="email"]').type('a@email.com')
       cy.get('[name="email"]').should('have.value', 'a@email.com')
       cy.get('[name="password"]').type('aaaaaaA1')
       cy.get('[name="password"]').should('have.value', 'aaaaaaA1')
       cy.get('[name="password2"]').type('aaaaaaA1')
       cy.get('[name="password2"]').should('have.value', 'aaaaaaA1')
       cy.contains('Registrarse').click()
       cy.contains('¡Registrado! Prueba a entrar')
     })
   })
   ```
6. En el terminal de VsCode, levanta el servidor con `python manage.py runserver`
7. En Cypress, ejecuta la "spec" anterior

> **❓ Ejercicio 27:** _Vuelve a ejecutar la "spec" anterior, y explica por qué ahora falla. Arréglalo con `Date.now() + '@email.com'`, indica tus cambios y explica por qué se arregla._

> 🔍 **Nota:** _Para empezar de cero y que la primera vez funcione la "spec", puedes parar el servidor, ejecutar `python manage.py flush`, y volver a levantarlo._



[^1]: Este frontend se ha generado con `npm run build`, y sus ficheros los desplegaremos (y probaremos) en Django en vez de con [`npm run preview`](../react-frameworks/construccion.md)