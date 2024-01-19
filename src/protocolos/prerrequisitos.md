# HTTP
## Prerrequisitos

Para los ejercicios son necesarios los comandos `telnet`, `openssl`, `nc` y `curl` disponibles. Para ello, usaremos un terminal de Github-Codespaces:

1. Desde tu cuenta en Github [crea](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=525552024&ref=main&geo=EuropeWest) un Codespace y arráncalo[^1]

1. En el terminal del Codespace ejecuta:
   ```bash
   sudo apt update ; sudo apt install -y telnet netcat
   ```

> 🔍 **Nota:** _Como va a ser necesario durante los ejercicios repetir el mismo comando en cada paso, puedes utilizar la tecla <kbd>↑</kbd> en el terminal para recuperar el último comando ejecutado._

[^1]: Si el enlace anterior no funciona, [crea](https://github.com/codespaces/new) el Codespace en el repo `github/codespaces-blank`