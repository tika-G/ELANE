import type { Article } from "@/lib/types";
import { images } from "@/lib/images";

export const articles: Article[] = [
  {
    id: "el-arte-de-dedicarte-tiempo",
    slug: "el-arte-de-dedicarte-tiempo",
    title: "El arte de dedicarte tiempo",
    date: "2026-04-12",
    image: images.journal01,
    excerpt:
      "Cuidarse no es un premio al final de la lista. Es una forma de estar en el propio cuerpo, también entre semana.",
    body: [
      "Hay una idea persistente: que el tiempo para una misma llega cuando todo lo demás está resuelto. En un estudio como ÉLANE vemos lo contrario. El cuerpo no espera a que la agenda se vacíe. Se manifiesta antes: en la mandíbula, en el sueño, en una piel que ya no responde igual.",
      "Dedicarte tiempo no exige un relato extraordinario. Puede ser setenta y cinco minutos en silencio, sin convertir la visita en un acontecimiento. Un masaje, un facial, un ritual de calma. Lo importante no es el nombre del tratamiento; es que el corte exista.",
      "En Barcelona el ritmo lo pone la ciudad. Nosotros ponemos la sala, la luz y las manos. El resto —el permiso— lo traes tú.",
    ],
  },
  {
    id: "una-nueva-forma-de-entender-el-bienestar",
    slug: "una-nueva-forma-de-entender-el-bienestar",
    title: "Una nueva forma de entender el bienestar",
    date: "2026-05-03",
    image: images.journal02,
    excerpt:
      "El bienestar no es una promesa de transformación. Es un criterio: menos ruido, más precisión, ningún espectáculo.",
    body: [
      "Bienestar se ha convertido en una palabra demasiado ancha. En ÉLANE la reducimos a algo concreto: un espacio donde no se improvisan gestos ni se venden milagros. La piel cambia despacio. El sistema nervioso también.",
      "Por eso los tratamientos tienen duración real, precios claros y una conversación breve al llegar. No hay un itinerario de «antes y después» colgado en la pared. Hay una profesional que trabaja con lo que hay ese día.",
      "Entender el bienestar así —sin cifras infladas ni rituales de escaparate— permite volver. Y volver es, casi siempre, la única medida que importa.",
    ],
  },
  {
    id: "rituales-que-empiezan-en-ti",
    slug: "rituales-que-empiezan-en-ti",
    title: "Rituales que empiezan en ti",
    date: "2026-06-18",
    image: images.journal03,
    excerpt:
      "Un ritual no empieza en la camilla. Empieza cuando decides que hoy el cuidado no se pospone.",
    body: [
      "Llamamos ritual a una secuencia con sentido: llegar, desvestir el día, dejarse trabajar, salir distinto. No es una coreografía. Es una forma de ordenar un rato que, de otro modo, se diluye entre recados.",
      "En el estudio proponemos cuatro caminos —facial, corporal, masaje, bienestar— y dentro de cada uno, variaciones. El Ritual Facial ÉLANE no es el mismo si vienes con la piel reactiva o si vienes a mantener. El masaje no es un menú cerrado.",
      "Lo que no cambia es el punto de partida: tú. Tu tiempo, tu umbral, lo que puedes sostener esa tarde. El resto se construye alrededor.",
    ],
  },
];
