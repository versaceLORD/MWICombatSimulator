import CombatEvent from "$/events/combat/CombatEvent";

class AutoAttackEvent extends CombatEvent {
  private static type = "autoAttack";

  source: string;

  constructor(time: number, source: string) {
    super(AutoAttackEvent.type, time);

    this.source = source;
  }
}

export default AutoAttackEvent;
