# Django
## Vistas

Las [vistas de Django](https://docs.djangoproject.com/en/dev/topics/class-based-views/) reciben una petición HTTP e invocan el método configurado para atenderla, el cual devuelve la respuesta. Las [vistas de DRF](https://www.django-rest-framework.org/api-guide/generic-views/) extienden el comportamiento para tratar peticiones y respuestas en formato JSON. 

Además, DRF proporciona vistas especializadas para construir fácilmente el API de operaciones CRUD sobre un modelo: `CreateAPIView`, `RetrieveAPIView`, `UpdateAPIView`, `DestroyAPIView`.

Existen otras vistas que permiten definir en una clase varias operaciones, por ejemplo `RetrieveUpdateDestroyAPIView`, que utilizaremos a continuación en nuestro API. Otra vista típica es `ListAPIView` que devuelve, de forma paginada, un array JSON con los objetos presentes en el modelo.