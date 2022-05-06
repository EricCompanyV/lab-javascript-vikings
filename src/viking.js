// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health-damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super()
    this.name = name
    this.health = health
    this.strength = strength
  }
  receiveDamage(damage){
    this.health = this.health-damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health = this.health-damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

const generateRandomNumber = function generateRandom(min, max)  {
      
  return Math.floor(Math.random() * (max - min) + min);
}
// War
class War {
  constructor (){
  this.vikingArmy = []
  this.saxonArmy = []
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    const damageDealt = this.vikingArmy[generateRandomNumber(0,this.vikingArmy.length)].strength
    const targetDamage = generateRandomNumber(0,this.saxonArmy.length)
    const result = this.saxonArmy[targetDamage].receiveDamage(damageDealt) 
    if (this.saxonArmy[targetDamage].health < 1) {
      this.saxonArmy.splice(targetDamage, 1)
    } 
    return result
  }
  saxonAttack(){
    const damageDealt = this.saxonArmy[generateRandomNumber(0,this.saxonArmy.length)].strength
    const targetDamage = generateRandomNumber(0,this.vikingArmy.length)
    const result = this.vikingArmy[targetDamage].receiveDamage(damageDealt) 
    if (this.vikingArmy[targetDamage].health < 1) {
      this.vikingArmy.splice(targetDamage, 1)
  }
  return result
}

attack(){
  const randomAttack = generateRandomNumber (0,1)
  // random number 0-1
    let attacker 
    let defender 
   if ( randomAttack === 1){
    attacker = this.vikingArmy
    defender = this.saxonArmy
   }  else {
    attacker = this.saxonArmy
    defender = this.vikingArmy
   }
  const damageDealt = attacker[generateRandomNumber(0,attacker.length)].strength
  const targetDamage = generateRandomNumber(0,defender.length)
  const result = defender[targetDamage].receiveDamage(damageDealt) 
  if (defender[targetDamage].health < 1) {
    this.defender.splice(targetDamage, 1)
  }
  return result
}
  showStatus(){
    if(this.saxonArmy.length<1) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length<1) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length>0 && this.vikingArmy.length>0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
