export class Section{

    constructor(vol){
        // Тип блока
        this.type = vol.type;
        // Данные блока
        this.data = vol.data;
        // ..
        this.key = vol.key;
        // Ссылка на React компонент
        // this.ref = vol.ref;

        this.state = vol.state;
    }
}