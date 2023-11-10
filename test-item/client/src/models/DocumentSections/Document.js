import shortid from "shortid";
import { ISection } from "./ISection";
import { EditorState} from 'draft-js';

/**
 * Класс управления секциями документа
 */
export class Document{

    /**
     * Конструктор класса
     * @param {ISection} section : необязательный параметр. Объект класса Section
     */
    constructor(section){
        this.sections = section ? section.slice(0) : [] 
    }

    /**
     * Добавление новой секции в массив
     * @param {index, type, state} sectionVal : {shortid, type, state}
     */
    newSection(sectionVal){
        let newSection = new ISection(sectionVal);
        newSection.index = shortid.generate();
        this.sections.push(newSection);
    }

    setSections(newArr){
        this.sections = newArr.slice();
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
     * @param {EditorState} state состояние компонента
     */
    setStateDataByindex(index, state){
        this.sections[index].state = state;
    }

    /**
     * 
     * @param {int} index 
     */
    deleteSectionByIndex(index){
        this.sections.splice(index, 1);
    }


    reIndex(){
        for(let i = 0; i < this.sections.length; i++){
            this.sections[i].index = shortid.generate();
            // console.log(convertToRaw(this.sections[i].state.getCurrentContent()))
        }
    }
}