# SGE

SGE es un acronimo para "Sistema de gestión de estudiantes" una aplicación web que usa React que permite
gestionar información básica de estudiantes de una institución educativa.

## Ejemplos de la pagina
<img width="1330" height="601" alt="image" src="https://github.com/user-attachments/assets/6bbab84e-cb55-44d1-b32e-0d751d280fac" />
<img width="495" height="525" alt="image" src="https://github.com/user-attachments/assets/87723968-14b9-4659-8c88-c5dde8698da1" />

1. Preparación de tu computadora
Primero, asegúrate de tener instalados Git y Node.js. Si ya los tienes, puedes saltarte este paso. Si no, son esenciales para que todo funcione. Búscalos en Google, descárgalos e instálalos. Son programas estándar, y sus instaladores son muy sencillos de usar.

2. Descargar el proyecto
Este es el primer paso para traer el proyecto de internet a tu computadora.

Abre la Terminal (en Mac) o el Símbolo del sistema / PowerShell (en Windows).

Escribe y pega este comando y presiona Enter:


git clone https://github.com/SerapheimXYZ/SGE.git

Esto creará una nueva carpeta llamada SGE y descargará todos los archivos del proyecto dentro de ella.

3. Entrar a la carpeta del proyecto
Ahora tienes que decirle a la terminal que quieres trabajar dentro de esa nueva carpeta.

Escribe este comando y presiona Enter:

cd SGE

4. Instalar las dependencias
instalarás todo lo que el proyecto necesita para funcionar.

Escribe este comando y presiona Enter:

npm install

5. ejecutar el proyecto

Escribe este comando y presiona Enter:

npm run dev


Uso de la Aplicación de Estudiantes

1. Agregar un nuevo estudiante
En la parte superior de la pantalla, verás un botón con un signo + (más). Haz clic en él para abrir un formulario.

Llena todos los campos del formulario con la información del nuevo estudiante: Nombre, Edad, Carrera y Promedio.

Haz clic en el botón "Agregar" o "Guardar" dentro del formulario. Verás que el nuevo estudiante aparece inmediatamente en la lista, que se encuentra en la parte inferior de la página.

2. Editar un estudiante existente
En la lista de estudiantes, cada estudiante se muestra en una tarjeta individual.

Busca al estudiante que deseas modificar y haz clic en el botón "Editar" que se encuentra en su tarjeta.

El formulario se abrirá automáticamente con los datos del estudiante ya cargados. Modifica la información que necesites.

Haz clic en el botón "Guardar cambios" en el formulario para actualizar la información del estudiante.

3. Eliminar un estudiante
Busca al estudiante que quieres eliminar de la lista.

En su tarjeta, haz clic en el botón "Eliminar".

Aparecerá un mensaje de confirmación preguntándote si estás seguro. Confirma la acción para borrar al estudiante de forma permanente.

4. Ver las estadísticas
En la parte superior de la página, encontrarás un resumen de la información general de la lista:

Promedio general: Este número muestra el promedio académico de todos los estudiantes que tienes en la lista en este momento.

Total de estudiantes: Es posible que el número total de estudiantes también se muestre en esta área.

