import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hero-section">
          <h1>Guia de League of Legends</h1>
          <p>
            Benvingut a la guia definitiva per a principiants de League of
            Legends. Aprèn els fonaments del joc més popular del món.
          </p>
          <a href="/champions" className="btn">
            Començar Ara
          </a>
        </div>

        <div className="grid">
          <div className="card">
            <h2>Què és League of Legends?</h2>
            <p>
              League of Legends (LoL) és un joc multijugador en línia de batalla
              (MOBA) desenvolupat per Riot Games. Dos equips de cinc jugadors
              competeixen per a destruir l'estructura enemiga anomenada "Nexo"
              mentre defensen la seva pròpia.
            </p>
            <p>
              Cada jugador controla un "champion" amb habilitats úniques i
              treballa en equip per a aconseguir la victòria a través
              d'estratègia, habilitat i coordinació.
            </p>
          </div>

          <div className="card">
            <h2>Objectius Bàsics</h2>
            <h3>Objectiu Principal:</h3>
            <p>Destruir el Nexus enemic situat en la seva base.</p>

            <h3>Objectius Secundaris:</h3>
            <p>• Destruir torretes enemigues per a avançar</p>
            <p>• Eliminar campions enemics</p>
            <p>• Aconseguir or i experiència</p>
            <p>• Controlar objectius neutrals (Drac, Baró)</p>
            <p>• Farmejar minions per a obtenir recursos</p>
          </div>

          <div className="card">
            <h2>Els 5 Rols Principals</h2>
            <h3>Top Lane (Línia Superior):</h3>
            <p>Jugador solitari, generalment tancs o lluitadors resistents.</p>

            <h3>Jungle (Jungla):</h3>
            <p>
              Es mou pel mapa eliminant monstres neutrals i ajudant als carrils.
            </p>

            <h3>Mid Lane (Línia Mitjana):</h3>
            <p>Generalment mags o assassins amb alt mal.</p>

            <h3>ADC (Bot Lane):</h3>
            <p>Tirador que causa mal constantment a distància.</p>

            <h3>Support (Suport):</h3>
            <p>
              Protegeix i ajuda al ADC, proporciona visió i utilitat a tot
              l'equip.
            </p>
          </div>

          <div className="card">
            <h2>Conceptes Fonamentals</h2>
            <h3>Last Hit (Últim Cop):</h3>
            <p>Donar el cop final als minions per a obtenir or.</p>

            <h3>Visió:</h3>
            <p>Usar wards per a revelar àrees del mapa i evitar emboscades.</p>

            <h3>Ganking:</h3>
            <p>Sorprendre l'enemic amb ajuda d'altres jugadors.</p>

            <h3>Farming:</h3>
            <p>
              Eliminar minions i monstres neutrals per a obtenir or i
              experiència.
            </p>

            <h3>Teamfight:</h3>
            <p>Combats grupals entre tots dos equips complets.</p>
          </div>

          <div className="card">
            <h2>Tips per a Principiants</h2>
            <p>
              • <strong>Comença amb campions simples:</strong> Annie, Garen,
              Ashe, Leona, Master Yi són perfectes per a aprendre.
            </p>
            <p>
              • <strong>Practica el last hit:</strong> És la base per a obtenir
              or eficientment.
            </p>
            <p>
              • <strong>Mantingues la visió:</strong> Utilitza wards
              constantment.
            </p>
            <p>
              • <strong>Estigues a prop de l'equip:</strong> No vagis sol pel
              mapa.
            </p>
            <p>
              • <strong>Aprèn dels teus errors:</strong> Cada mort és una
              oportunitat d'aprendre, som humans i ens equivoquem molt.
            </p>
            <p>
              • <strong>Estudia el mapa:</strong> Coneix les rutes i objectius
              importants, moure's pel mapa en el moment ideal marca molt la
              diferència entre jugadors bons i jugadors dolents.
            </p>
          </div>

          <div className="card">
            <h2>Recursos Recomanats</h2>
            <p>
              • <strong>Mode Tutorial:</strong> Completa tots els tutorials del
              joc.
            </p>
            <p>
              • <strong>Mode Pràctica:</strong> Usa l'eina de pràctica per a
              millorar mecàniques i aprendre a utilitzar-los.
            </p>
            <p>
              • <strong>ARAM:</strong> Mode casual per a aprendre diferents
              campions.
            </p>
            <p>
              • <strong>Guies en línia:</strong> Lee guies específiques de
              campions i rols ideal per a personatges més complexos i aprendre
              els seus combos, com Lee Sin o Irelia.
            </p>
            <p>
              • <strong>Streams i vídeos:</strong> Observa a jugadors
              professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
