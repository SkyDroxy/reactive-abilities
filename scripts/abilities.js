export class ReactiveAbilities {
  constructor() {
    this.abilities = [];
  }

  addAbility(ability) {
    this.abilities.push(ability);
  }

  getAbilities() {
    return this.abilities;
  }
}
