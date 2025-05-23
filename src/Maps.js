import React from "react";

function Maps() {
  const objectives = [
    {
      name: "Dragón Elemental",
      timing: "A partir del minuto 5",
      reward: "Buffs permanentes para todo el equipo",
      strategy:
        "Controla la visión del río inferior y coordina con tu equipo para conseguirlo.",
      types: [
        "Dragón Infernal: +8% AD y AP",
        "Dragón de Montaña: +6% Armadura y RM",
        "Dragón Océano: +2.5% vida perdida cada 5s",
        "Dragón de las Nubes: +3.5% velocidad de movimiento",
      ],
    },
    {
      name: "Heraldo del Vacío",
      timing: "Minutos 8-14",
      reward: "Invocación que puede destruir torretas",
      strategy:
        "Úsalo para tomar la torreta de la línea media y abrir el mapa.",
    },
    {
      name: "Barón Nashor",
      timing: "A partir del minuto 20",
      reward: "Buff que fortalece minions y otorga estadísticas",
      strategy:
        "El objetivo más importante del juego tardío. Permite terminar partidas.",
    },
    {
      name: "Dragón Anciano",
      timing: "Después de 35 minutos o 4 dragones",
      reward: "Buff temporal muy poderoso",
      strategy:
        "Generalmente decide el resultado de la partida en el late game.",
    },
  ];

  const turrets = [
    {
      name: "Torretas Exteriores",
      gold: "650 oro",
      importance: "Primeras torretas a destruir, dan ventaja de oro temprana",
    },
    {
      name: "Torretas Interiores",
      gold: "750 oro",
      importance: "Proporcionan control del mapa y acceso a la jungla enemiga",
    },
    {
      name: "Torretas Inhibidoras",
      gold: "750 oro",
      importance: "Destruirlas activa super minions en esa línea",
    },
    {
      name: "Torretas del Nexus",
      gold: "50 oro",
      importance:
        "Últimas defensas antes del Nexus, deben destruirse para ganar",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Mapas & Objetivos</h1>

      <div className="card">
        <h2>La Grieta del Invocador</h2>
        <p>
          La Grieta del Invocador es el mapa principal de League of Legends. Es
          un mapa simétrico con tres carriles (líneas) conectados por una jungla
          llena de monstruos neutrales y objetivos importantes.
        </p>
        <h3>Estructura del Mapa:</h3>
        <p>
          • <strong>Tres Líneas:</strong> Superior (Top), Media (Mid) e Inferior
          (Bot)
        </p>
        <p>
          • <strong>Jungla:</strong> Área entre las líneas con monstruos
          neutrales
        </p>
        <p>
          • <strong>Río:</strong> Divide el mapa horizontalmente, contiene
          objetivos importantes
        </p>
        <p>
          • <strong>Bases:</strong> Cada equipo tiene una base con el Nexus en
          extremos opuestos
        </p>
      </div>

      <div className="card">
        <h2>Sistema de Objetivos Neutrales</h2>
        <p>
          Los objetivos neutrales son monstruos especiales que otorgan
          beneficios significativos al equipo que los derrota. Controlar estos
          objetivos es clave para obtener ventaja y ganar partidas.
        </p>
      </div>

      <div className="grid">
        {objectives.map((objective, index) => (
          <div key={index} className="card">
            <h2>{objective.name}</h2>
            <p>
              <strong>Timing:</strong> {objective.timing}
            </p>
            <p>
              <strong>Recompensa:</strong> {objective.reward}
            </p>
            <p>
              <strong>Estrategia:</strong> {objective.strategy}
            </p>
            {objective.types && (
              <div>
                <h3>Tipos de Dragón:</h3>
                {objective.types.map((type, i) => (
                  <p key={i}>• {type}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Sistema de Torretas</h2>
        <p>
          Las torretas son estructuras defensivas que protegen cada línea.
          Destruirlas es esencial para avanzar hacia la base enemiga y
          proporciona oro significativo para tu equipo.
        </p>
      </div>

      <div className="grid">
        {turrets.map((turret, index) => (
          <div key={index} className="card">
            <h2>{turret.name}</h2>
            <p>
              <strong>Oro por equipo:</strong> {turret.gold}
            </p>
            <p>
              <strong>Importancia:</strong> {turret.importance}
            </p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Monstruos de la Jungla</h2>
        <h3>Campos de Monstruos:</h3>
        <p>
          • <strong>Krug:</strong> Campo de golems, da oro y experiencia
        </p>
        <p>
          • <strong>Gromp:</strong> Rana gigante, relativamente fácil de matar
        </p>
        <p>
          • <strong>Lobos:</strong> Manada de tres lobos
        </p>
        <p>
          • <strong>Razorbeaks (Rapaces):</strong> Grupo de aves, muchos
          enemigos pequeños
        </p>
        <p>
          • <strong>Buffs Azul y Rojo:</strong> Otorgan beneficios especiales
        </p>

        <h3>Buffs Importantes:</h3>
        <p>
          • <strong>Buff Azul:</strong> Reducción de cooldowns y regeneración de
          maná
        </p>
        <p>
          • <strong>Buff Rojo:</strong> Daño extra y ralentización en ataques
          básicos
        </p>
      </div>

      <div className="card">
        <h2>Control de Visión</h2>
        <p>
          La visión es uno de los aspectos más importantes pero subestimados del
          juego. Controlar la visión te permite moverte seguro por el mapa y
          sorprender a tus enemigos.
        </p>

        <h3>Tipos de Wards:</h3>
        <p>
          • <strong>Ward Stealth:</strong> Invisible, dura 90-180 segundos según
          el tipo
        </p>
        <p>
          • <strong>Ward de Control:</strong> Visible pero más duradero, revela
          wards enemigos
        </p>
        <p>
          • <strong>Ward Trinket:</strong> Gratuito con cooldown, todos los
          jugadores lo tienen
        </p>

        <h3>Lugares Clave para Wardear:</h3>
        <p>• Arbustos del río cerca de Dragón y Barón</p>
        <p>• Entradas a tu jungla</p>
        <p>• Arbustos en las líneas para detectar ganks</p>
        <p>• Jungla enemiga cuando tengas ventaja</p>
      </div>

      <div className="card">
        <h2>Estrategias de Map Control</h2>
        <h3>Early Game (0-15 minutos):</h3>
        <p>• Enfócate en farmear y ganar tu línea</p>
        <p>• Ayuda a tu jungler con los primeros objetivos</p>
        <p>• Mantén wards en los arbustos del río</p>
        <p>• Toma las torretas exteriores cuando sea seguro</p>

        <h3>Mid Game (15-25 minutos):</h3>
        <p>• Agrúpate con tu equipo para tomar objetivos</p>
        <p>• Controla la visión alrededor de Dragón y Barón</p>
        <p>• Presiona diferentes líneas para dividir al enemigo</p>
        <p>• Busca picks (eliminaciones individuales) en enemigos solos</p>

        <h3>Late Game (25+ minutos):</h3>
        <p>• Mantente agrupado con tu equipo</p>
        <p>• Barón y Dragón Anciano son prioridades máximas</p>
        <p>• Una teamfight ganada puede decidir la partida</p>
        <p>• Sé paciente, espera el momento perfecto para actuar</p>
      </div>

      <div className="card">
        <h2>Tips Importantes para el Mapa</h2>
        <p>
          • <strong>Nunca vayas solo por el mapa sin visión</strong> - Es la
          forma más rápida de morir
        </p>
        <p>
          • <strong>Ping objetivos importantes</strong> - Comunica con tu equipo
          cuándo hacer Dragón o Barón
        </p>
        <p>
          • <strong>Respeta los timings</strong> - Conoce cuándo aparecen los
          objetivos
        </p>
        <p>
          • <strong>La visión gana partidas</strong> - Compra wards incluso si
          no eres support
        </p>
        <p>
          • <strong>Controla las oleadas de minions</strong> - Los minions
          pueden ganar líneas por ti
        </p>
        <p>
          • <strong>Posicionamiento es clave</strong> - Mantente en lugares
          seguros durante teamfights
        </p>
      </div>
    </div>
  );
}

export default Maps;
