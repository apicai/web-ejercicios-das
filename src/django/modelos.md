# Django
## Modelos

Los [modelos de Django](https://docs.djangoproject.com/en/4.2/topics/db/models/) representan, normalmente, los **datos de una tabla de BD**. En [nuestra API REST](../html/intro.md) necesitamos manejar estos datos de los usuarios: nombre, teléfono, email y password.

> **❓ Ejercicio 2:** _En el proyecto suministrado, añade al modelo `Usuario` (ya existente) los siguientes campos del [tipo adecuado](https://docs.djangoproject.com/en/4.2/ref/models/fields/#field-types): `nombre` (con 256 de longitud máxima), `tel` (con 32 de longitud máxima), `email` y `password` (con longitud máxima 128)._

Para trasladar el modelo definido en código Python a la BD es necesario: ❶ generar el SQL equivalente con la definición de la tabla, y ❷ crear esa tabla en la BD. Para ello, ejecuta los siguientes comandos en el terminal de VSCode:

```bash
python manage.py makemigrations users
python manage.py migrate
```

> ⚠️ **Importante**: _Si tienes algún problema con los comandos anteriores puede que: haya fallado la activación del venv (ver solución en página anterior), o haya un conflicto con el esquema actual de la BD (en cuyo caso, borrar el directorio `migrations` y el fichero `db.sqlite3`), o haya un error en el código añadido._
