import { Formation } from "./formation";
import { Experience } from "./experience";
import { Project } from "./project";
import { Skill } from "./skill";

export class User{

    constructor(
        public githubUsername:string,
        public firstname:string,
        public lastname:string,
        public jobTitle:string,
        public linkedin:string,
        public mail:string,
        public photoUrl:string,
        public about:string,
        public skills:Skill[],
        public experiences: Experience[],
        public formations: Formation [],
        public projects: Project[],
        public discord?:string,
        public phoneNumber?:string,
    ){}

    get linkedinUrl(): string {
        return `https://linkedin.com/in/${this.linkedin}`;
    }

    get discordUrl(): string | null {
        return this.discord ? `https://discord.com/${this.discord}` : null;
    }

    get githubUrl(): string {
        return `https://github.com/${this.githubUsername}`;
    }

    get mailUrl(): string {
        return `mailto:${this.mail}`;
    }

    get phoneUrl(): string | null {
        return this.phoneNumber ? `tel:${this.phoneNumber}` : null;
    }

}