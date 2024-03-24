# Django
## Vistas
### DestroyAPIView

Esta vista funciona igual que la anterior `RetrieveUpdateDestroyAPIView` pero solo permite acceder utilizando el método HTTP `delete`. Al igual que la de `CreateAPIView`, también permite sobrescribir su comportamiento por defecto:

```python
class MiVista(generics.DestroyAPIView):

    def delete(self, request):
        # ... preparar response ...
        return response
```

Vamos a utilizar este tipo de vista y, **exclusivamente**, su método `delete` para borrar la sesión de acceso de nuestro API. 

> **❓ Ejercicio 19:** _Crea el endpoint del API **`api/users/logout`** para borrar la sesión del modelo `Token` y la cookie utilizando `response.delete_cookie('session')` antes de devolver la respuesta, utilizando los conceptos anteriores, y los componentes y ficheros ya existentes en el proyecto._

> **❓ Ejercicio 20:** _Describe y realiza los pasos para probar que el logout funciona como debe. En dichos pasos se producirá un error no controlado (`ObjectDoesNotExist`) cuando se intenta recuperar el perfil sin estar logado. Añade el código necesario para tratarlo correctamente según la [especificación del API](../html/intro.md)._