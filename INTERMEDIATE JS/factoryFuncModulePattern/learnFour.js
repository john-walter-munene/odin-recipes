// Figure out what this code is doing?

const Player = (name, level) => {
    let health = level*2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        // uh oh
    };
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die();
        }
    };
    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name()}`);
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    };
    return{attack, damage, getLevel, getName};
};

const jimmie = Player('Jim', 10);
const badGuy = Player('Jeff', 5);

jimmie.attack(badGuy);


