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

    if(material == "wood")
    {

        var x = newPlayer.getMoney()-number*newPlayer.getPlace().getWoodValue();
        
        newPlayer.setMoney(x)

        newPlayer.setInventory(newPlayer.pInventory.getWheat(),number,newPlayer.pInventory.getWood());
    }

    if(material == "iron")
    {

        var x = newPlayer.getMoney()-number*newPlayer.getPlace().getIronValue();
        
        newPlayer.setMoney(x)

        newPlayer.setInventory(newPlayer.pInventory.getWheat(),newPlayer.pInventory.getWood(),number);
    }



}

export {trade};