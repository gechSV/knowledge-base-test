export class ISection{
    /**
     * Конструктор класса Section (Секция документа)
     * @param {index, type, state} vol : {index, type, state}
     */
    constructor(vol){
        // ID объекта в массиве, генерируется через shortid
        this.index = vol.index;
        // Тип блока документа  
        this.type = vol.type;
        // Состояние блока/секции
        this.state = vol.state;
    }
    //TODO: sdfsafsadfsdfgdsg
}