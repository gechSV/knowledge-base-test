import shortid from "shortid";
import { Section } from "./Section";
import { EditorState, convertToRaw } from 'draft-js';

/**
 * Класс управления секциями документа
 */
export class Document{

    /**
     * Конструктор класса
     * @param {Section} section : необязательный параметр. Объект класса Section
     */
    constructor(section){
        this.sections = section ? section.slice(0) : [] 
    }

    /**
     * Добавление новой секции в массив
     * @param {index, type, state} sectionVal : {index, type, state}
     */
    newSection(sectionVal){
        let newSection = new Section(sectionVal);
        newSection.index = shortid.generate();
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
    setStateDataByindex(index, state){
        this.sections[index].state = state;
    }

    deleteSectionByIndex(index){
        this.sections.splice(index, 1);
        // this.reIndex();
    }

    reloadSections(newArr){
        this.sections = newArr.slice();
        // this.reIndex()
    }

    reIndex(){
        for(let i = 0; i < this.sections.length; i++){
            this.sections[i].index = shortid.generate();
            // console.log(convertToRaw(this.sections[i].state.getCurrentContent()))
        }
    }
}