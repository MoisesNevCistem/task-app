# **Task App**

La aplicación **[Task App](https://github.com/MoisesNevCistem/task-app.git)** tiene como objetivo implementar una REST API para la gestion de tareas con Node JS.

## **Guía de Instalación**

A continuación, siga lo siguientes pasos de instalación y configuración:

1. ✨ Abrir una ventana terminal.
2. ✨ Verifique si cuenta con Node JS instalado:
   ```sh
   node -v
   ```
   > **NOTA**: En caso de no contar con el entorno de ejecución de Javascript, Node JS, acceda al siguiente enlace para su instalación o actualización:
   > https://nodejs.org/es
   >
   > Una vez instalado, ejecute el comando anterior para determinar si se realizo la instalación.
3. ✨ Clone el repositorio de `task-app`:
   ```sh
   git clone https://github.com/MoisesNevCistem/task-app.git
   ```
4. ✨ Nos situamos en la raíz del proyecto:
   ```sh
   cd "task-app"
   ```
5. ✨ Instalamos los módulos de Node JS:
   ```sh
   npm install
   ```
6. ✨ Abrir el proyecto en un editor de código:
   > NOTA: Se recomienda que se utilice **[Visual Studio Code](https://code.visualstudio.com/download)**.
   >
   > De tenerlo, use el comando **`code .`** para abrir el proyecto con VS Code.
7. ✨ Ejecute el servidor de desarrollo:
   ```sh
   npm run dev
   ```
   La consola, debería regresar una respuesta como esta:
   ```
   ✨ Task APP REST API has been started...
   ⚡ [APP]: running at http://<ip-domain>:<port>
   ⚡ [AUTH]: running at http://<ip-domain>:<port>
   ```
