import CombatEvent from "$/events/combat/CombatEvent";

class PlayerRespawnEvent extends CombatEvent {
  static type = "playerRespawn";

  constructor(time) {
    super(PlayerRespawnEvent.type, time);
  }
}

export default PlayerRespawnEvent;
