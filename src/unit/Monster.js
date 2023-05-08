import Ability from "$/Ability";
import CombatUnit from "$/unit/CombatUnit";
import combatMonsterDetailMap from "$/data/combatMonsterDetailMap.json";

class Monster extends CombatUnit {
  constructor(hrid) {
    super();

    this.isPlayer = false;
    this.hrid = hrid;

    let gameMonster = combatMonsterDetailMap[this.hrid];
    if (!gameMonster) {
      throw new Error("No monster found for hrid: " + this.hrid);
    }

    for (let i = 0; i < gameMonster.abilities.length; i++) {
      this.abilities[i] = new Ability(gameMonster.abilities[i].abilityHrid, gameMonster.abilities[i].level);
    }
  }

  updateCombatDetails() {
    let gameMonster = combatMonsterDetailMap[this.hrid];

    this.staminaLevel = gameMonster.combatDetails.staminaLevel;
    this.intelligenceLevel = gameMonster.combatDetails.intelligenceLevel;
    this.attackLevel = gameMonster.combatDetails.attackLevel;
    this.powerLevel = gameMonster.combatDetails.powerLevel;
    this.defenseLevel = gameMonster.combatDetails.defenseLevel;
    this.rangedLevel = gameMonster.combatDetails.rangedLevel;
    this.magicLevel = gameMonster.combatDetails.magicLevel;

    this.combatDetails.combatStats.combatStyleHrid = gameMonster.combatDetails.combatStats.combatStyleHrid;

    for (const [key, value] of Object.entries(gameMonster.combatDetails.combatStats)) {
      this.combatDetails.combatStats[key] = value;
    }

    super.updateCombatDetails();
  }
}

export default Monster;
