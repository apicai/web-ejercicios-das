# web-ejercicios-das

Repositorio que genera la web con la documentación de los ejercicios y prácticas de la asignatura "Desarrollo de aplicaciones y servicios". Está basado en [mdBook](https://rust-lang.github.io/mdBook/) y utiliza [peaceiris/actions-mdbook](https://github.com/peaceiris/actions-mdbook) para automatizar la generación y despliegue de la web en Github-Pages. Además, se ha incluido código que personaliza la presentación de las listas de tareas y preguntas.

## Test

Para probar en local:

1. Descargar el binario de [mdBook](https://github.com/rust-lang/mdBook/releases)
2. Ejecutar en este directorio:
   ```bash
   mdbook serve --open
   ```

## Contribuir

Basta con crear una PR contra la rama `main`, aprobar y mezclar para que se despliegue.