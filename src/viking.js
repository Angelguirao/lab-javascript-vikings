// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    } 
      addViking(viking) {
        this.vikingArmy.push(viking);
      }

      addSaxon(saxon) {
        this.saxonArmy.push(saxon);
      }
    
      vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
    
        const result = randomSaxon.receiveDamage(randomViking.strength);
    
        if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
        }
    
        return result;
      }
    
      saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
    
        const result = randomViking.receiveDamage(randomSaxon.strength);
    
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1);
        }
    
        return result;
      }
    
      showStatus() {
        if (this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
        } else {
          return "Vikings and Saxons are still in the thick of battle.";
        }
      }
    }

    // Let's play the game!!!

    const WorldwarIII = new War();

    const viking1 = new Viking("Jaime", 100, 80);
    const viking2 = new Viking("Brian", 100, 60);
    const viking3 = new Viking("Angel", 100, 40);

    WorldwarIII.addViking(viking1);
    WorldwarIII.addViking(viking2);
    WorldwarIII.addViking(viking3);

    const saxon1 = new Saxon(100, 100);
    const saxon2 = new Saxon(100, 35);
    const saxon3 = new Saxon(100, 35);

    WorldwarIII.addSaxon(saxon1);
    WorldwarIII.addSaxon(saxon2);
    WorldwarIII.addSaxon(saxon3);

    while (!(WorldwarIII.vikingArmy.length === 0) || !(WorldwarIII.saxonArmy.length === 0)) {
    const vikingResult = WorldwarIII.vikingAttack();
    const saxonResult = WorldwarIII.saxonAttack();
    const battleResult = WorldwarIII.showStatus();

    console.log(`Viking attack result: ${vikingResult}`);
    console.log(`Saxon attack result: ${saxonResult}`);
    console.log(battleResult);
}
