# Challenge-Amigo-Secreto
Challenge Amigo Secreto ONE- G8 
# Amigo Secreto 🎁

Una sencilla aplicación web para realizar sorteos de amigo secreto. Permite añadir participantes, realizar un sorteo asegurando que nadie se asigne a sí mismo, y mostrar los resultados de manera interactiva.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Problemas Comunes](#problemas-comunes)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Descripción

El objetivo de esta aplicación es simplificar el proceso de sorteo del "amigo secreto", ideal para grupos de amigos, familiares o compañeros de trabajo. La interfaz es intuitiva y el diseño es responsivo, adaptándose a dispositivos móviles, tabletas y computadoras.

---

## Características

- Agregar participantes de manera interactiva.
- Validar nombres para evitar duplicados o campos vacíos.
- Realizar un sorteo asegurando que nadie se asigne a sí mismo.
- Mostrar los resultados directamente en la página.
- Compatible con navegadores modernos.

---

## Requisitos

Para ejecutar este proyecto, necesitas:

- Un navegador web moderno (Chrome, Firefox, Edge, Safari).
- Opcional: un servidor local como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para desarrollo.

---
## Uso
Abre el archivo index.html en tu navegador.
Escribe los nombres de los participantes en el campo de texto y presiona el botón "Añadir".
Una vez que hayas añadido al menos 2 participantes, presiona "Sortear amigo" para realizar el sorteo.
Los resultados aparecerán en la pantalla, indicando quién es el amigo secreto de cada participante.
## Instalación

## Estructura del Proyecto
amigo-secreto/
│
├── index.html       # Archivo principal de la aplicación
├── style.css        # Estilos de la interfaz
├── app.js           # Lógica del sorteo y la interacción
├── assets/          # Recursos (imágenes, íconos, etc.)
└── README.md        # Documentación del proyecto

## Problemas Comunes
No se permite realizar el sorteo:

Asegúrate de haber añadido al menos 2 participantes.
Verifica que no haya nombres duplicados.
No se muestra correctamente la interfaz:

Asegúrate de que los archivos style.css y app.js están correctamente vinculados en el archivo index.html.
Usa un servidor local si estás probando en entornos con restricciones.
El sorteo no parece aleatorio:

Aunque la asignación es aleatoria, los resultados dependerán de las opciones disponibles en cada momento del sorteo.

##Contribuciones
¡Las contribuciones son bienvenidas! Si tienes una idea para mejorar el proyecto:

Haz un fork del repositorio.
Crea una nueva rama: git checkout -b mejora-funcionalidad.
Realiza tus cambios y haz un commit: git commit -m "Agrega una nueva funcionalidad".
Envía un pull request a este repositorio.

## Licencia
Este proyecto está licenciado bajo la MIT License. Siéntete libre de usarlo y modificarlo según tus necesidades.


1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
