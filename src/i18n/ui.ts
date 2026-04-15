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
      "Space Diva is a fast-paced, neon-lit action game where you play as an intergalactic pop star fighting to reclaim her stolen stage — one alien wave at a time.",
    "presskit.description.heading": "Description",
    "presskit.description.paragraphs": [
      "Space Diva throws you into a vibrant galaxy ruled by rhythm, style, and pure firepower. As Diva, the most celebrated performer in the cosmos, you must battle through hordes of jealous aliens who have hijacked your tour ship and silenced your music.",
      "Combining bullet-hell mechanics with combo-driven scoring, every level is a concert stage where your performance determines the outcome. Collect power-ups, unlock outfits, and master Diva's signature moves to turn each wave into a spectacular show.",
      "With hand-crafted levels, a pulsating original soundtrack, and a vibrant pixel-art aesthetic, Space Diva is a love letter to arcade classics and pop culture rolled into one explosive package.",
    ],
    "presskit.features.heading": "Features",
    "presskit.features.items": [
      "Bullet-hell action with combo-driven scoring system",
      "Original neon-pop soundtrack composed specifically for the game",
      "Unlockable outfits and cosmetic upgrades for Diva",
      "Hand-crafted levels across 5 unique galactic stages",
    ],
    "presskit.download.button": "DOWNLOAD ALL ASSETS",
    "presskit.download.hint":
      "Screenshots, logos & icons — no video (.zip, ~15 MB)",
    "presskit.trailer.heading": "Trailer",
    "presskit.gallery.heading": "Gallery",
    "presskit.logos.heading": "Logos",
    "presskit.about.heading": "About Rave Team",
    "presskit.about.paragraphs": [
      "Rave Team is an independent game development studio passionate about creating bold, visually striking games that push creative boundaries. Founded by a small group of developers and artists, we believe games should be an unforgettable experience — not just a product.",
      "Space Diva is our debut title, born from a love of arcade games, vibrant aesthetics, and the unstoppable energy of live music. We are committed to delivering a polished, joyful experience to players worldwide.",
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
    "hero.title": "HISTORIAS LLAMATIVAS,<br /> EXPERIENCIAS DESQUICIADAS",
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
      "Space Diva es un frenético juego de acción con luces de neón donde encarnas a una estrella de pop intergaláctica que lucha por recuperar su escenario robado, una ola alienígena a la vez.",
    "presskit.description.heading": "Descripción",
    "presskit.description.paragraphs": [
      "Space Diva te lanza a una galaxia vibrante gobernada por el ritmo, el estilo y el puro poder de fuego. Como Diva, la artista más celebrada del cosmos, debes combatir hordas de alienígenas que han secuestrado tu nave de gira y silenciado tu música.",
      "Combinando mecánicas de bullet-hell con puntuación por combos, cada nivel es un escenario de concierto donde tu actuación determina el resultado. Recoge potenciadores, desbloquea atuendos y domina los movimientos exclusivos de Diva para convertir cada oleada en un espectáculo impresionante.",
      "Con niveles diseñados a mano, una trepidante banda sonora original y una vibrante estética pixel-art, Space Diva es una carta de amor a los clásicos de arcade y la cultura pop en un explosivo paquete.",
    ],
    "presskit.features.heading": "Características",
    "presskit.features.items": [
      "Acción estilo bullet-hell con sistema de puntuación por combos",
      "Banda sonora original de pop neón compuesta específicamente para el juego",
      "Atuendos desbloqueables y mejoras cosméticas para Diva",
      "Niveles diseñados a mano a través de 5 escenarios galácticos únicos",
    ],
    "presskit.download.button": "DESCARGAR TODOS LOS ASSETS",
    "presskit.download.hint":
      "Capturas, logos e iconos — sin vídeo (.zip, ~15 MB)",
    "presskit.trailer.heading": "Tráiler",
    "presskit.gallery.heading": "Galería",
    "presskit.logos.heading": "Logos",
    "presskit.about.heading": "Sobre Rave Team",
    "presskit.about.paragraphs": [
      "Rave Team es un estudio independiente de desarrollo de videojuegos apasionado por crear juegos audaces y visualmente impactantes que desafíen los límites creativos. Fundado por un pequeño grupo de desarrolladores y artistas, creemos que los juegos deben ser una experiencia inolvidable, no solo un producto.",
      "Space Diva es nuestro título debut, nacido del amor por los juegos de arcade, las estéticas vibrantes y la energía imparable de la música en vivo. Estamos comprometidos a ofrecer una experiencia pulida y alegre a jugadores de todo el mundo.",
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
