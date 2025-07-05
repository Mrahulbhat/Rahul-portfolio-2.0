// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import php from './assets/tech_logo/php.svg';
import playwright from './assets/playwright.svg'
import kotlin from './assets/kotlin.svg';
import reactnative from './assets/tech_logo/reactnative.svg'


// Project Section Logo's
import c4p from './assets/c4p.png';
import spotify from './assets/spotify.jpg'
import serviceCare from './assets/ServiceCare.png'
import cybercrime from './assets/cybercrime.png'
import cashbook from './assets/cashbook.png'


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Angular', logo: angularLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: "React Native", logo: reactnative }
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Springboot', logo: springbootLogo },
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Php', logo: php }
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'Kotlin', logo: kotlin }
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'PlayWright', logo: playwright }
        ],
    },
];

export const projects = [
    {
        id: 0,
        title: "Indian Music Genre Classification",
        description: "My Final year machine Learning Project",
        image: spotify,
        tags: ["React JS", "Node.js", "Mongo DB", "Express", "CNN", "Flask", "Tailwind CSS"],
        github: "https://github.com/codingmastr/CSPrep",
        webapp: "https://csprep.netlify.app/",
    },
    {
        id: 1,
        title: "Service Care",
        description: "Personal Vehicle Maintenance Tracking for Web, iOS & Android App",
        image: serviceCare,
        tags: ["React JS", "Express JS", "Node JS", "Mongo DB", "Daisy UI", "Tailwind CSS", "React Native"],
        github: "https://github.com/codingmastr/Movie-Recommendation-App",
        webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
        id: 2,
        title: "Code 4 Placements",
        description: "Designed a coding platform to track my coding and placement preparation",
        image: c4p,
        tags: ["React JS", "Mongo DB", "Node JS", "Express Js", "Tailwind CSS"],
        github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
        webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
        id: 3,
        title: "Cyber Crime Management System",
        description: "A PHP based DBMS mini-project for tracking cybercrime incidents",
        image: cybercrime,
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MYSQL", "XAMPP Server"],
        github: "https://github.com/codingmastr/cmtk-email-validator",
        webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
        id: 4,
        title: "Cashbook App",
        description: "A PHP based cashbook app to track my expenses",
        image: cashbook,
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MYSQL", "XAMPP Server"],
        github: "https://github.com/codingmastr/cmtk-email-validator",
        webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    }
];  