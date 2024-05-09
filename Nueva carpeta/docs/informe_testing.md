# Informe de testing 
Proyecto asignado: [https://github.com/ORT-FIS-2023S1/proyecto-ger215.git]

En esta ultima parte del trabajo se nos fue asignado un proyecto de otro grupo el cual debemos testear con las herramientas aprendidas en el curso.
No tendremos que interactuar con el codigo, sino que, directamente con la aplicación realizada, a la cual le debemos encontrar mediante estas herramientas, posibles errores o aspectos a mejorar.

Para hacer este testeo, se realizaron test exploratorios en busca de posibles errores en la aplicación. Estos test fueron divididos en secciones las cuales correspondian a errores en el funcionamiento de la aplicación, errores de la interfaz de la aplicacion, sugerencias para poder mejorar el producto y cosas que no fueron incluidas en el mismo. 
Se realizaron reportes de issues los cuales reunen todas estas categorias y tambien casos de prueba para poder probar los casos de posible prueba o error de la aplicación.

## Test de sistema

A la hora de realizar un test del sistema, podemos utilizar varias herramientas. La que utilizaremos aqui sera la tecnica de caja negra de partición de equivalencia, la cual consiste en dividir los valores de entrada en grupos o clases de equivalencia. Hay 2 tipos distintos de clases de equivalencia que son las válidas y las inválidas.
Para realizar estas pruebas se debe primero identificar las condiciones de entrada, luego definir las clases válidas e inválidas para estas condiciones y por último generar los casos de prueba.

Pruebas para la barra de busqueda:
Variables de entrada: nombre o parte del nombre de un producto del menu.
Clase de equivalencia:
- Entrada: nombre de producto
- Clase válida: nombre de producto registrado en el menú
- Clase inválida: nombre del producto no registrado en el menú

Casos de prueba:
1)
- Nombre del producto: Jugo de Naranja.
- Resultado esperado: mostrar el producto buscado.
2)
- Nombre del producto: Jugo.
- Resultado esperado: mostrar el producto buscado
* En la aplicacion no funciona.
3)
- Nombre del producto: Alfajor.
- Resultado esperado: mensaje de alerta, "Producto no encontrado"


Pruebas para ingresar estudiante:
Variable de entrada: nombre del estudiante.
Clase de equivalencia:
- Entrada: nombre del estudiante
- Clase válida: nombre solo con letras minusculas
- Clase válida: nombre con solo letras mayusculas
- Clase válida: nombre con la primera letra mayuscula y el resto minuscula
- Clase inválida: numeros en el nombre
- Clase inválida: caracteres especiales en el nombre

Casos de prueba:
1)
- Nombre del estudiante: Nicolas
- Resultado esperado: agrega estudiante
2)
- Nombre del estudiante: NICOLAS
- Resultado esperado: agrega estudiante
3) 
- Nombre del estudiante: nicolas
- Resultado esperado: agrega estudiante
4)
- Nombre del estudiante: Nicolas123
- Resultado esperado: mensaje de alerta "no se permiten numeros en el nombre del estudiante"
5)
- Nombre del estudiante: Nicol@s
- Resultado esperado: mensaje de alerta "no se permiten caracteres especiales en el nombre del estudiante"


Pruebas para ingresar nuevo producto:
Variables de entrada: nombre del producto, precio, descripción, url de la imagen, que hora de la comida
Clase de equivalencia:
- Entrada: nombre producto, precio, descripción, url, horario de la comida.
- Clase válida: nombre de un producto no registrado en letras mayusculas, precio con valor positivo, descripción con letras mayusculas, url válido de la foto del producto, selección de horario de comida
- Clase válida: nombre de un producto no registrado en letras minusculas, precio con valor positivo, descripción con letras minusculas, url válido de la foto del producto, selección de horario de comida
- Clase inválida: precio con valor negativo
- Clase inválida: precio con valor 0
- Clase inválida: precio con un caracter que no sea numeros
- Clase inválida: nombre del producto con numeros
- Clase inválida: nombre del producto con caracteres especiales
- Clase inválida: nombre del producto ya registrado
- Clase inválida: descripcion con caracteres especiales
- Clase inválida: url no válido
- Clase inválida: no seleccionar un horario para la comida

Casos de prueba:
1)
- Nombre del producto: Alfajor
  Precio: $20
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: Agrega producto
2)
- Nombre del producto: Alfajor20
  Precio: $20
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "no se permiten numeros en el nombre del producto"
3)
- Nombre del producto: Alfajor@@
  Precio: $20
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "no se permiten caracteres especiales en el nombre del producto"
4)
- Nombre del producto: Jugo de Naranja
  Precio: $20
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "no se puede ingresar un articulo repetido"
5)
- Nombre del producto: Alfajor
  Precio: $0
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "es necesario ponerle un valor mayor a 0 al precio"
6)
- Nombre del producto: Alfajor
  Precio: $-10
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "es necesario ponerle un valor mayor a 0 al precio"
7)
- Nombre del producto: Alfajor
  Precio: e
  Descripción: De chocolate
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "el precio debe contener numeros"
8)
- Nombre del producto: Alfajor
  Precio: $10
  Descripción: De chocolate@#
  url: url valido
  horario: desayuno
- Resultado esperado: mensaje "la descripción no debe contener caracteres especiales"
9)
- Nombre del producto: Alfajor
  Precio: $20
  Descripción: De chocolate
  url: url no valido
  horario: desayuno
- Resultado esperado: mensaje "el url debe ser valido"
10)
- Nombre del producto: Alfajor
  Precio: $0
  Descripción: De chocolate
  url: url valido
  horario:
- Resultado esperado: mensaje "debe seleccionarse un horario para la comida"


Pruebas para ingresar producto al carrito:
Variables de entrada: producto del menu
Clase de equivalencia:
Entrada: producto del menú
Clase válida: producto con todos sus campos correctos
Clase inválida: producto con error de precio
Casos de prueba:
1)
- Producto del menu válido
- Resultado esperado: agrega al carrito
2)
- Producto con error de precio
- Resultado esperado: mensaje "no se puede agregar este producto al carrito"

## Reporte de issues

A la hora de reportar issues lo que se busca en la aplicación designada son discrepancias entre los resultados reales y los que se espera recibir. Son errores que hace que el sistema produzca un resultado incorrecto o que la aplicación no se comporte como debería. 
Estos issues deben ser reportados de manera correcta, clasificandolos por categoria para asi poder verificar su corrección.

Los issuses resgistrados en este proyecto fueron clasificados en 4 categorías: 
-Errores del diseño de la interfaz de la aplicación
-Errores del funcionamiento de la aplicación
-Sugerencias para mejorar la aplicación
-Aspectos o funcionalidades ausentes en la aplicación

Todos estos issues fueron registrados en el correspondiente repositorio de github del proyecto asignado.

Resumidamente los issues agregados en las distintas categorias consistian en:
Errores del diseño de la interfaz de la aplicacion:
- Generación de espacio vacio en la aplicación al agregar muchos articulos al carrito.
- Mala ubicación del carrito en la aplicación al iniciarla en dispositivos moviles.
- Fotos de los menús mal encuadradas al iniciar la aplicación en algunos dispositivos moviles.
- Mal titulo asignado a la sección de agregar estudiante.

Errores en el funcionamiento de la aplicación:
- La barra de busqueda no funciona correctamente, solo encuentra el articulo al poner su nombre completo.
- Al agregar un nuevo producto se pueden poner precio e imagen erroneas
- El historial de pedidos se asigna al nuevo estudiante que se ingrese, sin diferenciar que pedido es para cada uno.
- El total del costo del carrito da error si se selecciona un producto con un precio que tambien dio error.
- Es posible cambiar a rol administrador sin ningun requisito previo.
- Al actualizar la página, los productos agregados anteriormente desaparecen.
- Al actualizar la página, los estudiantes agregados anteriormente desaparecen como tambien asi sus historiales.
- La barra de busqueda comienza a funcionar una vez actualizado el menú, incluso también la primera vez que se abre la aplicaión.
- Se pueden realizar pedidos fuera de fecha.
- Se le pueden asignar valores negativos a lo precios de los productos que se van a agregar. 
- Se pueden agregar articulos ya existentes en el menú.
- Es posible agregar un estudiante con cualquier tipo de caracter en su nombre, sin limite de caracteres, incluyendo caracteres especiales y numeros.

Sugerencias para mejorar la aplicación:
- Agregar un contador del cuantos productos del mismo tipo se desea ordenar en el carrito.
- Agregar el costo total del pedido en el historial en el caso de que el pedido contenga mas de un producto.
- Disminuir el tamaño de las imagenes de los productos cuando se los busca con la barra de busqueda.

Aspectos o funcionalidades ausentes en la aplicación:
- No es posible eliminar un producto una vez ha sido agregado al menú.
- No existe la posibilidad de cancelar un pedido una vez realizado.
- No existe un apartado en el cual agregar especificaciones al menu elegido, por ejemplo que no tenga sal.

## Informe de calidad del sistema

A la hora de ver la calidad de un sistema se pueden tomar en cuenta aspectos como la funcionalidad del mismo, su usabilidad, accesibilidad, portabilidad, entre otros.
En una visión global sobre el proyecto evaluado, podemos decir que incluso teniendo todos los errores ya reportados anteriormente, en parte es una aplicación lograda, ya que cumple con los requisitos planteados.

Es un sistema totalmente funcional, con sus fallas, pero funcinal al fin, ya que en ningun momento este dejo de funcionar, es un sistema práctico y conciso con lo que hace, a su vez que tiene una gran usabilidad ya que sus funciones son sencillas para todon aquel que las vaya a utilizar, aun siendo la primera vez que se familializa con el sistema.

A su vez esto también es una aplicación conn buena accesibilidad, ya que puede ser utilizada por cualqueir tipo de persona, aun sin tener ningun conocimiento previo.
Por ultimo, esta aplicacion tiene una buena portabilidad, la cual tiene sus errores, anteriormente manifestados en los issues, pero que al fin y al cabo no deja de ser buena, ya que se adapta a cualquier dispositivo o buscador web.


## Reflexión

Esta parte del trabajo conyevó a que pudieramos aprender a emplear distintar herramientas de testeo de aplicaciones y como poder reportarlas de manera prolija y completa, como asi también el poder registrarlas en un repositorio de github con la herramienta de issues.

Todo este proceso nos ayudo a mejorar como programadores, ya que el testing es una parte muy importante en la programación, que si bien hay un sector comercial que se dedica exclusivamente a esta rama, el programador también la debe saber emplear, ya que el mismo programador debe ir probando su codigo a medida que lo va desarrollando.