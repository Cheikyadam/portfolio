import { Experience } from "./experience";

export class Formation extends Experience{
    constructor(
        public isCertif:boolean = false,
        schoolName:string,
        cursusTitle:string,
        cursursTag:string[],
        startDate:Date,
        endDate?:Date,
        companyWebsite?:string,
        location?:string,
        public resourceLink?:string,
        
    ){
        super(schoolName, cursusTitle, cursursTag, startDate,  endDate, companyWebsite, location )
    }

    get isOnGoing():boolean{
        return this.endDate === undefined
    }

    get isResourceMissing():boolean{
        if (this.resourceLink){
            return false
        }
        return true
    }
}