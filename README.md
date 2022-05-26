# Desafio Always Music v2

La escuela de música Always Music solicitó hacer unas pruebas con el avance del desarrollo del sistema de gestión con base de datos PostgreSQL, se dieron cuenta que no se podían hacer varias consultas de forma simultánea y que al intentar hacer una consulta errónea, no recibían ningún error, dejando la posibilidad de creer que un estudiante fue registrado y que esto no sea así.

En este desafío deberás ocupar la clase Pool definiendo sus diferentes propiedades, capturar los posibles errores en el proceso de conexión con la base de datos y realizar las siguientes consultas, usando textos parametrizados y Prepared Statement

IMPORTANTE: Las lineas de codigo para crear la base de datos se encuentran en el archivo script.sql. Adiconalmente se debe crear la base de datos (Agregado el main.sql con las lineas de comando).

### Habilidades a evaluar

 - Pooling.
 - Consultas con texto parametrizado.
 - JSON como argumento de una consulta.
 - Prepared Statement.
 - Captura de errores.


### Requerimientos

- Realizar la conexión con PostgreSQL con la clase Pool.
- Hacer todas las consultas con un JSON como argumento definiendo la propiedad name para el Prepared Statement.
- Hacer las consultas con texto parametrizado.
- Liberar a un cliente al concluir su consulta.
- Capturar los posibles errores en todas las consultas.
- Retornar por consola un mensaje de error en caso de haber problemas de conexión.
- Obtener el registro de los estudiantes registrados en formato de arreglos.