# Django
## Serializadores

Los [serializadores de DRF](https://www.django-rest-framework.org/api-guide/serializers/) nos permiten:

- **Mapear** los campos del modelo (BD) con los del JSON que maneja nuestra API

- **Validar** los campos recibidos en el JSON (por ejemplo, que el password tenga una determinada longitud)

- Especificar cómo **guardar** los datos en el modelo (por ejemplo, [hasheando](https://en.wikipedia.org/wiki/Cryptographic_hash_function#Password_verification) el password antes de guardarlo en BD)

Vamos a ver **dos tipos** de serializadores: de modelos y los genéricos.