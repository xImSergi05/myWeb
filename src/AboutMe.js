import React from "react";

function AboutMe() {
  return (
    <div className="container">
      <h1 className="page-title">About Me</h1>

      <div className="hero-section">
        <h1>¡Hola! Soy tu Guía de LoL</h1>
        <p>
          Bienvenido a mi guía personal de League of Legends. Aquí encontrarás
          mi experiencia y consejos para ayudarte en tu viaje en la Grieta del
          Invocador.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Mi Historia con League of Legends</h2>
          <p>
            Comencé a jugar League of Legends hace varios años como muchos
            jugadores: completamente perdido y sin entender nada del juego.
            Recuerdo mis primeras partidas alimentando al enemigo y sin saber
            qué hacer.
          </p>
          <p>
            Con el tiempo, dedicación y muchas horas de práctica, logré mejorar
            significativamente. He experimentado la frustración de estar
            atascado en rangos bajos y la satisfacción de finalmente subir y
            entender las mecánicas del juego.
          </p>
          <p>
            Ahora, después de miles de partidas y experiencia en todos los
            roles, quiero compartir todo lo que he aprendido para ayudar a otros
            jugadores a evitar los errores que yo cometí.
          </p>
        </div>

        <div className="card">
          <h2>¿Por qué creé esta Guía?</h2>
          <p>
            League of Legends puede ser increíblemente intimidante para nuevos
            jugadores. La curva de aprendizaje es empinada y la comunidad no
            siempre es amigable con los principiantes.
          </p>
          <p>
            Esta guía nació de mi deseo de crear un recurso completo pero
            accesible que cubra todos los aspectos fundamentales que necesita
            conocer un jugador nuevo, desde los conceptos más básicos hasta
            estrategias más avanzadas.
          </p>
          <p>
            Mi objetivo es que cualquier persona pueda leer esta guía y tener
            una base sólida para comenzar su aventura en League of Legends con
            confianza.
          </p>
        </div>

        <div className="card">
          <h2>Mi Experiencia y Logros</h2>
          <h3>Rango Actual:</h3>
          <p>He alcanzado el rango de Oro/Platino en múltiples temporadas</p>

          <h3>Roles Principales:</h3>
          <p>• Main Support: Especializado en champions utilitarios</p>
          <p>
            • Secondary ADC: Experiencia en carry a través de daño sostenido
          </p>
          <p>• Conocimiento general de todos los roles</p>

          <h3>Champions Favoritos:</h3>
          <p>• Thresh - El champion más versátil y divertido del juego</p>
          <p>• Jinx - Mi ADC favorito para carry partidas</p>
          <p>• Orianna - La maga perfecta para teamfights</p>

          <h3>Modalidades de Juego:</h3>
          <p>• Ranked Solo/Duo: Mi modalidad principal</p>
          <p>• ARAM: Para relajarse y probar builds experimentales</p>
          <p>• Normales: Para practicar nuevos champions y roles</p>
        </div>

        <div className="card">
          <h2>Mi Filosofía de Juego</h2>
          <p>
            Creo firmemente que League of Legends es un juego de equipo donde la
            actitud positiva y la comunicación son tan importantes como la
            habilidad mecánica.
          </p>

          <h3>Principios que Sigo:</h3>
          <p>
            • <strong>El respeto es fundamental:</strong> Todos estamos
            aprendiendo
          </p>
          <p>
            • <strong>Los errores son oportunidades:</strong> Cada muerte enseña
            algo nuevo
          </p>
          <p>
            • <strong>El conocimiento Mecánicas:</strong> Entender el juego es
            más importante que tener manos rápidas
          </p>
          <p>
            • <strong>La paciencia gana partidas:</strong> No todas las jugadas
            deben ser agresivas
          </p>
          <p>
            • <strong>El equipo siempre primero:</strong> Las estadísticas
            individuales no importan si pierdes
          </p>
        </div>

        <div className="card">
          <h2>Consejos que me Hubiera Gustado Conocer</h2>
          <p>
            Si pudiera volver al pasado y darle consejos a mi yo principiante,
            estos serían los puntos más importantes:
          </p>

          <p>
            • <strong>No te rindas después de malas partidas:</strong> Todos
            tienen días malos
          </p>
          <p>
            • <strong>Muteea a jugadores tóxicos inmediatamente:</strong> Tu
            salud mental es más importante
          </p>
          <p>
            • <strong>Aprende un rol a la vez:</strong> No trates de dominar
            todo simultáneamente
          </p>
          <p>
            • <strong>Mira tus propias replays:</strong> Es la forma más rápida
            de mejorar
          </p>
          <p>
            • <strong>Juega para aprender, no solo para ganar:</strong> Las
            victorias llegaran naturalmente
          </p>
          <p>
            • <strong>Encuentra amigos para jugar:</strong> El juego es más
            divertido en grupo
          </p>
        </div>

        <div className="card">
          <h2>Contacto y Recursos</h2>
          <p>
            Si tienes preguntas específicas sobre la guía o quieres sugerir
            mejoras, no dudes en contactarme. Siempre estoy dispuesto a ayudar a
            la comunidad de League of Legends.
          </p>

          <h3>Recursos Adicionales que Recomiendo:</h3>
          <p>
            • <strong>OP.GG:</strong> Para revisar estadísticas y builds
          </p>
          <p>
            • <strong>U.GG:</strong> Excelente para guías de champions
            actualizadas
          </p>
          <p>
            • <strong>ProBuilds:</strong> Para ver qué usan los profesionales
          </p>
          <p>
            • <strong>YouTube/Twitch:</strong> Contenido educativo de jugadores
            experimentados
          </p>
          <p>
            • <strong>Reddit r/leagueoflegends:</strong> Comunidad activa con
            mucho contenido
          </p>

          <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
            "El viaje de mil millas comienza con un solo paso. En League of
            Legends, cada partida es un paso hacia convertirte en un mejor
            jugador. ¡Disfruta el proceso y nos vemos en la Grieta!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
