import CombatEvent from "$/events/combat/CombatEvent";

class StunExpirationEvent extends CombatEvent {
  static type = "stunExpiration";

  constructor(time, source) {
    super(StunExpirationEvent.type, time);

    this.source = source;
  }
}

export default StunExpirationEvent;