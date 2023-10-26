import { Section } from "./Section";

/**
 * Класс управления секциями документа
 */
export class Document{

    /**
     * Конструктор класса
     * @param {Section} section : необязательный параметр. Объект класса Section
     */
    constructor(section){
        this.sections = section ? section.splice(0) : [] 
    }

    /**
     * Добавление новой секции в массив
     * @param {index, type, state} sectionVal : {index, type, state}
     */
    newSection(sectionVal){
        let newSection = new Section(sectionVal);
        newSection.index = this.sections.length;
        this.sections.push(newSection);
    }

    /**
     * Получить массив секций 
     * @returns Sections[]
     */
    getSections(){
        return this.sections
    }

    /**
     * Установка нового значения секции по его индексу
     * @param {int} index индекс 
     * @param {state} state состояние компонента
     */
    setDataByindex(index, state){
        this.sections[index].state = state;
    }

    deleteSectionByIndex(index){
        console.log("Doc sec: ", this.sections)
        console.log("Doc index: ", index)

        this.sections.splice(index, 1);
        // this.sections = newArr;
        // this.sections = newArr
        this.reIndex();
        // console.log(this.sections)
        console.log("Doc sec: ",this.sections)
    }

    reIndex(){
        for(let i = 0; i < this.sections.length; i++){
            this.sections[i].index = i;
        }
    }
}