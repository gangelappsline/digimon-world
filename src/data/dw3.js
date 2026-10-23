// ── DIGIMON WORLD 3 / 2003 (PS1, 2002) ─────────────────────────────────
// JRPG por turnos: 4 insignias (badges) en el servidor Asuka y el asalto al
// servidor Amaterasu contra A.o.A. y Galacticmon. Construida con guías de la
// comunidad (StratsWiki, GameFAQs Divinesage/EmeraldPhoenix, Wikimon).
// Niveles entre paréntesis = nivel aprox. de los Digimon del jefe.
const t = (id, title, o = {}) => ({ id, title, cat: 'Historia', ...o })

export default {
  id: 'dw3',
  num: 3,
  title: 'Digimon World 3',
  short: 'DW3',
  year: '2002',
  platform: 'PlayStation',
  emoji: '🌐',
  accent: 'violet',
  tagline: 'Gana las 4 insignias de Asuka, infíltrate en Amaterasu y detén a Galacticmon.',
  description:
    'Junior y sus amigos entran en "Digimon Online", un mundo virtual dividido entre los servidores Asuka y Amaterasu. Un grupo terrorista, A.o.A., está convirtiendo a los jugadores en cerdos Oinkmon y planea usar el satélite Gunslinger para dominar el mundo real. JRPG por turnos con 3 Digimon en equipo, 8 Rookie jugables y hasta 44 digievoluciones desbloqueables por árbol de niveles y técnicas (5 / 20 / 40 según la rama).',
  howItWorks: [
    'Elige 1 de 3 packs iniciales de 3 Rookie. Los 7-8 Rookie comparten las 44 digievoluciones, pero cada especie tiene su propio árbol y requisitos (niveles 5, 20, 40 + técnicas/stats).',
    'Rookie que no vengan en tu pack se consiguen con los DRI Agents: derrota al Digimon indicado, consigue su DDNA y entrégaselo al agente correspondiente (Veemon solo vía DRI).',
    'Guarda la partida con los Guardromon azules y cúrate en posadas (Gatomon). El backtracking entre sectores es la firma de DW3: Digi-Egg de Sincerity = Submarimon (mar) y Digi-Egg of Knowledge = Digmon (túneles).',
    'La versión europea se llama Digimon World 2003 e incluye postgame extra (armas épicas y los 4 líderes supremos de Amaterasu).',
  ],
  sections: [
    {
      id: 'asuka-inicio',
      title: 'Inicio: Asuka City y tu primer pack',
      desc: 'Bienvenido a Digimon Online. El servidor Asuka tiene 4 sectores con ciudad y "Leader" cada uno.',
      tasks: [
        t('dw3-pack', 'Elige tu Starter Pack (A / B / C)', {
          cat: 'Sistema', loc: 'Asuka City — Lobby principal',
          how: 'Pack A Equilibrado: Kotemon (físico) + Renamon (mágica) + Patamon (curación). Pack B Poderoso: Monmon + Agumon + Renamon (puro ataque, sin curación al principio: vivirás de objetos). Pack C Maníaco: Kumamon + Guilmon + Patamon (equipo peculiar de criar, con Patamon como salvavidas). Veemon no viene en ningún pack: se obtiene vía DRI Agent más adelante.',
          tip: 'Primera partida recomendada: Pack A. La curación temprana de Patamon ahorra una fortuna en posadas y discos.',
        }),
        t('dw3-asuka-city', 'Explora Asuka City y aprende lo básico', {
          loc: 'Asuka City',
          how: 'Visita la posada (Gatomon), las tiendas de objetos/equipamiento y localiza a los Guardromon de guardado. Habla con todos: gran parte de DW3 son cadenas de "habla aquí → vuelve allá". Sal por la Asuka Bridge al Central Sector.',
          reward: 'También: pide el Folder Bag a Divermon en el Yellow Cruiser para guardar cartas del juego de cartas.',
        }),
        t('dw3-mastertyranno', 'Derrota a MasterTyrannomon en el Tyranno Valley', {
          cat: 'Jefe', loc: 'Central Sector — Tyranno Valley', boss: 'MasterTyrannomon (Nv. ~7-9)',
          how: 'Tu primer jefe salvaje bloquea el valle. Con tu trío en nivel 5+ (y primeras digievoluciones desbloqueadas) cae sin problema. Cura antes en la ciudad.',
          tip: 'Aprovecha el Central Sector para farmear niveles cortos: DW3 castiga correr por debajo de nivel.',
        }),
        t('dw3-gym', 'Entrena en el gimnasio (Training Gym)', {
          cat: 'Sistema', loc: 'Asuka City y otras ciudades',
          how: 'En DW3 además de subir niveles, tus Rookies ganan estadísticas entrenando en el gym (fuerza, defensa, espíritu, sabiduría, velocidad...). Muchas digievoluciones piden stats mínimas además del nivel (5/20/40).',
          tip: 'La Silver Ticket del Leader de Seiryu ampliará lo que puedes entrenar: vuelve al gym tras conseguirla.',
        }),
      ],
    },
    {
      id: 'seiryu',
      title: 'Sector Este: insignia de Seiryu',
      desc: 'La ruta estándar de arranque: Wire Forest, Protocol Ruins y Seiryu City.',
      tasks: [
        t('dw3-wireforest', 'Cruza el East Wire Forest hasta Seiryu City', {
          loc: 'East Sector — Wire Forest / Forest Inn',
          how: 'Atraviesa el bosque con parada en la Forest Inn (posada y guardado). Memorízala bien: su sótano esconde el portal a Amaterasu que usarás mucho después.',
        }),
        t('dw3-protocol-zanbamon-intro', 'Explora las Protocol Ruins (presentación de Seiryu Leader)', {
          loc: 'East Sector — Protocol Ruins',
          how: 'En Seiryu City te dirán que el Leader está entrenando en las Protocol Ruins. Ve a buscarle: el encuentro en las ruinas (donde estuvo Baronmon) activa tu combate oficial en la Seiryu Tower.',
          tip: 'Al fondo este de las ruinas te espera uno de los jefes opcionales, Pharaohmon: déjalo para el postgame, ahora te pulveriza.',
        }),
        t('dw3-seiryu-leader', '🏅 Derrota al Seiryu Leader (1ª insignia)', {
          cat: 'Jefe', loc: 'Seiryu City — Seiryu Tower', boss: 'Minotarumon, Tyrannomon, Apemon (Nv. ~7-10)',
          how: 'Guarda con el Guardromon de la torre y lucha en la cima de Zephyr/Seiryu Tower. Combate a 3 Digimon de nivel similar a los tuyos: centra el daño uno a uno.',
          reward: 'Seiryu Badge + Silver Ticket (entrenamiento ampliado en gimnasios).',
        }),
        t('dw3-keith', 'Combate contra Keith en Asuka Bridge', {
          cat: 'Jefe', loc: 'Asuka Bridge', boss: 'Triceramon, Kuwagamon, Kunemon',
          how: 'Tras visitar la East Station por primera vez, un jugador misterioso —Keith— te asaltará en el puente de Asuka. Su aparición conecta con la siguiente zona, la Deeper Crevice.',
        }),
        t('dw3-bulbmon1', 'Sobrevive a Bulbmon en la East Station (1er encuentro)', {
          cat: 'Jefe', loc: 'East Station — Deeper Crevice', boss: 'Bulbmon (Nv. ~8-10)',
          how: 'Primer encuentro con Bulbmon, la "furgoneta blindada" de A.o.A. No es el combate definitivo: se irá y te reencontrás con él en el Bug Maze mucho después.',
        }),
      ],
    },
    {
      id: 'suzaku-sincerity',
      title: 'Sector Sur: Suzaku y el Digi-Egg de Sincerity',
      desc: 'Selva, la segunda insignia y la famosa cadena de recados para poder cruzar el mar con Submarimon.',
      tasks: [
        t('dw3-zanbamon1', 'Encuentro con Zanbamon en el Jungle Grave', {
          cat: 'Jefe', loc: 'South Sector — Jungle Grave', boss: 'Zanbamon (encuentro guionizado)',
          how: 'Un espadachín esquelético te corta el paso en la selva. En este primer encuentro es una escena de presentación: no es la lucha real (la tendrás en las Catacumbas del Jungle Shrine como jefe opcional).',
        }),
        t('dw3-suzaku-leader', '🏅 Derrota a la Suzaku Leader (2ª insignia)', {
          cat: 'Jefe', loc: 'Suzaku City — Suzaku Hall', boss: 'Woodmon, RedVegiemon, ShogunGekomon (Nv. ~14-18)',
          how: 'Cúrate y guarda en la ciudad antes de entrar al Suzaku Hall. Su trío vegetal/acuático ronda el nivel 14-18: si vienes justo de nivel de Seiryu, farmea algo en la selva de camino y prioriza a RedVegiemon antes de encajar sus golpes de estado.',
          reward: 'Suzaku Badge. La Leader te explica que a Byakko City (oeste) solo se llega por mar: necesitas el Digi-Egg de Sincerity para llamar a Submarimon.',
        }),
        t('dw3-sincerity-chain', 'Completa la cadena del Digi-Egg de Sincerity', {
          cat: 'Objeto clave', loc: 'Phoenix Bay → Bios Swamp → Shaman House → Asuka Sewers',
          how: '1) En Phoenix Bay, Nami te hablará del santuario tras Bios Swamp. 2) Examina el santuario: el Digi-Egg está en una grieta inalcanzable. 3) Ve a la Shaman House del Tranquil Swamp: Sepikmon ha perdido su máscara. 4) Recupera la Sepik Mask de las alcantarillas de Asuka (en manos de Etemon) — con el Agumon Suit de Mischievous Mat— y devuélvesela a Sepikmon. 5) Te dará la Smelly Herb: úsala para revelar el paso en Bios Swamp y entra al Reliability Spot.',
          reward: 'Digi-Egg of Sincerity en el altar: llama a Submarimon en cualquier muelle (plataforma en el agua) con el botón al ver el "!" rojo.',
          tip: 'Es LA cadena de recados más famosa de DW3. Sin prisa: es también una excelente zona de farmeo con ítems buenos por la alcantarilla (p. ej. Crimson Blade).',
        }),
        t('dw3-submarimon', 'Cruza el océano con Submarimon rumbo al oeste', {
          loc: 'Muelle más allá de Phoenix Bay', req: 'Digi-Egg de Sincerity',
          how: 'Guarda en Suzaku City, ve al muelle tras Phoenix Bay e invoca a Submarimon. La travesía te deja en el West Sector, camino de Byakko City.',
        }),
      ],
    },
    {
      id: 'byakko-dumdum',
      title: 'Sector Oeste: la trampa de Byakko y Dum Dum Factory',
      desc: 'Un líder falso, una caída trampa, el líder verdadero en el desierto y la fábrica de A.o.A.',
      tasks: [
        t('dw3-byakko-fake', 'Derrota al Byakko Leader falso', {
          cat: 'Jefe', loc: 'Byakko City — Byakko Dome', boss: 'Numemon x2 (Nv. ~19-23)',
          how: 'El "líder" y sus dos Numemon dan mala espina... y efectivamente: tras ganar, al ir a por la insignia a la sala trasera, el suelo se desploma: era una trampa de A.o.A.',
        }),
        t('dw3-underground', 'Escapa de la Underground Cave', {
          loc: 'Bajo Byakko City',
          how: 'Atrapado bajo la ciudad, un Numemon (sí, otro) te mostrará la salida secreta. Te revelará que el verdadero Byakko Leader está refugiado en la Mirage Tower del Mobius Desert.',
        }),
        t('dw3-byakko-real', '🏅 Derrota al Byakko Leader verdadero (3ª insignia)', {
          cat: 'Jefe', loc: 'Mobius Desert — Mirage Tower, Mirage Hall', boss: 'Flymon (alt), Tortomon, Mamemon (Nv. ~23-26)',
          how: 'Cruza el desierto hasta la Mirage Tower. Tras aclarar el malentendido lucharéis de verdad. Es también el punto que habilita el DRI de Veemon en las Protocol Ruins.',
          reward: 'Byakko Badge y la pista sobre la fábrica Dum Dum.',
        }),
        t('dw3-suzaku-ug', 'Evento del Suzaku UG Lake: consigue el Staff Pass', {
          cat: 'Historia', loc: 'Suzaku UG Lake → Dum Dum Factory (sala secreta)',
          how: 'Antes de asaltar la fábrica, pasa por el lago subterráneo de Suzaku para el encuentro con Nick y Keith: el Staff Pass que recibirás en la sala secreta del alcantarillado de la fábrica te dará acceso total.',
        }),
        t('dw3-hiandromon', 'Derrota a HiAndromon en la Control Room', {
          cat: 'Jefe', loc: 'Dum Dum Factory — Sala de control', boss: 'HiAndromon (Nv. ~23-27)',
          how: 'Primer jefe serio de DW3: su Atomic Ray puede hacer KO instantáneo. Llevar el inventario con al menos 3 Life Disks (resurrecciones) no es sugerencia, es obligación.',
          tip: 'En Amaterasu, en esta misma sala esperará el BK WarGrowlmon opcional.',
        }),
        t('dw3-warumonzaemon', 'Derrota a WaruMonzaemon en las alcantarillas de la fábrica', {
          cat: 'Jefe', loc: 'Dum Dum Factory — Sewers', boss: 'WaruMonzaemon (Nv. ~24-28)',
          how: 'Segundo jefe de la fábrica, junto a la ruta a la sala secreta. Ojo con la escalera al sur de la sala secreta: en Amaterasu ahí aparecerá BK KingNumemon.',
        }),
        t('dw3-aoa-attacker', 'Derrota al A.o.A. Attacker en la Sala Secreta', {
          cat: 'Jefe', loc: 'Dum Dum Factory — Secret Room', boss: 'Monzaemon + Nanomon',
          how: 'La infiltración termina enfrentándote a un defensor de A.o.A. con Monzaemon y Nanomon. Al terminar, la trama te urgirá a volver a Asuka City.',
        }),
      ],
    },
    {
      id: 'asuka-crisis',
      title: 'Crisis en Asuka City',
      desc: 'A.o.A. ataca la capital: alcantarillas, Admin Center y la verdad sobre la Game Master.',
      tasks: [
        t('dw3-datamon', 'Derrota a Datamon en las alcantarillas de Asuka', {
          cat: 'Jefe', loc: 'Asuka City Sewers — Sala de control', boss: 'Datamon (Nv. ~27-32)',
          how: 'Datamon manipula los sistemas bajo la ciudad. Rompe su defensa y sube al Admin Center: los siguientes dos jefes van encadenados.',
          tip: 'Su sala es, en Amaterasu, el hogar del BK WarGreymon opcional.',
        }),
        t('dw3-vemmon', 'Derrota a Vemmon en el Admin Center', {
          cat: 'Jefe', loc: 'Admin Center 2F', boss: 'Vemmon',
          how: 'Primera muestra del plan real de A.o.A.: los Vemmon son las piezas con las que crearán a Galacticmon. Cúerate en cuanto acabe: sin pausa viene la Game Master.',
        }),
        t('dw3-gamemaster', 'Derrota a la Game Master (cuartel de A.o.A.)', {
          cat: 'Jefe', loc: 'Admin Center — Master Room', boss: 'Minotarumon (alt), Gargoylemon, Persiamon (Nv. ~32-40)',
          how: 'La supuesta administradora del juego era el cerebro local de A.o.A. Al caer, la trama salta de escala: hay que perseguir a A.o.A. hasta su base en el servidor Amaterasu.',
        }),
      ],
    },
    {
      id: 'amaterasu-knowledge',
      title: 'Infiltración en Amaterasu: el Digi-Egg of Knowledge',
      desc: 'Un servidor espejo dominado por A.o.A. donde la gente ha sido convertida en Oinkmon.',
      tasks: [
        t('dw3-bugmaze', 'Atraviesa el Bug Maze y vence a Bulbmon (2º encuentro, el de verdad)', {
          cat: 'Jefe', loc: 'Network Break — Bug Maze Pit', boss: 'Bulbmon (Nv. ~35-40)',
          how: 'El paso entre servidores termina en el Bug Maze, donde Bulbmon te esperaba para la revancha definitiva. Ahora sí: combátelo a fondo.',
        }),
        t('dw3-kenny', 'Consigue la Crony ID con Kenny en la Forest Inn', {
          cat: 'Objeto clave', loc: 'Amaterasu — Sótano de la Forest Inn (East Wire Forest)',
          how: 'Los NPC humanos de Amaterasu son Oinkmon, salvo unos pocos: Kenny, de la Resistencia, te dará la Crony ID. Con ella, los soldados de A.o.A. te dejarán circular por Qing Long City.',
        }),
        t('dw3-qinglong', 'Derrota al Qing Long Chief', {
          cat: 'Jefe', loc: 'Qing Long City — Qing Long Tower (donde Seiryu)', boss: 'Deltamon, Triceramon (alt), Kimeramon (Nv. ~36-40)',
          how: 'El "tú" infiltrado termina delatado en cuanto preguntas por el Digi-Egg of Knowledge: a luchar en la misma sala de tu primera insignia.',
          reward: 'Red ID Pass: acceso al Sector Sur de Amaterasu.',
        }),
        t('dw3-zhuque', 'Derrota al Zhu Que Chief', {
          cat: 'Jefe', loc: 'Zhu Que City — Zhu Que Hall (donde Suzaku)', boss: 'Cherrymon (alt), Scorpiomon, Snimon (Nv. ~37-41)',
          how: 'Con la Red ID a cuestas, entra en Zhu Que City (la góndola no funciona: entra por la ruta terrestre/alternativa) y derrota a su Chief.',
          reward: 'Blue ID Pass y permiso para bajar al Zhu Que UG Lake.',
        }),
        t('dw3-knowledge', 'Recoge el Digi-Egg of Knowledge en el Zhu Que UG Lake', {
          cat: 'Objeto clave', loc: 'Zhu Que UG Lake (cima de la escalera noroeste)',
          how: 'Desde el muelle, ruta este y sube la gran escalera: el Digi-Egg está en el cofre/altar donde en Asuka aguarda un jefe menor. Al cogerlo, volverás transportado al muelle de la ciudad.',
          reward: 'Digi-Egg of Knowledge: invoca a Digmon en agujeros del terreno para abrir túneles (clave para el North Sector).',
        }),
        t('dw3-back-asuka', 'Regresa al servidor Asuka y reporta', {
          loc: 'Agujero del sótano de la Forest Inn → Asuka',
          how: 'Usa el agujero del sótano de la posada para volver a Asuka. Toca por fin el único sector que te quedaba: el Norte, usando a Digmon en Plug Cape.',
        }),
      ],
    },
    {
      id: 'genbu-resistencia',
      title: 'Sector Norte: insignia de Genbu y la Resistencia',
      desc: 'Cuarta insignia en Asuka y preparativos del asalto final coordinado.',
      tasks: [
        t('dw3-plugcape', 'Invoca a Digmon en Plug Cape y cruza el Circuit Board', {
          loc: 'Asuka — Plug Cape (al final del camino tras el puente)', req: 'Digi-Egg of Knowledge',
          how: 'Al final del sendero lineal de Plug Cape hay un agujero: úsalo para que Digmon te lleve por la placa de circuitos hasta el North Sector (Boot Mountain y Genbu City).',
        }),
        t('dw3-genbu', '🏅 Derrota al Genbu Leader (4ª insignia)', {
          cat: 'Jefe', loc: 'Genbu City — Battle Gate (salida oeste)', boss: 'Vikemon, MetalEtemon, Antylamon (Nv. ~38-42)',
          reward: 'Genbu Badge. ¡Las 4 insignias de Asuka completas!',
          how: 'Sube la escalera junto a la puerta y luego la de la derecha para llegar al Leader. El equipo rival ya es de nivel Ultimate: ven con tus mejores evoluciones de nivel 40 y tranquilamente equipado.',
        }),
        t('dw3-lisa', 'Informa a Lisa en Asuka City', {
          loc: 'Asuka City',
          how: 'Con las 4 insignias, la Asuka libre organiza el contraataque. Reporta a Lisa: esto acelera los planes de la alianza con la Resistencia de Amaterasu.',
        }),
        t('dw3-resistance', 'Reúnete con el líder de la Resistencia en la Mirage Tower de Amaterasu', {
          loc: 'Amaterasu — Mirage Tower',
          how: 'La Resistencia retendrá a las fuerzas de A.o.A. mientras tú golpeas a sus mandos restantes. Conoce su base secreta y a Keith, que trabaja en una máquina para devolver a los Oinkmon a humanos (necesitarás reactivar el generador en la Amaterasu City cuando ganes acceso).',
        }),
      ],
    },
    {
      id: 'amaterasu-final',
      title: 'Asalto final a Amaterasu y Galacticmon',
      desc: 'Mazmorras elementales, los dos Chiefs restantes, la capital y el satélite Gunslinger.',
      tasks: [
        t('dw3-icewitch', 'Derrota a la Ice Witch (Ice Dungeon)', {
          cat: 'Jefe', loc: 'Amaterasu — Mazmorra de Hielo', boss: 'Frigimon, MegaSeadramon (alt), Mammothmon (alt) (Nv. ~40-43)',
          how: 'Primera guardiana elemental del final de partida. Equipo anti-hielo y resistencias al agua/hielo según sus Digimon.',
        }),
        t('dw3-fireknight', 'Derrota al Fire Knight (Fire Dungeon)', {
          cat: 'Jefe', loc: 'Amaterasu — Mazmorra de Fuego', boss: 'Meramon, SkullMeramon, BlueMeramon (Nv. ~40-43)',
          how: 'Puro fuego en tres sabores. Si tus Digimon usan evoluciones de agua/hielo, este es tu momento; si no, descubre con golpes de prueba la debilidad de cada uno.',
        }),
        t('dw3-darkknight', 'Derrota al Dark Knight (Dark Dungeon)', {
          cat: 'Jefe', loc: 'Amaterasu — Mazmorra Oscura', boss: 'SkullSatamon, Devidramon, Vilemon (alt) (Nv. ~41-44)',
          how: 'El tercio oscuro de los guardianes elementales. Cierra las tres mazmorras para dejar libre el paso a los Chiefs occidentales.',
        }),
        t('dw3-baihu', 'Derrota al Bai Hu Chief (White ID Pass)', {
          cat: 'Jefe', loc: 'Bai Hu City — Bai Hu Dome (donde Byakko)', boss: 'Rockmon, Gryphomon, Ebidramon (alt) (Nv. ~41-44)',
          how: 'Rockmon es débil al Agua, Gryphomon al Hielo/Trueno y el Ebidramon alter al Trueno. Ojo: si Rockmon entra en HP rojo, el Chief puede cambiarlo por Gryphomon; si lo noqueas de un golpe final fuerte te saltas el cambio.',
          reward: 'White ID Pass.',
        }),
        t('dw3-xuenwu', 'Derrota al Xuen Wu Chief (Black ID Pass)', {
          cat: 'Jefe', loc: 'Xuan Wu City — Battle Gate (donde Genbu)', boss: 'Boltmon, SkullMammothmon, Puppetmon (Nv. ~42-45)',
          how: 'El último de los cuatro Chiefs y puede que el más completo. Con su Black ID Pass ya tienes todas las identificaciones: la capital, Amaterasu City, queda abierta.',
          reward: 'Black ID Pass — son las últimas que necesitabas.',
        }),
        t('dw3-amaterasu-city', 'Asalta Amaterasu City y reactiva el generador', {
          loc: 'Amaterasu City',
          how: 'Keith (en la Qing Long Tower de la capital, donde Piximon) tiene lista la máquina anti-Oinkmon, pero sin energía. Sigue su indicación hasta el generador (zona ventosa sobre la ciudad) y reactívalo para que la Resistencia pueda actuar.',
        }),
        t('dw3-chiefofficer', 'Derrota al Chief Officer (presidente de MAGAMI/A.o.A.)', {
          cat: 'Jefe', loc: 'Admin Center de Amaterasu — Master Room', boss: 'MetalSeadramon (alt), VenomMyotismon, Raidenmon (Nv. ~44-48)',
          how: 'El mandatario de A.o.A. en el espejo de la sala de la Game Master. Al caer huirá el verdadero titiritero hacia el satélite Gunslinger... y de paso, Junior y los suyos logran salir al mundo real solo para tener que volver a entrar a terminar el trabajo.',
        }),
        t('dw3-realworld', 'Interludio: el mundo real y la vuelta a Digimon Online', {
          loc: 'Mundo real → vuelta al satélite',
          how: 'Sigue la historia hasta la base de lanzamiento: el grupo deberá reingresar al juego para asaltar el satélite espía Gunslinger donde Lord Megadeath fusionará los Vemmon en Galacticmon.',
        }),
        t('dw3-megadeath', 'Derrota a Lord Megadeath en el Gunslinger', {
          cat: 'Jefe', loc: 'Satélite Gunslinger — Sala de control', boss: 'Fujinmon, Suijinmon, Raijinmon (Nv. ~50-60)',
          how: 'Viento, agua y rayo en su máxima expresión. Entra con niveles altos (60+ recomendados para la serie final) y el inventario lleno de la mejor recuperación.',
        }),
        t('dw3-galacticmon-tail', '⭐ Derrota a Galacticmon — Cola', {
          cat: 'Jefe', loc: 'Satélite Gunslinger', boss: 'Galacticmon (Tail)',
          how: 'Primera fase del jefe final: la cola del arma viviente creada desde los Vemmon. Controla el gasto de MP/recuperaciones: no habrá descanso antes de la cabeza.',
        }),
        t('dw3-galacticmon-head', '⭐⭐ Derrota a Galacticmon — Cabeza (FINAL)', {
          cat: 'Jefe', loc: 'Satélite Gunslinger', boss: 'Galacticmon (Head)',
          how: 'La cabeza es el combate con más HP del juego. Estadísticas entrenadas al máximo, evoluciones Mega y todos tus Life/Multi Recovery deben converger aquí. Cúerate primero a ti y pega después.',
          reward: 'Final del juego: el Gunslinger cae y Digimon Online queda libre. ¡Enhorabuena, Campeón de Asuka!',
        }),
      ],
    },
    {
      id: 'dw3-100',
      title: 'Postgame, jefes opcionales y 100%',
      desc: 'Farahones, espadachines, la media docena BK y los 8 Rookie al completo.',
      tasks: [
        t('dw3-pharaohmon', 'Derrota a Pharaohmon (jefe opcional)', {
          cat: 'Postgame', loc: 'Asuka — Protocol Ruins, final de la escalinata este',
          how: 'El jefe que viste de pasada en la ruta a Seiryu. Vuelve con Digimon de nivel alto: en Amaterasu, en ese mismo lugar, te espera BK MegaGargomon.',
        }),
        t('dw3-zanbamon-real', 'Derrota al Zanbamon verdadero (Jungle Shrine)', {
          cat: 'Postgame', loc: 'Asuka — Jungle Shrine Catacombs (escalera y a la izquierda)',
          how: 'Revancha real contra el espadachín del Jungle Grave. En su lugar en Amaterasu encontrarás a BK Seraphimon.',
        }),
        t('dw3-bk1', 'Caza a los BK (1/3): BK Imperialdramon y BK MegaGargomon', {
          cat: 'Postgame', loc: 'Amaterasu — Tyranno Valley / Protocol Ruins', boss: 'BK Imperialdramon · BK MegaGargomon (Nv. ~45-50)',
          how: 'Los BK ocupan en Amaterasu el lugar de jefes de Asuka: BK Imperialdramon donde MasterTyrannomon (senda oeste del esqueleto del valle) y BK MegaGargomon donde Pharaohmon.',
        }),
        t('dw3-bk2', 'Caza a los BK (2/3): BK Seraphimon y BK WarGrowlmon', {
          cat: 'Postgame', loc: 'Amaterasu — Jungle Shrine Catacombs / Dum Dum Control Room', boss: 'BK Seraphimon · BK WarGrowlmon (Nv. ~45-50)',
          how: 'BK Seraphimon en el lugar de Zanbamon y BK WarGrowlmon donde derrotaste a HiAndromon.',
        }),
        t('dw3-bk3', 'Caza a los BK (3/3): BK KingNumemon y BK WarGreymon', {
          cat: 'Postgame', loc: 'Amaterasu — Dum Dum Sewers / Amaterasu City Sewers (sala de Datamon)', boss: 'BK KingNumemon (Nv. ~48-53) · BK WarGreymon (Nv. ~45-50)',
          how: 'BK KingNumemon subiendo la escalera al sur de la sala secreta de la fábrica (donde WaruMonzaemon) y BK WarGreymon en la sala de control del alcantarillado de la capital (donde Datamon).',
        }),
        t('dw3-masters', 'Derrota a los Maestros elementales de Amaterasu', {
          cat: 'Postgame', loc: 'Ice / Fire / Dark Dungeons (Amaterasu)', boss: 'Ice Master · Fire Master · Dark Master',
          how: 'Versiones definitivas de los tres guardianes: Ice Master (Vikemon alt, Antylamon alt, Scorpiomon alt), Fire Master (Lynxmon x2, Creepymon) y Dark Master (Ghoulmon, Piedmon, Infermon). Son algunos de los combates más duros del juego.',
        }),
        t('dw3-veemon', 'Obtén a Veemon con su DRI Agent', {
          cat: 'Opcional', loc: 'Protocol Ruins (agente) → Bulk Bridge (DDNA de Paildramon)', req: 'Haber derrotado al Byakko Leader verdadero y tener su insignia',
          how: 'El agente DRI de Veemon aparece en las Protocol Ruins, donde estuvo Baronmon, tras conseguir la Byakko Badge. Entrégale el DDNA que suelta Paildramon en la zona del Bulk Bridge (pasando el Bulk Swamp). Atención a su requisito de equipo al hablar con él (acude con el nº de Digimon que exija).',
        }),
        t('dw3-kotemon-dri', 'Obtén a Kotemon (si no elegiste el Pack A)', {
          cat: 'Opcional', loc: 'DRI Agent Ken — Infinity Desert',
          how: 'Derrota a Kyukimon en el Suzaku Underground Lake (Asuka) y entrega el DDNA de Kotemon que suelta al Agente Ken, en el Infinity Desert.',
        }),
        t('dw3-all-rookies', 'Completa los 8 Rookie jugables vía DRI Agents', {
          cat: 'Opcional', loc: 'Toda Asuka y Amaterasu',
          how: 'Cada Rookie fuera de tu pack (Agumon, Patamon, Renamon, Monmon, Kumamon, Guilmon, Kotemon y Veemon) tiene su agente DRI y su Digimon donante de DDNA. El patrón es siempre: localiza al agente → derrota al objetivo → entrega el DDNA.',
          tip: 'Guarda antes de entregar un DDNA: algunos donantes son encuentros únicos según la zona/servidor y no quieres perder la pieza.',
        }),
        t('dw3-all-evos', 'Desbloquea las 44 digievoluciones', {
          cat: 'Postgame', loc: 'Árboles de cada Rookie',
          how: 'Cada especie abre sus ramas subiendo de nivel (pivotes 5/20/40), aprendiendo técnicas concretas y cumpliendo mínimos de estadísticas o tolerancias elementales (recibir daño de un elemento muchas veces es como se suben las resistencias al final). Repasa cada árbol en la pantalla de digievoluciones y "rellena huecos".',
        }),
        t('dw3-eldorado', 'Consigue la El Dorado ID (tienda secreta)', {
          cat: 'Opcional', loc: 'Asuka City — El Dorado (Ponchomon)', req: 'Un Digimon con 210+ de Charisma',
          how: 'Con un compañero que alcance 210 de Charisma (sube con victorias y entrenamiento adecuado), habla con Ponchomon tras el mostrador de El Dorado: te expedirá la El Dorado ID para comprar en la tienda más selecta del juego.',
        }),
        t('dw3-epic-2003', '🌟 (Solo versión 2003/PAL) Las 5 armas épicas y los líderes supremos', {
          cat: 'Postgame', loc: 'Amaterasu — postgame',
          how: 'Contenido exclusivo de la versión europea Digimon World 2003: reúne las 5 armas épicas/legendarias y desbloquea a los 4 líderes definitivos (Chinron, Zhu Que, Bai Hu y Xuan Wu Leaders) en lugares emblemáticos de Amaterasu: Qing Long Tower, las Protocol Ruins, la cornisa junto a donde viste al Seiryu Leader y el Tyranno Valley.',
        }),
        t('dw3-cards-fishing', 'Extras eternos: juego de cartas y pesca', {
          cat: 'Opcional', loc: 'Toda Asuka/Amaterasu',
          how: 'Reta a los jugadores de cartas con tu Folder Bag, colecciona las cartas de los Cardmon y pesca para item raros — el sistema de cañas/anzuelos de DW3 recompensa paciencia con equipamiento único.',
        }),
      ],
    },
  ],
}
