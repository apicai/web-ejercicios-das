# Django
## Modelos
### Operaciones

Sobre los modelos definidos, Django ofrece una serie de funciones que permiten hacer [operaciones](https://docs.djangoproject.com/en/4.2/topics/db/queries/) en la BD.

> **❓ Ejercicio 3:** _En el terminal de VSCode ejecuta `python manage.py shell`, pega el siguiente código, y realiza las operaciones indicadas sobre el modelo `Usuario`. Cuando termines, sal pulsando <kbd>CTRL</kbd> + <kbd>D</kbd>._
> ```python
> from api.users.models import Usuario
> # 1. Crea un usuario en BD con todos los campos: nombre, tel, email y password
> # 2. Recupera el usuario de BD a partir de su email
> # 3. Actualiza el nombre del usuario recuperado en BD
> # 4. Elimina el usuario de BD a partir de su nombre
> ```