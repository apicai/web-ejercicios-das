# HTML+CSS+JS

HTML+CSS+JS **son los lenguajes nativos del navegador** que nos permiten, respectivamente, organizar semáticamente la información, presentarla y añadirle comportamiento. Para ejecutarlos, el navegador descarga previamente los documentos HTML, estilos CSS y scripts JS mediante HTTP.

Para practicarlos, vamos a implementar una aplicación web que nos permita registrarnos, loguearnos, ver nuestro perfil, editarlo, darnos de baja y desloguearnos. Utilizará un **API REST ya creada** con estos endpoints:

| Metodo | Ruta | Descripción | Respuestas |
|--------|------|-------------|------------|
| `POST` | `/api/users` | Crea un usuario nuevo con los datos pasados en el cuerpo: `{"email": "...", "password": "...", ...}`. Admite cualquier campo, siendo obligatorios `"email"` y `"password"` | `201` si OK, `400` si faltan campos obligatorios |
| `POST` | `/api/users/login` | Crea una sesión que nos permite acceder al resto de recursos del API en nombre del usuario indicado en el cuerpo: `{"email": "...", "password": "..."}` | `201` si OK, `401` si credenciales incorrectas |
| `GET` | `/api/users/me` | Obtiene los datos del perfil del usuario conteniendo los datos del registro | `200` + json perfil si OK, `401` si no está logueado |
| `PUT` | `/api/users/me` | Actualiza los datos del perfil del usuario con los pasados en el cuerpo | `200` + json perfil actualizado si OK, `401` si no está logueado |
| `DELETE` | `/api/users/me` | Borra el usuario | `204` si OK, `401` si no está logueado |
| `DELETE` | `/api/users/logout` | Borra la sesión del usuario | `204` si OK, `401` si no está logueado |
