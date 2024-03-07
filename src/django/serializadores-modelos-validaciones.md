# Django
## Serializadores
### De modelos
#### Validaciones

Para probar las validaciones que automáticamente añade el `ModelSerializer`, ejecuta en el terminal del VSCode `python manage.py shell`, pega el siguiente código, y observa el resultado.

> ```python
> from api.users.serializers import UsuarioSerializer
> rs = UsuarioSerializer(data={'email': 'a'})
> rs.is_valid()
> rs.errors
> ```

> **❓ Ejercicio 6:** _Indica un valor de `data` (en el código anterior) para que `is_valid()` sea `True`._

Para añadir validaciones extra sobre los datos del JSON, basta con implementar el método `validate(self, data)` del serializador, o `validate_campo1(self, value)` para validar el valor de un campo concreto (`campo1` en ese caso).

> **❓ Ejercicio 7:** _Completa el método `validate_password` de `UsuarioSerializer` para que el password cumpla los mismos requisitos que en la [página de registro](../html/registro.md)._

> 🔍 **Nota:** _Puedes ayudarte de la shell anterior para comprobar si funciona correctamente la nueva validación. Necesitarás reiniciar la shell cada vez que cambies el código._

