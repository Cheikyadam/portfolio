export class Skill{

    id:string

    constructor(
        public label:string,
        public icon:string,
        public competencies:string[],
    ){
        this.id = crypto.randomUUID();
    }
}