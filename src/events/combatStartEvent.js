import CombatEvent from "$/events/combat/CombatEvent";

class CombatStartEvent extends CombatEvent {
  static type = "combatStart";

  constructor(time) {
    super(CombatStartEvent.type, time);
  }
}

export default CombatStartEvent;
