import {city} from './city.js';
import {player} from './player.js';
import {inventory} from './inventory.js';
import {trade} from './trade.js';

var cityTest = new city("israel", 0, 0, 0);

var city1 = new city("israel", 0, 0, 0);
var city2 = new city("eygept", 0, 0, 0);
var city3 = new city("cyprus", 0, 0, 0);

var newPlayer = new player(2000, 0, 1, city1)
var dayCounter = 0;

function printPirces()
{
    console.log(city1);
    console.log(city2);
    console.log(city3);
}



function newDay()
{
    
    city1.setWheatValue(city1.getRandomMaterialValue("wheat"));
    city1.setWoodValue(city1.getRandomMaterialValue("wood"));
    city1.setIronValue(city1.getRandomMaterialValue("iron"));

    city2.setWheatValue(city2.getRandomMaterialValue("wheat"));
    city2.setWoodValue(city2.getRandomMaterialValue("wood"));
    city2.setIronValue(city2.getRandomMaterialValue("iron"));

    city3.setWheatValue(city3.getRandomMaterialValue("wheat"));
    city3.setWoodValue(city3.getRandomMaterialValue("wood"));
    city3.setIronValue(city3.getRandomMaterialValue("iron"));

    printPirces()

}

newDay()

trade("wheat", 100);


console.log(newPlayer)
console.log(newPlayer.pInventory.getWheat())


export {city1,city2,city3,newPlayer}
