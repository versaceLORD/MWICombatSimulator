import CombatEvent from "$/events/combat/CombatEvent";

class BleedTickEvent extends CombatEvent {
  private static type = "bleedTick";

  sourceRef: any;
  target: any;
  damage: number;
  totalTicks: number;
  currentTick: number;

  constructor(time: number, sourceRef: any, target: any, damage: number, totalTicks: number, currentTick: number) {
    super(BleedTickEvent.type, time);

    // Calling it 'source' would wrongly clear bleeds when the source dies
    this.sourceRef = sourceRef;
    this.target = target;
    this.damage = damage;
    this.totalTicks = totalTicks;
    this.currentTick = currentTick;
  }
}

export default BleedTickEvent;
