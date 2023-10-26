export class Section{
    /**
     * Конструктор класса Section (Секция документа)
     * @param {index, type, state} vol : {index, type, state}
     */
    constructor(vol){
        // Тндекс объекта в массиве, для поиска
        this.index = vol.index;
        // Тип блока документа  
        this.type = vol.type;
        // Состояние компонента секции
        this.state = vol.state;
    }
}