# Django
## Vistas
### RetrieveUpdateDestroyAPIView

Esta vista permite recuperar, actualizar o eliminar un objeto concreto del modelo indicado en la petición. Su implementación por defecto utiliza la operación indicada en su campo `queryset` para recuperarlo del modelo por su clave primaria. Alternativamente, se puede especificar una operación de recuperación en el método `get_object`:

```python
class MiVista(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.MiModelSerializer

    def get_object(self):
        return Modelo.objects.get(campo=valor)
```

Para nuestra API, vamos a utilizar este tipo de vista para recuperar el usuario que accede utilizando el modelo que usamos para generar las cookies y el valor de la cookie en la petición:

```python
Token.objects.get(key=self.request.COOKIES.get('session')).user
```

> **❓ Ejercicio 18:** _Crea el endpoint del API **`api/users/me`** para recuperar, actualizar o dar de baja un usuario previamente autenticado, utilizando los conceptos anteriores, y los componentes y ficheros ya existentes en el proyecto. Para probar, primero tendrás que [logarte](http://127.0.0.1:8000/api/users/login) y luego recuperar [tus datos](http://127.0.0.1:8000/api/users/me)._