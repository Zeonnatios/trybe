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
    const damage = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
    turnStats.danoCausado = damage;
    turnStats.manaGasta = 15;
  }
  return turnStats;
};
