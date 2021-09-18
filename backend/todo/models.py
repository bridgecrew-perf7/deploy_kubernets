from django.db import models

# Create your models here.
class ToDo(models.Model):

    name = models.CharField("Nome", max_length=50)

    class Meta:
        verbose_name = "ToDo"
        verbose_name_plural = "ToDos"

    def __str__(self):
        return self.name

    