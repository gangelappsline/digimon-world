// ── DIGIMON WORLD 2 (PS1, 2000) ────────────────────────────────────────
// Dungeon crawler por turnos con el vehículo Digi-Beetle. Construida con
// guías de misiones de la comunidad (StrategyWiki, Almar's Guides,
// Neoseeker/Digimon Wiki, guías de misiones de GameFAQs).
// Claves: digievoluciona en EL 11 / 21 / 31 · técnica nueva en 12 / 22 / 32
// DNA: nuevo EL máx = EL mayor + (EL menor ÷ 5) · DP = DP1 + DP2 + 1
const t = (id, title, o = {}) => ({ id, title, cat: 'Misión', ...o })

export default {
  id: 'dw2',
  num: 2,
  title: 'Digimon World 2',
  short: 'DW2',
  year: '2000',
  platform: 'PlayStation',
  emoji: '🚙',
  accent: 'sky',
  tagline: 'Explora 20+ Dominios con tu Digi-Beetle, captura Digimon y fúsionalos por DNA.',
  description:
    'Encarnas a Akira, un aspirante a Tamer de Digital City. Los Digimon salvajes invaden los Dominios (mazmorras con trampas, esporas y bichos que roban objetos) y los Blood Knights amenazan el Directory Continent... y después File Island. Tu equipo de hasta 3 Digimon lucha por turnos mientras tu Digi-Beetle avanza gastando EP. La profundidad está en la DNA Digivolution: fusionar dos Digimon para subir el nivel máximo (EL) y los puntos DP que abren nuevas evoluciones.',
  howItWorks: [
    'Digievolución normal: Rookie→Champion en EL 11, →Ultimate en 21 y →Mega en 31. La técnica insignia se aprende en 12 / 22 / 32: digievoluciona JUSTO al subir o la pierdes.',
    'Todo Digimon tiene un tope de EL (al principio 13). DNA Digivolve = fusiona 2 y el "bebé" (un nivel evolutivo menor) tendrá EL máx = EL mayor + (EL menor ÷ 5).',
    'El DP (DNA Points) = DP del padre + DP de la madre + 1 y desbloquea evoluciones superiores/especiales (p. ej. con DP alto, Tyrannomon → MasterTyrannomon).',
    'Captura lanzando regalos (gifts) en batalla hasta llenar los corazones y luego derrotando al Digimon. Cada piso final tiene muros distintos y un jefe.',
  ],
  sections: [
    {
      id: 'digital-city',
      title: 'Digital City: conviértete en Guard Tamer',
      desc: 'Elige equipo (define tus tipos y restricciones de DNA), aprende a moverte en los Dominios a capturar.',
      tasks: [
        t('dw2-guard-team', 'Únete a un Guard Team', {
          cat: 'Sistema', loc: 'Digital City — Gremios Tamer',
          how: 'Tras la intro elige gremio: Gold Hawks (Vaccine), Blue Falcons (Data) o Black Swords (Virus). Dictará tus Digimon iniciales y el tipo con el que NO podrás hacer DNA hasta abrir la Device Dome: Gold Hawk no fusiona Data, Blue Falcon no fusiona Virus, Black Sword no fusiona Vaccine.',
          tip: 'Recomendación clásica de las guías: Gold Hawks. Su afinidad Vaccine encaja con el MetalGreymon capturable en la cuarta misión y con las líneas fuertes del early game.',
        }),
        t('dw2-boot', 'Misión 1: Leomon en el Boot Domain', {
          loc: 'Boot Domain (tutorial)', boss: 'Leomon (misión guiada)',
          how: 'Dominio tutorial junto a Leomon: aprende a conducir el Digi-Beetle, gastar EP, abrir cofres, esquivar/activar trampas y el combate por turnos en equipo. Completa el piso final para graduarte como Tamer.',
          tip: 'Puedes moverte en DIAGONAL con el Digi-Beetle; los enemigos no. Úsalo para esquivar grupos si vas bajo de HP/EP.',
        }),
        t('dw2-capture-basics', 'Aprende a capturar Digimon con regalos', {
          cat: 'Sistema', loc: 'Cualquier Dominio',
          how: 'En batalla, desde el menú de tu Digi-Beetle lanza regalos (gifts) al Digimon objetivo: los corazones se irán llenando. Con los corazones rojos al máximo, derrótalo: al final del combate podrá unirse a ti en el Digi-Beetle. Los regalos son más eficaces según el nivel evolutivo (p. ej. Toy Car para Rookies, Toy Plane para Champions y regalos superiores para Ultimate/Mega).',
          tip: 'Solo puedes "convencer" con regalos a un Digimon por batalla: elige bien y derriba primero a sus acompañantes si molestan.',
        }),
        t('dw2-beetle-basics', 'Prepara tu Digi-Beetle antes de cada Dominio', {
          cat: 'Sistema', loc: 'Digital City — tiendas y mejoras',
          how: 'Llena el Digi-Beetle con: discos de HP/MP, baterías/EP Packs, misiles para rocas y esporas eléctricas (Mag./Wave Miss según color), sprays mata-bichos (BugZap) y una herramienta de retorno. Mejora motor/carrocería y armas cuando puedas.',
          tip: 'Quedarse sin EP en un Dominio es una forma clásica de perder la expedición. Calcula si te quedan pisos antes de bajar otro.',
        }),
      ],
    },
    {
      id: 'primeras-misiones',
      title: 'Primeras misiones del Directory Continent',
      desc: 'SCSI, Video, Disk, BIOS, Drive y Web. Al terminar cada uno, reporta a tu líder de gremio.',
      tasks: [
        t('dw2-scsi', 'Misión 2: Invasores en SCSI Domain', {
          loc: 'SCSI Domain (4 pisos)', boss: 'Hagurumon (piso 4)', lvl: 'Llega con EL ~6',
          how: 'Tu primera misión en solitario. Captura Digimon Data/Virus con regalos básicos (Crabmon, Gabumon...) y derrota a Hagurumon en el piso final. Reporta después a tu líder.',
        }),
        t('dw2-video', 'Misión 3a: Video Domain', {
          loc: 'Video Domain (5 pisos)', boss: 'Kokatorimon (piso 5)',
          how: 'Derrota a Kokatorimon en el último piso. Es la mitad fácil de la tercera misión: hazla antes que Disk Domain. Necesitas un equipo de 3 o un Digimon de EL 9-11.',
          tip: 'Al llegar a EL 11, digievoluciona ENSEGUIDA para aprender la técnica de Champion en EL 12.',
        }),
        t('dw2-disk', 'Misión 3b: Disk Domain', {
          loc: 'Disk Domain', boss: 'Numemon (¡más fuerte de lo que parece!)',
          how: 'Numemon en DW2 no es el chiste de DW1: entra con Champions curados y discos de sobra. Tras Video+Disk, tu líder te enviará al Tamer\'s Club a ver a Mark Shultz, que te dará el Toy Plane.',
        }),
        t('dw2-metalgreymon', '★ Captura al MetalGreymon de BIOS Domain', {
          cat: 'Opcional', loc: 'BIOS Domain (piso 6, a la izquierda)', req: 'Toy Plane (te lo da Mark Shultz en el Tamer\'s Club)',
          how: 'En el piso 2 de BIOS verás un MetalGreymon que huye. En el piso final, ve a la zona izquierda y captúralo con el Toy Plane: es un Ultimate obtenible en la cuarta misión y te puede carrear medio juego. Puedes repetir el dominio para capturar más (excelentes padres de DNA).',
          tip: 'No captures de más: llenarás tus servidores con Ultimate que tardan en rendir. 1-2 es lo ideal al principio.',
        }),
        t('dw2-bios', 'Misión 4: BIOS Domain', {
          loc: 'BIOS Domain (6 pisos)', boss: 'Centarumon + Gabumon + Starmon (piso 6)',
          how: 'Derrota al equipo de Centarumon en el último piso. Si capturaste al MetalGreymon salvaje del propio dominio, la lucha se trivializa.',
        }),
        t('dw2-drive', 'Misión 5a: Drive Domain', {
          loc: 'Drive Domain', boss: 'Birdramon',
          how: 'Lleva al menos 2 misiles magnéticos (Mag. Miss) para las esporas eléctricas amarillas que bloquean caminos. Al vencer al jefe obtendrás el Converter, pieza clave para mejorar tu Digi-Beetle.',
        }),
        t('dw2-web', 'Misión 5b: Web Domain', {
          loc: 'Web Domain (7 pisos)', boss: 'Kuwagamon (piso 7)',
          how: 'Dominio más largo que los anteriores: vigila el EP. Tras terminar Drive y Web, reporta a tu líder; con el tiempo visitarás a Angemon en la Meditation Dome para desbloquear Modem Domain.',
          tip: 'Syakomon aparece en el piso 5 de Web — útil si buscas un Virus concreto para futuras fusiones. Yanmamon está en SCSI 4-5F e Ikkakumon en Video 5F (trío clásico de capturas para DNA tempranas).',
        }),
      ],
    },
    {
      id: 'dna-coliseo',
      title: 'Coliseo y sistema DNA',
      desc: 'El corazón de DW2: subir de rango y fusionar para romper el tope de nivel.',
      tasks: [
        t('dw2-coliseo', 'Sube tu rango Tamer en el Coliseo', {
          cat: 'Sistema', loc: 'Digital City — Coliseo',
          how: 'Gana torneos del Coliseo hablando con la recepcionista (acepta sus condiciones). Tu líder exigirá rangos concretos para nuevas misiones (p. ej. Rookie Tamer nivel 3 antes del arco Blood Knight).',
          tip: 'El Coliseo también es la mejor granja de bits sin gastar EP de dominios. Sube de rango en cuanto tu equipo lo permita.',
        }),
        t('dw2-first-dna', 'Haz tu primera DNA Digivolution', {
          cat: 'Sistema', loc: 'Tu gremio — Operador DNA (habitación izquierda)',
          how: 'Fusiona dos Digimon en su tope de EL. Resultado: un Digimon un nivel evolutivo menor en su EL base (Champion+otro = Rookie EL 1; Ultimate+Ultimate/Mega = Champion EL 11; Mega+Mega = Ultimate EL 21) con EL máx = EL mayor + (EL menor ÷ 5) y TODAS las técnicas de ambos padres al reaprender niveles.',
          tip: 'Si fusionas dos Digimon idénticos obtienes su Rookie (p. ej. Greymon+Greymon = Agumon): clave para repetir líneas y amasar DP.',
        }),
        t('dw2-ultimate', 'Alcanza tu primer Ultimate propio (EL 21)', {
          cat: 'Sistema', loc: 'Entrenamiento vía DNA',
          how: 'Calcula la cadena de fusiones para que el nuevo EL máx llegue a 22 (y así aprender la técnica de Ultimate). Fórmula por fusión: ELmayor + (ELmenor÷5). Usa la calculadora DNA de la sección Herramientas de esta web.',
        }),
        t('dw2-mega', 'Apunta al Mega: planifica EL 31-32 y DP alto', {
          cat: 'Sistema', loc: 'Entrenamiento vía DNA',
          how: 'Para Mega necesitas EL máx ≥ 32. El DP también manda: cada fusión suma DP1+DP2+1 y ciertos Digimon solo llegan a sus evoluciones buenas con DP alto (ejemplo clásico: subir Tyrannomon federándose con Triceramon una y otra vez hasta abrir MasterTyrannomon en DP 8+ ... y a la larga WarGreymon).',
          tip: 'Lleva una libreta (¡o esta web!) con las parejas de fusión de tu equipo principal: el árbol de DW2 crece rápido y es fácil perder técnicas por el camino.',
        }),
      ],
    },
    {
      id: 'blood-knights',
      title: 'La invasión de los Blood Knights',
      desc: 'Los dominios ya visitados cambian: más pisos, Digimon mucho más fuertes y comandantes Blood Knight al final.',
      tasks: [
        t('dw2-bk1', 'Misión 6: Blood Knights en SCSI, Video y Disk', {
          loc: 'SCSI / Video / Disk (versiones BK)', req: 'Rango Rookie Tamer nivel 3',
          how: 'Con tu rango al día, tu líder te informará de la aparición de los Blood Knights. Los niveles y Digimon de estos dominios suben mucho. Orden recomendado por las guías: SCSI → Video → Disk (el orden en que aparecieron).',
          tip: 'Los dominios BK son granja perfecta de "padres" para DNA: captura Champions aquí para alimentar tus fusiones.',
        }),
        t('dw2-bk2', 'Misión 7: Más Blood Knights en BIOS, Web y Drive', {
          loc: 'BIOS / Web / Drive (versiones BK)',
          how: 'Segunda oleada de dominios revisados. Es el momento de consolidar un trío Ultimate con técnicas heredadas: airea los servidores fusionando todo lo que llegue a su tope.',
        }),
        t('dw2-modem', 'Misión 8: Encuentra a Bertran y Joy Joy en MODEM Domain', {
          loc: 'MODEM Domain', boss: 'Joy Joy, Bertran y un Blood Knight (3 jefes)',
          how: 'Localiza el nuevo dominio a través de Angemon en la Meditation Dome (con una visita previa al Tamer\'s Club). Dentro deberás vencer a las dos Tamers fugadas y al Blood Knight final. Prioriza en cada combate al enemigo con ataques a todo el equipo (p. ej. Seadramon) y a los que curan (como Digitamamon en encuentros posteriores).',
        }),
        t('dw2-dvd', 'Misión 9: Ben Oldman en DVD Domain', {
          loc: 'DVD Domain', boss: 'Comandante Blood Knight / Ben Oldman (trama)',
          how: 'La pista sobre el origen de los Blood Knights te lleva al DVD Domain tras la figura de Ben Oldman. Prepárate para la gran revelación sobre Crimson y el programa GAIA que ordena el resto de la aventura.',
          tip: 'A partir de aquí el juego abre los dominios avanzados: revisa tras cada misión el Tamer\'s Club, la Meditation Dome y a tu líder.',
        }),
      ],
    },
    {
      id: 'dominios-avanzados',
      title: 'Dominios avanzados y Device Dome',
      desc: 'Code, Laser, Bug, RAM y ROM: el Directory Continent profundo y el fin de las restricciones de gremio.',
      tasks: [
        t('dw2-device', 'Abre la Device Dome (DNA sin restricciones de tipo)', {
          cat: 'Historia', loc: 'Device Dome (mapa del continente)',
          how: 'Avanzada la trama contra los Blood Knights se habilita la Device Dome: desde ese momento puedes fusionar Digimon de CUALQUIER tipo aunque tu gremio lo restringiera. Vuelve a planificar tu árbol DNA: ahora todas las líneas están abiertas.',
        }),
        t('dw2-code', 'Completa Code Domain', {
          loc: 'Code Domain',
          how: 'Sigue las misiones tras los eventos de DVD Domain. Como siempre: llega al piso final (muros diferentes), abre cofres sin exponerte a trampas innecesarias y derrota al jefe. Lleva misiles variados: los dominios avanzados mezclan rocas y esporas de varios colores/niveles.',
        }),
        t('dw2-laser', 'Completa Laser Domain', {
          loc: 'Laser Domain',
          how: 'Dominios largos = gestión de EP o muerte. Roba/captura Ultimate salvajes para usarlos como padres de DNA: tus Megas necesitan cadenas constantes.',
        }),
        t('dw2-bug', 'Completa Bug Domain', {
          loc: 'Bug Domain',
          how: 'Lleva BugZap de nivel alto en cantidad: los "bugs" de los cofres y el suelo te robarán, envenenarán o romperán piezas del Digi-Beetle. Si te falta un ataque de área (AoE), este es el dominio para reconsiderar tu trío.',
        }),
        t('dw2-ram-rom', 'Completa RAM Domain y ROM Domain', {
          loc: 'RAM / ROM Domain',
          how: 'La recta final del Directory Continent camino de la verdad sobre GAIA. Consolida un trío Mega o Ultimate de DP alto antes de buscar el transporte a File Island (Archive/Shuttle).',
        }),
      ],
    },
    {
      id: 'file-island',
      title: 'File Island y Overlord GAIA',
      desc: 'La guerra se traslada a la isla del primer juego: ocho dominios hasta el programa supremo GAIA.',
      tasks: [
        t('dw2-filecity', 'Viaja a File Island y establece base en File City', {
          cat: 'Historia', loc: 'Shuttle/Archive Port → File City (File Island)',
          how: 'Cuando la trama te envíe tras GAIA, zarpa hacia File Island. File City y el Archive Ship serán tus bases: revisa el nuevo stock de tiendas (misiles, BugZap y discos de nivel alto) antes de cada dominio.',
        }),
        t('dw2-port-scan', 'Completa Port Domain y Scan Domain', {
          loc: 'Port / Scan Domain (File Island)',
          how: 'Primeros dominios isleños. Refuerza la potencia de fuego del Digi-Beetle: aquí el tamaño de los dominios y la densidad de trampas vuelven a subir.',
        }),
        t('dw2-patch-giga', 'Completa Patch Domain y Giga Domain', {
          loc: 'Patch / Giga Domain (File Island)',
          how: 'Sigue reportando entre misiones: la cadena Port→Scan→Patch→Giga sigue el rastro de los guardianes de GAIA por la isla. Tu equipo debería rondar Ultimate fuertes con técnicas heredadas de varias líneas.',
        }),
        t('dw2-power-data', 'Completa Power Domain y Data Domain', {
          loc: 'Power / Data Domain (File Island)',
          how: 'La dificultad pide Megas o Ultimate de DP acumulado. Aprovecha estos pisos para capturar Ultimate salvajes como material DNA de último eslabón.',
        }),
        t('dw2-diode-mega', 'Completa Diode Domain y Mega Domain', {
          loc: 'Diode / Mega Domain (File Island)',
          how: 'La antesala del final. Full equipamiento: discos de nivel 2-3, drivers de HP/MP, sprays superiores y retorno de sobra. No escatimes: ya no necesitarás el dinero.',
        }),
        t('dw2-gaia', '⭐ Derrota a Overlord GAIA (FINAL)', {
          cat: 'Jefe', loc: 'Corazón de File Island', boss: 'Overlord GAIA + su forma final',
          how: 'El programa que orquestó a los Blood Knights para "proteger" el Mundo Digital es el jefe final, y lucha en dos formas. Lleva ataques de varios atributos, mucha recuperación y aguante: es la batalla más larga del juego.',
          tip: 'Un equipo de Megas con técnica devastadora heredada (p. ej. Machinedramon con Giga Cannon vía MetalGreymon DP 20+) marca la diferencia.',
        }),
      ],
    },
    {
      id: 'dw2-100',
      title: 'Postgame y 100%',
      desc: 'El dominio secreto, el trío de DP definitivos y el Digi-Beetle perfecto.',
      tasks: [
        t('dw2-tera', '🌟 Conquista el Tera Domain (dominio post-final)', {
          cat: 'Postgame', loc: 'File Island (tras los créditos)',
          how: 'Al terminar la historia se desbloquea el Tera Domain, la mazmorra más larga y dura del juego, llena de Digimon únicos y de los mejores "padres" de la saga. Artículo de fe: team de Megas de DP alto, decenas de discos top y paciencia.',
        }),
        t('dw2-highdp', 'Crea un Mega de DP altísimo (ruta tipo WarGreymon + Machinedramon)', {
          cat: 'Postgame', loc: 'Operador DNA',
          how: 'Sigue cadenas como la clásica de Ticeramon/Tyrannomon: Triceramon+Triceramon = Tyrannomon, sube, vuelve a Triceramon, repite para acumular DP (MasterTyrannomon a los DP 8+, y en DP ~19 a WarGreymon). Cruza WarGreymon con Machinedramon para heredar sus técnicas en un MetalGreymon definitivo.',
        }),
        t('dw2-all-techs', 'Hereda las mejores técnicas vía DNA', {
          cat: 'Postgame', loc: 'Operador DNA',
          how: 'Recuerda la regla 12/22/32: al re-subir de nivel, tu Digimon fusionado aprende las técnicas insignia de ambas líneas paternas según su EL. Diseña tu "súper Digimon" combinando cobertura de atributos, un AoE y una técnica de curación.',
        }),
        t('dw2-coliseo-full', 'Gana todos los torneos del Coliseo', {
          cat: 'Opcional', loc: 'Digital City — Coliseo',
          how: 'Con tu trío endgame, limpia todas las copas que te quedaran para maximizar rango y premio.',
        }),
        t('dw2-beetle-max', 'Mejora el Digi-Beetle al máximo', {
          cat: 'Opcional', loc: 'Tiendas de piezas',
          how: 'Motor, batería/EP, misiles de máximo nivel, BugZap supremos y ayudas de navegación: deja el Digi-Beetle en su configuración definitiva para el Tera Domain.',
        }),
        t('dw2-dex', 'Completa tu "Pokédex": une a todas las especies capturables', {
          cat: 'Postgame', loc: 'Todos los dominios',
          how: 'Revisa qué especies salvajes únicas tiene cada Dominio (piso a piso) y captúralas con el regalo de su nivel. Consejo: caza en los dominios Blood Knight y en File Island, donde viven los Ultimate raros.',
        }),
      ],
    },
  ],
}
