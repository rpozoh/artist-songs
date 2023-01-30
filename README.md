Lo primero que se requiere es tener node instalado
Se debe instalar a través de npm los paquetes de
express -> npm i express
axios -> npm i axios
jsonschema -> npm i jsonschema
apicache -> npm i apicache
redis -> npm i redis

Para las pruebas unitarias se usaron los siguientes módulos den dev
chai -> npm i chai -D
chai-json-schema -> npm i chai-json-schema -D
mocha -> npm i mocha -D
supertest -> npm i supertest -D

para levantar el servicio se debe ejecutar el siguiente comando:
- node index.js

En el caso de tener nodemon instalado se puede usar el siguiente comando:
- npm run dev