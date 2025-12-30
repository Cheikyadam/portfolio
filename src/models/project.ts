export class Project {

    id:string;

    constructor(
        public name:string,
        public description:string,
        public techStack:string[],
        public imageLink?:string,
        public projectLink?:string,
    ){
        this.id = crypto.randomUUID();
    }
}