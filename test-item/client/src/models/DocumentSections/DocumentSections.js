import { DocumentSection } from "./DcumentSection";

export class DocumentSections{
    constructor(section){
        this.sections = section ? section.slice(0) : [] 
    }

    newSection(val){
        let newSection = new DocumentSection(val);
        this.sections.push(newSection);
    }
}