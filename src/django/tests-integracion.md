# Django
## Tests
### Integración

Para probar una vista, y su modelo asociado, Django facilita un [cliente http](https://docs.djangoproject.com/en/dev/topics/testing/tools/#the-test-client) y la clase [`TestCase`](https://docs.djangoproject.com/en/dev/topics/testing/tools/#testcase), la cual habilita las operaciones en BD:

```python
from django.test import TestCase

class TestDeUnaVista(TestCase):

    def test_caso_1_vista(self):
        response = self.client.post('/path/vista/', {'campo': 'cuerpo'})
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data, {'campo': 'respuesta'})
```

En ocasiones, [la metodología de testing](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas) se basa en crear los tests **antes** de que la funcionalidad que verifican esté implementada. 

> **❓ Ejercicio 22:** _En nuestro API, la especificación nos exige que el password no se retorne nunca en el JSON de respuesta. Crea un test que verifique que el campo password del usuario no se devuelve en la respuesta del registro (vista del [Ejercicio 13](vistas-create.md))._

> **❓ Ejercicio 23:** _Para cumplir la especificación, y que el test anterior pase, debemos especificar en el `UsuarioSerializer` que dicho campo nunca se retorne:_
> ```python
>    class Meta:
>        ...
>        extra_kwargs = {'password': {'write_only': True}}
> ```
> _Ejecuta los tests antes y después del cambio, y pega aquí sus resultados._

