import type { Treatment, TreatmentCategory } from "@/lib/types";
import { images } from "@/lib/images";

export const categoryLabels: Record<TreatmentCategory, string> = {
  facial: "Facial",
  corporal: "Corporal",
  masaje: "Masaje",
  bienestar: "Bienestar",
};

export const treatments: Treatment[] = [
  {
    id: "ritual-facial-elane",
    slug: "ritual-facial-elane",
    name: "Ritual Facial ÉLANE",
    category: "facial",
    durationMinutes: 90,
    price: 145,
    featured: true,
    active: true,
    image: images.treatmentFacial,
    shortDescription:
      "Un facial completo, lento y preciso, pensado para devolver confort a la piel.",
    description:
      "El Ritual Facial ÉLANE es el tratamiento central del estudio. Empieza con una lectura atenta de la piel y sigue con una limpieza pausada, un masaje de rostro, cuello y escote, y una aplicación de activos según lo que tu piel pide ese día. No hay un protocolo rígido: hay un ritmo.",
    benefits: [
      "Piel más confortable y con mejor aspecto inmediato",
      "Tensión reducida en mandíbula, sienes y nuca",
      "Hidratación profunda sin sensación pesada",
      "Un momento de silencio real, no un trámite",
    ],
    whatToExpect: [
      "Diagnóstico breve al llegar, sin prisa",
      "Limpieza y doble pasada según el estado de la piel",
      "Masaje facial con presión sostenida",
      "Cierre con texturas que puedes llevarte a casa en el gesto, no en un discurso",
    ],
    recommendedFrequency:
      "Una vez al mes como ritual de mantenimiento. Cada quince días si la piel está especialmente reactiva o deshidratada.",
  },
  {
    id: "limpieza-profunda",
    slug: "limpieza-profunda",
    name: "Limpieza Profunda",
    category: "facial",
    durationMinutes: 60,
    price: 95,
    featured: true,
    active: true,
    image: images.treatmentSkin,
    shortDescription:
      "Una limpieza minuciosa para pieles que necesitan claridad y respirar.",
    description:
      "Una sesión centrada en limpiar sin agredir. Trabajamos congestión, restos de maquillaje y esa sensación de piel apagada que aparece con la ciudad, la calefacción o el ritmo. El objetivo no es dejar la piel «tirante», sino despejada.",
    benefits: [
      "Poros más despejados",
      "Mejor absorción de los cuidados diarios",
      "Sensación de piel limpia, no reseca",
      "Base más uniforme para el resto de rituales",
    ],
    whatToExpect: [
      "Desmaquillado y limpieza en dos tiempos",
      "Exfoliación ajustada a tu piel",
      "Extracciones solo cuando son necesarias",
      "Calma y protección al finalizar",
    ],
    recommendedFrequency:
      "Cada cuatro a seis semanas, o antes de un ritual facial más largo.",
  },
  {
    id: "masaje-relajante",
    slug: "masaje-relajante",
    name: "Masaje Relajante",
    category: "masaje",
    durationMinutes: 75,
    price: 110,
    featured: true,
    active: true,
    image: images.treatmentRoom,
    shortDescription:
      "Un masaje amplio, de ritmo lento, para soltar cuello, espalda y respiración.",
    description:
      "Un masaje de cuerpo entero con aceites cálidos y una presión que se adapta. No buscamos un recuento de nudos: buscamos que el sistema nervioso baje de marcha. Ideal cuando el cansancio se nota en los hombros antes que en la agenda.",
    benefits: [
      "Menos tensión en cuello y lumbar",
      "Mejor calidad de descanso esa noche",
      "Cuerpo más liviano al levantarte",
      "Un corte claro en el día",
    ],
    whatToExpect: [
      "Breve conversación sobre zonas a cuidar",
      "Masaje en camilla, con temperatura y presión ajustadas",
      "Atención especial a nuca, hombros y pies",
      "Tiempo para incorporarte sin prisa",
    ],
    recommendedFrequency:
      "Cada dos o tres semanas si pasas muchas horas sentada, o cuando notes que el cuerpo pide pausa.",
  },
  {
    id: "ritual-corporal",
    slug: "ritual-corporal",
    name: "Ritual Corporal",
    category: "corporal",
    durationMinutes: 90,
    price: 155,
    featured: true,
    active: true,
    image: images.treatmentBody,
    shortDescription:
      "Exfoliación, envolvente y masaje para devolver suavidad a la piel del cuerpo.",
    description:
      "Un ritual de cuerpo completo. Empezamos por preparar la piel, seguimos con una envolvente que trabaja textura y confort, y cerramos con un masaje nutritivo. Está pensado para cuando quieres salir con la piel distinta, no solo descansada.",
    benefits: [
      "Piel más suave y uniforme al tacto",
      "Sensación de ligereza",
      "Hidratación que se nota horas después",
      "Un cuidado de cuerpo que no se queda en la ducha",
    ],
    whatToExpect: [
      "Exfoliación corporal ajustada",
      "Tiempo de envolvente en silencio",
      "Masaje con texturas ricas",
      "Recomendación breve de continuidad en casa",
    ],
    recommendedFrequency:
      "Una vez al mes, o al cambio de estación, cuando la piel del cuerpo se reseca o se vuelve opaca.",
  },
  {
    id: "hidratacion-intensa",
    slug: "hidratacion-intensa",
    name: "Hidratación Intensa",
    category: "facial",
    durationMinutes: 60,
    price: 105,
    active: true,
    image: images.treatmentDetail02,
    shortDescription:
      "Un facial para pieles tirantes, apagadas o marcadas por el clima.",
    description:
      "Sesión dedicada a devolver agua y confort. Trabajamos capas ligeras, masaje y oclusión suave. Indicado después del viento, la calefacción o una temporada de piel reactiva.",
    benefits: [
      "Alivio inmediato de la tirantez",
      "Luminosidad más tranquila",
      "Menos sensación de descamación",
      "Piel más elástica al movimiento",
    ],
    whatToExpect: [
      "Limpieza delicada",
      "Activos de hidratación en capas",
      "Masaje para favorecer la absorción",
      "Acabado protector",
    ],
    recommendedFrequency:
      "Cada tres o cuatro semanas en meses secos, o como complemento del Ritual Facial ÉLANE.",
  },
  {
    id: "drenaje-linfatico",
    slug: "drenaje-linfatico",
    name: "Drenaje Linfático",
    category: "corporal",
    durationMinutes: 75,
    price: 120,
    active: true,
    image: images.categoryBody,
    shortDescription:
      "Manos precisas y presión suave para aliviar pesadez en piernas y silueta.",
    description:
      "Un trabajo de drenaje con ritmo constante y presión suave. Pensado para piernas cansadas, retención puntual o esa sensación de cuerpo «lleno» después de viajes o largas jornadas de pie.",
    benefits: [
      "Piernas más livianas",
      "Menos sensación de hinchazón",
      "Mejor descanso de tejidos",
      "Confort inmediato al vestirte",
    ],
    whatToExpect: [
      "Valoración de zonas de pesadez",
      "Secuencia de drenaje en piernas, abdomen y brazos según el caso",
      "Ritmo lento, casi hipnótico",
      "Indicaciones simples de hidratación posterior",
    ],
    recommendedFrequency:
      "Un ciclo de tres sesiones cercanas, o de forma puntual cuando el cuerpo lo pide.",
  },
  {
    id: "masaje-piedras",
    slug: "masaje-piedras",
    name: "Masaje con Piedras",
    category: "masaje",
    durationMinutes: 90,
    price: 135,
    active: true,
    image: images.treatmentMaterial,
    shortDescription:
      "Calor sostenido y presión amplia para músculos que no sueltan con un masaje breve.",
    description:
      "Piedras cálidas y manos. El calor permite llegar a capas que, en frío, se defienden. Es un masaje envolvente, indicado cuando el cansancio es profundo y no solo muscular.",
    benefits: [
      "Calor que relaja sin forzar",
      "Mejor movilidad de hombros y espalda",
      "Sensación de cuerpo habitable otra vez",
      "Un sueño más continuo esa noche",
    ],
    whatToExpect: [
      "Preparación de la camilla y las piedras",
      "Masaje de cuerpo completo con calor",
      "Atención a la temperatura en todo momento",
      "Cierre suave, sin cambios bruscos",
    ],
    recommendedFrequency:
      "Una vez al mes, o en periodos de sobrecarga física.",
  },
  {
    id: "ritual-de-calma",
    slug: "ritual-de-calma",
    name: "Ritual de Calma",
    category: "bienestar",
    durationMinutes: 75,
    price: 125,
    active: true,
    image: images.treatmentCalm,
    shortDescription:
      "Respiración, masaje de cuero cabelludo y cuerpo para bajar el ruido interno.",
    description:
      "Un ritual híbrido: no es un facial ni un masaje convencional. Combinamos trabajo de cuero cabelludo, nuca, manos y pies con pausas guiadas de respiración. Para días en los que el cansancio es más mental que muscular.",
    benefits: [
      "Baja la hiperactivación",
      "Cuello y mandíbula más sueltos",
      "Sensación de espacio interior",
      "Un corte limpio entre el fuera y el estudio",
    ],
    whatToExpect: [
      "Llegada sin ficha interminable",
      "Trabajo de cuero cabelludo y nuca",
      "Masaje distante, de baja intensidad",
      "Silencio si lo prefieres; pocas palabras si no",
    ],
    recommendedFrequency:
      "Cuando el ritmo se acelera. También como primera visita si no sabes por dónde empezar.",
  },
  {
    id: "contorno-de-ojos",
    slug: "contorno-de-ojos",
    name: "Contorno de Ojos",
    category: "facial",
    durationMinutes: 45,
    price: 75,
    active: true,
    image: images.treatmentDetail01,
    shortDescription:
      "Un trabajo preciso de mirada: hinchazón, fatiga y piel fina del contorno.",
    description:
      "Sesión corta y muy específica. Drenaje suave, presión en puntos de fatiga y texturas pensadas para la piel más fina del rostro. Encaja bien antes de un evento o como añadido a un facial.",
    benefits: [
      "Mirada menos cansada",
      "Menos sensación de hinchazón",
      "Piel del contorno más confortable",
      "Acabado limpio, sin efecto máscara",
    ],
    whatToExpect: [
      "Limpieza de la zona",
      "Drenaje y masaje del contorno",
      "Activos específicos",
      "Protección final",
    ],
    recommendedFrequency:
      "Cada tres semanas, o puntual cuando la mirada se ve especialmente cansada.",
  },
  {
    id: "exfoliacion-corporal",
    slug: "exfoliacion-corporal",
    name: "Exfoliación Corporal",
    category: "corporal",
    durationMinutes: 60,
    price: 90,
    active: true,
    image: images.treatmentTexture,
    shortDescription:
      "Una sesión para renovar la piel del cuerpo y dejarla lista para hidratarse de verdad.",
    description:
      "Exfoliación de cuerpo completo, con atención a codos, rodillas y zonas que suelen quedar fuera de la ducha rápida. Cierra con un aceite o bálsamo según la estación.",
    benefits: [
      "Piel más lisa al tacto",
      "Mejor resultado de cualquier hidratación posterior",
      "Sensación de cuerpo cuidado, no improvisado",
      "Un buen preludio del Ritual Corporal",
    ],
    whatToExpect: [
      "Preparación de la piel",
      "Exfoliación en seco o húmedo según el caso",
      "Ducha breve en el estudio",
      "Nutrición final",
    ],
    recommendedFrequency:
      "Cada cuatro semanas, o antes de un ritual corporal más largo.",
  },
];
