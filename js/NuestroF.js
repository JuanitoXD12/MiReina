const messages = [
  "Día 1: Quiero despertar cada día agradecido/a por tenerte en mi vida",
  "Día 2: Sueño con crear un hogar lleno de risas y amor contigo",
  "Día 3: Deseo aprender algo nuevo juntos cada día",
  "Día 4: Mi mayor deseo es que cada momento a tu lado sea inolvidable",
  "Día 5: Quiero compartir contigo todos mis sueños y construir juntos los nuestros",
  "Día 6: Mi corazón late más fuerte cada vez que te veo sonreír",
  "Día 7: Juntos podemos alcanzar cualquier meta que nos propongamos",
  "Día 8: Estoy emocionado/a por todos los recuerdos que vamos a crear juntos",
  "Día 9: A tu lado, cada día tiene un significado más profundo",
  "Día 10: Sueño con los viajes que haremos juntos a lugares desconocidos",
  "Día 11: Quiero ser tu apoyo en todo momento, en los buenos y en los malos",
  "Día 12: Cada abrazo tuyo me recuerda lo afortunado/a que soy de tenerte en mi vida",
  "Día 13: Mi amor por ti crece más cada día",
  "Día 14: Me llena de felicidad pensar en la vida que construiremos juntos",
  "Día 15: Prometo cuidarte y protegerte siempre",
  "Día 16: Quiero ser tu refugio en cada tormenta",
  "Día 17: Cada día contigo es un regalo que aprecio profundamente",
  "Día 18: Me encanta saber que tenemos un futuro lleno de sueños compartidos",
  "Día 19: Juntos podemos enfrentar todo lo que la vida nos depare",
  "Día 20: Mi vida es más colorida desde que llegaste a ella",
  "Día 21: Quiero ser tu compañero/a en todas las etapas de la vida",
  "Día 22: Cada día a tu lado es una nueva aventura",
  "Día 23: Juntos superaremos cualquier obstáculo que se cruce en nuestro camino",
  "Día 24: Te prometo serte fiel en cuerpo, mente y corazón",
  "Día 25: Me emociona pensar en los hijos que podamos tener algún día",
  "Día 26: Imagina lo que vamos a lograr juntos, no hay límites para nosotros",
  "Día 27: Quiero compartir contigo cada detalle de mi vida, y escuchar los tuyos",
  "Día 28: Gracias por hacer que mi vida sea tan especial, mi amor",
  "Día 29: Nuestro amor es el mejor equipo, y juntos no hay nada que no podamos hacer",
  "Día 30: Estoy emocionado/a por la vida que estamos creando juntos, llena de amor y respeto",
  "Día 31: A tu lado, todo es más fácil y hermoso",
  "Día 32: Mi mayor meta es hacerte feliz todos los días de nuestra vida juntos",
  "Día 33: Te prometo que siempre te escucharé con el corazón abierto",
  "Día 34: Juntos vamos a construir un legado de amor y alegría",
  "Día 35: Quiero seguir aprendiendo y creciendo a tu lado",
  "Día 36: Me encanta pensar en todas las etapas que vamos a vivir juntos, desde ahora hasta siempre",
  "Día 37: Mi amor por ti no tiene fin, siempre crecerá más y más",
  "Día 38: Cada día me haces más feliz, y espero devolverte todo ese amor y alegría",
  "Día 39: Quiero envejecer a tu lado, compartiendo cada experiencia y cada recuerdo",
  "Día 40: Juntos somos imparables, no hay sueño que no podamos alcanzar",
  "Día 41: No hay nada que me haga más feliz que verte feliz a ti",
  "Día 42: Quiero ser tu mejor amigo/a, tu confidente y tu compañero/a de vida",
  "Día 43: A tu lado, mi mundo tiene un propósito más grande y hermoso",
  "Día 44: Me emociono solo de pensar en lo que vamos a lograr juntos en el futuro",
  "Día 45: Quiero pasar el resto de mis días mostrándote lo mucho que te amo",
  "Día 46: Sueño con los días tranquilos en los que simplemente disfrutemos el uno del otro",
  "Día 47: Mi amor por ti es más grande de lo que las palabras pueden expresar",
  "Día 48: Juntos seremos una familia llena de amor y apoyo mutuo",
  "Día 49: Cada paso que damos juntos me acerca más al futuro que soñamos",
  "Día 50: Quiero que nuestro amor sea un ejemplo para todos los que nos rodean",
  "Día 51: Me haces sentir completo/a, y eso es un regalo que atesoro todos los días",
  "Día 52: Quiero seguir construyendo contigo una vida llena de logros, risas y cariño",
  "Día 53: No hay nada que desee más que verte cumplir tus sueños, y estar allí para celebrarlos contigo",
  "Día 54: Mi vida a tu lado es más brillante que cualquier estrella",
  "Día 55: Te amo profundamente, y cada día quiero demostrártelo de nuevas maneras",
  "Día 56: Juntos vamos a crear una vida llena de aventuras, risas y momentos especiales",
  "Día 57: Estoy agradecido/a por cada momento que compartimos, cada día es único",
  "Día 58: Mi objetivo en la vida es verte feliz y en paz, y a tu lado, yo también soy feliz",
  "Día 59: Sueño con un hogar lleno de amor, comprensión y complicidad",
  "Día 60: Cada uno de nuestros días juntos será una bendición que atesoraré siempre",
  "Día 61: Nuestro amor es mi mayor tesoro, y lo cuidaré con todo mi ser",
  "Día 62: Envejecer a tu lado será mi mayor aventura y mi mayor logro",
  "Día 63: Juntos, somos más fuertes y mejores que si estuviéramos solos",
  "Día 64: El amor que tenemos me inspira a ser una mejor persona cada día",
  "Día 65: Me haces querer ser la mejor versión de mí mismo/a",
  "Día 66: Estoy ansioso/a por todo lo que vamos a vivir juntos en los próximos años",
  "Día 67: Mi mayor sueño es hacerte feliz todos los días, en todas las formas posibles",
  "Día 68: Quiero que cada día a tu lado sea un recordatorio de lo afortunados/as que somos de tenernos",
  "Día 69: Nuestro amor es un regalo, y lo cuidaré con todo mi corazón",
  "Día 70: A tu lado, todo tiene sentido, y todo se vuelve más hermoso",
  "Día 71: Estoy deseando que cada sueño que tenemos se haga realidad, juntos",
  "Día 72: Nada me haría más feliz que pasar el resto de mi vida contigo",
  "Día 73: Gracias por ser mi amor, mi compañero/a, y mi todo",
  "Día 74: Quiero hacer de nuestra vida juntos una historia llena de felicidad y amor",
  "Día 75: A tu lado, cada desafío se convierte en una oportunidad para crecer juntos",
  "Día 76: Eres mi razón de ser, y me siento afortunado/a de caminar por esta vida a tu lado",
  "Día 77: Siempre te amaré, hoy y siempre",
  "Día 78: Quiero que nuestra relación siga siendo un lugar seguro de amor, respeto y apoyo",
  "Día 79: Mi meta es que cada día contigo sea mejor que el anterior",
  "Día 80: No hay mayor felicidad que saber que tengo a alguien como tú a mi lado",
  "Día 81: Juntos, podemos hacer realidad cualquier sueño que tengamos",
  "Día 82: Estoy emocionado/a por las etapas que aún nos esperan, de la mano, siempre",
  "Día 83: Quiero que sigamos creando recuerdos felices y memorables, siempre juntos",
  "Día 84: Nuestro amor es infinito y único, y siempre lo protegeré",
  "Día 85: Prometo seguir cuidando nuestra relación, para que siempre sea nuestra mayor prioridad",
  "Día 86: Mi mayor alegría es compartir mi vida contigo, ahora y siempre",
  "Día 87: Juntos, somos invencibles, y no hay nada que no podamos lograr",
  "Día 88: No importa lo que venga, siempre estaré a tu lado, apoyándote",
  "Día 89: A tu lado, mi vida tiene todo el sentido y la belleza que siempre soñé",
  "Día 90: Quiero ser el mejor/a compañero/a que puedas tener, cada día de nuestras vidas",
  "Día 91: No puedo esperar para seguir construyendo el futuro juntos",
  "Día 92: Cada día contigo es un regalo que atesoro más que cualquier otra cosa",
  "Día 93: El futuro que soñamos está más cerca de lo que imaginamos, y lo alcanzaremos juntos",
  "Día 94: A tu lado, cada día se convierte en una nueva oportunidad para ser felices",
  "Día 95: Gracias por ser mi fuente de alegría, fuerza y amor",
  "Día 96: A tu lado, cada sueño se vuelve posible",
  "Día 97: Siempre estaré contigo, en las buenas y en las malas",
  "Día 98: Mi corazón late por ti, y siempre lo hará",
  "Día 99: Prometo amarte, respetarte y cuidarte todos los días de mi vida",
  "Día 100: Mi meta en la vida es que tú siempre sepas lo importante que eres para mí",
  "Día 101: No puedo imaginarme mi vida sin ti, y no quiero hacerlo",
  "Día 102: Quiero que sigamos creciendo juntos, en cada aspecto de nuestras vidas",
  "Día 103: La vida a tu lado es todo lo que siempre soñé, y más",
  "Día 104: Hoy y siempre, te amaré con todo mi ser",
  "Día 105: Juntos, somos más felices y más fuertes que nunca",
  "Día 106: Cada día contigo es una bendición, y quiero seguir agradeciéndolo siempre",
  "Día 107: Gracias por ser mi amor, mi compañero/a y mi mejor amigo/a",
  "Día 108: Estoy emocionado/a por el futuro que estamos construyendo juntos",
  "Día 109: Quiero ser tu apoyo en todo lo que necesites, siempre",
  "Día 110: Juntos, cualquier sueño es posible",
  "Día 111: Siempre buscaré formas de hacerte sonreír, cada día de nuestras vidas",
  "Día 112: Me encanta saber que compartimos los mismos sueños y metas",
  "Día 113: Contigo, cada desafío se convierte en una oportunidad para crecer",
  "Día 114: Quiero envejecer contigo, rodeado/a de amor y gratitud",
  "Día 115: A tu lado, la vida se siente más llena de sentido y propósito",
  "Día 116: Juntos construiremos una vida llena de momentos felices y memorables",
  "Día 117: Prometo apoyarte incondicionalmente en cada paso que des",
  "Día 118: Mi amor por ti no tiene fin, siempre se renueva y crece",
  "Día 119: Quiero que cada día sea una nueva oportunidad para seguir aprendiendo juntos",
  "Día 120: A tu lado, soy una mejor persona, y siempre lo seré",
  "Día 121: Estoy emocionado/a por las nuevas experiencias que viviremos juntos",
  "Día 122: Mi mayor meta es verte feliz, y ser tu fuente de alegría",
  "Día 123: Me siento afortunado/a de tenerte a mi lado, y no dejaré de agradecerlo nunca",
  "Día 124: Te prometo que siempre estaré aquí, en los días buenos y en los difíciles",
  "Día 125: No hay nada que desee más que construir un futuro lleno de amor y respeto contigo",
  "Día 126: Siempre serás mi prioridad, hoy y siempre",
  "Día 127: A tu lado, cada día se vuelve más hermoso y significativo",
  "Día 128: Quiero ser tu apoyo constante, y que siempre puedas contar conmigo",
  "Día 129: Gracias por enseñarme lo que significa el verdadero amor, lo valoro profundamente",
  "Día 130: Cada día contigo es una bendición que atesoro más que las palabras pueden expresar",
  "Día 131: Contigo, todo es más fácil, más hermoso y más lleno de sentido",
  "Día 132: Mi mayor sueño es vivir una vida plena y feliz a tu lado",
  "Día 133: Quiero hacer realidad cada uno de nuestros sueños juntos, sin importar lo grandes que sean",
  "Día 134: A tu lado, he encontrado mi lugar en el mundo",
  "Día 135: No importa lo que pase, siempre estaré a tu lado, apoyándote en todo",
  "Día 136: Quiero ser parte de cada capítulo de tu vida, de principio a fin",
  "Día 137: Nuestro amor es una fuerza que me inspira a seguir adelante, siempre",
  "Día 138: Estoy agradecido/a por cada día que compartimos juntos, cada uno es un regalo",
  "Día 139: Juntos, somos invencibles, y no hay obstáculo que no podamos superar",
  "Día 140: Quiero que cada día sea una nueva oportunidad para amarte aún más",
  "Día 141: Te amo con todo mi ser, y siempre lo haré",
  "Día 142: Estoy emocionado/a por lo que el futuro tiene preparado para nosotros",
  "Día 143: Cada día que pasa, me doy cuenta de lo afortunado/a que soy de tenerte en mi vida",
  "Día 144: Nuestro amor es lo más hermoso que me ha pasado, y lo seguiré cuidando siempre",
  "Día 145: Te prometo ser tu compañero/a de vida, siempre",
  "Día 146: Juntos vamos a construir una vida llena de risas, amor y éxito",
  "Día 147: Gracias por hacerme sentir tan amado/a, mi corazón es solo tuyo",
  "Día 148: Quiero que sepas que siempre estaré aquí para ti, en cada paso de nuestro camino",
  "Día 149: Estoy listo/a para seguir viviendo esta aventura contigo, de la mano",
  "Día 150: Mi mayor meta es verte alcanzar todos tus sueños, y apoyarte en cada uno",
  "Día 151: A tu lado, todo tiene sentido, y siempre será así",
  "Día 152: Quiero que cada día sea una nueva oportunidad para fortalecer nuestro amor",
  "Día 153: Me haces sentir que soy la persona más afortunada del mundo",
  "Día 154: Con cada gesto, me haces enamorarme más de ti",
  "Día 155: Lo que más deseo es que sigamos creciendo juntos como pareja y como individuos",
  "Día 156: Me emociona pensar en el futuro que vamos a construir, lleno de amor y aventuras",
  "Día 157: A tu lado, la vida tiene un propósito claro y hermoso",
  "Día 158: Quiero que nuestra vida juntos sea un reflejo del amor que compartimos",
  "Día 159: Gracias por ser mi compañero/a de vida, me haces sentir completo/a",
  "Día 160: Siempre te amaré, y no hay nada que me haga más feliz que estar contigo",
  "Día 161: Juntos somos imparables, y no hay sueño que no podamos alcanzar",
  "Día 162: Mi vida es mejor contigo, y siempre será así",
  "Día 163: Juntos, podemos lograr lo que sea, siempre y cuando estemos juntos",
  "Día 164: A tu lado, la vida se vuelve más luminosa y llena de magia",
  "Día 165: Mi mayor deseo es seguir compartiendo cada momento contigo, ahora y siempre",
  "Día 166: Quiero que sepas que siempre estaré aquí para ti, en cada paso de la vida",
  "Día 167: Gracias por ser mi fuente de alegría, amor y esperanza",
  "Día 168: No importa lo que pase, siempre estaremos juntos, superando todo lo que venga",
  "Día 169: Mi amor por ti crece más cada día, y nunca dejaré de amarte",
  "Día 170: Juntos vamos a lograr todo lo que nos propongamos, porque el amor nos hace fuertes",
  "Día 171: A tu lado, todo es mejor, todo es más hermoso",
  "Día 172: Siempre recordaré este amor que compartimos, como el regalo más hermoso de mi vida",
  "Día 173: Quiero que nuestra vida juntos sea una historia llena de amor, risas y aprendizajes",
  "Día 174: Cada día contigo es una nueva bendición que quiero aprovechar al máximo",
  "Día 175: Mi mayor meta es que seas feliz, siempre, en cada momento de tu vida",
  "Día 176: No hay nada que desee más que seguir caminando a tu lado, hoy y siempre",
  "Día 177: A tu lado, todo es posible, y no hay nada que no podamos conseguir",
  "Día 178: Gracias por hacer que mi vida sea tan increíblemente hermosa",
  "Día 179: Quiero que cada día a tu lado sea una celebración de nuestro amor",
  "Día 180: Con cada paso que damos, nos acercamos más a la vida que siempre soñamos",
  "Día 181: Prometo siempre ser tu mejor amigo/a, tu compañero/a y tu amor",
  "Día 182: Mi mayor deseo es que cada día juntos sea tan feliz como el primero",
  "Día 183: A tu lado, me siento invencible, como si pudiéramos con todo",
  "Día 184: Quiero ser el mejor/a compañero/a para ti, siempre",
  "Día 185: Me haces sentir la persona más amada y afortunada del mundo",
  "Día 186: A tu lado, todo lo que soñamos se hace realidad",
  "Día 187: Estoy listo/a para enfrentar el futuro contigo, sabiendo que juntos podemos todo",
  "Día 188: Gracias por ser mi todo, por amarme como soy y hacerme sentir especial",
  "Día 189: Quiero que cada día que compartimos esté lleno de amor, felicidad y complicidad",
  "Día 190: Cada paso que damos juntos me hace sentir más seguro/a de lo que tenemos",
  "Día 191: Quiero que siempre nos apoyemos mutuamente, sin importar lo que venga",
  "Día 192: No puedo esperar para pasar el resto de mi vida contigo",
  "Día 193: Mi amor por ti es más grande que cualquier desafío, siempre te amaré",
  "Día 194: Quiero seguir compartiendo mis sueños contigo, porque sé que los nuestros se hacen realidad juntos",
  "Día 195: Gracias por ser mi compañero/a, mi mejor amigo/a y mi amor eterno",
  "Día 196: A tu lado, todo tiene un sentido perfecto, y todo parece posible",
  "Día 197: Cada día contigo es una nueva oportunidad para ser felices juntos",
  "Día 198: Mi mayor deseo es hacerte feliz, hoy y siempre",
  "Día 199: Quiero que nuestra vida sea un viaje lleno de amor, aprendizaje y aventuras",
  "Día 200: A tu lado, siempre me siento completo/a, y eso es un regalo invaluable",
  "Día 201: Juntos, podemos superar cualquier obstáculo, porque el amor nos une",
  "Día 202: Gracias por ser mi fuerza, mi esperanza y mi amor",
  "Día 203: Estoy agradecido/a por cada momento a tu lado, y por todos los momentos que nos esperan",
  "Día 204: Mi amor por ti es inmenso, y siempre será el centro de mi vida",
  "Día 205: Siempre te amaré con todo mi ser, hoy, mañana y siempre",
  "Día 206: A tu lado, me siento capaz de lograr cualquier cosa, porque somos un equipo perfecto",
  "Día 207: Quiero que nuestra historia de amor sea algo único e inolvidable",
  "Día 208: No puedo esperar a vivir todas las aventuras que aún nos esperan, juntos",
  "Día 209: Siempre estaré a tu lado, en cada paso que demos juntos",
  "Día 210: Gracias por ser mi todo, por amarme y apoyarme en cada momento",
  "Día 211: Juntos vamos a escribir nuestra propia historia, llena de amor y felicidad",
  "Día 212: A tu lado, todo es más hermoso y más significativo",
  "Día 213: Me haces sentir más feliz y más completo/a con cada día que pasa",
  "Día 214: Estoy emocionado/a por lo que el futuro nos depara, porque sé que lo viviremos juntos",
  "Día 215: Quiero que cada día sea una celebración de nuestro amor, de nuestra vida juntos",
  "Día 216: A tu lado, soy la mejor versión de mí mismo/a, y seguiré creciendo contigo",
  "Día 217: Gracias por ser mi compañero/a de vida, siempre estaré agradecido/a por ti",
  "Día 218: Estoy ansioso/a por los años que nos esperan, llenos de amor y felicidad",
  "Día 219: No hay nada más hermoso que construir una vida juntos, paso a paso",
  "Día 220: Quiero que sigamos aprendiendo, creciendo y viviendo juntos, siempre",
  "Día 221: Mi vida tiene más sentido porque te tengo a ti a mi lado",
  "Día 222: Siempre estaré aquí para ti, para apoyarte y amarte en cada momento",
  "Día 223: Juntos podemos lograr lo que sea, no hay sueños imposibles para nosotros",
  "Día 224: Gracias por ser mi fuerza, mi inspiración y mi mayor amor",
  "Día 225: A tu lado, cada día se vuelve más especial, más lleno de vida",
  "Día 226: Te amo profundamente, y seguiré amándote cada día más",
  "Día 227: Siempre estaré agradecido/a por el amor que compartimos",
  "Día 228: No importa lo que venga, siempre estaremos juntos, y eso es lo más importante",
  "Día 229: A tu lado, todo lo que soñamos se vuelve realidad",
  "Día 230: Gracias por ser mi compañero/a de vida, te amo más de lo que las palabras pueden expresar",
  "Día 231: Quiero que sigamos construyendo un futuro lleno de amor, aprendizaje y risas",
  "Día 232: Juntos, somos imparables, y no hay sueño que no podamos alcanzar",
  "Día 233: Mi amor por ti es inquebrantable, y siempre te estaré agradecido/a por estar a mi lado",
  "Día 234: A tu lado, todo parece posible, y cada día se vuelve más hermoso",
  "Día 235: Gracias por ser mi razón para sonreír todos los días",
  "Día 236: Juntos, cada día será una nueva aventura llena de amor y complicidad",
  "Día 237: Siempre estaré aquí, para apoyarte, cuidarte y amarte",
  "Día 238: A tu lado, me siento completo/a, y eso es lo que más valoro",
  "Día 239: Quiero pasar el resto de mi vida contigo, compartiendo cada momento",
  "Día 240: No hay mayor felicidad que vivir la vida a tu lado",
  "Día 241: Gracias por hacerme sentir tan amado/a y valioso/a",
  "Día 242: Te amo más cada día, y no hay nada que cambie eso",
  "Día 243: A tu lado, todo tiene sentido y se vuelve más hermoso",
  "Día 244: Quiero que cada día sea una oportunidad para seguir creciendo juntos",
  "Día 245: Juntos, podemos lograr cualquier cosa que nos propongamos, sin límites",
  "Día 246: Siempre serás mi gran amor, mi compañero/a y mi mejor amigo/a",
  "Día 247: A tu lado, soy la mejor versión de mí mismo/a",
  "Día 248: Gracias por ser mi fuente de alegría y fuerza",
  "Día 249: Siempre estaré a tu lado, en cada paso de la vida",
  "Día 250: Mi vida tiene más sentido porque te tengo a ti a mi lado",
  "Día 251: Quiero pasar el resto de mis días contigo, haciendo realidad nuestros sueños",
  "Día 252: Me emociona pensar en todo lo que aún nos queda por vivir juntos",
  "Día 253: Te amo con todo mi ser, y siempre lo haré",
  "Día 254: A tu lado, la vida es más hermosa de lo que jamás imaginé",
  "Día 255: Gracias por amarme y apoyarme en cada paso de nuestra vida juntos",
  "Día 256: Juntos, no hay límites para lo que podemos lograr",
  "Día 257: Cada día a tu lado es un regalo que atesoro profundamente",
  "Día 258: Quiero que cada día sea una nueva oportunidad para amarte más",
  "Día 259: A tu lado, todo parece posible y perfecto",
  "Día 260: Gracias por ser mi apoyo incondicional, te amo profundamente",
  "Día 261: Quiero que cada día esté lleno de amor, comprensión y crecimiento",
  "Día 262: A tu lado, no hay desafío que no podamos superar",
  "Día 263: Gracias por ser mi razón de ser, por darme el amor más puro y verdadero",
  "Día 264: Mi vida es mejor contigo, y seguiré agradecido/a por cada momento juntos",
  "Día 265: Quiero seguir compartiendo mis sueños contigo, hoy y siempre",
  "Día 266: Juntos, podemos enfrentar cualquier adversidad y salir más fuertes",
  "Día 267: Te amo más de lo que las palabras pueden expresar, y siempre lo haré",
  "Día 268: Siempre estaré aquí para ti, en cada momento de nuestra vida juntos",
  "Día 269: No hay nada que desee más que ser feliz a tu lado, siempre",
  "Día 270: A tu lado, todo es más brillante, más hermoso y más significativo",
  "Día 271: Te prometo que siempre te amaré y cuidaré con todo mi corazón",
  "Día 272: A tu lado, me siento capaz de lograr cualquier cosa, juntos podemos todo",
  "Día 273: Gracias por ser mi mayor bendición, por amarme como soy",
  "Día 274: Quiero pasar el resto de mi vida contigo, compartiendo cada día de amor y alegría",
  "Día 275: A tu lado, todo tiene un propósito claro y hermoso",
  "Día 276: Mi vida tiene sentido porque te tengo a ti a mi lado",
  "Día 277: Siempre estaré agradecido/a por el amor que compartimos y lo que hemos construido",
  "Día 278: Gracias por ser mi compañero/a, mi apoyo y mi mayor amor",
  "Día 279: Quiero seguir creciendo juntos, como pareja y como individuos",
  "Día 280: A tu lado, la vida es más llena de amor, risas y alegría",
  "Día 281: Gracias por amarme, por ser mi fuerza y mi razón de ser",
  "Día 282: Siempre estaré a tu lado, porque tú eres mi hogar y mi amor eterno",
  "Día 283: A tu lado, cada día se convierte en una nueva oportunidad para ser felices",
  "Día 284: Te amo más de lo que las palabras pueden expresar, y cada día más",
  "Día 285: Siempre buscaré formas de hacerte feliz y verte sonreír",
  "Día 286: Quiero que nuestra historia de amor continúe siendo tan especial como siempre",
  "Día 287: Estoy emocionado/a por todos los momentos que aún nos esperan juntos",
  "Día 288: A tu lado, todo se vuelve más claro, más hermoso y lleno de propósito",
  "Día 289: Mi amor por ti es eterno, y siempre lo será",
  "Día 290: A tu lado, me siento el ser más afortunado/a del mundo",
  "Día 291: Gracias por ser mi luz, mi amor y mi todo",
  "Día 292: Estoy ansioso/a por lo que el futuro nos tiene preparado, porque sé que lo viviremos juntos",
  "Día 293: No hay límites para lo que podemos lograr, siempre y cuando estemos juntos",
  "Día 294: A tu lado, cada día se vuelve más especial, más lleno de amor y magia",
  "Día 295: Gracias por hacerme sentir tan amado/a y valioso/a todos los días",
  "Día 296: Juntos, somos imparables, y nada nos detendrá",
  "Día 297: Mi vida es mucho mejor gracias a ti, y no hay nada que desee más que seguir a tu lado",
  "Día 298: Siempre estaré aquí para ti, para apoyarte en cada paso de la vida",
  "Día 299: Te amo profundamente, y siempre serás mi mayor amor",
  "Día 300: Quiero seguir creando recuerdos contigo, y hacer de nuestra vida un viaje lleno de amor",
  "Día 301: A tu lado, cada día es un nuevo capítulo lleno de amor y felicidad",
  "Día 302: Gracias por ser mi compañera/o, mi amor y mi mejor amiga/o",
  "Día 303: Quiero que sigamos aprendiendo y creciendo juntos, cada día más",
  "Día 304: A tu lado, todo tiene un propósito claro y lleno de amor",
  "Día 305: Mi amor por ti no tiene fin, siempre crecerá más y más",
  "Día 306: Gracias por ser mi mayor bendición, y por amarme incondicionalmente",
  "Día 307: Quiero que cada día sea una nueva oportunidad para seguir fortaleciéndonos como pareja",
  "Día 308: A tu lado, la vida se llena de sentido y de amor cada día",
  "Día 309: Siempre estaré agradecido/a por el amor que compartimos, es lo más hermoso que tengo",
  "Día 310: Quiero que sigamos soñando juntos y haciendo de nuestros sueños una realidad",
  "Día 311: A tu lado, cada día se vuelve más hermoso, más lleno de amor y alegría",
  "Día 312: Gracias por ser mi razón para sonreír cada día, te amo profundamente",
  "Día 313: Juntos podemos construir todo lo que soñamos, no hay límites para nosotros",
  "Día 314: Siempre serás mi gran amor, mi compañero/a y mi mejor amigo/a",
  "Día 315: A tu lado, me siento capaz de lograr cualquier cosa, porque somos un equipo perfecto",
  "Día 316: Gracias por ser mi fuerza, mi inspiración y mi mayor amor",
  "Día 317: Siempre estaré a tu lado, en cada paso de la vida",
  "Día 318: Mi vida tiene más sentido porque te tengo a ti a mi lado",
  "Día 319: Quiero pasar el resto de mis días contigo, compartiendo cada momento",
  "Día 320: No hay mayor felicidad que vivir la vida a tu lado",
  "Día 321: Gracias por hacerme sentir tan amado/a y valioso/a",
  "Día 322: Te amo más cada día, y no hay nada que cambie eso",
  "Día 323: A tu lado, todo tiene sentido y se vuelve más hermoso",
  "Día 324: Quiero que cada día sea una oportunidad para seguir creciendo juntos",
  "Día 325: Juntos, podemos lograr cualquier cosa que nos propongamos, sin límites",
  "Día 326: Siempre serás mi gran amor, mi compañero/a y mi mejor amigo/a",
  "Día 327: A tu lado, soy la mejor versión de mí mismo/a",
  "Día 328: Gracias por ser mi fuente de alegría y fuerza",
  "Día 329: Siempre estaré a tu lado, en cada paso de la vida",
  "Día 330: Mi vida tiene más sentido porque te tengo a ti a mi lado",
  "Día 331: Quiero pasar el resto de mis días contigo, compartiendo cada momento",
  "Día 332: No hay mayor felicidad que vivir la vida a tu lado",
  "Día 333: Gracias por hacerme sentir tan amado/a y valioso/a",
  "Día 334: Te amo más cada día, y no hay nada que cambie eso",
  "Día 335: A tu lado, todo tiene sentido y se vuelve más hermoso",
  "Día 336: Quiero que cada día sea una oportunidad para seguir creciendo juntos",
  "Día 337: Juntos, podemos lograr cualquier cosa que nos propongamos, sin límites",
  "Día 338: Siempre serás mi gran amor, mi compañero/a y mi mejor amigo/a",
  "Día 339: A tu lado, soy la mejor versión de mí mismo/a",
  "Día 340: Gracias por ser mi fuente de alegría y fuerza",
  "Día 341: Siempre estaré a tu lado, en cada paso de la vida",
  "Día 342: Mi vida tiene más sentido porque te tengo a ti a mi lado",
  "Día 343: Quiero pasar el resto de mis días contigo, compartiendo cada momento",
  "Día 344: No hay mayor felicidad que vivir la vida a tu lado",
  "Día 345: Gracias por hacerme sentir tan amado/a y valioso/a",
  "Día 346: Te amo más cada día, y no hay nada que cambie eso",
  "Día 347: A tu lado, todo tiene sentido y se vuelve más hermoso",
  "Día 348: Quiero que cada día sea una oportunidad para seguir creciendo juntos",
  "Día 349: Juntos, podemos lograr cualquier cosa que nos propongamos, sin límites",
  "Día 350: Siempre serás mi gran amor, mi compañero/a y mi mejor amigo/a",
  "Día 351: A tu lado, soy la mejor versión de mí mismo/a",
  "Día 352: Gracias por ser mi fuente de alegría y fuerza",
  "Día 353: Siempre estaré a tu lado, en cada paso de la vida",
  "Día 354: Mi vida tiene más sentido porque te tengo a ti a mi lado",
  "Día 355: Quiero pasar el resto de mis días contigo, compartiendo cada momento",
  "Día 356: No hay mayor felicidad que vivir la vida a tu lado",
  "Día 357: Gracias por hacerme sentir tan amado/a y valioso/a",
  "Día 358: Te amo más cada día, y no hay nada que cambie eso",
  "Día 359: A tu lado, todo tiene sentido y se vuelve más hermoso",
  "Día 360: Quiero que cada día sea una oportunidad para seguir creciendo juntos",
  "Día 361: Juntos, podemos lograr cualquier cosa que nos propongamos, sin límites",
  "Día 362: Siempre serás mi gran amor, mi compañero/a y mi mejor amigo/a",
  "Día 363: Quiero envejecer a tu lado, tomados de la mano",
  "Día 364: Sueño con un futuro brillante junto a ti",
  "Día 365: Nuestro amor es mi mayor aventura",
];

const heart = document.querySelector(".heart");
const countdownDisplay = document.querySelector(".countdown");
const messageDisplay = document.querySelector(".message");

// Obtener o inicializar el día actual desde localStorage
let currentDay = parseInt(localStorage.getItem("currentDay")) || 1;
let lastMessageDate = localStorage.getItem("lastMessageDate");

// Función para verificar si ha pasado un día
function hasOneDayPassed() {
  const currentDate = new Date().toDateString();

  if (lastMessageDate !== currentDate) {
    localStorage.setItem("lastMessageDate", currentDate);
    return true;
  }

  return false;
}

function showDailyMessage() {
  if (hasOneDayPassed() && currentDay <= 365) {
    messageDisplay.style.display = "block";
    messageDisplay.textContent = messages[currentDay - 1];

    // Incrementar el día y guardar en localStorage
    currentDay++;
    localStorage.setItem("currentDay", currentDay);

    // Crear efecto de partículas
    createParticles();

    setTimeout(() => {
      messageDisplay.style.display = "none";
    }, 10000);
  }
}

function updateCountdown() {
  const daysLeft = 365 - currentDay + 1;

  if (daysLeft <= 0) {
    countdownDisplay.innerHTML = "¡365 días de amor cumplidos!";
    heart.classList.add("enabled");
    return;
  }

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const difference = tomorrow - today;

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownDisplay.innerHTML = `
        <div>Día ${currentDay} de 365</div>
        <div>Próximo mensaje en:</div>
        <div>${hours}h ${minutes}m ${seconds}s</div>
    `;
}

function createBackgroundElements() {
  createClouds();
  createBackgroundHearts();
  createStars();
}

// Crear nubes
function createClouds() {
  for (let i = 0; i < 5; i++) {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    cloud.style.width = `${Math.random() * 100 + 100}px`;
    cloud.style.height = `${Math.random() * 30 + 30}px`;
    cloud.style.top = `${Math.random() * 50}%`;
    cloud.style.animationDuration = `${Math.random() * 10 + 20}s`;
    cloud.style.opacity = `${Math.random() * 0.3 + 0.6}`;
    document.body.appendChild(cloud);
  }
}

// Crear corazones de fondo
function createBackgroundHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "background-heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 4}s`;
    heart.style.opacity = `${Math.random() * 0.3 + 0.1}`;
    document.body.appendChild(heart);
  }
}

// Crear estrellas
function createStars() {
  const starsContainer = document.querySelector(".stars");
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    star.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    starsContainer.appendChild(star);
  }
}

// Crear efecto de partículas
function createParticles() {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("div");
    particle.className = "heart-particle";
    heart.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Evento click del corazón
heart.addEventListener("click", () => {
  if (
    !messageDisplay.style.display ||
    messageDisplay.style.display === "none"
  ) {
    showDailyMessage();
  }
});

// Inicialización
function init() {
  createBackgroundElements();
  showDailyMessage(); // Mostrar mensaje si es un nuevo día
  setInterval(updateCountdown, 1000);

  // Recrear nubes periódicamente
  setInterval(() => {
    const clouds = document.querySelectorAll(".cloud");
    clouds.forEach((cloud) => cloud.remove());
    createClouds();
  }, 40000);
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", init);
