# Funciones JavaScript

## Cómo trabajar

1. Abre esta carpeta con Visual Studio Code.
2. Abre el HTML del ejercicio con **Live Server**.
3. Abre **F12 → Consola** para ver los mensajes. En los últimos ejercicios también observarás una ventana emergente o cambios en la página.
4. Lee la teoría y el enunciado. Edita el código al final del HTML.
5. Guarda y comprueba el resultado. Usa el prompt de clase si necesitas ayuda.
6. Consulta el desplegable **Resultado esperado** después de intentarlo.

No necesitas instalar dependencias. El diseño utiliza el archivo compartido **style.css**.

## Ejemplos

Los tres ejemplos de funciones están reunidos en [ejemplos/index.html](ejemplos/index.html), con comentarios en español. El error de ámbito está comentado para probarlo voluntariamente.

## Ejercicios

| Archivo | Contenido |
| --- | --- |
| [index1.html](index1.html) | Invocar una función |
| [index2.html](index2.html) | Pasar valores y obtener un resultado |
| [index3.html](index3.html) | Reutilizar una función con un bucle |
| [index4.html](index4.html) | Interpretar una función booleana |
| [index5.html](index5.html) | Simular un dado |
| [index6.html](index6.html) | Sumar dos tiradas |
| [index7.html](index7.html) | Calcular el área de una esfera |
| [index8.html](index8.html) | Devolver el mayor número |
| [index9.html](index9.html) | Mostrar un mensaje con alert |
| [index10.html](index10.html) | Enlazar un script externo |
| [index11.html](index11.html) | Cambiar palabras con replace |

El antiguo ex3b pasa a index4. Los ejercicios posteriores se renumeran; los tres ejercicios que ya eran HTML pasan a index9, index10 e index11.

En las tiradas aleatorias se muestra un ejemplo de salida posible, con el intervalo de resultados válidos. En el ejercicio de replace puedes elegir cualquier animal.

## Soluciones

La rama **solution-html** contiene los mismos HTML resueltos con soluciones sencillas y declaraciones con let.

## Observaciones didácticas

- index4 es de observación: los mensajes positivo/negativo están intercambiados intencionalmente. La solución responde en comentarios.
- index7 calcula el área de la superficie de una esfera, no su volumen. La llamada con radio 5 está etiquetada correctamente.
- index9 abre un alert en cada recarga; con autoguardado puede interrumpir la escritura. Se mantiene porque practicar alert es el objetivo.
- index10 introduce scripts externos y manipulación del documento: puede reservarse para una sesión posterior.
- Posible ampliación, no añadida: una función que calcule el precio final con descuento, devuelva el resultado y se reutilice con varios productos.
