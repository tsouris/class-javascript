class Hero {
  constructor({ name = "Hero", hp = 0 }) {
    this.name = name;
    this.hp = hp;
  }

  gainHp(amount) {
    console.log(`${this.name} gains ${amount} of hp`);
    this.hp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...resProps } = {}) {
    super(resProps);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacked using ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warCry, ...resProps } = {}) {
    super(resProps);
    this.warCry = warCry;
  }

  rage() {
    console.log(this.warCry);
  }
}

class Archer extends Berserk {
  constructor({ arrows, ...resProps } = {}) {
    super(resProps);
    this.arrows = arrows;
  }

  flamingArrows() {
    console.log(`${this.name} shot ${this.arrows}`);
  }
}

const Jack = new Berserk({
  name: "Jack",
  hp: 100,
  weapon: "Axe",
  warCry: "Aaaaaaaaaaaaaaaaaa",
});

console.log(Jack);
