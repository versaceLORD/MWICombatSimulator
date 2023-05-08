import CombatEvent from "$/events/combat/CombatEvent";

class EnemyRespawnEvent extends CombatEvent {
  static type = "enemyRespawn";

  constructor(time) {
    super(EnemyRespawnEvent.type, time);
  }
}

export default EnemyRespawnEvent;
