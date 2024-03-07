# Django
## Modelos
### Administración

En el anterior ejercicio, hemos realizado un [CRUD](https://es.wikipedia.org/wiki/CRUD) en BD de forma programática por línea de comandos. Pero Django posee una [web de administración](https://docs.djangoproject.com/en/4.2/ref/contrib/admin/) que nos permite realizar dichas operaciones visualmente. Para usarla, ejecuta los siguientes comandos en el terminal de VSCode:

```bash
python manage.py createsuperuser --username admin --email admin@email.com
python manage.py runserver
```

Abre [`http://127.0.0.1:8000/admin/`](http://127.0.0.1:8000/admin/) en el navegador y loguéate con las credenciales del superusuario. Nuestro modelo `Usuario` no aparece.

> **❓ Ejercicio 4:** _Añade el código necesario al proyecto para que se [registre](https://docs.djangoproject.com/en/4.2/ref/contrib/admin/#modeladmin-objects) el modelo `Usuario` en la web de administración, y así poder gestionar sus datos desde ella._

> 🔍 **Nota:** _No es necesario que reinicies el servidor para que se transladen los cambios que realices en el código, basta con salvar el fichero._
