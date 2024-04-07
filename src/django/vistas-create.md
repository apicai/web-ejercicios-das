# Django
## Vistas
### CreateAPIView

Esta vista tiene una implementación por defecto que utiliza el serializador configurado en ella para guardar en el modelo los datos recibidos en el `post`:

```python
from rest_framework import generics

class MiVista(generics.CreateAPIView):
    serializer_class = MiModelSerializer
```

La configuración para asociar la vista a una ruta de nuestro API se realiza en el fichero [`urls.py` del proyecto Django](https://docs.djangoproject.com/en/dev/topics/class-based-views/#subclassing-generic-views):

```python
urlpatterns = [
    path('api/path/', views.MiVista.as_view()),
    ...
]
```

> **❓ Ejercicio 13:** _Crea el endpoint del API **`api/users/`** para registrar nuevos usuarios, utilizando los conceptos anteriores, y los componentes y ficheros ya existentes en el proyecto._

Para ayudarnos a probar, DRF automáticamente genera [formularios](https://www.django-rest-framework.org/topics/browsable-api/) para interaccionar con el API desde un navegador.

> **❓ Ejercicio 14:** _Arranca el servidor desde el terminal con `python manage.py runserver`, y accede a [`http://127.0.0.1:8000/api/users/`](http://127.0.0.1:8000/api/users/) con el navegador. Utilizando el formulario intenta reproducir 2 errores `400` de diferente tipo, y explica gracias a qué componente se retornan._

Para tratar excepciones no controladas y devolver una respuesta adecuada, se puede sobrescribir el método `handle_exception` de la vista de la siguiente forma:

```python
from rest_framework import status
from rest_framework.response import Response
...
    def handle_exception(self, exc):
        if isinstance(exc, UnaExcepcion):
            return Response(status=status.UN_STATUS)
        else:
            return super().handle_exception(exc)
```

> **❓ Ejercicio 15:** _Utilizando el formulario, crea dos usuarios con mismo email y explica el error. Añade el método anterior a la vista para que en caso de que se produzca el error anterior se devuelva el estado HTTP [especificado](../html/intro.md)._





