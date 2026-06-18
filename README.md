# Sweet Puppy - Laboratorio #1

## Descripción

Sweet Puppy es una Landing Page desarrollada para promocionar un emprendimiento dedicado a la elaboración de snacks naturales y saludables para perros.

La página permite a los usuarios conocer los productos ofrecidos por la marca, información sobre la fundadora, visualizar una galería de imágenes y comunicarse mediante un formulario de contacto.

Este proyecto fue desarrollado para el Laboratorio #1 del curso Programación en Ambiente Web I.

---

## Objetivos del laboratorio

- Aplicar HTML5 semántico.
- Utilizar CSS3 para el diseño visual.
- Implementar Flexbox y CSS Grid.
- Desarrollar una interfaz responsiva.
- Aplicar principios básicos de accesibilidad web.
- Utilizar Web Storage para almacenar información del usuario.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Local Storage

---

## Estructura del proyecto

```plaintext
Laboratorio_01/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── img/
    ├── logo.png
    ├── portada.jpg
    ├── nosotros.jpg
    └── imágenes de la galería
```

---

## Secciones de la página

### Inicio

Contiene una imagen principal y un mensaje de bienvenida para presentar la marca.

### Productos

Se muestran las diferentes categorías de productos:

- Helados naturales
- Gomitas
- Repostería canina
- Snacks deshidratados

### Sobre Nosotros

Presenta información sobre la fundadora y el propósito del emprendimiento.

### Galería

Muestra imágenes de productos y clientes.

### Contacto

Incluye un formulario para que los usuarios puedan enviar consultas o comentarios.

---

## Diseño Responsivo

Para adaptar la página a diferentes dispositivos se utilizaron:

### Flexbox

Se implementó en:

- Encabezado principal
- Menú de navegación
- Sección "Sobre Nosotros"
- Formulario de contacto

### CSS Grid

Se implementó en:

- Lista de productos
- Galería de imágenes

### Media Queries

Se utilizaron los siguientes:

```css
@media (max-width: 768px)
@media (max-width: 480px)
```

Estos permiten adaptar el contenido para tablets y dispositivos móviles.

---

## Accesibilidad

Se aplicaron prácticas básicas de accesibilidad:

- Uso de etiquetas semánticas HTML5.
- Imágenes con atributos alt descriptivos.
- Uso de atributos ARIA.
- Navegación mediante teclado.
- Indicador visual de enfoque mediante `:focus-visible`.

---

## Implementación de Web Storage

Se utilizó Local Storage para:

### Guardar el formulario

Los campos:

- Nombre
- Correo electrónico
- Mensaje

se almacenan automáticamente mientras el usuario escribe.

### Guardar el tema seleccionado

La página permite la opcion entre modo claro y modo oscuro.

La preferencia del usuario permanece guardada incluso después de recargar el sitio.

---

## Funcionalidades implementadas

- Menú de navegación.
- Menú hamburguesa para dispositivos móviles.
- Modo oscuro y modo claro.
- Persistencia de datos con Local Storage.
- Galería responsiva.
- Formulario de contacto.
- Diseño adaptable a diferentes tamaños de pantalla.

---

## Desarrollado por:

Daniela Rojas Chaves

Universidad Técnica Nacional

Programación en Ambiente Web I

Laboratorio #1 - Landing Page Responsiva