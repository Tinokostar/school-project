class inventory
{
    constructor(wheat, wood, iron)
    {
        this.wheat = wheat;
        this.wood = wood;
        this.iron = iron;
    }

    getWheat()
    {
        return this.wheat;
    }

    getWood()
    {
        return this.wood;
    }

    getIron()
    {
        return this.iron;
    }

    
}
export {inventory}