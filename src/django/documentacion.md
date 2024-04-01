# Django
## Documentación

Las API REST se pueden especificar formalmente con [OpenAPI](https://en.wikipedia.org/wiki/OpenAPI_Specification). Dicha especificación permite generar: su documentación, el código para usarla como cliente o como servidor, sus tests, etc.

En el caso de DRF, existe un [plugin](https://drf-spectacular.readthedocs.io/en/latest/) que permite la operación inversa: generar la especificación a partir del código del API implementado con DRF. De hecho, ya puedes consultar la especificación del API que has ido creando, junto con su documentación, arrancando el servidor y accediendo [aquí](http://127.0.0.1:8000/api/schema/redoc/).

La generación automática no siempre puede extraer la información del código. En esos casos se especifica manualmente con el decorador [`@extend_schema`](https://drf-spectacular.readthedocs.io/en/latest/customization.html#step-2-extend-schema):

```python
from drf_spectacular.utils import extend_schema, OpenApiResponse

@extend_schema(
    description='Logout endpoint',
    responses={
       201: OpenApiResponse(description='Recurso creado con éxito'),
       400: OpenApiResponse(description='Parámetros incorrectos'),
    }
)
class UnaVista(generics.APIView):
    ...
```

> **❓ Ejercicio 28:** _Nuestra vista `LogoutView` no tiene serializador por lo que no se puede deducir cómo son las respuestas. Utilizando los conceptos anteriores, especifica las posibles respuestas para dicha vista._

