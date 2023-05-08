interface IAbilityDetailMap {
  [abilityHrid: string]: IAbility;
}

interface ICombatTriggerConditionDetailMap {
  [conditionHrid: string]: ICombatTriggerCondition;
}

interface ICombatMonsterDetailMap {
  [monsterHrid: string]: ICombatMonster;
}

interface ICombatMonster {
  hrid: string;
  name: string;
  combatDetails: ICombatDetails;
  abilities: {
    abilityHrid: string;
    level: number;
  }[];
  dropTable: IDropItem[];
}

interface ICombatDetails {
  isPlayer?: boolean;
  currentHitpoints: number;
  maxHitpoints: number;
  currentManapoints: number;
  maxManapoints: number;
  stabAccuracyRating: number;
  slashAccuracyRating: number;
  smashAccuracyRating: number;
  rangedAccuracyRating: number;
  stabMaxDamage: number;
  slashMaxDamage: number;
  smashMaxDamage: number;
  rangedMaxDamage: number;
  magicMaxDamage: number;
  stabEvasionRating: number;
  slashEvasionRating: number;
  smashEvasionRating: number;
  rangedEvasionRating: number;
  totalArmor: number;
  totalWaterResistance: number;
  totalNatureResistance: number;
  totalFireResistance: number;
  staminaLevel: number;
  intelligenceLevel: number;
  attackLevel: number;
  powerLevel: number;
  defenseLevel: number;
  rangedLevel: number;
  magicLevel: number;
  combatStats: ICombatStats;
}
interface ICombatStats {
  combatStyleHrid: string;
  damageType: string;
  attackInterval: number;
  stabAccuracy: number;
  slashAccuracy: number;
  smashAccuracy: number;
  rangedAccuracy: number;
  stabDamage: number;
  slashDamage: number;
  smashDamage: number;
  rangedDamage: number;
  magicDamage: number;
  physicalAmplify: number;
  waterAmplify: number;
  natureAmplify: number;
  fireAmplify: number;
  healingAmplify: number;
  stabEvasion: number;
  slashEvasion: number;
  smashEvasion: number;
  rangedEvasion: number;
  armor: number;
  waterResistance: number;
  natureResistance: number;
  fireResistance: number;
  maxHitpoints: number;
  maxManapoints: number;
  lifeSteal: number;
  HPRegen: number;
  MPRegen: number;
  physicalReflectPower: number;
  dropRate: number;
  dropQuantity: number;
  experienceRate: number;
  foodSlots: number;
  drinkSlots: number;
}

interface IDropItem {
  itemHrid: string;
  dropRate: number;
  minCount: number;
  maxCount: number;
}

interface ICombatTriggerCondition {
  hrid: string;
  name: string;
  isSingleTarget: boolean;
  isMultiTarget: boolean;
  allowedComparatorHrids: string[];
  sortIndex: number;
}

interface IAbility {
  hrid: string;
  name: string;
  description: string;
  manaCost: number;
  cooldownDuration: number;
  hasSpecialEffects: boolean;
  abilityEffects: IAbilityEffect[];
  defaultCombatTriggers: ICombatTrigger[];
  sortIndex: number;
}

interface IAbilityEffect {
  targetType: string;
  effectType: string;
  combatStyleHrid: string;
  damageType: string;
  baseDamageFlat: number;
  baseDamageFlatLevelBonus: number;
  baseDamageRatio: number;
  baseDamageRatioLevelBonus: number;
  bonusAccuracyRatio: number;
  bonusAccuracyRatioLevelBonus: number;
  bleedRatio: number;
  bleedDuration: number;
  stunChance: number;
  stunDuration: number;
  buffs: IBuff[] | null;
}

interface IBuff {
  sourceHrid: string;
  typeHrid: string;
  ratioBoost: number;
  ratioBoostLevelBonus: number;
  flatBoost: number;
  flatBoostLevelBonus: number;
  startTime: string;
  duration: number;
}

interface ICombatTrigger {
  dependencyHrid: string;
  conditionHrid: string;
  comparatorHrid: string;
  value: number;
}
