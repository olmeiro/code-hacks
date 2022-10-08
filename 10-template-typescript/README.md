## Como configurar nuestro proyecto

## notas Franco: [https://francocarrara.notion.site/Curso-de-Fundamentos-de-TypeScript-30ed370135f049a1bd6786302bea9e81]

Iniciamos el proyecto como cualquier otro:

```
git init
npm init
```

Agregamos TS para el proyecto:
```
npm install typescript -D
yarn add typescript --dev
npx tsc --version //Para comprobar que se ha instalado correctamente.
```

Si acaso necesitaras actualizar tu typescript global porque no está al día o lo que sea, te dejo el siguiente comando:
```
npm install -g typescript@latest
```

Esto porque a veces npm update nos dice que todo está al día, yo trabajaré con el typescript global y te dejo esto por si también es tu caso.

### editor.config

Para que funcione en VS instamos el plugin :EditorConfig for VS Code
```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

Si quieremos correr un archivo .ts sin compilarlo previamente con tsc, la dependency por excelencia es “ts-node”.
pueden instalarlo igual como

```
npm i ts-node -D
```
y luego con npx:
```
npx ts-node index.ts
```

Comando para iniciar el proyecto

```
npx tsc --init
```

## Activando poderes de TypeScript en JavaScript 🧐
Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente:

//@ts-check

El análisis de código estático nos ayudará a detectar fallas en nuestro programa durante su desarrollo.

Con la extension Error Lens observamos las sugerencias de código.


# Compilador de Typescript:

Los navegadores sólo reconocen Javascript, Node tampoco corre nativamente typescript.Lo que hacemos es transpilar nuestros archivos ts en tsc que los lleva a Vanilla JS.




