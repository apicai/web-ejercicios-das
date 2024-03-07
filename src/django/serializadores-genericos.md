# Django
## Serializadores
### Genéricos

Los `Serializer` permiten especificar los [campos](https://www.django-rest-framework.org/api-guide/fields/) del JSON sin que éstos dependan de ningún modelo. Esto puede ser interesante cuando la operación del API no realice operaciones CRUD sobre la BD.

```python
from rest_framework import serializers

class UnSerializer(serializers.Serializer):
    campo1 = serializers.CharField()
    campo2 = serializers.IntegerField()
```

> **❓ Ejercicio 9:** _Indica un ejemplo de JSON compatible con el anterior serializador._

Por ejemplo, en nuestro API REST, la operación de login solo valida que las credenciales proporcionadas en el JSON sean correctas.

> **❓ Ejercicio 10:** _Añade al `LoginSerializer` del proyecto los campos `email` y `password` del tipo adecuado._

Para verificar las credenciales y recuperar el usuario asociado en Django se utiliza [`authenticate()`](https://docs.djangoproject.com/en/5.0/topics/auth/default/#django.contrib.auth.authenticate). En nuestro caso, usaremos como `username` el email de los datos recibidos, y como `password` el recibido.

> **❓ Ejercicio 11:** _Implementa el `validate` del `LoginSerializer` para que retorne el usuario utilizando la función `authenticate` (fíjate en cómo está implementado el `validate_password` para hacer este validador de forma similar)._

> **❓ Ejercicio 12:** _Para probar lo anterior, en el terminal de VSCode ejecuta `python manage.py shell`, y utiliza el `LoginSerializer` para validar las credenciales de un usuario previamente creado con `UsuarioSerializer`._