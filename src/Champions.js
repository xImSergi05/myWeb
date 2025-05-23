import React from "react";

function Champions() {
  const champions = [
    {
      name: "Garen",
      role: "Top Lane",
      difficulty: "Fácil",
      description:
        "Un guerrero resistente perfecto para principiantes. Sus habilidades son simples pero efectivas.",
      tips: "Usa Q para silenciar enemigos, W para defenderte, E para hacer daño en área y R para ejecutar enemigos con poca vida.",
    },
    {
      name: "Annie",
      role: "Mid Lane",
      difficulty: "Fácil",
      description:
        "Una maga con mecánicas simples pero muy efectiva. Su oso Tibbers puede cambiar el rumbo de las peleas.",
      tips: "Acumula tu pasiva para aturdir, usa Q para farmear y mantener maná, y guarda tu combo QWR+Tibbers para eliminar enemigos.",
    },
    {
      name: "Ashe",
      role: "ADC",
      difficulty: "Fácil",
      description:
        "Una tiradora con excelente utilidad para el equipo. Su ultimate puede iniciar peleas desde muy lejos.",
      tips: "Mantén distancia, usa W para pokear y farmaer, activa Q cuando tengas varios ataques acumulados, y usa R para iniciar peleas.",
    },
    {
      name: "Soraka",
      role: "Support",
      difficulty: "Fácil",
      description:
        "Una sanadora que puede mantener vivo a todo su equipo. Excelente para aprender el rol de apoyo.",
      tips: "Usa Q para hacer daño y curarte, W para curar aliados, E para silenciar enemigos, y R para curar a todo el equipo.",
    },
    {
      name: "Warwick",
      role: "Jungle",
      difficulty: "Fácil",
      description:
        "Un licántropo que es perfecto para aprender la jungla. Tiene sustain natural y ganks efectivos.",
      tips: "Sigue el rastro de sangre hacia enemigos con poca vida, usa Q para curarte, W para rastrear, y R para hacer ganks.",
    },
    {
      name: "Darius",
      role: "Top Lane",
      difficulty: "Medio",
      description:
        "Un ejecutor que se vuelve más fuerte con cada eliminación. Domina la línea superior con su presencia intimidante.",
      tips: "Acumula 5 stacks de sangrado con ataques básicos y W, luego usa R para ejecutar. E para atraer enemigos.",
    },
  ];

  const roles = [
    {
      name: "Top Lane (Línea Superior)",
      description:
        "Es una línea larga y solitaria donde suelen jugar campeones resistentes como tanques, luchadores y algunos magos. Es importante controlar las oleadas de minions y tener buena visión del río.",
      champions: "Garen, Darius, Malphite, Nasus, Teemo",
      playstyle: "Juego individual, enfoque en farmeo y duelos 1v1",
    },
    {
      name: "Jungle (Jungla)",
      description:
        "El jugador que no tiene línea fija y se mueve por el mapa eliminando monstruos neutrales. Su trabajo es ayudar a todas las líneas y controlar objetivos como Dragón y Barón Nashor.",
      champions: "Warwick, Amumu, Master Yi, Graves, Kha'Zix",
      playstyle: "Rotaciones por el mapa, ganks, control de objetivos",
    },
    {
      name: "Mid Lane (Línea Media)",
      description:
        "La línea más corta del mapa, generalmente ocupada por magos o asesinos. Tiene fácil acceso a ambos lados del mapa y suele ser el carry principal del equipo.",
      champions: "Annie, Ahri, Zed, Yasuo, Orianna",
      playstyle: "Alto daño, movilidad, influencia en todo el mapa",
    },
    {
      name: "ADC (Attack Damage Carry)",
      description:
        "El tirador del equipo, generalmente ubicado en la línea inferior. Su trabajo es hacer daño constante a distancia, especialmente en las peleas de equipo tardías.",
      champions: "Ashe, Jinx, Caitlyn, Ezreal, Vayne",
      playstyle: "Daño sostenido a distancia, posicionamiento crítico",
    },
    {
      name: "Support (Apoyo)",
      description:
        "Acompaña al ADC en la línea inferior. Su trabajo es proteger al carry, proporcionar visión con wards, y dar utilidad al equipo con curaciones, escudos o iniciación.",
      champions: "Soraka, Thresh, Leona, Janna, Blitzcrank",
      playstyle: "Utilidad, protección, visión, iniciación de peleas",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Campeones & Roles</h1>

      <div className="card">
        <h2>Campeones Recomendados para Principiantes</h2>
        <p>
          Estos campeones son perfectos para comenzar porque tienen mecánicas
          simples pero efectivas. Te permitirán aprender los fundamentos del
          juego sin preocuparte por combos complicados.
        </p>
      </div>

      <div className="grid">
        {champions.map((champion, index) => (
          <div key={index} className="card">
            <h2>{champion.name}</h2>
            <h3>Rol: {champion.role}</h3>
            <p>
              <strong>Dificultad:</strong> {champion.difficulty}
            </p>
            <p>{champion.description}</p>
            <p>
              <strong>Tips:</strong> {champion.tips}
            </p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Los 5 Roles Explicados</h2>
        <p>
          En League of Legends cada jugador tiene un rol específico con
          responsabilidades únicas. Entender estos roles es fundamental para
          jugar efectivamente en equipo.
        </p>
      </div>

      {roles.map((role, index) => (
        <div key={index} className="card">
          <h2>{role.name}</h2>
          <p>{role.description}</p>
          <p>
            <strong>Campeones típicos:</strong> {role.champions}
          </p>
          <p>
            <strong>Estilo de juego:</strong> {role.playstyle}
          </p>
        </div>
      ))}

      <div className="card">
        <h2>¿Cómo Elegir tu Rol Principal?</h2>
        <p>
          • <strong>¿Te gusta liderar peleas?</strong> Prueba Top Lane o Support
          tanque
        </p>
        <p>
          • <strong>¿Prefieres hacer mucho daño?</strong> Mid Lane o ADC son
          para ti
        </p>
        <p>
          • <strong>¿Te gusta ayudar al equipo?</strong> Support o Jungle pueden
          gustarte
        </p>
        <p>
          • <strong>¿Disfrutas la estrategia?</strong> Jungle requiere mucha
          planificación
        </p>
        <p>
          • <strong>¿Quieres responsabilidad?</strong> ADC y Mid suelen ser los
          carries principales
        </p>

        <p style={{ marginTop: "1.5rem" }}>
          <strong>Consejo:</strong> Prueba todos los roles en partidas contra IA
          o ARAM antes de decidir cuál es tu favorito. Muchos jugadores cambian
          de rol principal según van ganando experiencia.
        </p>
      </div>
    </div>
  );
}

export default Champions;
