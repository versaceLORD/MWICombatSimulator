class CombatEvent {
  type: string;
  time: number;

  constructor(type: string, time: number) {
    this.type = type;
    this.time = time;
  }
}

export default CombatEvent;
