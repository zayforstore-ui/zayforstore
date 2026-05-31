# 🛍️ ZayforStore — Guía de uso

Bienvenido a tu catálogo online. Esta guía te explica cómo personalizarlo sin necesidad de saber programar.

---

## 📁 Estructura de carpetas

```
ZayforStore/
├── index.html              ← Página principal (no editar salvo cambios de texto)
├── css/
│   └── style.css           ← Estilos visuales (colores, fuentes, etc.)
├── js/
│   ├── productos.js        ← ⭐ AQUÍ agregas/editas tus productos
│   └── main.js             ← Animaciones y menú (no editar)
└── images/
    └── productos/
        ├── ropa-urbana/    ← Fotos de ropa urbana
        ├── ropa-deportiva/ ← Fotos de ropa deportiva
        ├── gafas/         ← Fotos de gafas
        ├── hombres/        ← Fotos de moda masculina
        ├── mujeres/        ← Fotos de moda femenina
        ├── calzado/        ← Fotos de calzado
        ├── relojes/        ← Fotos de relojes
        ├── gorras/         ← Fotos de gorras
        └── tecnologia/     ← Fotos de tecnología
```

---

## 📞 Paso 1 — Cambia tu número de WhatsApp

Abre `js/productos.js` y en la primera línea cambia el número:

```js
const WHATSAPP_NUMERO = "573116583622"; // ← Tu número con código de país
```

**Ejemplo Colombia:** Si tu celular es `300 123 4567`, escribe: `"573001234567"`

---

## 🖼️ Paso 2 — Agregar imágenes de productos

1. Toma la foto o descárgala de tu proveedor
2. **Renómbrala sin espacios ni tildes** → `hoodie-negro.jpg` ✅ (NO: `Hoodie Negro.JPG` ❌)
3. **Tamaño recomendado:** 600×700 px o similar (vertical/cuadrada)
4. **Formatos:** `.jpg` o `.webp` (más rápidos que `.png`)
5. Cópiala a la carpeta de su categoría:
   - Ejemplo: `images/productos/calzado/nike-air.jpg`
6. En `productos.js`, en el campo `imagen` del producto, escribe la misma ruta:
   - `imagen: "images/productos/calzado/nike-air.jpg"`

> Si no hay imagen o la ruta está mal, se mostrará automáticamente un ícono de placeholder.

---

## ➕ Paso 3 — Agregar un nuevo producto

Abre `js/productos.js` y copia este bloque dentro del array `productos`:

```js
{
  id: 99,                              // Número único (no repetir)
  nombre: "Nombre del producto",
  descripcion: "Descripción corta del producto",
  precio: "$80.000",
  precioAntes: "$100.000",            // Dejar "" si no hay precio anterior
  categoria: "calzado",               // Ver categorías abajo
  imagen: "images/productos/calzado/mi-foto.jpg",
  badge: "Nuevo",                     // "Nuevo", "Oferta" o "" para nada
  icono: "fa-shoe-prints"             // Ícono de respaldo si no hay imagen
},
```

### Categorías disponibles:
| Valor en código    | Lo que verá el cliente |
|--------------------|------------------------|
| `"ropa-urbana"`    | Ropa Urbana            |
| `"ropa-deportiva"` | Ropa Deportiva         |
| `"gafas"`          | Gafas                  |
| `"hombres"`        | Hombres                |
| `"mujeres"`        | Mujeres                |
| `"calzado"`        | Calzado                |
| `"relojes"`        | Relojes                |
| `"gorras"`         | Gorras                 |
| `"tecnologia"`     | Tecnología             |

---

## 🎨 Paso 4 — Cambiar colores (opcional)

Abre `css/style.css` y busca la sección `:root` al inicio:

```css
:root {
  --acento: #e8ff00;    /* Amarillo neón — acento principal */
  --negro:  #0a0a0a;    /* Fondo oscuro */
  --blanco: #ffffff;    /* Texto claro */
}
```

Cambia `--acento` al color de tu marca. Herramienta para elegir colores: [coolors.co](https://coolors.co)

---

## 🚀 Paso 5 — Publicar gratis en GitHub Pages

### Opción A — Desde GitHub.com (sin instalar nada)

1. Ve a [github.com](https://github.com) y crea una cuenta gratis
2. Haz click en **"New repository"**
3. Nómbralo: `zayforstore` (todo minúsculas)
4. Marca **"Public"** y crea el repositorio
5. Sube todos los archivos arrastrándolos (botón "uploading an existing file")
6. Ve a **Settings → Pages → Source → "Deploy from a branch"**
7. Selecciona la rama `main` y carpeta `/ (root)` → Guarda
8. Tu tienda estará en: `https://tunombre.github.io/zayforstore/`

### Opción B — Desde VS Code (recomendado)

1. Instala [Git](https://git-scm.com/downloads) y [VS Code](https://code.visualstudio.com/)
2. Instala la extensión **GitHub Repositories** en VS Code
3. Abre la carpeta del proyecto en VS Code
4. En la terminal de VS Code:
```bash
git init
git add .
git commit -m "Primera versión ZayforStore"
git remote add origin https://github.com/TU_USUARIO/zayforstore.git
git push -u origin main
```
5. Activa GitHub Pages desde Settings del repositorio

---

## ✏️ Cambiar textos de la página

Abre `index.html` y busca estos textos para editarlos:

| Qué cambiar              | Dónde buscarlo en index.html           |
|--------------------------|----------------------------------------|
| Título de la página      | `<title>ZayforStore...</title>`        |
| Descripción SEO          | `<meta name="description"`             |
| Texto del banner hero    | Sección `<!-- HERO / BANNER -->`       |
| Redes sociales           | Sección `<!-- FOOTER -->`              |
| Número WhatsApp (links)  | Busca `wa.me/573116583622` y cámbialo  |

---

## ❓ Problemas frecuentes

**La imagen no aparece:**
- Verifica que el nombre del archivo no tenga espacios ni mayúsculas
- Verifica que la ruta en `productos.js` sea exactamente igual al nombre del archivo

**El botón de WhatsApp no funciona:**
- Asegúrate de que el número esté bien escrito en `productos.js` (solo números, sin +, espacios o guiones)

**Los cambios no se ven en GitHub Pages:**
- Espera 1-2 minutos y recarga la página
- Asegúrate de haber subido los archivos nuevos

---

Hecho con ❤️ para **ZayforStore** 🛍️
