import { Section } from "./Section";

export class Document{
    constructor(section){
        this.sections = section ? section.slice(0) : [] 
    }

    newSection(val){
        let newSection = new Section(val);
        this.sections.push(newSection);
    }

    getSections(){
        return this.sections
    }
}