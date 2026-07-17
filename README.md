# Comparador de Números

Aplicación web interactiva desarrollada como taller de **Lógica de Programación** para [Generation Colombia](https://colombia.generation.org/). Permite ingresar tres números y determinar cuál es el mayor, el medio y el menor mediante lógica con JavaScript.

## Descripción

El proyecto implementa un ejercicio clásico de lógica de programación: dado un conjunto de tres valores numéricos, ordenarlos de mayor a menor y mostrar el resultado de forma visual e intuitiva.

La interfaz está dividida en dos secciones:

- **Formulario de entrada:** campos para los tres números, con botones para calcular y limpiar.
- **Panel de resultados:** tarjetas que muestran el mayor, el medio y el menor con colores diferenciados.

## Vista previa

| Elemento        | Descripción                                      |
| --------------- | ------------------------------------------------ |
| Mayor           | Número más grande (verde)                        |
| Medio           | Valor intermedio (amarillo)                      |
| Menor           | Número más pequeño (rojo)                        |

## Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — diseño responsivo con variables CSS y gradientes
- **JavaScript (Vanilla)** — lógica de comparación y ordenamiento
- **Font Awesome 6** — iconografía
- **Google Fonts** — tipografía [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## Estructura del proyecto

```
Taller_Logica_Programacion/
├── index.html      # Estructura de la página
├── style.css       # Estilos y diseño responsivo
├── app.js          # Lógica de comparación y eventos
├── .gitignore
└── README.md
```

## Lógica implementada

Al hacer clic en **Calcular**, la aplicación:

1. Valida que los tres campos estén completos.
2. Convierte los valores ingresados a números.
3. Ordena el arreglo de forma descendente con `Array.sort()`.
4. Muestra el resultado en las tarjetas correspondientes.

```javascript
const numeros = [numero1, numero2, numero3].sort((a, b) => b - a);

resultMayor.textContent = numeros[0]; // Mayor
resultMedio.textContent = numeros[1]; // Medio
resultMenor.textContent = numeros[2]; // Menor
```

El botón **Limpiar** restablece los campos de entrada y los resultados a su estado inicial.

## Cómo ejecutar el proyecto

No requiere instalación de dependencias ni servidor de desarrollo. Es una aplicación estática.

### Opción 1: Abrir directamente

Abre el archivo `index.html` en tu navegador web.

### Opción 2: Servidor local (recomendado)

Si tienes [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code, haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

## Uso

1. Ingresa tres números en los campos del formulario.
2. Haz clic en **Calcular** para ver el orden (mayor, medio, menor).
3. Usa **Limpiar** para reiniciar el formulario y los resultados.

> Si algún campo está vacío, la aplicación mostrará una alerta indicando que debes completar todos los números.

## Autora

**Angelica Garcia** — Generation Colombia · 2026

## Licencia

Proyecto educativo con fines de aprendizaje en el marco del bootcamp de Generation Colombia.
