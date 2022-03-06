import {city} from './city.js';
import {player} from './player.js';
import {inventory} from './inventory.js';

var ctest = new city("israel", 0, 0, 0);
var test = new player(0, 0, 0);
var x;

function new_Map()
{

var city1 = new city("israel", 0, 0, 0);
var city2 = new city("eygept", 0, 0, 0);
var city3 = new city("cyprus", 0, 0, 0);

city1.setWheatValue(city1.getRandomMaterialValue("wheat"));
city1.setWoodValue(city1.getRandomMaterialValue("wood"));
city1.setIronValue(city1.getRandomMaterialValue("iron"));

city2.setWheatValue(city2.getRandomMaterialValue("wheat"));
city2.setWoodValue(city2.getRandomMaterialValue("wood"));
city2.setIronValue(city2.getRandomMaterialValue("iron"));

city3.setWheatValue(city3.getRandomMaterialValue("wheat"));
city3.setWoodValue(city3.getRandomMaterialValue("wood"));
city3.setIronValue(city3.getRandomMaterialValue("iron"));

console.log(city1);
console.log(city2);
console.log(city3);

}




new_Map()

console.log();
console.log(test.getInventory());
ctest.setWheatValue(x);
console.log(ctest);


