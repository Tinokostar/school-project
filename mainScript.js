import {city} from './city.js';
import {player} from './player.js';
import {inventory} from './inventory.js';
import {trade} from './trade.js';

var dayCounter = 0;
var time = 6.00;



var cityTest = new city("israel", 0, 0, 0);

var city1 = new city("israel", 0, 0, 0);
var city2 = new city("eygept", 0, 0, 0);
var city3 = new city("cyprus", 0, 0, 0);

var newPlayer = new player(2000, 0, 1, city1)


function printPirces()
{
    console.log(city1);
    console.log(city2);
    console.log(city3);
}

function move(place)
{
    newPlayer.setPlace(place)
    console.log(newPlayer);
    
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

    printPirces();

}

newDay()
document.getElementById("cyprus").onclick = function moveToCyprus()
{newPlayer.setPlace(city3); console.log(newPlayer); document.getElementById("place").innerHTML = "place: " + newPlayer.getPlace();};
document.getElementById("israel").onclick = function moveToIsrael()
{newPlayer.setPlace(city1); console.log(newPlayer); document.getElementById("place").innerHTML = "place: " + newPlayer.getPlace();};
document.getElementById("egypt").onclick = function moveToEgypt()
{newPlayer.setPlace(city2); console.log(newPlayer); document.getElementById("place").innerHTML = "place: " + newPlayer.getPlace();};
document.getElementById("money").innerHTML = "money: " + newPlayer.getMoney();
document.getElementById("place").innerHTML = "place: " + newPlayer.getPlace();
document.getElementById("bodyGuards").innerHTML = "body guards: " + newPlayer.getBodyGuards();
document.getElementById("shipTier").innerHTML = "ship tier: " + newPlayer.getShipTier();
document.getElementById("inventory1").innerHTML = "wheat: " + newPlayer.pInventory.getWheat();
document.getElementById("inventory2").innerHTML = "wood: " + newPlayer.pInventory.getWood();
document.getElementById("inventory3").innerHTML = "iron: " + newPlayer.pInventory.getIron();

console.log(newPlayer);
console.log(newPlayer.getInventory());
console.log(parseFloat(time).toFixed(2))


export {city1,city2,city3,newPlayer}
