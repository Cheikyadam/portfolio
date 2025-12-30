import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Experience } from "../models/experience";
import { Formation } from "../models/formation";
import { Project } from "../models/project";

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

    private projects = [
        new Project(
            "Etsionenparlait.info",
            `
            Etsionenparlait.info est un site d'information responsive. Il permet aux admins de gérer les articles qui peuvent etre de tout format (Audio, Video, Texte brut). Ces articles 
            peuvent etre publiés et rendus visibles à tous.
            Développé en toute autonomie, ce projet m'a permis d'appréhender le monde du déploiement. Tout d'abord hébergé sur Hostinger, je l'ai ensuite hébergé sur un serveur
            au travers de Docker et Nginx.
            `,
            ["Laravel", "PHP", "Blade","MySQL", "Hostinger", "Docker", "Nginx", "Debian", "Google Ads"],
            "etsionenparlait.png",
            "https://etsionenparlait.info"
        ),

        new Project(
            "WhatSecure",
            `
            WhatSecure est mon projet de fin d'études pour l'obtention du diplome de Licence. Il a été en binome sous la supervision d'un enseignant du parcours.
            En plus d'offrir les fonctionnalités principales d'une application de messagerie (echange de texte, images, videos), WhatSecure a l'avantage de se verouiller
            automatiquement si un autre utilisateur tente de visualiser vos messages en meme temps que vous.
            `,
            ["Dart", "FLutter", "Java", "Spring Boot", "MongoDB", "API REST", "WebSocket", "Cryptographie", "RSA", "AES"],
            "whatsecure.png",
            "https://www.canva.com/design/DAGJ1yqKEnk/AOHfPVVke0pdXABudRiKcQ/edit?utm_content=DAGJ1yqKEnk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        ),


        new Project(
            "USPN Maps",
            `
            USPN Maps est une application Android développée en Master 2. Son objectif principal est d'aider les utilisateurs à trouver les différentes salles du Campus de Villetaneuse.
            Elle propose la recherche de salles, la consultation des informations sur les salles et un itinéraire pour rejoindre les salles au sein du Campus. Les itinéraires sont obtenues
            grace à un serveur de tuiles hébergé sur un serveur via Docker et Nginx. USPN Maps a été déployé sur Google Play en tests internes.
            `,
            ["Extraction de données", "Python", "Kotlin", "Android Studio", "SQL", "SQLite", "OSM", "Nginx", "Docker", "Google Play"],
            "uspn_maps.jpg",
            "https://www.canva.com/design/DAG6EFcJvCk/bzHvMhHbxht4nr5zzOlg-w/edit?utm_content=DAG6EFcJvCk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        ),

        new Project(
            "ActiLife",
            `
            ActiLife est une application Android développée en Master 1. Son but est d'aider les utilisateurs à veiller sur leur santé. Elle leur offre des 
            fonctionnalités comme les rappels de sport, de sommeil, le suivi du poids et des calories. Elle a été conçue et développée en groupe de quatre.
            `,
            ["Java", "Android Studio", "SQL", "SQLite",],
            "actilife.png",
            "https://www.canva.com/design/DAG6D1_Wsjo/gRBNJAw85ES9K8FmEBexTQ/edit?utm_content=DAG6D1_Wsjo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        ),

        new Project(
            "Projet Client Serveur",
            `
            Ce projet d'apprentissage du langage Java a été fait en groupe de 3. Son but est de simuler les failures dans les environnements client-serveur.
            Il y'avait d'un coté les clients qui tentaient de télécharger des fichiers et de l'autre coté le serveur qui tentait de repondre aux différentes demandes.
            Il faut noter qu'une connexion sur le serveur etait coupée avec une probabilité P donnée rendant le téléchargement de blocs de fichiers fastidieus. Nous avons réussi ce 
            projet avec la note de 17/20.
            `,
            ["Java", "Thread", "Socket", "Concurrence", "ServerSocket", "File", "Système distribué"],
            "client_server.jpg",
            "https://drive.google.com/file/d/1ubdPsZOlrxZDWbHFOU9xTuxxzDyqpTBh/view?usp=sharing"
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
        this.projects,
        "cheick_adam",
        "+33 745 318 120"
    )

    getUser():User{
        return this.user;
    }
}