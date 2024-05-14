# APPROM - Manejador de Vistas en Google Apps Script para desplegar Hosting de Firebase

Este repositorio contiene el código de un manejador de vistas para una aplicación desarrollada en Google Apps Script. El archivo `index.html` actúa como una interfaz para acceder y visualizar el aplicativo a través de iframes, permitiendo la autenticación del usuario mediante parámetros en la solicitud HTTP.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install


## Descripción

El archivo `index.html` es parte de una aplicación desarrollada en Google Apps Script y sirve como un manejador de vistas que permite la visualización de diferentes secciones o páginas de la aplicación a través de iframes. La autenticación del usuario se realiza mediante parámetros incluidos en la URL de la solicitud HTTP.

## Despliegue Local o en Hosting

Para evitar los anuncios de Google sobre el creador de la aplicación, es posible desplegar este archivo en un servidor local o en un servicio de hosting. Al acceder a la aplicación a través de un servidor externo, se evita la aparición de mensajes como "Esta aplicación la ha creado un usuario de Google Apps Script".

## Uso

1. Clona este repositorio en tu máquina local o en el servidor de hosting.
2. Configura tu Aplicación de AppScript para manejar las solicitudes HTTP y autenticar usuarios mediante parámetros en la URL.
3. Reemplaza las rutas URL de los Iframes con las rutas de tus implementaciones AppScript o agrega mas rutas a la función si es necesario. ( en este caso solo le he creado dos apps en appScript uno q maneja la logica de autenticacion del login y otra que es el home del aplicativo)
    const urlApp = `tu_URL`;
    const urlLogin = `tu_URL`;
5. Modifica el title del aplicativo.
6. Accede a la aplicación a través del servidor y utiliza el archivo `index.html` para navegar por las vistas del aplicativo

## Contribución

Si deseas contribuir al desarrollo de este manejador de vistas o de la aplicación en Google Apps Script, puedes hacer un fork del repositorio, realizar tus cambios y enviar un pull request para su revisión.

## Contacto

Para más información o consultas sobre este manejador de vistas en Google Apps Script, puedes contactarme a través de mi perfil en GitHub

---

Hecho con ❤️ por [Carlos Olivera](https://github.com/coliveramispireta)
