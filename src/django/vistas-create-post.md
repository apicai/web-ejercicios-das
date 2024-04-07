# Django
## Vistas
### CreateAPIView
#### Post

La implementación por defecto de `CreateAPIView` espera un serializador que guarde los datos en el modelo. Si nuestra vista utilizara otro tipo de serializador o lógica, se debería sobrescribir su método `post`:

```python
class MiVista(generics.CreateAPIView):
    serializer_class = serializers.MiSerializador

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # ... preparar response ...
            return response
        else:
            return Response(status=status.UN_STATUS_4xx)
```

En nuestra API, vamos a utilizar este método para autenticar usuarios y devolverles una [cookie de acceso](../protocolos/cookies.md). Dicha cookie se reenviará en sucesivas peticiones al API, de modo que podremos identificar al usuario logado. Para ello:

- Utilizaremos [un modelo de DRF](https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication) que nos genere un token asociado al usuario logado:
  ```python
  token, created = Token.objects.get_or_create(user=serializer.validated_data)
  ```
- Devolveremos ese token en la respuesta como cookie:
  ```python
  response.set_cookie(key='session', value=token.key, secure=True, httponly=True, samesite='lax')
  ```
- En futuras peticiones, consultaremos ese modelo para recuperar el usuario asociado al token (recibido en la cookie) y, así, identificarle.

> **❓ Ejercicio 16:** _Crea el endpoint del API **`api/users/login`** para autenticar usuarios ya creados, utilizando los conceptos anteriores, y los componentes y ficheros ya existentes en el proyecto._

> **❓ Ejercicio 17:** _Arranca el servidor si no lo estuviera ya, y accede a [`http://127.0.0.1:8000/api/users/login`](http://127.0.0.1:8000/api/users/login) con el navegador. Utilizando el formulario, autentícate con las credenciales de un usuario creado previamente. Utilizando las herramientas de desarrollo del navegador, indica el contenido de la cookie devuelta en la respuesta. Comprueba en la [web de administración](http://127.0.0.1:8000/admin/) que su valor está presente en el modelo._