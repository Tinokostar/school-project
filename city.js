class city
{

    constructor(name, wheatValue, ironValue, woodValue){
        this.name = name;
        this.wheatValue = wheatValue;
        this.ironValue = ironValue;
        this.woodValue = woodValue;
    }

    getName()
    {
        return this.name;
    }

    getWheatValue()
    {
        return this.wheatValue;
    }

    getIronValue()
    {
        return this.ironValue;
    }

    getWoodValue()
    {
        return this.woodValue;
    }

    setName(name)
    {
        this.name = name;
    }

    setWheatValue(wheatValue)
    {
        this.wheatValue = wheatValue;
    }

    setWoodValue(woodValue)
    {
        this.woodValue = woodValue;
    }

    setIronValue(ironValue)
    {
        this.ironValue = ironValue;
    }
    
    getRandomMaterialValue(material)
    {
        var total = 0;
        var materialC = 0;

        if(material == "wheat")
        {
            materialC = 21;
        }

        else if(material == "wood")
        {
            materialC = 101;
        }

        else if(material == "iron")
        {
            materialC = 301;
        }
  
        else
            return console.log("error")
        
        
        for(var i = 0; i < 10; i++)
        {
            var x = Math.floor(Math.random() * materialC);
            total = x+total
        }
        return total/10;
    }

}
export {city}