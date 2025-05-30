import React from "react";

function Champions() {
  const champions = [
    {
      name: "Sett",
      role: "Top Lane",
      difficulty: "Sett",
      description:
        "Un lluitador resistent ideal per als principiants. Les seves habilitats són senzilles però efectives.",
      tips: "Utilitza la Q per augmentar el teu dany, la W per reduir el dany rebut amb un escut i seguidament fer moltíssim mal, la E per atordir enemics i la R per llançar-los i causar gran impacte.",
    },
    {
      name: "Fizz",
      role: "Mid Lane",
      difficulty: "Fàcil",
      description:
        "Un assassí màgic i àgil capaç d'esquivar atacs i eliminar enemics ràpidament amb la seva habilitat definitiva.",
      tips: "Utilitza la Q per desplaçar-te i fer dany, la E per evitar atacs i la R per iniciar o rematar enemics.",
    },
    {
      name: "Samira",
      role: "ADC",
      difficulty: "Difícil",
      description:
        "Una tiradora agressiva que destaca en el combat proper. La seva mobilitat li permet entrar i sortir de les batalles amb gran efectivitat.",
      tips: "Acumula el teu combo d'atacs, utilitza la W per bloquejar projectils, i la R per executar enemics quan el teu combo estigui al màxim.",
    },
    {
      name: "Leona",
      role: "Support",
      difficulty: "Fàcil",
      description:
        "Un suport resistent especialitzat en iniciar combats i protegir el seu equip.",
      tips: "Utilitza la Q per atordir enemics, la W per augmentar la teva resistència, la E per immobilitzar oponents i la R per iniciar batalles en equip.",
    },
    {
      name: "Kayn",
      role: "Jungle",
      difficulty: "Difícil",
      description:
        "Un jungler versàtil que pot adaptar el seu estil de joc entre assassí o guerrer.",
      tips: "Controla la teva transformació segons les necessitats de l'equip, utilitza la Q per moure't ràpid per la jungla i la R per esquivar i fer emboscades letals.",
    },
  ];

  const roles = [
    {
      name: "Top Lane (Carril Superior)",
      description:
        "És un carril llarg i solitari on solen jugar campions resistents com tancs, lluitadors i alguns mags. És important controlar les onades de minions i tenir bona visió del riu.",
      champions:
        "Garen, Darius, Malphite, Nasus, Teemo, Riven, Olaf, Gnar, Sett",
      playstyle: "Joc individual, enfocament en farm i duels 1v1",
    },
    {
      name: "Jungle (Jungla)",
      description:
        "El jugador que no té un carril fix i es mou pel mapa eliminant monstres neutrals. La seva tasca és ajudar totes les línies i controlar objectius com els Drac i el Baró Nashor.",
      champions:
        "Warwick, Amumu, Master Yi, Graves, Kha'Zix, Kayn, Nunu i Willump, Nidalee, Graves",
      playstyle: "Rotacions pel mapa, ganks, control d'objectius",
    },
    {
      name: "Mid Lane (Carril Central)",
      description:
        "El carril més curt del mapa, generalment ocupat per mags o assassins. Té fàcil accés a tots dos costats del mapa i sol ser el carry principal de l'equip.",
      champions:
        "Annie, Ahri, Zed, Yasuo, Orianna, Fizz, Akali, Katarina, Kassadin, Malzahar",
      playstyle: "Alt dany, mobilitat, influència en tot el mapa",
    },
    {
      name: "ADC (Attack Damage Carry)",
      description:
        "El tirador de l'equip, generalment ubicat al carril inferior. La seva tasca és fer dany constant a distància, especialment en les batalles d'equip tardanes.",
      champions:
        "Ashe, Jinx, Caitlyn, Ezreal, Vayne, Kai'sa, Xayah, Jhin, Aphelios",
      playstyle: "Dany constant a distància, posicionament crític",
    },
    {
      name: "Support (Suport)",
      description:
        "Acompanya l'ADC al carril inferior. La seva tasca és protegir el carry, proporcionar visió amb wards i donar utilitat a l'equip amb cures, escuts o iniciació.",
      champions:
        "Soraka, Thresh, Leona, Janna, Blitzcrank, Taric, Bardo, Nautilus, Seraphine, Lulu, Lux",
      playstyle:
        "Utilitat, protecció, visió, iniciació de batalles, hi ha molta varietat",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Campions & Rols</h1>

      <div className="card">
        <h2>Campions Recomanats per a Principiants</h2>
        <p>
          Aquests campions són perfectes per començar, ja que tenen mecàniques
          senzilles però efectives. Et permetran aprendre els fonaments del joc
          sense preocupar-te per combos complicats.
        </p>
      </div>

      <div className="grid">
        {champions.map((champion, index) => (
          <div key={index} className="card">
            <h2>{champion.name}</h2>
            <h3>Rol: {champion.role}</h3>
            <p>
              <strong>Dificultat:</strong> {champion.difficulty}
            </p>
            <p>{champion.description}</p>
            <p>
              <strong>Consells:</strong> {champion.tips}
            </p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Els 5 Rols Explicats</h2>
        <p>
          A League of Legends, cada jugador té un rol específic amb
          responsabilitats úniques. Entendre aquests rols és fonamental per
          jugar efectivament en equip.
        </p>
      </div>

      {roles.map((role, index) => (
        <div key={index} className="card">
          <h2>{role.name}</h2>
          <p>{role.description}</p>
          <p>
            <strong>Campions típics:</strong> {role.champions}
          </p>
          <p>
            <strong>Estil de joc:</strong> {role.playstyle}
          </p>
        </div>
      ))}

      <div className="card">
        <h2>Com Triar el teu Rol Principal?</h2>
        <p>
          • <strong>T'agrada liderar les batalles?</strong> Prova Top Lane o
          Support tanc
        </p>
        <p>
          • <strong>Prefereixes fer molt de dany?</strong> Mid Lane o ADC són
          per a tu
        </p>
        <p>
          • <strong>T'agrada ajudar l'equip?</strong> Support o Jungle et poden
          agradar
        </p>
        <p>
          • <strong>Gaudeixes la estratègia?</strong> Jungle requereix molta
          planificació
        </p>
        <p>
          • <strong>Vols responsabilitat?</strong> ADC i Mid solen ser els
          carries principals
        </p>

        <p style={{ marginTop: "1.5rem" }}>
          <strong>Consell:</strong> Prova tots els rols en partides contra IA o
          ARAM abans de decidir quin és el teu favorit. Molts jugadors canvien
          de rol principal a mesura que guanyen experiència.
        </p>
      </div>
    </div>
  );
}

export default Champions;
