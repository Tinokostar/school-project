import {inventory} from './inventory.js'
import {city} from './city.js'
import {newMap} from './mainScript.js'

class player
{
    constructor(money, bodyGuards, shipTier, place)
    {
        this.pInventory = new inventory(0,0,0);
        this.money = money;
        this.bodyGuards = bodyGuards;
        this.shipTier = shipTier;
        this.place = city1;
    }

    getPlace()
    {
        return this.place;
    }

    setPlace(name)
    {
        this.place = name;
    }

    getMoney()
    {
        return this.money;
    }

    getBodyGuards()
    {
        return this.bodyGuards;
    }

    getShipTier()
    {
        return this.shipTier;
    }

    getInventory()
    {
        return this.pInventory;
    }

    setMoney(value)
    {
        this.money = value;
    }

    setBodyGuards(value)
    {
        this.bodyGuards = value;
    }

    setShipTier(value)
    {
        this.shipTier = value;
    }

    setInventory(v1,v2,v3)
    {
        delete this.pInventory;
        this.pInventory = new inventory(v1,v2,v3);
    }
}
export {player}