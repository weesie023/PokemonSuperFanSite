// global variables that do important stuff
var stats = "";
function bulbEvolve() {
  let src = document.getElementById("bulby").getAttribute("src");
  let sound = document.getElementById("ivyCry");
  stats =
    "Species: Seed Pokémon, Bulbasaur is born with a plant seed on its back that grows by absorbing nutrients and sunlight. While young, it stores energy in the seed and can often be found basking in bright sunlight to help the bulb grow. As Bulbasaur’s body develops, the plant steadily enlarges until it is ready to evolve into Ivysaur.";
  if (src === "images/betterBulb.png") {
    document
      .getElementById("bulby")
      .setAttribute("src", "images/betterIvy.png");
    stats =
      "Species: Seed Pokémon, Ivysaur’s plant bulb has grown into a large bud that draws energy from the sun. As the bud becomes heavier, Ivysaur’s legs grow strong to support the added weight, giving it a sturdier, grounded stance. When the bud on its back is close to blooming, Ivysaur spends more time soaking in sunlight, preparing for its evolution into Venusaur.";
    sound.play();
  } else if (src === "images/betterIvy.png") {
    document
      .getElementById("bulby")
      .setAttribute("src", "images/betterVenus.png");
    stats =
      "Species: Seed Pokémon, Venusaur’s plant has fully bloomed into a large flower that releases a soothing fragrance capable of calming emotions and encouraging growth in surrounding plants. The flower absorbs large amounts of sunlight, which Venusaur converts into powerful energy for its attacks. During warm, sunny weather, the flower becomes more vibrant, and Venusaur’s strength reaches its peak.";
    sound.play();
  } else if (src === "images/betterVenus.png") {
    document
      .getElementById("bulby")
      .setAttribute("src", "images/betterBulb.png");
  }
  displayInfo();
}
function squirtEvolve() {
  let src = document.getElementById("squirty").getAttribute("src");
  let sound = document.getElementById("warCry");
  if (src === "images/betterSquirtle.png") {
    document
      .getElementById("squirty")
      .setAttribute("src", "images/betterWar.png");
    stats =
      "Species: Turtle Pokémon, Wartortle’s fluffy, wing-like tail and ear fins help it maneuver through water with impressive agility. Its tail is a symbol of longevity, often growing darker and more impressive with age. Known to be tougher and more battle-experienced than Squirtle, Wartortle stores air in its fur-lined tail to dive deep while maintaining perfect balance underwater. As it grows stronger, the fins and tail thicken in preparation for its evolution into Blastoise.";
    sound.play();
  } else if (src === "images/betterWar.png") {
    document
      .getElementById("squirty")
      .setAttribute("src", "images/betterBlast.png");
    stats =
      "Species: Shellfish Pokémon, Blastoise has a massive, durable shell equipped with powerful water cannons that can launch high-pressure jets capable of blasting through rock. It is highly defensive but also extremely strong, using its water attacks with precision both in battle and for protection. Blastoise can stay underwater for long periods, storing energy in its shell while waiting for the perfect moment to strike. Its strength and endurance make it a formidable Water-type Pokémon.";
    sound.play();
  } else if (src === "images/betterBlast.png") {
    document
      .getElementById("squirty")
      .setAttribute("src", "images/betterSquirtle.png");
    stats =
      "Species: Tiny Turtle Pokémon, Squirtle’s rounded shell is both a home and a powerful defense, allowing it to quickly withdraw to protect itself from danger. It swims with strong, paddling limbs, using its shell’s shape to reduce water resistance. When threatened, Squirtle can shoot powerful jets of water with great accuracy, earning it a reputation as a dependable and clever Water-type companion.";
  }
  displayInfo();
}
function charEvolve() {
  let src = document.getElementById("charr").getAttribute("src");
  let sound = document.getElementById("charCry");
  if (src === "images/betterCharr.png") {
    document
      .getElementById("charr")
      .setAttribute("src", "images/betterCharmeleo.png");
    stats =
      "Species: Flame Pokémon, Charmeleon’s fiery tail burns brighter as it grows stronger, reflecting its temper and battle readiness. Its muscular body allows it to move quickly and strike with agility, while flames on its tail and mouth intensify during combat. Charmeleon is aggressive and independent, constantly training and honing its strength in preparation for its evolution into the powerful Charizard.";
    sound.play();
  } else if (src === "images/betterCharmeleo.png") {
    document
      .getElementById("charr")
      .setAttribute("src", "images/betterCharizard.png");
    stats =
      "Species: Flame Pokémon, Charizard is a powerful, flying Fire-type Pokémon whose flames burn hotter when it is angry or excited. Its massive wings allow it to soar through the sky with incredible speed and agility, while its fire breath can incinerate almost anything. Charizard is fiercely independent and competitive, using its strength and aerial prowess to dominate opponents. Its fiery temperament and raw power make it a legendary force among Pokémon.";
    sound.play();
  } else if (src === "images/betterCharizard.png") {
    document
      .getElementById("charr")
      .setAttribute("src", "images/betterCharr.png");
    stats =
      "Species: Lizard Pokémon, Charmander has a flame burning at the tip of its tail that reflects its life force and health. It is a small, agile Fire-type Pokémon that uses its flame both to attack and to communicate its mood. Charmander is curious and energetic, often exploring its surroundings while building strength and stamina in preparation for evolving into Charmeleon.";
  }
  displayInfo();
}
function noop() {
  let sound = document.getElementById("pikaCry");
  sound.play();
  alert("you don't evolve pikachu, its just a thing.");
  stats =
    "Species: Mouse Pokémon, Pikachu stores electricity in its cheeks, releasing it in powerful electric attacks when threatened or excited. It is small, agile, and quick, often using its speed to outmaneuver opponents. Pikachu forms strong bonds with trainers and other Pokémon, and its cheerful, curious nature makes it both playful and loyal. Its electric abilities grow stronger as it gains experience in battles and adventures.";
  displayInfo();
}
function goatStatus() {
  let src = document.getElementById("PLEASE").getAttribute("src");
  let sound = document.getElementById("cutieCry");
  if (src === "images/betterFly.png") {
    document
      .getElementById("PLEASE")
      .setAttribute("src", "images/betterBombee.png");
    stats =
      "Species: Bee Fly Pokémon, Ribombee evolves from Cutiefly and is known for its swift, graceful flight. It carries pollen and nectar in its legs, which it can use to heal or energize allies. Ribombee is playful and agile, performing aerial maneuvers with precision while protecting flowers and fellow Pokémon. Its Fairy-type powers allow it to support others in battle or aid in pollination across the environment.";
    sound.play();
  } else if (src === "images/betterBombee.png") {
    document
      .getElementById("PLEASE")
      .setAttribute("src", "images/betterFly.png");
    stats =
      "Species: Bee Fly Pokémon, Cutiefly is a tiny, delicate Pokémon that feeds on the nectar of flowers. Its large eyes help it locate blossoms, and its small wings allow it to hover gracefully in the air. Cutiefly is curious and social, often interacting with other Pokémon and humans, spreading pollen as it goes. Despite its size, it can deliver surprisingly strong stings when defending itself.";
  }
  displayInfo();
}
function twigEvolve() {
  let src = document.getElementById("lilTwig").getAttribute("src");
  let sound = document.getElementById("tortleCry");
  if (src === "images/betterTwig.png") {
    document
      .getElementById("lilTwig")
      .setAttribute("src", "images/betterGrok.png");
    stats =
      "Species: Turtle Pokémon, Grotle evolves from Turtwig and carries a small forest of trees on its back, which it nourishes as it absorbs sunlight. Its sturdy legs and shell make it strong and well-protected, allowing it to travel long distances while grazing. Grotle often leaves trails of fertile soil behind, helping plants grow wherever it wanders, and it grows steadily in preparation for its evolution into Torterra.";
    sound.play();
  } else if (src === "images/betterGrok.png") {
    document
      .getElementById("lilTwig")
      .setAttribute("src", "images/betterTorta.png");
    stats =
      "Species: Continent Pokémon, Torterra evolves from Grotle and carries a miniature ecosystem on its back, including trees, plants, and fertile soil. Its massive body provides stability and protection, making it both a powerful battler and a gentle guardian of nature. Torterra can use its immense strength to move terrain and create new habitats, and it thrives in sunny environments that help its back vegetation grow to full health.";
    sound.play();
  } else if (src === "images/betterTorta.png") {
    document
      .getElementById("lilTwig")
      .setAttribute("src", "images/betterTwig.png");
    stats =
      "Species: Tiny Leaf Pokémon, Turtwig is a small, sturdy Grass-type Pokémon with a sprout growing on its head that absorbs sunlight for energy. Its shell is made of hardened soil, giving it protection despite its small size. Turtwig is curious and determined, often exploring its surroundings while nurturing the plant on its back. As it grows stronger and absorbs more sunlight, it prepares to evolve into Grotle.";
  }
  displayInfo();
}
function pengEvolve() {
  let src = document.getElementById("peng").getAttribute("src");
  let sound = document.getElementById("prinCry");
  if (src === "images/betterPimp.png") {
    document
      .getElementById("peng")
      .setAttribute("src", "images/betterPrinp.png");
    stats =
      "Species: Penguin Pokémon, Prinplup evolves from Piplup and is taller, stronger, and more confident in its abilities. Its stiff, armored feathers help it glide through water and protect it in battles. Prinplup uses its powerful wings to splash and attack opponents, and it often exhibits a proud and independent personality. As it grows, it hones its strength and skills, preparing to evolve into the mighty Empoleon.";
    sound.play();
  } else if (src === "images/betterPrinp.png") {
    document.getElementById("peng").setAttribute("src", "images/betterEmp.png");
    stats =
      "Species: Emperor Pokémon, Empoleon evolves from Prinplup and becomes a large, regal Water/Steel-type Pokémon. Its steel-tipped wings allow it to cut through ice and water with precision, and it can unleash powerful hydro-based attacks in battle. Empoleon is highly intelligent and commanding, often taking the lead among other Pokémon. Its sturdy armor-like body provides strong defense while it dominates both on land and in water.";
    sound.play();
  } else if (src === "images/betterEmp.png") {
    document
      .getElementById("peng")
      .setAttribute("src", "images/betterPimp.png");
    stats =
      "Species: Penguin Pokémon, Piplup is a small, proud Water-type Pokémon resembling a penguin. It waddles gracefully on land and swims skillfully in water. Piplup can generate strong jets of water from its beak, using them to playfully attack or defend itself. Independent and confident, it rarely follows orders easily but forms strong bonds with trainers it trusts. As it grows, Piplup gains the strength to evolve into Prinplup.";
  }
  displayInfo();
}
function humanEvolution() {
  let src = document.getElementById("monke").getAttribute("src");
  let sound = document.getElementById("monCry");
  if (src === "images/betterChimp.png") {
    document
      .getElementById("monke")
      .setAttribute("src", "images/betterMon.png");
    stats =
      "Species: Flame Pokémon, Monferno evolves from Chimchar and becomes faster, stronger, and more agile. Its fiery tail burns hotter during battles, and it uses its nimble limbs to deliver precise punches and kicks. Monferno is energetic, clever, and highly competitive, constantly honing its skills in preparation for its final evolution into Infernape.";
    sound.play();
  } else if (src === "images/betterMon.png") {
    document
      .getElementById("monke")
      .setAttribute("src", "images/betterInferno.png");
    stats =
      "Species: Flame Pokémon, Infernape evolves from Monferno and is a powerful, fast, and agile Fire/Fighting-type Pokémon. Its flames burn fiercely, reflecting its determination and fighting spirit. Infernape combines speed, strength, and intelligence, making it a versatile battler. It is fiercely independent and disciplined, using its fiery abilities and combat skills to overcome challenges and protect its allies.";
    sound.play();
  } else if (src === "images/betterInferno.png") {
    document
      .getElementById("monke")
      .setAttribute("src", "images/betterChimp.png");
    stats =
      "Species: Chimp Pokémon, Chimchar is a small, agile Fire-type Pokémon resembling a young monkey. A flame burns at the tip of its tail, reflecting its energy and mood. It is playful, curious, and quick on its feet, often exploring its environment and practicing its fire-based attacks. Chimchar’s intelligence and agility help it adapt to challenges, preparing it to evolve into Monferno.";
  }
  displayInfo();
}
function displayInfo() {
  document.getElementById("bann").classList.add("hide");
  document.getElementById("TEXTStat").innerText = stats;
  document
    .getElementById("statsP")
    .setAttribute("class", "center-content info");
  document.getElementById("X-stats").classList.remove("hide");
}
function closeInfo() {
  document.getElementById("bann").classList.remove("hide");
  document.getElementById("statsP").setAttribute("class", "hide");
  document.getElementById("X-stats").classList.add("hide");
}
function playOP() {
  // rid of the click indicator rq
  document.getElementById("cIndicator").setAttribute("src", "");
  let src = document.getElementById("bann").getAttribute("src");
  let sound = document.getElementById("OPtheme");
  let banner = document.getElementById("bann");
  if (src === "images/pokemonBanner2.png") {
    document
      .getElementById("bann")
      .setAttribute("src", "images/pokemonOpening.gif");
    banner.style.height = "100%";
    sound.play();
    setTimeout(revertBann, 9950);
  }
}
function revertBann() {
  let banner = document.getElementById("bann");
  banner.style.height = "";
  document
    .getElementById("bann")
    .setAttribute("src", "images/pokemonBanner2.png");
}
