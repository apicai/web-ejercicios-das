# Django
## Entorno desarrollo

Trabajaremos sobre este [proyecto base](./files/p4.zip) en el que iremos construyendo el API REST: 

1. Descomprímelo y abre su carpeta con el VSCode
1. Pulsa en la barra superior del VSCode <kbd>🔎 p4</kbd>, y luego en "Show and Run commands"
1. Escribe "Create environment", y en el desplegable selecciona el de Python
1. Selecciona "Venv"[^1] y elige un intérprete de Python 3.8 o superior
1. Marca ☑︎`requirements.txt` para que se instalen las dependencias[^2] y pulsa "OK"
1. Abre el terminal de VSCode, y comprueba si se ha activado el Venv ejecutando:

   ```bash
   django-admin --version
   ```

   > ⚠️ **Importante**: _En caso de que falle la activación del Venv (y el comando anterior), cierra VSCode por completo y, en el caso de Windows, ejecuta el siguiente comando en el PowerShell (luego vuelve a repetir el paso 6 anterior):_
   > ```powershell
   > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   > ```

> **❓ Ejercicio 1:** _Explora la estructura del proyecto en el VSCode, y explica brevemente qué representan sus directorios en Django._

[^1]: [venv](https://docs.python.org/3/library/venv.html) crea un entorno virtual de Python conteniendo paquetes independientes de los instalados globalmente en el Python del sistema operativo. Permite que cada aplicación particular de Python se ejecute con dependencias específicas sin que entren en conflicto con las que hubiera instaladas globalmente.

[^2]: En nuestro caso Django y Django Rest Framework.