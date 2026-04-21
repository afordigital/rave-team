export const languages = {
  en: "English",
  es: "Español",
} as const;

export type SupportedLang = keyof typeof languages;

export const ui = {
  en: {
    // Meta
    "site.title": "Rave Team",
    "site.description": "flashy stories 💫 deranged experiences",

    // Navbar
    "nav.games": "GAMES",
    "nav.news": "NEWS",
    "nav.about": "ABOUT",
    "nav.contact": "CONTACT",
    "nav.presskit": "PRESS KIT",
    "nav.menu": "MENU",

    // Hero
    "hero.title": "FLASHY STORIES,<br /> DERANGED EXPERIENCES",
    "hero.cta": "WISHLIST SPACE DIVA",

    // Space Diva Section
    "spacediva.description":
      "A game development studio creating projects that primarily we would play ourselves first, and then aim at massive audiences.",
    "spacediva.btn.wishlist": "WISHLIST",
    "spacediva.btn.presskit": "PRESS KIT",

    // About
    "about.title": "About Us",
    "about.description":
      "Rave Team is an emerging Spanish studio focused on creating unconventional, wild, and deranged narrative experiences. We blend the glamour of pop culture with the rebelliousness of urban culture to bring innovative stories to the video game industry.",

    // News
    "news.title": "LATEST NEWS",
    "news.readmore": "Read more updates and news",
    "news.card.readmore": "Read more",

    // Footer
    "footer.credit": "Designed and Developed by",

    // News data
    "news.1.title": "A game development studio creating projects",
    "news.1.description":
      "A game development studio creating projects that primarily we would play ourselves first, and then aim at massive audiences. A game development studio creating projects that primarily we would",
    "news.1.category": "Crowdfunding",
    "news.2.title": "A game development studio creating projects",
    "news.2.description":
      "A game development studio creating projects that primarily we would play ourselves first, and then aim at massive audiences. A game development studio creating projects that primarily we would",
    "news.2.category": "Games",
    "news.3.title": "creating projects",
    "news.3.description":
      "A game development studio creating projects that primarily we would play ourselves first, and then aim at massive audiences. A game development studio creating projects that primarily we would",
    "news.3.category": "Events",
    "news.4.title": "we would play ourselves first",
    "news.4.description": "Biggest crowdfund milestone achieved!",
    "news.4.category": "Crowdfunding",
    "news.5.title": "NEW 5",
    "news.5.description": "Behind the scenes of our new game engine.",
    "news.5.category": "Games",
    "news.6.title": "NEW 6",
    "news.6.description":
      "We're speaking at the Global Game Expo 2025.",
    "news.6.category": "Events",

    // Press Kit
    "presskit.title": "Space Diva — Press Kit",
    "presskit.meta.description":
      "Official press kit for Space Diva by Rave Team. Download assets, screenshots, logos, and press materials.",
    "presskit.pitch.heading": "Pitch",
    "presskit.pitch.text":
      "Space Diva is a visual novel which combines dialogue selection and interactive point & click experiences. Join Carmen, a somewhat absent-minded middle-aged lady who has to endure bizarre situations in her space truck. And possibly mess things up like crazy.",
    "presskit.description.heading": "Description",
    "presskit.description.text":
      "An interactive narrative experience about the most flamboyant beings in the universe.",
    "presskit.whatisthis.heading": "What is this about?",
    "presskit.whatisthis.paragraphs": [
      "The galaxy was the dullest place in the universe… until Carmen arrived in her space truck, attracting the most talkative and mischievous creatures. Can you handle the chaos?",
      "You play as Carmen, a somewhat absent-minded middle-aged wanderer cruising through the endless universe in her space truck. Her vehicle is packed with lost-and-found objects she has collected over the years.",
      "Along the way, she meets curious and eccentric beings who seek her help. But be warned — her solutions might fix their problems… or make things much, much worse.",
      "Depending on her choices, she will accumulate 'universe energy,' which could be used in her machine to obtain the object for the visitor. Once you deliver it, the story branches in unpredictable ways.",
      "This energy can also be used to unlock new spells, such as powerful dialogue options that lead to amazing and unexpected story branches, or to reveal new insights about the world.",
    ],
    "presskit.features.heading": "Features",
    "presskit.features.items": [
      "Funny branched and unpredictable dialogues",
      "Upgrades and spells to customize the course of the story",
      "Queer, colorful world full of eccentric characters",
      "Unique, replayable adventures presented as comedy sketches",
    ],
    "presskit.download.button": "DOWNLOAD ALL ASSETS",
    "presskit.download.hint":
      "Screenshots, logos & icons — no video (.zip, ~15 MB)",
    "presskit.trailer.heading": "Trailer",
    "presskit.gallery.heading": "Gallery",
    "presskit.logos.heading": "Logos",
    "presskit.about.heading": "About Rave Team",
    "presskit.about.paragraphs": [
      "Rave Team is an emerging Spanish studio focused on creating unconventional, wild, and deranged narrative experiences. We blend the glamour of pop culture with the rebelliousness of urban culture to bring innovative stories to the video game industry.",
    ],
    "presskit.sidebar.developer": "Developer",
    "presskit.sidebar.publisher": "Publisher",
    "presskit.sidebar.platforms": "Platforms",
    "presskit.sidebar.social": "Social Media",
    "presskit.sidebar.contact": "Contact",
    "presskit.toggle.en": "EN",
    "presskit.toggle.es": "ES",
  },
  es: {
    // Meta
    "site.title": "Rave Team",
    "site.description": "historias llamativas 💫 experiencias desquiciadas",

    // Navbar
    "nav.games": "JUEGOS",
    "nav.news": "NOTICIAS",
    "nav.about": "NOSOTROS",
    "nav.contact": "CONTACTO",
    "nav.presskit": "PRESS KIT",
    "nav.menu": "MENÚ",

    // Hero
    "hero.title": "FLASHY STORIES,<br /> DERANGED EXPERIENCES",
    "hero.cta": "WISHLIST SPACE DIVA",

    // Space Diva Section
    "spacediva.description":
      "Un estudio de desarrollo de videojuegos que crea proyectos que primero jugaríamos nosotros mismos, y luego apuntamos a audiencias masivas.",
    "spacediva.btn.wishlist": "WISHLIST",
    "spacediva.btn.presskit": "PRESS KIT",

    // About
    "about.title": "Sobre Nosotros",
    "about.description":
      "Rave Team es un estudio español emergente enfocado en crear experiencias narrativas no convencionales, salvajes y desquiciadas. Fusionamos el glamour de la cultura pop con la rebeldía de la cultura urbana para traer historias innovadoras a la industria del videojuego.",

    // News
    "news.title": "ÚLTIMAS NOTICIAS",
    "news.readmore": "Leer más novedades y noticias",
    "news.card.readmore": "Leer más",

    // Footer
    "footer.credit": "Diseñado y Desarrollado por",

    // News data
    "news.1.title": "Un estudio de desarrollo creando proyectos",
    "news.1.description":
      "Un estudio de desarrollo de videojuegos que crea proyectos que primero jugaríamos nosotros mismos, y luego apuntamos a audiencias masivas. Un estudio de desarrollo de videojuegos creando proyectos que primero",
    "news.1.category": "Crowdfunding",
    "news.2.title": "Un estudio de desarrollo creando proyectos",
    "news.2.description":
      "Un estudio de desarrollo de videojuegos que crea proyectos que primero jugaríamos nosotros mismos, y luego apuntamos a audiencias masivas. Un estudio de desarrollo de videojuegos creando proyectos que primero",
    "news.2.category": "Juegos",
    "news.3.title": "creando proyectos",
    "news.3.description":
      "Un estudio de desarrollo de videojuegos que crea proyectos que primero jugaríamos nosotros mismos, y luego apuntamos a audiencias masivas. Un estudio de desarrollo de videojuegos creando proyectos que primero",
    "news.3.category": "Eventos",
    "news.4.title": "primero jugaríamos nosotros mismos",
    "news.4.description":
      "¡Mayor hito de crowdfunding alcanzado!",
    "news.4.category": "Crowdfunding",
    "news.5.title": "NUEVA 5",
    "news.5.description":
      "Detrás de cámaras de nuestro nuevo motor de juego.",
    "news.5.category": "Juegos",
    "news.6.title": "NUEVA 6",
    "news.6.description":
      "Hablaremos en la Global Game Expo 2025.",
    "news.6.category": "Eventos",

    // Press Kit
    "presskit.title": "Space Diva — Kit de Prensa",
    "presskit.meta.description":
      "Kit de prensa oficial de Space Diva por Rave Team. Descarga assets, capturas de pantalla, logos y materiales de prensa.",
    "presskit.pitch.heading": "Pitch",
    "presskit.pitch.text":
      "Space Diva es una novela visual que combina la selección de diálogos con experiencias interactivas de point & click. Únete a Carmen, una señora de mediana edad algo despistada que debe lidiar con situaciones surrealistas en su camión espacial... y que, muy posiblemente, la líe que flipas.",
    "presskit.description.heading": "Descripción",
    "presskit.description.text":
      "Una experiencia narrativa interactiva sobre los seres más extravagantes del universo.",
    "presskit.whatisthis.heading": "¿De qué va esto?",
    "presskit.whatisthis.paragraphs": [
      "La galaxia era de lo más aburrida hasta que Carmen llegó en su camioneta espacial y empezó a atraer a los seres más dicharacheros. ¿Soportarás?",
      "Encarnarás a Carmen, una nómada de mediana edad algo despistada que recorre el universo infinito en su camión espacial. Su vehículo está repleto de objetos perdidos que ha ido recolectando a lo largo de los años.",
      "En su camino, conocerá a seres curiosos y excéntricos que buscan su ayuda. Pero cuidado: sus soluciones podrían arreglar sus problemas... o empeorar las cosas mucho, mucho más.",
      "Dependiendo de sus decisiones, acumulará \"energía universal\", que podrá usar en su máquina para obtener el objeto que el visitante necesita. Una vez entregado, la historia se ramificará de formas impredecibles.",
      "Esta energía también sirve para desbloquear nuevos hechizos, como opciones de diálogo poderosas que conducen a ramificaciones sorprendentes e inesperadas, para revelar nuevos detalles sobre el universo o conseguir más objetos para entregar.",
    ],
    "presskit.features.heading": "Características",
    "presskit.features.items": [
      "Diálogos divertidos, ramificados e impredecibles",
      "Mejoras y hechizos para personalizar el rumbo de la historia",
      "Un mundo queer y colorido, lleno de personajes excéntricos",
      "Aventuras únicas y rejugables presentadas como escenas de comedia",
    ],
    "presskit.download.button": "DESCARGAR TODOS LOS ASSETS",
    "presskit.download.hint":
      "Capturas, logos e iconos — sin vídeo (.zip, ~15 MB)",
    "presskit.trailer.heading": "Tráiler",
    "presskit.gallery.heading": "Galería",
    "presskit.logos.heading": "Logos",
    "presskit.about.heading": "Sobre Rave Team",
    "presskit.about.paragraphs": [
      "Rave Team es un estudio español emergente centrado en crear experiencias narrativas disidentes, desquiciadas y dicharacheras. Combinamos el glamour de la cultura pop y lo más gamberro de la cultura urbana para traer novedosas historias a la industria del videojuego.",
    ],
    "presskit.sidebar.developer": "Desarrollador",
    "presskit.sidebar.publisher": "Editor",
    "presskit.sidebar.platforms": "Plataformas",
    "presskit.sidebar.social": "Redes Sociales",
    "presskit.sidebar.contact": "Contacto",
    "presskit.toggle.en": "EN",
    "presskit.toggle.es": "ES",
  },
} as const;
