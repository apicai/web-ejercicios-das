# HTTP
## Prerrequisitos

Para realizar los ejercicios, utilizaremos el entorno de desarrollo en la nube Github-Codespaces, que requiere una cuenta[^1] en [Github](https://github.com/).

Sigue los siguientes pasos para preparar dicho entorno:

1. Desde **tu cuenta** en Github [crea](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=525552024&ref=main&geo=EuropeWest) un Codespace y arráncalo[^2]

1. En el terminal del Codespace ejecuta:
   ```bash
   sudo apt update ; sudo apt install -y telnet netcat
   ```

> 🔍 **Nota:** _Como va a ser necesario durante los ejercicios repetir el mismo comando en cada paso, puedes utilizar la tecla <kbd>↑</kbd> en el terminal para recuperar el último comando ejecutado._

[^1]: Basta con una cuenta gratuita (sin necesidad de tarjeta de crédito), que dispone de 60h mensuales de uso de Codespaces. El entorno se para tras 30 minutos de inactividad, pero es recomendable [pararlo manualmente](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace) tras terminar de usarlo para evitar consumir minutos innecesariamente.

[^2]: Si el enlace anterior no funciona, [crea](https://github.com/codespaces/new) el Codespace en el repo `github/codespaces-blank`