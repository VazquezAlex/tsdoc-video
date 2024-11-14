# Documentar componentes con TsDocs

Cuando trabajamos en proyectos de React con equipos grandes (o incluso para tí mismo en el futuro) es
muy importante que documentemos nuestros documentos de una manera adecuada. Es muy fácil que pase el tiempo
y no recordar cierta lógica, o qué esperabamos del retorno de una función.

Sin duda, lo ideal es que tu código sea auto-descriptivo y lo suficientemente ordernado para que puedas leerlo y saber
de qué se trata, pero sin duda apoyarnos de algo como TsDocs no nos hace ningún daño.

## Comando de instalación

`npm install typedoc-plugin-markdown --save-dev`

## Configuración de typedoc.json

Para poder utilizar tsdocs y sobre todo utilizarlo como esperamos con nuestros componentes de React, es necesario
agregar un archivo de configuración typedoc.json, esta es la misma configuración que utilicé en el video.

```json
{
  "entryPoints": ["src"], // Punto de entrada principal o varios archivos
  "entryPointStrategy": "expand",
  "out": "docs", // Carpeta de salida para la documentación
  "includeVersion": true, // Muestra la versión del proyecto
  "excludePrivate": true, // Excluye elementos privados de la documentación
  "excludeProtected": true, // Excluye miembros protegidos
  "excludeInternal": true // Excluye elementos marcados con @internal
}
```

## Actualizar nuestros scripts

Para correrlo de una manera más sencilla podemos agregar un script a nuestro `package.json`, de esta manera
si otro desarrollador llega al proyecto, es fácil que identifique las opciones que tiene.

```json
"scripts": {
  // ... rest of your scripts
  "docs": "typedoc"
}
```
