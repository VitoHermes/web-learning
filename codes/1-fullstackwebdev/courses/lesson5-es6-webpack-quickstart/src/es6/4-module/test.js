import Monkey from "./Monkey";
import Human from "./Human";
import Animal from "./Animal";

let animal = new Animal();
let animalRun = animal.run();
console.log(animalRun);

let monkey = new Monkey();
let monkeyRun = monkey.run();
console.log(monkeyRun);

let human = new Human();
let humanRun = human.run();
console.log(humanRun);
