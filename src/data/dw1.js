// ── DIGIMON WORLD 1 (PS1, 1999) ────────────────────────────────────────
// Guía construida a partir de guias de reclutamiento de la comunidad
// (GameFAQs/SpaceWalker, Almar's Guides, Digimon World PSX Wiki, PSLegends).
// Prosperidad de File City: Rookie = +1 · Champion = +2 · Ultimate = +3
// (Sukamon, Numemon y Nanimon solo dan +1). Total: 50 reclutables = 100 pts.
const t = (id, title, o = {}) => ({ id, title, cat: 'Reclutamiento', ...o })

export default {
  id: 'dw1',
  num: 1,
  title: 'Digimon World',
  short: 'DW1',
  year: '1999',
  platform: 'PlayStation',
  emoji: '🌴',
  accent: 'emerald',
  tagline: 'Reconstruye File City reclutando a los 50 Digimon perdidos de la isla.',
  description:
    'Un humano es arrastrado a la Isla File (File Island) para salvarla. Tu Digimon compañero nace, entrena, digievoluciona y muere de viejo (renace en huevo): la partida se gana explorando la isla y convenciendo a los Digimon salvajes para que vuelvan a File City. Cada recluta aporta puntos de Prosperidad y muchos abren tiendas y servicios. Con 50 de prosperidad y derrotando a Airdramon se abre el Monte Infinito, la zona final.',
  howItWorks: [
    'Prosperidad: Rookie +1 · Champion +2 · Ultimate +3 (Sukamon/Numemon/Nanimon +1). Máximo 100.',
    'Tu compañero envejece y muere: renace como huevo. Entrena en el Green Gym y evita "care mistakes" (hambre, sueño, no llevarlo al baño) para digievolucionar bien.',
    'Habla con Jijimon para saber tu nivel de prosperidad. A los 15 pts aparece Greymon; a los 50, Airdramon y el Monte Infinito.',
    'Los reclutas de Monte Infinito solo se unen a la ciudad DESPUÉS de derrotar a Machinedramon, el jefe final.',
  ],
  sections: [
    {
      id: 'file-city',
      title: 'File City: primeros pasos',
      desc: 'Llegas a una ciudad casi vacía. Aprende el ciclo cuidar → entrenar → explorar y consigue tus primeros puntos.',
      tasks: [
        t('dw1-intro', 'Completa la introducción y conoce a Jijimon', {
          cat: 'Historia', loc: 'Casa de Jijimon, File City',
          how: 'Tras la cinemática inicial eclosiona tu primer Digimon (Agumon o Gabumon según el huevo que elijas). Jijimon te explica que los Digimon de la isla han olvidado quiénes son y te pide que los traigas de vuelta a la ciudad.',
          tip: 'Cada vez que vuelvas a la ciudad, habla con Jijimon: te cuenta los reclutas nuevos y tu prosperidad total.',
        }),
        t('dw1-basics', 'Domina el ciclo de cuidados y el Green Gym', {
          cat: 'Sistema', loc: 'File City / Green Gym',
          how: 'Alimenta a tu Digimon (carne diaria gratuita con Tanemon), llévalo al baño cuando avise, déjalo dormir cuando anochezca y entrena sus stats en el Green Gym (HP, MP, Fuerza, Defensa, Velocidad, Cerebro). Descansa si está cansado.',
          tip: 'Cada "care mistake" (no comer, no dormir, hacerse sus necesidades en el suelo) cuenta para la digievolución: muchos errores = Numemon/Sukamon. La digievolución depende de stats + peso + errores.',
        }),
        t('dw1-greymon', 'Recluta a Greymon (+2)', {
          loc: 'File City, frente a la casa de Jijimon', pts: 2, lvl: 'Champion',
          req: '15+ de prosperidad',
          how: 'Con 15 o más de prosperidad, habla con Jijimon dentro de su casa y sal fuera: Greymon aparecerá y te retará a un combate (~4.800 HP). Derrotalo con un Champion entrenado.',
          reward: 'Abre la Arena de File City (torneos y premios).',
          tip: 'Es el primer "muro" del juego: si te gana fácil, entrena más días o espera a tu siguiente generación.',
        }),
        t('dw1-airdramon', 'Recluta a Airdramon (+2) y abre el Monte Infinito', {
          cat: 'Jefe', loc: 'File City, frente a la casa de Jijimon', pts: 2, lvl: 'Champion',
          req: '50+ de prosperidad',
          how: 'Al llegar a 50 de prosperidad, Jijimon dirá que el camino al Monte Infinito está abierto. Al salir de su casa, Airdramon os emboscará (~4.500 HP). Al vencerle se abrirá el camino noreste de la ciudad hacia la zona final.',
          reward: 'Acceso al Monte Infinito. Tras terminar el juego abrirá la Fortune Teller (adivina) en el vestíbulo de la Arena.',
          tip: 'No hace falta ir directo al final: con la ruta abierta puedes seguir reclutando hasta llegar a 100.',
        }),
      ],
    },
    {
      id: 'native-forest',
      title: 'Native Forest y Dragon Eye Lake',
      desc: 'La primera zona de exploración, al oeste y este de File City. Reclutas facilitos para arrancar la ciudad.',
      tasks: [
        t('dw1-agumon', 'Recluta a Agumon (+1)', {
          loc: 'Native Forest, entrada por el Green Gym', pts: 1, lvl: 'Rookie',
          how: 'Al entrar al bosque desde el gimnasio, un Agumon salvaje te cortará el paso y luchará (~800 HP). Es obligatorio vencerle para seguir explorando.',
          reward: 'Abre el Item Bank en la ciudad: guarda hasta 100 objetos. Imprescindible.',
        }),
        t('dw1-kunemon', 'Recluta a Kunemon (+1)', {
          loc: "Kunemon's Bed, al este del baño del bosque", pts: 1, lvl: 'Rookie',
          how: 'Sobre un arbusto, un Kunemon hambriento te pedirá comida. Dale cualquier alimento y prepárate para luchar; al ganar se unirá a la ciudad.',
          reward: 'Abre un atajo en File City que conecta la plaza con la zona del Digibridge.',
        }),
        t('dw1-palmon', 'Recluta a Palmon (+1)', {
          loc: 'Native Forest (zona sur)', pts: 1, lvl: 'Rookie',
          how: 'Habla con Palmon en el bosque. Te hará preguntas / te pedirá ayuda con las plantas; completa su evento y aceptará volver a la ciudad (en algunas versiones implica un combate corto).',
          reward: 'Mejora la Meat Farm de Tanemon: a partir de ahora da Giant Meat (carne grande que sacía mucho más).',
        }),
        t('dw1-coelamon', 'Recluta a Coelamon (+2)', {
          loc: 'Coela Point, Dragon Eye Lake', pts: 2, lvl: 'Champion',
          how: 'Pesca en Dragon Eye Lake hasta que aparezca Coelamon (pica como si fuera un pez grande) o habla con él en Coela Point cuando emerja; tras el encuentro/combate se une a la ciudad.',
          reward: 'Abre el Item Stand (puesto de objetos) y más tarde ayuda en la Clínica.',
          tip: 'Consigue primero la caña de pescar (Old Rod): se obtiene explorando la orilla del lago y pescando en los puntos brillantes.',
        }),
        t('dw1-seadramon', 'Pesca y alíate con Seadramon (+2)', {
          cat: 'Historia', loc: 'Dragon Eye Lake (pesca)', pts: 2, lvl: 'Champion',
          how: 'Con una caña buena, pesca en Dragon Eye Lake en los horarios en los que aparece la silueta grande (madrugada/atardecer). Capturar a Seadramon es una batalla de pesca larga: gestiona la tensión del sedal sin romperlo.',
          reward: 'Seadramon te lleva nadando a Beetle Land, zona clave para mejorar el gimnasio. Cuenta como recluta aunque viva en el lago.',
          tip: 'Mejora tu caña y ten paciencia: es el "pez jefe" del juego. Guarda antes de intentarlo si juegas con savestates.',
        }),
        t('dw1-ninjamon', 'Recluta a Ninjamon (+2)', {
          loc: 'Zona del Digibridge (Native Forest)', pts: 2, lvl: 'Champion',
          req: 'Prosperidad media/alta (suele exigirse tienda secreta o 45+)',
          how: 'Ninjamon aparece de emboscada en la zona sur del Digibridge cuando tu ciudad ya progresó. Derrotalo en combate para que se una.',
          reward: 'Trabaja en la Secret Item Shop (tienda secreta) dando información y vendiendo objetos de técnica.',
        }),
        t('dw1-etemon', 'Recluta a Etemon (+3)', {
          loc: 'Native Forest, zona del baño', pts: 3, lvl: 'Ultimate',
          req: 'Tener un Sukamon como compañero',
          how: 'Cuando tu compañero sea Sukamon (digievolución por muchos cuidados deficientes), Etemon aparecerá en Native Forest. Habla con él: se unirá a la ciudad.',
          reward: 'Te vende la Golden Banana, objeto que permite digievoluciones especiales (MetalEtemon en compañeros compatibles).',
          tip: 'Si no quieres mantener a Sukamon, el Rey Sukamon de Trash Mountain puede devolver a tu compañero a su forma anterior.',
        }),
        t('dw1-betamon', 'Recluta a Betamon (+1)', {
          loc: 'Entrada a Tropical Jungle, junto al baño', pts: 1, lvl: 'Rookie',
          how: 'Un Betamon con hambre ronda la pantalla del baño antes del Digibridge. Dale algo de comer y lucha contra él (~800 HP) para reclutarlo.',
          reward: 'Se come el arbusto que bloquea el paso entre File City y el Digibridge, y ayuda/abre servicios de tienda.',
        }),
      ],
    },
    {
      id: 'drill-tunnel',
      title: 'Tropical Jungle y Drill Tunnel',
      desc: 'Cruzando el Digibridge: selva, laberinto Amida y el túnel que conecta con el Monte Panorama.',
      tasks: [
        t('dw1-centarumon', 'Recluta a Centarumon (+2)', {
          loc: 'Amida Forest, dentro de Tropical Jungle', pts: 2, lvl: 'Champion',
          how: 'Atraviesa el laberinto "amida" de la selva (caminos que se bifurcan como una lotería): sigue probando rutas hasta llegar al claro donde está Centarumon. Tras su evento aceptará dirigir la clínica de la ciudad.',
          reward: 'Abre la Clínica de File City (cura enfermedades y fatiga). Además, hablar con él después activa el evento de Unimon en el Monte Panorama.',
        }),
        t('dw1-vegimon', 'Recluta a Vegimon (+2)', {
          loc: 'Tropical Jungle (la semilla misteriosa)', pts: 2, lvl: 'Champion',
          req: 'Habla primero con Tanemon en File City (10+ prosperidad)',
          how: 'Tanemon te contará que apareció una semilla/planta extraña en la selva (cerca del baño). Visítala en días sucesivos y cuídala (aparece el brote, crece...). Tras completar su crecimiento, Vegimon despertará y se unirá.',
          reward: 'La Meat Farm pasa a dar Sirloin (solomillo), la mejor comida gratuita diaria.',
          tip: 'Es un reclutamiento de varios días de juego: deja la semilla plantada y vuelve a diario en tu ruta.',
        }),
        t('dw1-piximon', 'Recluta a Piximon (+3)', {
          loc: 'Tropical Jungle (aparición rara)', pts: 3, lvl: 'Ultimate',
          how: 'Piximon aparece con baja probabilidad en una de las pantallas de Tropical Jungle. Si lo ves volando, atúrdelo/atácalo enseguida y gana el combate (es un Ultimate: ve con tu mejor compañero).',
          reward: 'Vende Training Manuals en la tienda de objetos: usarlos al entrenar aumenta las ganancias de stats.',
          tip: 'Entra y sal de la pantalla para forzar reapariciones (respawn) hasta que salga.',
        }),
        t('dw1-ogremon', 'Recluta a Ogremon (+2) — la cadena de 3 combates', {
          loc: 'Drill Tunnel → Great Canyon → Freezeland', pts: 2, lvl: 'Champion',
          how: 'La banda de Ogremon te tiende tres emboscadas a lo largo de la isla: 1) en el Drill Tunnel, 2) en su fortaleza del Great Canyon y 3) en la costa de Freezeland atacando a Whamon. Al derrotarle la tercera vez, Ogremon admitirá la derrota y se unirá a File City (patrulla la ciudad).',
          tip: 'Marca esta tarea solo tras el tercer combate. El evento de Freezeland también desbloquea a Whamon.',
        }),
        t('dw1-meramon', 'Recluta a Meramon (+2)', {
          loc: 'Lava Cave, al fondo del Drill Tunnel', pts: 2, lvl: 'Champion',
          how: 'Ayuda a despejar el Drill Tunnel (evento de la roca/excavación con los Drimogemon). Al fondo, en la cueva de lava, Meramon te retará: derrótalo para reclutarlo.',
          reward: 'Abre (o se suma a) el Restaurante de File City: comidas que mejoran stats según el cocinero.',
        }),
        t('dw1-drimogemon', 'Recluta a Drimogemon (+2)', {
          loc: 'Drill Tunnel', pts: 2, lvl: 'Champion',
          how: 'Tras resolver los eventos del túnel y vencer a Meramon, el Drimogemon jefe aceptará luchar/unirse. Con los días, otro Drimogemon terminará de excavar el pasaje secreto hacia el Monte Panorama.',
          reward: 'Abre la Treasure Hunt (búsqueda del tesoro) en la ciudad: paga para excavar objetos en el túnel.',
          tip: 'El pasaje terminado del Drill Tunnel también es la ruta a la tableta de Leomon (hazlo cuando tengas 45+ de prosperidad).',
        }),
      ],
    },
    {
      id: 'gear-savanna',
      title: 'Gear Savanna y Trash Mountain',
      desc: 'La sabana mecánica del este y la montaña de basura, hogar de los Digimon "filth".',
      tasks: [
        t('dw1-biyomon', 'Recluta a Biyomon (+1)', {
          loc: 'Gear Savanna', pts: 1, lvl: 'Rookie',
          how: 'Biyomon huirá de ti pantalla a pantalla por la sabana. Persíguela hasta acorralarla (no hace falta combatir): cansada de huir, aceptará volver a la ciudad.',
          reward: 'Trabaja en la Item Shop de File City.',
        }),
        t('dw1-patamon', 'Recluta a Patamon (+1)', {
          loc: 'Gear Savanna (pantalla este)', pts: 1, lvl: 'Rookie',
          how: 'Un Patamon está siendo acosado por Digimon hostiles (banda de Goburimon/Sharmamon). Intervén y gana el combate para rescatarle; agradecido, se unirá a la ciudad.',
          reward: 'Ayuda en la Item Shop. Su rescate también es el primer contacto con Leomon.',
        }),
        t('dw1-elecmon', 'Recluta a Elecmon (+1)', {
          loc: 'Gear Savanna', pts: 1, lvl: 'Rookie',
          how: 'Elecmon ronda la sabana: habla con él y derrótalo en combate para convencerle de volver a File City.',
          reward: 'Ilumina las calles de la ciudad por la noche (solo decorativo, pero suma +1).',
        }),
        t('dw1-leomon', 'Recluta a Leomon (+2)', {
          loc: 'Gear Savanna (camino a Trash Mountain)', pts: 2, lvl: 'Champion',
          req: '45+ de prosperidad y Meramon reclutado',
          how: 'Leomon, que protegía a Patamon, busca la tableta ancestral de su pueblo. Con 45-50 de prosperidad, ve al Drill Tunnel: el pasaje sur que el Drimogemon llevaba días excavando estará abierto. Al fondo de la sala está la Leomon\'s Tablet. Llévasela a Leomon en Gear Savanna: leerá su deber de proteger la isla y se unirá a la ciudad.',
          reward: 'Se instala junto al transporte de Birdramon (presencia) y suma +2.',
        }),
        t('dw1-sukamon', 'Recluta a Sukamon (+1)', {
          loc: 'Trash Mountain', pts: 1, lvl: 'Champion (filth)',
          how: 'Sube a Trash Mountain y derrota al Sukamon que la custodia (asegúrate de enfrentarte al Sukamon reclutable de la cima). Tras el combate aceptará vivir junto al baño de File City.',
          reward: 'Deambula junto al baño de la ciudad. Es requisito indirecto del evento de Etemon.',
          tip: 'En la cima también está el Rey Sukamon: puede devolver a tu compañero Sukamon a su forma previa a la digievolución.',
        }),
      ],
    },
    {
      id: 'great-canyon',
      title: 'Great Canyon y Beetle Land',
      desc: 'El cañón del oeste, el puente invisible y la isla de los insectos a la que solo llega Seadramon.',
      tasks: [
        t('dw1-shellmon', 'Recluta a Shellmon (+2)', {
          loc: 'Great Canyon', pts: 2, lvl: 'Champion',
          how: 'Shellmon está atascado en el cañón. Habla con él y ayúdalo a liberarse; en agradecimiento volverá a File City.',
          reward: 'Crea el Bulletin Board (tablón de noticias) de la ciudad. ¡Léelo siempre! Sus noticias disparan los eventos de Vademon, Frigimon y SkullGreymon.',
        }),
        t('dw1-monochromon', 'Recluta a Monochromon (+2)', {
          loc: 'Great Canyon (su tienda)', pts: 2, lvl: 'Champion',
          how: 'Monochromon tiene una tienda en el cañón y te propone trabajar para él: acepta y juega el minijuego de ventas. Fija precios que equilibren clientes y ganancias hasta cumplir su meta de beneficios: impresionado, se irá a File City.',
          reward: 'Abre/atiende la Item Shop de la ciudad.',
          tip: 'Si fracasas en la meta, puedes reintentar otro día. Precios demasiado altos = pocos clientes; demasiado bajos = sin beneficio.',
        }),
        t('dw1-birdramon', 'Recluta a Birdramon (+2)', {
          loc: 'Great Canyon, el nido (puente invisible)', pts: 2, lvl: 'Champion',
          how: 'Cruza el puente invisible del cañón hasta el nido de Birdramon (vigila el camino junto a la fortaleza de Ogremon). Tras el evento del nido, Birdramon luchará contigo: derróbala para reclutarla.',
          reward: 'Crea el Birdramon Transport: viajes rápidos pagando bits a zonas de toda la isla. Cambia el juego por completo.',
        }),
        t('dw1-kabuterimon', 'Recluta a Kabuterimon (+2)', {
          loc: 'Beetle Land', pts: 2, lvl: 'Champion', req: 'Viajar con Seadramon',
          how: 'En el gimnasio de Beetle Land, Kabuterimon te retará a un combate. Derrotalo para que acepte ir a File City a mejorar las máquinas de entrenamiento.',
          reward: 'Mejora las máquinas del Green Gym (más stats por sesión).',
        }),
        t('dw1-kuwagamon', 'Recluta a Kuwagamon (+2)', {
          loc: 'Beetle Land', pts: 2, lvl: 'Champion', req: 'Viajar con Seadramon',
          how: 'El otro escarabajo de Beetle Land también peleará contigo en su gimnasio. Gana el combate para reclutarlo.',
          reward: 'Mejora el resto de máquinas del Green Gym junto a Kabuterimon.',
          tip: 'Haz ambos en el mismo viaje: Beetle Land requiere el viaje de Seadramon ida y vuelta.',
        }),
      ],
    },
    {
      id: 'freezeland',
      title: 'Freezeland y Toy Town',
      desc: 'Tierras heladas del sur y el pueblo de los juguetes. Curling, rescates y una ballena muy útil.',
      tasks: [
        t('dw1-penguinmon', 'Recluta a Penguinmon (+1)', {
          loc: 'Freezeland (pista de hielo)', pts: 1, lvl: 'Rookie',
          how: 'Penguinmon te reta a una partida de curling. Gánale para que se una a la ciudad (si pierdes, te pedirá comida como pago y podrás reintentar).',
          reward: 'Abre la pista de Curling bajo la Arena: apuesta comida y gana objetos.',
          tip: 'Vencerle por 10-0 (partida perfecta) hará aparecer a MetalMamemon como rival especial.',
        }),
        t('dw1-frigimon', 'Recluta a Frigimon (+2)', {
          loc: 'Freezeland', pts: 2, lvl: 'Champion', req: 'Leer la noticia en el tablón de Shellmon',
          how: 'Lee primero la noticia sobre Freezeland en el tablón de Shellmon. Después permanece en la zona helada hasta que tu compañero enferme por el frío: Frigimon aparecerá para rescataros y aceptará ir a la ciudad.',
          reward: 'Trabaja en el Restaurante (platos con efectos de frío / digestión).',
        }),
        t('dw1-garurumon', 'Recluta a Garurumon (+2)', {
          loc: 'Freezeland', pts: 2, lvl: 'Champion',
          how: 'Garurumon aparece en Freezeland a partir de la tarde (entra en su pantalla después de las 16:00 del reloj del juego). Derrotalo en combate para reclutarlo.',
          reward: 'Trabaja en el Restaurante.',
        }),
        t('dw1-mojyamon', 'Recluta a Mojyamon (+2)', {
          loc: 'Freezeland', pts: 2, lvl: 'Champion',
          how: 'Los Mojyamon de Freezeland son comerciantes: intercambian objetos. Completa la cadena de trueques que te propongan llevándoles los objetos que piden cada vez; tras completar los intercambios, uno aceptará vender en File City.',
          reward: 'Vende objetos de recuperación en la Secret Item Shop.',
          tip: 'Lleva el inventario ordenado y guarda los objetos de trueque: algunos solo se consiguen en tiendas concretas.',
        }),
        t('dw1-angemon', 'Recluta a Angemon (+2)', {
          loc: 'Ice Sanctuary, Freezeland', pts: 2, lvl: 'Champion',
          how: 'En el santuario de hielo de Freezeland hay un Angemon congelado en una estatua/pilar de hielo. Examínalo primero y vuelve cuando hayas avanzado en la historia de la isla (Leomon y la prosperidad de la ciudad): Angemon despertará y volará a File City.',
          reward: 'Se convierte en ayudante de Jijimon: pregúntale para saber qué Digimon te quedan por reclutar. ¡Tu lista dentro del juego!',
        }),
        t('dw1-whamon', 'Recluta a Whamon (+2)', {
          loc: 'Costa de Freezeland', pts: 2, lvl: 'Champion', req: 'Cadena de Ogremon avanzada',
          how: 'La banda de Ogremon está atormentando a Whamon en la costa de Freezeland (tercer combate contra Ogremon). Gana la pelea: Whamon, agradecido, se unirá y Ogremon completará su cadena de reclutamiento.',
          reward: 'Whamon te transporta desde File City hasta Factorial Town (nueva zona del este).',
        }),
        t('dw1-monzaemon', 'Recluta a Monzaemon (+3)', {
          loc: 'Toy Town', pts: 3, lvl: 'Ultimate',
          how: 'Resuelve el evento de Toy Town: el pueblo está bajo el control de WaruMonzaemon y hay un traje de Monzaemon vacío. Haz que el Numemon del pueblo se ponga el traje: digievolucionará a Monzaemon y se unirá a File City (descansará en la casa de Jijimon).',
          reward: '+3 de prosperidad y cierra la historia de Toy Town.',
        }),
      ],
    },
    {
      id: 'panorama-factorial',
      title: 'Monte Panorama, Misty Trees y Factorial Town',
      desc: 'Ovnis, niebla, pantanos, alcantarillado industrial y androides descontrolados.',
      tasks: [
        t('dw1-vademon', 'Recluta a Vademon (+3)', {
          loc: 'Monte Panorama, zona de esporas', pts: 3, lvl: 'Ultimate', req: 'Shellmon reclutado + 45 de prosperidad',
          how: 'Evento en 3 actos: 1) examina el círculo extraño en la zona derecha de la Spore Area; 2) con 30+ de prosperidad, Shellmon publicará noticias de ovnis: vuelve y examina los nuevos círculos; 3) con 45+ de prosperidad, la última noticia dice que "un alien aterrizó": ve al Monte Panorama y habla con Vademon para que se una.',
          reward: 'Trabaja ocasionalmente en el Restaurante.',
          tip: 'Si el alien no aparece, revisa el tablón de Shellmon: sin leer la noticia, el siguiente acto no se activa.',
        }),
        t('dw1-unimon', 'Recluta a Unimon (+2)', {
          loc: 'Monte Panorama', pts: 2, lvl: 'Champion', req: 'Centarumon reclutado',
          how: 'Habla con Centarumon en la Clínica de File City: te pedirá ayuda para un Unimon enfermo/herido. Ve al Monte Panorama, encuéntralo y cúralo (objeto de recuperación/vendaje según te pida); curado, se unirá a la ciudad.',
          reward: 'Trabaja a veces en la Item Shop.',
        }),
        t('dw1-gabumon', 'Recluta a Gabumon (+1)', {
          loc: 'Misty Trees', pts: 1, lvl: 'Rookie',
          how: 'Un Gabumon salvaje se esconde entre la niebla de Misty Trees. Encuéntralo y derrótalo en combate para que vuelva a la ciudad (se deja ver por la Secret Item Shop).',
        }),
        t('dw1-kokatorimon', 'Recluta a Kokatorimon (+2)', {
          loc: 'Misty Trees', pts: 2, lvl: 'Champion',
          how: 'Kokatorimon está petrificado entre los árboles del Misty Trees. Libéralo examinándolo junto a tu compañero: al despertar, aceptará unirse a File City.',
          reward: 'Deja una estatua en la ciudad (frente al baño / el Item Bank según versión).',
        }),
        t('dw1-geko', 'Despierta a ShogunGekomon en Geko Swamp', {
          cat: 'Historia', loc: 'Geko Swamp',
          how: 'Ayuda a los Otamamon y Gekomon del pantano y despierta al dormido ShogunGekomon (te pedirán el objeto/flauta necesaria). Esto desbloquea el camino completo del pantano y sus recompensas.',
          tip: 'Geko Swamp conecta Misty Trees con las rutas del este: despierta a ShogunGekomon cuanto antes para acortar viajes.',
        }),
        t('dw1-giromon', 'Recluta a Giromon (+3)', {
          loc: 'Factorial Town', pts: 3, lvl: 'Ultimate', req: 'Llegar con Whamon',
          how: 'Un Giromon descontrolado está causando el caos en la fábrica. Localízalo en el interior de Factorial Town y derrótalo (combate de nivel Ultimate). Este evento también libera el camino hacia Andromon.',
          reward: 'Instala la gramola (jukebox) del Restaurante.',
          tip: '⚠️ En la versión NTSC, hablar con Giromon ya reclutado en la ciudad puede colgar el juego. Evita interactuar con él en File City.',
        }),
        t('dw1-andromon', 'Recluta a Andromon (+3)', {
          loc: 'Factorial Town', pts: 3, lvl: 'Ultimate', req: 'Resolver el evento de Giromon',
          how: 'Tras calmar a Giromon, Andromon recuperará el control de sí mismo en Factorial Town. Habla con él (puede implicar un combate de comprobación) para que acepte mudarse a File City.',
          reward: 'Se instala junto al transporte de Birdramon (+3 de prosperidad).',
        }),
        t('dw1-numemon', 'Recluta a Numemon (+1)', {
          loc: 'Alcantarillas de Factorial Town', pts: 1, lvl: 'Champion (filth)',
          how: 'Cuando el mal olor de las alcantarillas desaparezca (consigue el objeto/medio que pide la zona en Factorial Town), baja al alcantarillado. Numemon te retará... con solo 2 HP. Gana el "combate" y se unirá.',
          reward: 'Vende objetos relacionados con enemigos en la Secret Item Shop.',
        }),
        t('dw1-mamemon', 'Recluta a Mamemon (+3)', {
          loc: 'Factorial Town (segunda pantalla)', pts: 3, lvl: 'Ultimate',
          how: 'Mamemon aparece aprox. un 5% de las veces al entrar a la segunda pantalla de Factorial Town. Si aparece, háblale y gana su combate (Ultimate muy duro) para reclutarlo.',
          reward: 'Vende Super Disks en la Secret Item Shop y es rival extremo de curling rara vez.',
          tip: 'Entra/sal de la pantalla en bucle para forzarlo. Guarda antes del combate.',
        }),
        t('dw1-metalmamemon', 'Recluta a MetalMamemon (+3)', {
          cat: 'Opcional', loc: 'Pista de curling', pts: 3, lvl: 'Ultimate', req: 'Penguinmon reclutado',
          how: 'Gana una partida de curling contra Penguinmon con puntuación perfecta (10-0). MetalMamemon aparecerá como rival honorífico: gánale también para que se una a la ciudad.',
          tip: 'La partida perfecta requiere práctica de fuerza y ángulo: apunta a dejar siempre una piedra tapando el centro.',
        }),
        t('dw1-nanimon', 'Recluta a Nanimon (+1) y sus 5 llaveros', {
          loc: 'Varias zonas de la isla', pts: 1, lvl: 'Champion (filth)',
          how: 'Nanimon aparece fugazmente en distintas pantallas de la isla a medida que reclutas Digimon. Cada encuentro deja un llavero (keychain) que amplía tu inventario en +5 huecos. Tras reunir los 5 llaveros/encuentros, Nanimon aparecerá por fin en el Item Bank de Agumon y se unirá a la ciudad.',
          reward: 'Hasta +25 huecos de inventario y +1 de prosperidad.',
          tip: 'Si le ves de reojo en una pantalla, acércate rápido antes de que desaparezca.',
        }),
      ],
    },
    {
      id: 'overdell-dino',
      title: "Overdell, Grey Lord's Mansion y Ancient Dino Region",
      desc: 'El cementerio, la mansión de los virus y la región jurásica a la que se llega volando.',
      tasks: [
        t('dw1-bakemon', 'Recluta a Bakemon (+2)', {
          loc: 'Overdell (cementerio)', pts: 2, lvl: 'Champion',
          how: 'En el cementerio de Overdell, Bakemon te hará su evento fantasma (diálogo/susto). Completa el evento hablando con él en la zona para que acepte mudarse a File City.',
          reward: 'Vaga por la ciudad durante la noche.',
        }),
        t('dw1-myotismon', 'Ayuda a Myotismon en la Grey Lord\'s Mansion', {
          cat: 'Historia', loc: "Grey Lord's Mansion (Overdell)", req: 'Noticia de Shellmon + compañero adecuado',
          how: 'Sigue las noticias del tablón de Shellmon hasta saber que algo ocurre en la mansión. Dentro, Myotismon está enfermo/atrapado: busca en la mansión el objeto/comida que necesita y ayúdalo. Su rescate abre el camino al laboratorio secreto.',
          tip: 'Explora la mansión a fondo: cocina, biblioteca y sótano tienen objetos y pistas.',
        }),
        t('dw1-skullgreymon', 'Recluta a SkullGreymon (+3)', {
          loc: "Laboratorio secreto, Grey Lord's Mansion", pts: 3, lvl: 'Ultimate',
          req: '40+ prosperidad, Shellmon reclutado y Myotismon rescatado (ideal con compañero Virus)',
          how: 'Tras salvar a Myotismon, accede al Secret Lab de la mansión donde SkullGreymon está retenido. Derrotalo en combate (Ultimate fuertísimo: lleva discos de recuperación y tu mejor generación) para que se una a la ciudad.',
          reward: 'Se une a la Arena y desbloquea torneos de nivel más alto.',
        }),
        t('dw1-tyrannomon', 'Recluta a Tyrannomon (+2)', {
          loc: 'Ancient Dino Region', pts: 2, lvl: 'Champion', req: 'Birdramon Transport',
          how: 'Vuela con Birdramon a la Ancient Dino Region. En la primera pantalla camina a la izquierda para encontrar a Tyrannomon y luchar con él. Después sigue el camino secreto de la región y derrota a Meteormon. Vuelve con Tyrannomon: convencido, se unirá.',
          reward: 'Trabaja en el Restaurante.',
        }),
      ],
    },
    {
      id: 'mount-infinity',
      title: 'Monte Infinito: el final',
      desc: 'Requiere 50+ de prosperidad y derrotar a Airdramon. Los reclutas de aquí solo se unen tras vencer a Machinedramon.',
      tasks: [
        t('dw1-infinity-open', 'Entra al Monte Infinito preparado', {
          cat: 'Historia', loc: 'Camino noreste de File City', req: '50 prosperidad + Airdramon derrotado',
          how: 'Antes de subir, prepara a tu compañero Ultimate con stats altos (entrenado con las máquinas mejoradas) y llena el inventario de discos de HP/MP. La subida tiene varios jefes seguidos sin servicios de ciudad.',
          tip: 'Si tu generación actual está a punto de morir de vejez, espera a entrenar a la siguiente antes del asalto final.',
        }),
        t('dw1-devimon', 'Derrota a Devimon (+2 tras el final)', {
          cat: 'Jefe', loc: 'Monte Infinito', pts: 2, lvl: 'Champion',
          how: 'Subiendo la montaña te enfrentarás a Devimon. Al vencerle (y terminar el juego) se unirá a File City y venderá Devil Chips en la tienda secreta.',
        }),
        t('dw1-metalgreymon', 'Derrota a MetalGreymon (+3 tras el final)', {
          cat: 'Jefe', loc: 'Monte Infinito', pts: 3, lvl: 'Ultimate',
          how: 'Uno de los guardianes del Monte Infinito. Trátalo con respeto: pega como un camión. Al finalizar el juego se unirá a la ciudad (trata de ponerle un mote a tu Digimon).',
        }),
        t('dw1-megadramon', 'Derrota a Megadramon (+3 tras el final)', {
          cat: 'Jefe', loc: 'Monte Infinito', pts: 3, lvl: 'Ultimate',
          how: 'Otro guardián de la subida. Dosifica tus discos: todavía quedan Digitamamon y Machinedramon. Al terminar el juego te lo encontrarás fuera de la Arena.',
        }),
        t('dw1-digitamamon', 'Derrota a Digitamamon (+3 tras el final)', {
          cat: 'Jefe', loc: 'Monte Infinito', pts: 3, lvl: 'Ultimate',
          how: 'El cocinero huevo es el último guardián antes de la cima. Véncelo y prepárate para el jefe final. Al terminar, aparecerá a veces en el Restaurante (es el cocinero más raro).',
        }),
        t('dw1-machinedramon', '⭐ Derrota a Machinedramon y a Analogman (FINAL)', {
          cat: 'Jefe', loc: 'Cima del Monte Infinito',
          how: 'Analogman, el humano que causó el caos en la isla, te espera junto a Machinedramon (Giga Cannon = daño brutal). Gana el combate final, contempla la despedida y fin de la historia principal.',
          reward: 'Créditos. Podrás seguir jugando: los reclutas del Monte Infinito llegan a la ciudad y Airdramon abre la Fortune Teller.',
          tip: 'Técnicas que bajan defensa y discos de recuperación total son tus mejores amigos. Sin Ultimate entrenado ni lo intentes.',
        }),
      ],
    },
    {
      id: 'dw1-100',
      title: '100% y extras',
      desc: 'Lo que separa una partida terminada de una File City perfecta.',
      tasks: [
        t('dw1-100-prosperity', '🌟 Alcanza 100 de prosperidad (50/50 reclutas)', {
          cat: 'Postgame', loc: 'File City',
          how: 'Pregunta a Angemon (ayudante de Jijimon) qué Digimon te faltan y cruza la respuesta con esta checklist. Al llegar a 100, la ciudad estará completa.',
        }),
        t('dw1-arena', 'Gana los torneos de la Arena de Greymon', {
          cat: 'Opcional', loc: 'Arena, File City',
          how: 'Compite en las copas según el nivel de tu compañero. Reclutar a SkullGreymon y Gekomon añade torneos avanzados y mejores premios.',
        }),
        t('dw1-curling', 'Sé el campeón del curling (Penguinmon y rivales especiales)', {
          cat: 'Opcional', loc: 'Pista de curling',
          how: 'Juega contra Penguinmon y los rivales que aparecen tras él (incl. la ruta a MetalMamemon con un 10-0 y las apariciones raras de Mamemon).',
        }),
        t('dw1-cards', 'Completa la colección de cartas Digimon', {
          cat: 'Opcional', loc: 'Vending machines y tiendas',
          how: 'Compra sobres en las máquinas expendedoras de la ciudad y colecciona todas las cartas. Tu colección puede consultarse en la casa de Jijimon.',
        }),
        t('dw1-fishing', 'Pesca en todos los puntos y mejora tus cañas', {
          cat: 'Opcional', loc: 'Dragon Eye Lake, Geko Swamp...',
          how: 'Además de Coelamon y Seadramon, el lago esconde peces raros y objetos. La pesca es también la mejor fuente de dinero a principio de partida.',
        }),
        t('dw1-techs', 'Aprende el máximo de técnicas en batalla', {
          cat: 'Opcional', loc: 'Toda la isla',
          how: 'Tu compañero puede aprender técnicas viéndolas en combate (según su atributo/Brain). Busca enemigos que usen técnicas que te falten para completar el repertorio.',
        }),
        t('dw1-medals', 'Colecciona las medallas de Tamer', {
          cat: 'Postgame', loc: 'Toda la isla',
          how: 'El juego otorga medallas por hazañas: prosperidad, pesca, arena, curling, cartas, tiempo de juego... Revisa tu progreso con Jijimon y ve a por todas.',
        }),
      ],
    },
  ],
}
