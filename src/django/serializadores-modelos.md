# Django
## Serializadores
### De modelos

Los [`ModelSerializer`](https://www.django-rest-framework.org/api-guide/serializers/#modelserializer) mapean directamente los campos del modelo indicado a los del JSON para que sean del mismo tipo de datos (y, además, añade sus validaciones asociadas):

```python
from rest_framework import serializers

class UnModeloSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnModelo
        fields = ['campos', 'de', 'UnModelo', 'a incluir', 'en el JSON']
```

> **❓ Ejercicio 5:** _Añade las propiedades anteriores, pero con los valores adecuados, al `UsuarioSerializer` del proyecto para que mapee el modelo `Usuario` y todos sus campos._
