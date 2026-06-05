/* ============================================
   ZAYFORSTORE — PRODUCTOS
   ============================================
   📌 CÓMO AGREGAR UN PRODUCTO:
   1. Copia un bloque { } dentro del array
   2. Cambia los datos (nombre, precio, imagen, etc.)
   3. Guarda el archivo — ¡listo!

   📌 CATEGORÍAS DISPONIBLES:
   "ropa-urbana" | "ropa-deportiva" | "gafas"
   "hombres"     | "mujeres"        | "calzado"
   "relojes"     | "gorras"         | "tecnologia"

   📌 IMÁGENES:
   - Guarda tus fotos en: images/productos/[categoria]/
   - Ejemplo: images/productos/calzado/nike-air.jpg
   - Si no hay imagen, se mostrará un ícono automáticamente
   ============================================ */

const WHATSAPP_NUMERO = "573116583622";

const productos = [
  // ──── RELOJES ────
  {
    id: 14,
    nombre: "QyQ DAMA - Caballero",
    descripcion: "importado",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/QYQdamaycaballerocorreadecuero.jpeg",
      "images/productos/relojes/QYQdamaycaballerocorreadecueroblanco.jpeg",
      "images/productos/relojes/QyQ1.jpeg",
      "images/productos/relojes/QyQ_PLATEADO.jpeg",
      "images/productos/relojes/QyQPLATEADOYDORADO.jpeg",
      "images/productos/relojes/QyQDORADO.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 15,
    nombre: "INVICTA",
    descripcion: "Reloj para caballero - importado",
    precio: "$49.900",
    precioAntes: "$60.000",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/invicta.jpeg",
      "images/productos/relojes/invictanegro.jpeg",
      "images/productos/relojes/invictanegroplateado.jpeg",
      "images/productos/relojes/invictanegrodorado.jpeg",
      "images/productos/relojes/invictanegroblanco.jpeg",
      "images/productos/relojes/invictanegrodoradoblanco.jpeg",
      "images/productos/relojes/invictarojo.jpeg",
      "images/productos/relojes/invictanegrofondonegro.jpeg",
      "images/productos/relojes/invictanegrofondoblanco.jpeg"
    ],
    badge: "Nuevo",
    icono: "fa-clock"
  },
  {
    id: 151,
    nombre: "ROLEX",
    descripcion: "caballero - importado",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/rolex.jpeg",
      "images/productos/relojes/rolexcromado.jpeg",
      "images/productos/relojes/rolexazulydorado.jpeg",
      "images/productos/relojes/rolexplateadoyverde.jpeg",
      "images/productos/relojes/rolexazulplateado.jpeg",
      "images/productos/relojes/rolexdorado.jpeg",
      "images/productos/relojes/rolexnegroplateado.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 152,
    nombre: "PATEK PHILIPPE",
    descripcion: "Calidad importada Manilla acerada",
    precio: "$54.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/patekfondoblanco.jpeg",
      "images/productos/relojes/patekfondoverde.jpeg",
      "images/productos/relojes/patekfondoazul.jpeg",
      "images/productos/relojes/patekdoradofondoblanco.jpeg",
      "images/productos/relojes/patekdoradofondoverde.jpeg",
      "images/productos/relojes/patekdoradofondoazul.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 153,
    nombre: "CASIO CABALLERO",
    descripcion: "Calidad importada - resistente al agua",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/casiodoradoblanco.jpeg",
      "images/productos/relojes/casioblanco.jpeg",
      "images/productos/relojes/casiomujer.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 158,
    nombre: "CASIO DAMA",
    descripcion: "Calidad importada - resistente al agua",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/casiomujerplateado.jpeg",
      "images/productos/relojes/casiomujerplateadofondonegro.jpeg",
      "images/productos/relojes/casionegromujer.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 154,
    nombre: "ORIENT CABALLERO",
    descripcion: "Calidad importada",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/orientcaballeroydama1.jpeg",
      "images/productos/relojes/orientcaballeroydama2.jpeg",
      "images/productos/relojes/orientcaballeroydama3.jpeg",
      "images/productos/relojes/orientcaballeroydama4.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 155,
    nombre: "ORIENT DAMA",
    descripcion: "Calidad importada",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/orientcaballeroydama2.jpeg",
      "images/productos/relojes/orientcaballeroydama4.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  {
    id: 156,
    nombre: "HUBLOT",
    descripcion: "Calidad importada",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/HUBLOTBLANCO.jpeg",
      "images/productos/relojes/HUBLOTDORADO.jpeg",
      "images/productos/relojes/HUBLOTDORADOYNEGRO.jpeg",
      "images/productos/relojes/HUBLOTNEGRO.jpeg"
    ],
    badge: "oferta",
    icono: "fa-clock"
  },
  {
    id: 157,
    nombre: "RICHARD MILLE",
    descripcion: "Una máquina de carreras en la muñeca",
    precio: "$49.900",
    precioAntes: "",
    categoria: "relojes",
    imagenes: [
      "images/productos/relojes/richardmilleblanco.jpeg",
      "images/productos/relojes/richardmillenegro.jpeg"
    ],
    badge: "",
    icono: "fa-clock"
  },
  // ──── GAFAS ────
  {
    id: 6,
    nombre: "GAFAS CARTIER FOTOCROMATICAS",
    descripcion: "Calidad 1.1 importadas oscurecen con la luz solar",
    precio: "$39.900",
    precioAntes: "",
    categoria: "gafas",
    imagenes: [
      "images/productos/gafas/cartierFotocromaticas.jpeg",
      "images/productos/gafas/cartierFotocromaticas2.jpeg",
      "images/productos/gafas/cartierFotocromaticas3.jpeg",
      "images/productos/gafas/cartierFotocromaticas4.jpeg"
    ],
    badge: "",
    icono: "fa-glasses"
  },
  {
    id: 7,
    nombre: "Gafas Celine en pasta",
    descripcion: "Calidad importada 1.1",
    precio: "$34.900",
    precioAntes: "",
    categoria: "gafas",
    imagenes: ["images/productos/gafas/gafasCelinePasta.jpeg"],
    badge: "",
    icono: "fa-glasses"
  },
  {
    id: "7b",
    nombre: "Gafas Celine en Metalicas",
    descripcion: "Calidad importada 1.1",
    precio: "$34.900",
    precioAntes: "",
    categoria: "gafas",
    imagenes: ["images/productos/gafas/gafasCelineMetalicas.jpeg"],
    badge: "",
    icono: "fa-glasses"
  },
  {
    id: "7c",
    nombre: "Gafas Brasileñas",
    descripcion: "Calidad importada 1.1",
    precio: "$34.900",
    precioAntes: "",
    categoria: "gafas",
    imagenes: ["images/productos/gafas/gafasBrasileñas.jpeg"],
    badge: "",
    icono: "fa-glasses"
  },
  // ──── ROPA URBANA ────
  {
    id: 1,
    nombre: "BERMUDA RIGIDA",
    descripcion: "Talla disponible 30-32-34-36-38",
    precio: "$65.000",
    precioAntes: "",
    categoria: "ropa-urbana",
    imagenes: [
      "images/productos/ropa-urbana/bermuda1.jpeg",
      "images/productos/ropa-urbana/bermuda2.jpeg",
      "images/productos/ropa-urbana/bermuda3.jpeg",
      "images/productos/ropa-urbana/bermuda4.jpeg",
      "images/productos/ropa-urbana/bermuda5.jpeg",
      "images/productos/ropa-urbana/bermuda6.jpeg",
      "images/productos/ropa-urbana/bermuda7.jpeg",
      "images/productos/ropa-urbana/bermuda8.jpeg",
      "images/productos/ropa-urbana/bermuda9.jpeg",
      "images/productos/ropa-urbana/bermuda10.jpeg",
      "images/productos/ropa-urbana/bermuda11.jpeg",
      "images/productos/ropa-urbana/bermuda12.jpeg"
    ],
    badge: "",
    icono: "fa-tshirt"
  },

  {
    id: 22,
    nombre: "JEANS CARGO",
    descripcion: "Tela rigida",
    precio: "$95.000",
    precioAntes: "",
    categoria: "ropa-urbana",
    imagenes: [
      "images/productos/ropa-urbana/ca12.jpeg",
      "images/productos/ropa-urbana/ca2.jpeg",
      "images/productos/ropa-urbana/ca3.jpeg",
      "images/productos/ropa-urbana/ca4.jpeg",
      "images/productos/ropa-urbana/ca5.jpeg",
      "images/productos/ropa-urbana/ca6.jpeg",
      "images/productos/ropa-urbana/ca7.jpeg",
      "images/productos/ropa-urbana/ca8.jpeg",
      "images/productos/ropa-urbana/ca9.jpeg",
      "images/productos/ropa-urbana/ca10.jpeg",
      "images/productos/ropa-urbana/ca11.jpeg",
      "images/productos/ropa-urbana/ca1.jpeg",
      "images/productos/ropa-urbana/ca13.jpeg"
      
    
    ],
    badge: "",
    icono: "fa-tshirt"
  },

  {
    id: 91,
    nombre: "BERMUDA CLASICA",
    descripcion: "Tela Drill",
    precio: "$55.000",
    precioAntes: "",
    categoria: "ropa-urbana",
    imagenes: [
      "images/productos/hombres/berclasica.jpeg",
      "images/productos/hombres/berclasica2.jpeg",
      "images/productos/hombres/berclasica3.jpeg",
      "images/productos/hombres/berclasica4.jpeg",
      "images/productos/hombres/berclasica5.jpeg",
      "images/productos/hombres/berclasica6.jpeg"
    ],
    badge: "",
    icono: "fa-mars"
  },
  {
    id: 2,
    nombre: "BAGGY JEANS",
    descripcion: "Tela rigida calidad importada - Urbano",
    precio: "$90.000",
    precioAntes: "",
    categoria: "ropa-urbana",
    imagenes: [
      "images/productos/ropa-urbana/ba1.jpeg",
      "images/productos/ropa-urbana/ba2.jpeg",
      "images/productos/ropa-urbana/ba3.jpeg",
      "images/productos/ropa-urbana/ba4.jpeg",
      "images/productos/ropa-urbana/ba5.jpeg",
      "images/productos/ropa-urbana/ba6.jpeg",
      "images/productos/ropa-urbana/ba7.jpeg",
      "images/productos/ropa-urbana/ba8.jpeg",
      "images/productos/ropa-urbana/ba9.jpeg",
      "images/productos/ropa-urbana/ba10.jpeg",
      "images/productos/ropa-urbana/ba11.jpeg",
      "images/productos/ropa-urbana/ba12.jpeg",
      "images/productos/ropa-urbana/ba13.jpeg",
      "images/productos/ropa-urbana/ba14.jpeg",
      "images/productos/ropa-urbana/ba15.jpeg",
      "images/productos/ropa-urbana/ba16.jpeg",
      "images/productos/ropa-urbana/ba17.jpeg",
      "images/productos/ropa-urbana/ba18.jpeg"
      ],
    badge: "",
    icono: "fa-tshirt"
  },

   {
    id: 23,
    nombre: "JEANS RIGIDO",
    descripcion: "Tela rigida calidad importada - Urbano",
    precio: "$85.000",
    precioAntes: "",
    categoria: "ropa-urbana",
    imagenes: [
      "images/productos/ropa-urbana/ri1.jpeg",
      "images/productos/ropa-urbana/ri2.jpeg",
      "images/productos/ropa-urbana/ri3.jpeg",
      "images/productos/ropa-urbana/ri4.jpeg",
      "images/productos/ropa-urbana/ri5.jpeg",
      "images/productos/ropa-urbana/ri6.jpeg",
      "images/productos/ropa-urbana/ri7.jpeg"
    ],
    badge: "",
    icono: "fa-tshirt"
  },
  // ──── ROPA DEPORTIVA ────
  {
    id: 4,
    nombre: "LA TRICOLOR",
    descripcion: "Camisa de la Selección Colombia, calidad 1.1.",
    precio: "$79.000",
    precioAntes: "",
    categoria: "ropa-deportiva",
    imagenes: [
      "images/productos/ropa-deportiva/tricolor2.jpeg",
      "images/productos/ropa-deportiva/tricolor.jpeg",
      "images/productos/ropa-deportiva/tricolor3.jpeg",
      "images/productos/ropa-deportiva/tricolor4.jpeg",
      "images/productos/ropa-deportiva/tricolor5.jpeg"
    ],
    badge: "",
    icono: "fa-running"
  },

  // ──── HOMBRES ────
  {
    id: 8,
    nombre: "BILLETERA VELEZ",
    descripcion: "Calidad AAA Importada material 80% cuero 20% sintetico",
    precio: "$44.000",
    precioAntes: "",
    categoria: "hombres",
    imagenes: [
      "images/productos/hombres/velez1.jpeg",
      "images/productos/hombres/velez2.jpeg",
      "images/productos/hombres/velez3.jpeg",
      "images/productos/hombres/billeteravelez.jpeg"
    ],
    badge: "",
    icono: "fa-mars"
  },
  {
    id: 9,
    nombre: "BILLETERA 1.1",
    descripcion: "Importada",
    precio: "$55.000",
    precioAntes: "$70.000",
    categoria: "hombres",
    imagenes: [
      "images/productos/hombres/billetera1.11.jpeg",
      "images/productos/hombres/billetera1.12.jpeg",
      "images/productos/hombres/billetera1.13.jpeg"
    ],
    badge: "",
    icono: "fa-mars"
  },

  {
    id: 31,
    nombre: "CORREAS",
    descripcion: "Calidad 1.1",
    precio: "$55.000",
    precioAntes: "",
    categoria: "hombres",
    imagenes: [
      "images/productos/hombres/co1.jpeg",
      "images/productos/hombres/co2.jpeg",
      "images/productos/hombres/co3.jpeg",
      "images/productos/hombres/co4.jpeg",
      "images/productos/hombres/co5.jpeg",
      "images/productos/hombres/co6.jpeg",
       "images/productos/hombres/co7.jpeg",
      "images/productos/hombres/co8.jpeg",
      "images/productos/hombres/co9.jpeg",
      "images/productos/hombres/co10.jpeg",
      "images/productos/hombres/co11.jpeg",
      "images/productos/hombres/co12.jpeg",
      "images/productos/hombres/co14.jpeg",
      "images/productos/hombres/co15.jpeg",
      "images/productos/hombres/co16.jpeg",
      "images/productos/hombres/co17.jpeg",
      "images/productos/hombres/co18.jpeg",
       "images/productos/hombres/co19.jpeg",
      "images/productos/hombres/co20.jpeg",
      "images/productos/hombres/co21.jpeg",
    ],
    badge: "",
    icono: "fa-mars"
  },
  {
    id: 24,
    nombre: "MORRAL 1.1",
    descripcion: "Morral importado 1.1 Material sintético ",
    precio: "$140.000",
    precioAntes: "",
    categoria: "hombres",
    imagenes: [
      "images/productos/hombres/morral1.jpeg",
      "images/productos/hombres/morral2.jpeg",
      "images/productos/hombres/morral3.jpeg",
      "images/productos/hombres/morral4.jpeg",
      "images/productos/hombres/morral5.jpeg",
      "images/productos/hombres/morral6.jpeg",
      "images/productos/hombres/morral7.jpeg"
    ],
    badge: "",
    icono: "fa-mars"
  },

  // ──── MUJERES ────
  {
    id: 10,
    nombre: "VESTIDO SAMMY",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidonegro2.jpeg",
      "images/productos/mujeres/vestidonegro.jpeg",
      "images/productos/mujeres/SAMMY.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },
  {
    id: 11,
    nombre: "VESTIDO AURA",
    descripcion: "🪡 Tela polilicra doble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidorojo.jpeg",
      "images/productos/mujeres/ROJO22.jpeg",
      "images/productos/mujeres/vestido veice.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },
  {
    id: 21,
    nombre: "VESTIDO BARBARA",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidoazuldisenoatrasvarioscolores.jpeg",
      "images/productos/mujeres/vestidoazuldisenoatras2.jpeg",
      "images/productos/mujeres/vestidoazulsisenoatras.jpeg",
      "images/productos/mujeres/vestidoazuldisenoatrasblanco.jpeg",
      "images/productos/mujeres/BARBARA.jpeg"
    ],
    badge: "",
    icono: "fa-venus"
  },

    {
    id: 211,
    nombre: "VESTIDO NUVIA",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidorojodiseño.jpeg",
      "images/productos/mujeres/vestidoamarillodiseño.jpeg",
      "images/productos/mujeres/vestidodiseñovariorcolor.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },

     {
    id: 212,
    nombre: "VESTIDO JARDINERA LARGA",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidorosado2.jpeg",
      "images/productos/mujeres/vestidorosado.jpeg",
      "images/productos/mujeres/JARDIBERA.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },

     {
    id: 213,
    nombre: "VESTIDO ESCOTE ESPALDA",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidoverde.jpeg",
      "images/productos/mujeres/vestidoverde2.jpeg",
      "images/productos/mujeres/vestidoverde3.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },

   {
    id: 214,
    nombre: "VESTIDO ARRUNCHE LARGO",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidoamarillo.jpeg",
      "images/productos/mujeres/vestidoamarillo1.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },



   {
    id: 215,
    nombre: "VESTIDO NAHIARA",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/vestidorosa22.jpeg",
      "images/productos/mujeres/vestidodiseño22varios.jpeg"
    ],
    badge: "",
    icono: "fa-venus"
  },


 {
    id: 216,
    nombre: "VESTIDO ESCOTE DJO",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/blusaamarilla.jpeg",
      "images/productos/mujeres/blusaamarilla2.jpeg",
      "images/productos/mujeres/blusanegra.jpeg",
      "images/productos/mujeres/blusanegra2.jpeg",
      "images/productos/mujeres/blusaroja.jpeg",
       "images/productos/mujeres/blusaroja2.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },

 {
    id: 217,
    nombre: "VESTIDO STRAPLE YULIEH",
    descripcion: "🪡 Tela polilicradoble 🏷️ Talla única (Eslogan hasta la L)",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/STRAPLE.jpeg",
      "images/productos/mujeres/STRAPLE2.jpeg",
      "images/productos/mujeres/STRAPLE3.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },

  {
    id: 218,
    nombre: "VESTIDO MEDUSA",
    descripcion: "🏷️ Talla única ",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/medusablanco.jpeg",
      "images/productos/mujeres/medusablanco2.jpeg",
      "images/productos/mujeres/medusarojo.jpeg",
      "images/productos/mujeres/medusarojo2.jpeg",
      "images/productos/mujeres/medusanegro.jpeg",
      "images/productos/mujeres/medusanegro1.jpeg",
      "images/productos/mujeres/medusanegro2.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },

   {
    id: 219,
    nombre: "VESTIDO ICONIC",
    descripcion: "🪡 Tela licra doble🏷️ Talla única ",
    precio: "$60.000",
    precioAntes: "",
    categoria: "mujeres",
    imagenes: [
      "images/productos/mujeres/iconic.jpeg",
      "images/productos/mujeres/iconic1.jpeg",
      "images/productos/mujeres/iconic2.jpeg",
      "images/productos/mujeres/iconic3.jpeg",
      "images/productos/mujeres/iconic4.jpeg",
    ],
    badge: "",
    icono: "fa-venus"
  },



  // ──── CALZADO ────
  {
    id: 12,
    nombre: "NIKE VELCRO",
    descripcion: "Calidad 1.1",
    precio: "$70.000",
    precioAntes: "",
    categoria: "calzado",
    imagenes: [
      "images/productos/calzado/nikeve8.jpeg",
      "images/productos/calzado/nikeve1.jpeg",
      "images/productos/calzado/nikeve2.jpeg",
      "images/productos/calzado/nikeve3.jpeg",
      "images/productos/calzado/nikeve4.jpeg",
      "images/productos/calzado/nikeve5.jpeg",
      "images/productos/calzado/nikeve6.jpeg",
      "images/productos/calzado/nikeve7.jpeg",
    ],
    badge: "",
    icono: "fa-shoe-prints"
  },
  {
    id: 13,
    nombre: "CROCS TRACTOR",
    descripcion: "Calidad importada 1.1",
    precio: "$85.000",
    precioAntes: "",
    categoria: "calzado",
    imagenes: [
      "images/productos/calzado/cros1.jpeg",
      "images/productos/calzado/cros2.jpeg",
      "images/productos/calzado/nikeve2.jpeg",
    ],
    badge: "",
    icono: "fa-shoe-prints"
  },

    {
    id: 25,
    nombre: "CROCS FULL FORCE",
    descripcion: "Calidad importada 1.1",
    precio: "$85.000",
    precioAntes: "",
    categoria: "calzado",
    imagenes: [
      "images/productos/calzado/crosf1.jpeg",
      "images/productos/calzado/crosf2.jpeg",
      "images/productos/calzado/crosf3.jpeg",
      "images/productos/calzado/crosf4.jpeg",
      "images/productos/calzado/crosf5.jpeg",
      "images/productos/calzado/crosf6.jpeg",
      "images/productos/calzado/crosf7.jpeg"
    ],
    badge: "",
    icono: "fa-shoe-prints"
  },
  {
    id: 26,
    nombre: "OZUNA",
    descripcion: "Calidad importada 1.1",
    precio: "$85.000",
    precioAntes: "",
    categoria: "calzado",
    imagenes: [
      "images/productos/calzado/ozuna.jpeg",
      "images/productos/calzado/ozuna2.jpeg",
    ],
    badge: "",
    icono: "fa-shoe-prints"
  },
  // ──── GORRAS ────
  {
    id: 16,
    nombre: "GORRAS MULTIMARCA 1.1",
    descripcion: "Calidad Importada",
    precio: "$55.000",
    precioAntes: "",
    categoria: "gorras",
    imagenes: [
      "images/productos/gorras/gorras1.jpeg",
      "images/productos/gorras/gorras2.jpeg",
      "images/productos/gorras/gorras3.jpeg",
    ],
    badge: "",
    icono: "fa-hat-cowboy"
  },

  {
    id: 27,
    nombre: "VARIAS REFERENCIAS",
    descripcion: "Calidad Importada - SUPREME-OAKLEY-NIKE-LACOSTE-ADIDAS-PUMA...",
    precio: "$55.000",
    precioAntes: "",
    categoria: "gorras",
    imagenes: [
      "images/productos/gorras/gorrassuprime.jpeg",
      "images/productos/gorras/gorrassuprime1.jpeg",
      "images/productos/gorras/gnike.jpeg",
      "images/productos/gorras/gkley.jpeg",
      "images/productos/gorras/ga.jpeg",
      "images/productos/gorras/12.jpeg",
      "images/productos/gorras/13.jpeg",
      "images/productos/gorras/14.jpeg",
      "images/productos/gorras/15.jpeg",
      "images/productos/gorras/16.jpeg",
      "images/productos/gorras/17.jpeg",
      "images/productos/gorras/18.jpeg",
       "images/productos/gorras/19.jpeg",
      "images/productos/gorras/20.jpeg",
      "images/productos/gorras/21.jpeg",
      "images/productos/gorras/22.jpeg",
      "images/productos/gorras/23.jpeg",
      "images/productos/gorras/24.jpeg",
  
    
    ],
    badge: "",
    icono: "fa-hat-cowboy"
  },
  {
    id: 28,
    nombre: "VARIAS REFERENCIAS",
    descripcion: "CALIDAD 1.1",
    precio: "$55.000",
    precioAntes: "",
    categoria: "gorras",
    imagenes: [
      "images/productos/gorras/gr1.jpeg",
      "images/productos/gorras/gr2.jpeg",
      "images/productos/gorras/gr3.jpeg",
      "images/productos/gorras/gr4.jpeg",
       "images/productos/gorras/gr5.jpeg",
      "images/productos/gorras/gr6.jpeg",
      "images/productos/gorras/gr7.jpeg",
      "images/productos/gorras/gr8.jpeg",
       "images/productos/gorras/gr9.jpeg",
      "images/productos/gorras/gr10.jpeg",
      "images/productos/gorras/gr11.jpeg",
      "images/productos/gorras/gr12.jpeg",
       "images/productos/gorras/gr13.jpeg",
      "images/productos/gorras/gr14.jpeg",
      "images/productos/gorras/gr15.jpeg",
      "images/productos/gorras/gr16.jpeg",
       "images/productos/gorras/gr17.jpeg",
      "images/productos/gorras/gr18.jpeg",
      "images/productos/gorras/gr19.jpeg",
      "images/productos/gorras/gr20.jpeg",
      "images/productos/gorras/gr21.jpeg",
      "images/productos/gorras/gr22.jpeg"
    ],
    badge: "Nuevo",
    icono: "fa-hat-cowboy"
  },

   {
    id: 29,
    nombre: "GORRAS BEISBOLERAS",
    descripcion: "CALIDAD 1.1",
    precio: "$45.000",
    precioAntes: "$55.000",
    categoria: "gorras",
    imagenes: [
      "images/productos/gorras/beis1.jpeg",
      "images/productos/gorras/beis2.jpeg",
      "images/productos/gorras/beis3.jpeg",
      "images/productos/gorras/beis4.jpeg",
       "images/productos/gorras/beis5.jpeg",
      "images/productos/gorras/beis6.jpeg",
        ],
    badge: "Nuevo",
    icono: "fa-hat-cowboy"
  },

  // ──── TECNOLOGIA ────
  {
    id: 18,
    nombre: "AIRPODS PRO 2 GENERACION",
    descripcion: "Color: blanco - Cancelación de ruido activa y pasiva. Carga rápida inalámbrica. la caja otorga hasta 3 cargas adicionales.",
    precio: "$69.900",
    precioAntes: "$120.000",
    categoria: "tecnologia",
    imagenes: [
      "images/productos/tecnologia/22.jpeg",
      "images/productos/tecnologia/pro2.jpeg",
      "images/productos/tecnologia/pro22.jpeg",
    ],
    badge: "",
    icono: "fa-headphones"
  },
  {
    id: 19,
    nombre: "AIRPODS 3 GENERACION",
    descripcion: "la caja otorga hasta 3 cargas adicionales. Funciones táctiles para: contestar llamadas, control de música, llamar al asistente (Siri o Asistente de google)",
    precio: "$69.900",
    precioAntes: "",
    categoria: "tecnologia",
    imagenes: [
      "images/productos/tecnologia/airPods3generacion1.png",
      
    ],
    badge: "NUEVO",
    icono: "fa-bolt"
  },
  {
    id: 20,
    nombre: "AIRPODS 4 GENERACION",
    descripcion: "Cancelación activa de ruido - Audio Espacial Personalizado - Sensores Inteligentes - Resistencia IP54: Protección contra polvo, sudor y agua.",
    precio: "$69.900",
    precioAntes: "",
    categoria: "tecnologia",
    imagenes: ["images/productos/tecnologia/airpods4g.jpeg"],
    badge: "",
    icono: "fa-battery-full"
  },

    {
    id: 30,
    nombre: "CARGADOR USB-C A LIGHTNING APLE",
    descripcion: "ORIGINAL-El cargador USB-C a Lightning de Apple es la solución ideal para quienes buscan una carga rápida y eficiente para su iPhone 14 Pro Max",
    precio: "$110.000",
    precioAntes: "$135.000",
    categoria: "tecnologia",
    imagenes: ["images/productos/tecnologia/cargadorr.jpg",
      "images/productos/tecnologia/cargador.jpeg"
    ],
    badge: "",
    icono: "fa-battery-full"
  }
];

/* ════════════════════════════════════════════
   LOS DATOS DE PRODUCTOS ESTÁN DIRECTAMENTE
   EN EL ARRAY DE ARRIBA — listo para usar
   ════════════════════════════════════════════ */

const categoriaLabels = {
  "ropa-urbana":    "Ropa Urbana",
  "ropa-deportiva": "Ropa Deportiva",
  "gafas":          "Gafas",
  "hombres":        "Hombres",
  "mujeres":        "Mujeres",
  "calzado":        "Calzado",
  "relojes":        "Relojes",
  "gorras":         "Gorras",
  "tecnologia":     "Tecnología"
};

function generarMensajeWhatsApp(producto) {
  const msg = `Hola ZayforStore 👋, vi el catálogo online y me interesa este producto:\n\n` +
              `📦 *${producto.nombre}*\n` +
              `💰 Precio: ${producto.precio}\n\n` +
              `¿Está disponible? ¿Qué tallas/colores maneja? ¡Gracias!`;
  return encodeURIComponent(msg);
}

function crearTarjetaProducto(p) {
  // Normalizar: si tiene imagen sola, convertirla a array
  const fotos = p.imagenes
    ? p.imagenes
    : (p.imagen ? [p.imagen] : []);

  const badge = p.badge ? `<span class="producto-badge">${p.badge}</span>` : '';
  const precioAntes = p.precioAntes
    ? `<span class="producto-precio-antes">${p.precioAntes}</span>` : '';
  const waLink = `https://wa.me/${WHATSAPP_NUMERO}?text=${generarMensajeWhatsApp(p)}`;
  const catLabel = categoriaLabels[p.categoria] || p.categoria;
  const tieneCarrusel = fotos.length > 1;

  // Construir slides
  const slidesHTML = fotos.length > 0
    ? fotos.map((src, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}">
          <img src="${src}" alt="${p.nombre} - foto ${i + 1}" loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'><i class=\\'fas ${p.icono || 'fa-image'}\\'></i><span>Imagen próximamente</span></div>'" />
        </div>`).join('')
    : `<div class="slide active">
         <div class="img-placeholder">
           <i class="fas ${p.icono || 'fa-image'}"></i>
           <span>Imagen próximamente</span>
         </div>
       </div>`;

  // Puntos indicadores (solo si hay más de 1 foto)
  const dotsHTML = tieneCarrusel
    ? `<div class="carrusel-dots">
         ${fotos.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" onclick="cambiarSlide(this, ${i})"></span>`).join('')}
       </div>` : '';

  // Flechas (solo si hay más de 1 foto)
  const flechasHTML = tieneCarrusel
    ? `<button class="carrusel-btn prev" onclick="moverSlide(this, -1)" aria-label="Anterior">&#8249;</button>
       <button class="carrusel-btn next" onclick="moverSlide(this,  1)" aria-label="Siguiente">&#8250;</button>` : '';

  return `
    <div class="producto-card" data-categoria="${p.categoria}" data-product-id="${p.id}">
      <div class="producto-img-wrap">
        <div class="carrusel">
          ${slidesHTML}
          ${flechasHTML}
          ${dotsHTML}
        </div>
        ${badge}
      </div>
      <div class="producto-info">
        <p class="producto-categoria-tag">${catLabel}</p>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-descripcion">${p.descripcion}</p>
        <div class="producto-precio-row">
          <span class="producto-precio">${p.precio}</span>
          ${precioAntes}
        </div>
        <a href="${waLink}" target="_blank" rel="noopener" class="btn-whatsapp">
          <i class="fab fa-whatsapp"></i>
          Consultar por WhatsApp
        </a>
      </div>
    </div>`;
}

function moverSlide(btn, direccion) {
  const carrusel = btn.closest('.carrusel');
  const slides = carrusel.querySelectorAll('.slide');
  const dots   = carrusel.querySelectorAll('.dot');
  let actual   = [...slides].findIndex(s => s.classList.contains('active'));

  slides[actual].classList.remove('active');
  if (dots[actual]) dots[actual].classList.remove('active');

  actual = (actual + direccion + slides.length) % slides.length;

  slides[actual].classList.add('active');
  if (dots[actual]) dots[actual].classList.add('active');
}

function cambiarSlide(dot, index) {
  const carrusel = dot.closest('.carrusel');
  const slides   = carrusel.querySelectorAll('.slide');
  const dots     = carrusel.querySelectorAll('.dot');

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[index].classList.add('active');
  dot.classList.add('active');
}

function filtrarCategoria(cat, sinScroll = false) {
  // Actualizar botones activos
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });

  // Filtrar productos
  const lista = cat === 'todos'
    ? productos
    : productos.filter(p => p.categoria === cat);

  const grid  = document.getElementById('productosGrid');
  const empty = document.getElementById('productosEmpty');

  if (lista.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    grid.innerHTML = lista.map(crearTarjetaProducto).join('');
    empty.style.display = 'none';
  }

  if (!sinScroll) {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function precargarImagenes() {
  productos.forEach(p => {
    if (p.imagenes) {
      p.imagenes.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  });
}

/* ════════════════════════════════════════════
   MODAL / LIGHTBOX
   ════════════════════════════════════════════ */
let modalProducto = null;
let modalActual = 0;

function abrirModal(producto, index) {
  modalProducto = producto;
  modalActual = index;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  actualizarModal();
}

function cerrarModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  modalProducto = null;
}

function actualizarModal() {
  if (!modalProducto) return;
  const fotos = modalProducto.imagenes;
  const el = id => document.getElementById(id);

  el('modalImage').src = fotos[modalActual];
  el('modalImage').alt = `${modalProducto.nombre} - foto ${modalActual + 1}`;
  el('modalName').textContent = modalProducto.nombre;
  el('modalDesc').textContent = modalProducto.descripcion;
  el('modalCategory').textContent = categoriaLabels[modalProducto.categoria] || modalProducto.categoria;
  el('modalPrice').textContent = modalProducto.precio;

  const precioAntesEl = el('modalPriceBefore');
  if (modalProducto.precioAntes) {
    precioAntesEl.textContent = modalProducto.precioAntes;
    precioAntesEl.style.display = '';
  } else {
    precioAntesEl.style.display = 'none';
  }

  el('modalWhatsApp').href = `https://wa.me/${WHATSAPP_NUMERO}?text=${generarMensajeWhatsApp(modalProducto)}`;

  const tieneMultiples = fotos.length > 1;
  el('modalPrev').style.display = tieneMultiples ? '' : 'none';
  el('modalNext').style.display = tieneMultiples ? '' : 'none';

  const dotsContainer = el('modalDots');
  if (tieneMultiples) {
    dotsContainer.innerHTML = fotos.map((_, i) =>
      `<span class="dot ${i === modalActual ? 'active' : ''}" onclick="modalIrA(${i})"></span>`
    ).join('');
    dotsContainer.style.display = '';
  } else {
    dotsContainer.style.display = 'none';
  }
}

function modalMoverSlide(direccion) {
  if (!modalProducto) return;
  const fotos = modalProducto.imagenes;
  modalActual = (modalActual + direccion + fotos.length) % fotos.length;
  actualizarModal();
}

function modalIrA(index) {
  modalActual = index;
  actualizarModal();
}

// Cargar todos los productos al iniciar
document.addEventListener('DOMContentLoaded', () => {
  filtrarCategoria('todos', true);
  precargarImagenes();

  /* ── Eventos del modal ── */

  // Click en imagen de producto → abrir modal
  document.getElementById('productosGrid').addEventListener('click', (e) => {
    const img = e.target.closest('.slide img');
    if (!img) return;
    if (img.closest('.img-placeholder')) return;

    const card = img.closest('.producto-card');
    if (!card) return;

    const productId = card.dataset.productId;
    const producto = productos.find(p => String(p.id) === productId);
    if (!producto) return;

    const carrusel = img.closest('.carrusel');
    const slides = carrusel.querySelectorAll('.slide');
    const activeIndex = [...slides].findIndex(s => s.classList.contains('active'));

    abrirModal(producto, activeIndex >= 0 ? activeIndex : 0);
  });

  // Cerrar modal
  document.getElementById('modalClose').addEventListener('click', cerrarModal);
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) cerrarModal();
  });

  // Navegación
  document.getElementById('modalPrev').addEventListener('click', () => modalMoverSlide(-1));
  document.getElementById('modalNext').addEventListener('click', () => modalMoverSlide(1));

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('modalOverlay').classList.contains('active')) return;
    if (e.key === 'Escape') cerrarModal();
    if (e.key === 'ArrowLeft') modalMoverSlide(-1);
    if (e.key === 'ArrowRight') modalMoverSlide(1);
  });
});