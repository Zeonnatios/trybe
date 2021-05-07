const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) =>
  Math.floor(Math.random() * (dragon.strength - 15) + 15);

const warriorDamage = (warrior) => {
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const minDmg = warrior.strength;
  return Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
};

const mageDamage = (mage) => {
  const turnStats = {
    manaGasta: 0,
    danoCausado: 'Sem mana suficiente...',
  };
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2;
  const mana = mage.mana;

  if (mana >= 15) {
    turnStats.danoCausado = Math.floor(
      Math.random() * (maxDmg - minDmg) + minDmg
    );
    turnStats.manaGasta = 15;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDamage = warriorDamage(warrior);
    warrior.damage = damage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageDamage) => {
    const mageMovement = mageDamage(mage);
    dragon.healthPoints -= mageMovement.danoCausado;
    mage.damage = mageMovement.danoCausado;
    mage.mana = mageMovement.manaGasta;
  },
  dragonTurn: (dragonDamage) => {
    const dragonDamage = dragonDamage();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.turnResults(battleMembers);