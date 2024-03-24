# Django
## Tests
### Unitarios

Django proporciona una [serie de clases](https://docs.djangoproject.com/en/dev/topics/testing/tools/#provided-test-case-classes) para hacer tests sobre el proyecto. **`SimpleTestCase`** nos permite hacer tests unitarios que [validan](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertEqual) el comportamiento de un componente aisladamente (sin soporte para operaciones en BD, sin levantar el servidor, etc.):

```python
from django.test import SimpleTestCase

class TestDeUnComponente(SimpleTestCase):

    def test_funcionalidad_1_componente(self):
        self.assertEqual(Componente().funcionalidad_1(), 'valor esperado')
```

> **❓ Ejercicio 21:** _Comprueba el comportamiento de `validate_password` del [Ejercicio 7](serializadores-modelos-validaciones.md) con un password válido y con uno [inválido](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertRaises) utilizando los conceptos anteriores, y los ficheros ya existentes en el proyecto._

> 🔍 **Nota:** _Para correr los tests presentes dentro de un proyecto Django, ejecuta en el terminal del VSCode: `python manage.py test -v 2`. De esta forma, conseguimos validar el comportamiento del componente de forma automática[^1], a diferencia de en el Ejercicio 7 que tuvimos que validarlo manualmente utilizando la shell._

[^1]: En un proyecto real, se suele definir un [proceso](https://en.wikipedia.org/wiki/CI/CD) que se dispara **automáticamente** tras un cambio en el código, para ejecutar los tests y asegurar que dicho cambio no rompe el software actual y que, por tanto, se puede desplegar o instalar con seguridad.