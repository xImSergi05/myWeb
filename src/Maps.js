import React from "react";

function Maps() {
  const objectives = [
    {
      name: "Drac Elemental",
      timing: "A partir del minut 5",
      reward: "Millores permanents per a tot l'equip",
      strategy:
        "Controla la visió del riu inferior i coordina amb el teu equip per aconseguir-lo.",
      types: [
        "Drac Infernal: +8% AD i AP",
        "Drac de Muntanya: +6% Armadura i RM",
        "Drac Oceànic: +2.5% vida perduda cada 5s",
        "Drac dels Núvols: +3.5% velocitat de moviment",
        "Drac tecnoquímic: +6% de tenacitat i 6% de curació i escuts",
        "Drac hextec: 5 de velocitat d'habilitat i 5% de velocitat d'atac",
      ],
    },
    {
      name: "Larves del Buit",
      timing: "Minuts 8-14",
      reward: "Invocació que pot destruir torres",
      strategy:
        "Utilitza'les per prendre les torres dels carrils i obrir el mapa.",
    },
    {
      name: "Herald del Buit",
      timing: "Minuts 20-25",
      reward: "Invocació que pot destruir torres",
      strategy:
        "Utilitza'l per prendre la torre del carril central i obrir el mapa.",
    },
    {
      name: "Baró Nashor",
      timing: "A partir del minut 25",
      reward: "Millora que enforteix els minions i atorga estadístiques",
      strategy:
        "L'objectiu més important del joc avançat. Permet acabar partides.",
    },
    {
      name: "Drac Ancestre",
      timing: "Després d'aconseguir ànima de drac més o menys minut 40",
      reward: "Millora temporal molt poderosa qu executa els enemics",
      strategy:
        "Generalment decideix el resultat de la partida en el late game.",
    },
  ];

  const torres = [
    {
      name: "Torres Exteriors",
      gold: "650 or",
      importance: "Primeres torres a destruir, donen avantatge d'or inicial",
    },
    {
      name: "Torres Interiors",
      gold: "750 or",
      importance: "Proporcionen control del mapa i accés a la jungla enemiga",
    },
    {
      name: "Torres d'Inhibidor",
      gold: "750 or",
      importance:
        "Destruir l'hinibidor que tenen activa super minions en aquest carril, en cas de tombar els de cada linia n'apereixeran 2 per cada carril",
    },
    {
      name: "Torres del Nexus",
      gold: "50 or",
      importance:
        "Últimes defenses abans del Nexe, cal destruir-les per guanyar, aquestes son les unique que poden reconstruir",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Mapes & Objectius</h1>

      <div className="card">
        <h2>L'Esquerda de l'Invocador</h2>
        <p>
          L'Esquerda de l'Invocador és el mapa principal de League of Legends.
          És un mapa simètric amb tres carrils (línies) connectats per una
          jungla plena de monstres neutrals i objectius importants.
        </p>
        <h3>Estructura del Mapa:</h3>
        <p>
          • <strong>Tres Línies:</strong> Superior (Top), Mitjana (Mid) i
          Inferior (Bot)
        </p>
        <p>
          • <strong>Jungla:</strong> Àrea entre les línies amb monstres neutrals
        </p>
        <p>
          • <strong>Riu:</strong> Divideix el mapa horitzontalment, conté
          objectius importants
        </p>
        <p>
          • <strong>Bases:</strong> Cada equip té una base amb el Nexus en
          extrems oposats
        </p>
      </div>
      <div className="card">
        <h2>Sistema d'Objectius Neutrals</h2>
        <p>
          Els objectius neutrals són monstres especials que donen beneficis
          significatius a l'equip que els derrota. Controlar aquests objectius
          és clau per obtenir avantatge i guanyar partides.
        </p>
      </div>

      <div className="grid">
        {objectives.map((objective, index) => (
          <div key={index} className="card">
            <h2>{objective.name}</h2>
            <p>
              <strong>Moment:</strong> {objective.timing}
            </p>
            <p>
              <strong>Recompensa:</strong> {objective.reward}
            </p>
            <p>
              <strong>Estratègia:</strong> {objective.strategy}
            </p>
            {objective.types && (
              <div>
                <h3>Tipus de Drac:</h3>
                {objective.types.map((type, i) => (
                  <p key={i}>• {type}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Sistema de Torres</h2>
        <p>
          Les torres són estructures defensives que protegeixen cada carril.
          Destruir-les és essencial per avançar cap a la base enemiga i
          proporciona or significatiu per al teu equip.
        </p>
      </div>

      <div className="grid">
        {torres.map((torre, index) => (
          <div key={index} className="card">
            <h2>{torre.name}</h2>
            <p>
              <strong>Or per equip:</strong> {torre.gold}
            </p>
            <p>
              <strong>Importància:</strong> {torre.importance}
            </p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Monstres de la Jungla</h2>
        <h3>Camps de Monstres:</h3>
        <p>
          • <strong>Krug:</strong> Camp de golems, dóna or i experiència
        </p>
        <p>
          • <strong>Gromp:</strong> Granota gegant, relativament fàcil de matar
        </p>
        <p>
          • <strong>Llops:</strong> Manada de tres llops
        </p>
        <p>
          • <strong>Picuxills:</strong> Grup d'aus, molts enemics petits
        </p>
        <p>
          • <strong>Buffs Blau i Vermell:</strong> Atorguen beneficis especials
        </p>

        <h3>Buffs Importants:</h3>
        <p>
          • <strong>Buff Blau:</strong> Reducció del temps de reutilització i
          regeneració de manà
        </p>
        <p>
          • <strong>Buff Vermell:</strong> Dany extra en forma creamdures i una
          mica de regeneració de vida
        </p>
      </div>

      <div className="card">
        <h2>Control de Visió</h2>
        <p>
          La visió és un dels aspectes més importants però subestimats del joc.
          Controlar la visió et permet moure't amb seguretat pel mapa i
          sorprendre els enemics.
        </p>

        <h3>Tipus de Wards:</h3>
        <p>
          • <strong>Ward Invisible:</strong> Dura 90-180 segons allà on el
          coloquis
        </p>
        <p>
          • <strong>Ward de Control:</strong> Visible però més durador ja que té
          4 punts de vida, revela wards enemics
        </p>
        <p>
          • <strong>Ward Farsight:</strong> Té un punt de vida peró permet ser
          colocat des de molta distància, per´o te un rang de visió menor
        </p>

        <h3>Llocs Clau per Guardar Visió:</h3>
        <p>• Arbusts del riu prop del Drac i del Baró</p>
        <p>• Entrades a la teva jungla</p>
        <p>• Arbusts en els carrils per detectar ganks</p>
        <p>• Jungla enemiga quan tinguis avantatge</p>
      </div>

      <div className="card">
        <h2>Estrategies de Control del Mapa</h2>
        <h3>Early Game (0-15 minuts):</h3>
        <p>• Centra't en farmejar i guanyar la teva línia</p>
        <p>• Ajuda el teu jungler amb els primers objectius</p>
        <p>• Posa wards als arbusts del riu</p>
        <p>• Pren les torres exteriors quan sigui segur</p>

        <h3>Mid Game (15-25 minuts):</h3>
        <p>• Agrupa't amb el teu equip per prendre objectius</p>
        <p>• Controla la visió al voltant del Drac i el Baró</p>
        <p>• Pressiona diferents carrils per dividir l'enemic</p>
        <p>• Busca picks (eliminacions individuals) en enemics sols</p>

        <h3>Late Game (25+ minuts):</h3>
        <p>• Mantén-te agrupat amb el teu equip</p>
        <p>• El Baró i el Drac Ancestral són prioritats màximes</p>
        <p>• Una teamfight guanyada pot decidir la partida</p>
        <p>• Sigues pacient, espera el moment perfecte per actuar</p>
      </div>

      <div className="card">
        <h2>Consells Importants pel Mapa</h2>
        <p>
          • <strong>Mai vagis sol pel mapa sense visió</strong> - És la forma
          més ràpida de morir
        </p>
        <p>
          • <strong>Fes ping als objectius importants</strong> - Comunica't amb
          el teu equip sobre quan fer el Drac o el Baró
        </p>
        <p>
          • <strong>Respecta els timings</strong> - Coneix quan apareixen els
          objectius així pots controlar quan backejar i anar amb tota la vida i
          mana a les teamfights
        </p>
        <p>
          • <strong>La visió guanya partides</strong> - Compra wards, encara que
          no siguis support
        </p>
        <p>
          • <strong>Controla les onades de minions</strong> - Els minions poden
          guanyar carrils per tu
        </p>
        <p>
          • <strong>El posicionament és clau</strong> - Mantén-te en llocs
          segurs durant les teamfights
        </p>
      </div>
    </div>
  );
}

export default Maps;
