import {player} from './player.js';
import {inventory} from './inventory.js';
import {newPlayer} from './mainScript.js';

function trade(material, number)
{
    if(material == "wheat")
    {

        var x = newPlayer.getMoney()-number*newPlayer.getPlace().getWheatValue();
        
        newPlayer.setMoney(x)

        newPlayer.setInventory(number,newPlayer.pInventory.getWood(),newPlayer.pInventory.getIron());
    }

}

export {trade};