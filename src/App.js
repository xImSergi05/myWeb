import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hero-section">
          <h1>Guía de League of Legends</h1>
          <p>
            Bienvenido a la guía definitiva para principiantes de League of
            Legends. Aprende los fundamentos del juego más popular del mundo.
          </p>
          <a href="/champions" className="btn">
            Comenzar Ahora
          </a>
        </div>

        <div className="grid">
          <div className="card">
            <h2>¿Qué es League of Legends?</h2>
            <p>
              League of Legends (LoL) es un juego multijugador online de arena
              de batalla (MOBA) desarrollado por Riot Games. Dos equipos de
              cinco jugadores compiten para destruir la estructura enemiga
              llamada "Nexus" mientras defienden la suya propia.
            </p>
            <p>
              Cada jugador controla un "campeón" con habilidades únicas y
              trabaja en equipo para lograr la victoria a través de estrategia,
              habilidad y coordinación.
            </p>
          </div>

          <div className="card">
            <h2>Objetivos Básicos</h2>
            <h3>Objetivo Principal:</h3>
            <p>Destruir el Nexus enemigo ubicado en su base.</p>

            <h3>Objetivos Secundarios:</h3>
            <p>• Destruir torretas enemigas para avanzar</p>
            <p>• Eliminar campeones enemigos</p>
            <p>• Conseguir oro y experiencia</p>
            <p>• Controlar objetivos neutrales (Dragón, Barón)</p>
            <p>• Farmear minions para obtener recursos</p>
          </div>

          <div className="card">
            <h2>Los 5 Roles Principales</h2>
            <h3>Top Lane (Línea Superior):</h3>
            <p>
              Jugador solitario, generalmente tanques o luchadores resistentes.
            </p>

            <h3>Jungle (Jungla):</h3>
            <p>
              Se mueve por el mapa eliminando monstruos neutrales y ayudando a
              los carriles.
            </p>

            <h3>Mid Lane (Línea Media):</h3>
            <p>Generalmente magos o asesinos con alto daño.</p>

            <h3>ADC (Bot Lane):</h3>
            <p>Tirador que causa daño sostenido a distancia.</p>

            <h3>Support (Apoyo):</h3>
            <p>
              Protege y ayuda al ADC, proporciona visión y utilidad al equipo.
            </p>
          </div>

          <div className="card">
            <h2>Conceptos Fundamentales</h2>
            <h3>Last Hit (Último Golpe):</h3>
            <p>Dar el golpe final a los minions para obtener oro.</p>

            <h3>Visión:</h3>
            <p>Usar wards para revelar áreas del mapa y evitar emboscadas.</p>

            <h3>Ganking:</h3>
            <p>Sorprender al enemigo con ayuda de otros jugadores.</p>

            <h3>Farming:</h3>
            <p>
              Eliminar minions y monstruos neutrales para obtener oro y
              experiencia.
            </p>

            <h3>Teamfight:</h3>
            <p>Combates grupales entre ambos equipos completos.</p>
          </div>

          <div className="card">
            <h2>Tips para Principiantes</h2>
            <p>
              • <strong>Empieza con campeones simples:</strong> Annie, Garen,
              Ashe son perfectos para aprender.
            </p>
            <p>
              • <strong>Practica el last hit:</strong> Es la base para obtener
              oro eficientemente.
            </p>
            <p>
              • <strong>Mantén la visión:</strong> Compra wards y úsalos
              constantemente.
            </p>
            <p>
              • <strong>Mantente cerca del equipo:</strong> No vayas solo por el
              mapa.
            </p>
            <p>
              • <strong>Aprende de tus errores:</strong> Cada muerte es una
              oportunidad de aprender.
            </p>
            <p>
              • <strong>Estudia el mapa:</strong> Conoce las rutas y objetivos
              importantes.
            </p>
          </div>

          <div className="card">
            <h2>Recursos Recomendados</h2>
            <p>
              • <strong>Modo Tutorial:</strong> Completa todos los tutoriales
              del juego.
            </p>
            <p>
              • <strong>Modo Práctica:</strong> Usa la herramienta de práctica
              para mejorar mecánicas.
            </p>
            <p>
              • <strong>ARAM:</strong> Modo casual para aprender diferentes
              campeones.
            </p>
            <p>
              • <strong>Guías online:</strong> Lee guías específicas de
              campeones y roles.
            </p>
            <p>
              • <strong>Streams y videos:</strong> Observa a jugadores
              profesionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
