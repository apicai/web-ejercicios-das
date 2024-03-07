# Django
## Serializadores
### De modelos
#### Operaciones en BD

Los `ModelSerializer`, además, crean y actualizan los modelos en BD automáticamente a partir de los datos del JSON. Para ello, utilizan las [operaciones estándar](modelos-operaciones.md) del modelo configurado. Pero si fuera necesario hacerlo de otra forma, se pueden especificar dichas operaciones en los métodos `create(self, validated_data)` y `update(self, instance, validated_data)` del serializador.

Por ejemplo, en nuestro API REST necesitamos crear los usuarios en BD con su password hasheado, pues las operaciones estándar del modelo lo guardarían en claro. Para ello, debemos utilizar estos otros métodos del modelo:
- `Usuario.objects.create_user(**datos_usuario_con_pass_en_claro)` para crear un usuario nuevo con su password hasheado
- `instance.set_password(pass_en_claro)` para actualizar el password de un usuario ya creado

> **❓ Ejercicio 8:** _En el terminal de VSCode ejecuta `python manage.py shell`, crea un usuario utilizando `UsuarioSerializer` y su método `save`. Comprueba el valor del campo `password` del objeto retornado. Vuelve a repetir todo el proceso (reiniciando la shell), creando otro usuario (con diferente email), **pero antes** descomenta la función `create` de `UsuarioSerializer`. Escribe el resultado de ambos casos y explica el diferente comportamiento._
