export class Experience{

    id:string

    constructor(
        public companyName:string,
        public jobTitle:string,
        public missions:string[],
        public startDate:Date,
        public endDate?:Date,
        public companyWebsite?:string,
        public location?:string
    ){
        this.id = crypto.randomUUID();
    }
}