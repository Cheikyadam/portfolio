import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Experience } from "../models/experience";
import { Formation } from "../models/formation";

@Injectable({
    "providedIn":"root"
})
export class UserService{

    private experiences = [
        new Experience("Complétude",
            "Intervenant pédagogique",
            [
                "Accompagnement des collégiens et lycéens en Mathématiques et Python"
            ],
            new Date(2024, 11),
            undefined,
            "https://www.completude.com",
            "Paris"
        ),

        new Experience("Meltech",
            "Freelance Développement Mobile",
            [
                "Développement mobile en méthodologie Agile avec Jira",
                "Conception, design et dévéloppement avec Flutter",
                "Intégration d'API Rest"
            ],
            new Date(2025, 5),
            undefined,
            "https://meltech.tech",
            "Distanciel"
        ),

        new Experience("DawnSoft",
            "Freelance Développeur Backend",
            [
                "Conception, Développement d'API REST en PHP/Laravel avec MYSQL",
                "Conception, Développement d'API REST en Node.js/Express avec MongoDB",
            ],
            new Date(2024, 8),
            undefined,
            "https://www.dawnsoftbf.com/",
            "Distanciel"
        ),

        new Experience("InnovQube",
            "Stage Développement PHP/Laravel",
            [
                "Développement web en méthodologie Agile",
                "Correction de bugs, documentation et création de panel admin avec Laravel Filament"
            ],
            new Date(2025, 6),
            new Date(2025, 7),
            "https://innovqube.com",
            "Distanciel"
        ),

        new Experience("GO AI Corporation",
            "Stage Développement Mobile",
            [
                "Développement d’application mobile avec Flutter et Firebase",
                "Back-oﬃce avec Django/Python, web scraping"
            ],
            new Date(2025, 0),
            new Date(2025, 2),
            "https://goaicorporation.org/",
            "Distanciel"
        )
    ]

    private formations = [

        new Formation(
            false,
            "Institut Galilée - USPN (Paris XIII)",
            "Master Informatique P2S (Programmation Surété et Sécurité",
            ["Top 6 Master en Programmtion en France"],
            new Date(2024, 8),
            undefined,
            "https://galilee.univ-paris13.fr/",
            "Villetaneuse, France",
            "https://galilee.univ-paris13.fr/wp-content/uploads/fiche_master_p2s.pdf"
        ),

        new Formation(
            false,
            "Faculté des Sciences de Tétouan - UAE (Maroc)",
            "Licence en Sciences Mathématiques et Informatique (SMI)",
            [
                "Mention Très Bien",
                "Distinction: Bourse Eiffel"
            ],
            new Date(2021, 8),
            new Date(2024, 7),
            "https://fs.uae.ac.ma/",
            "Tétouan, Maroc",
            ""
        ),

        new Formation(
            true,
            "ALX Africa",
            "Certficat en génie logiciel",
            ["Programmation en C, Python, HTML/JavaScript, SQL Scripts Shell, déploiement web,etc."],
            new Date(2023, 5),
            new Date(2024, 9),
            "https://www.alxafrica.com/",
            "Distanciel",
            "https://savanna.alxafrica.com/certificates/NFp5fsGnSH"
        ),
    ]

    private user = new User(
        "Cheikyadam",
        "Cheick Adam",
        "GANDEMA",
        "Développeur logiciel",
        "cheick-adam-gandema",
        "urbaingande@gmail.com",
        "pp.png",
        this.experiences,
        this.formations,
        "cheick_adam",
        "+33 745 318 120"
    )

    getUser():User{
        return this.user;
    }
}