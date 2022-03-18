import { images } from "../constants";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";

export const skills = [
    {
        icon: images.azure,
        tag: "Azure"
    },
    {
        icon: images.bash,
        tag: "Bash/Shell"
    },
    {
        icon: images.c,
        tag: "C"
    },
    {
        icon: images.css3,
        tag: "CSS3"
    },
    {
        icon: images.figma,
        tag: "Figma"
    },
    {
        icon: images.firebase,
        tag: "Firebase"
    },
    {
        icon: images.git,
        tag: "Git"
    },
    {
        icon: images.html5,
        tag: "HTML5"
    },
    {
        icon: images.javascript,
        tag: "JS"
    },
    {
        icon: images.mysql,
        tag: "MySQL"
    },
    {
        icon: images.nodejs,
        tag: "Node.js"
    },
    {
        icon: images.office365,
        tag: "Office 365"
    },
    {
        icon: images.perl,
        tag: "Perl"
    },
    {
        icon: images.python,
        tag: "Python"
    },
    {
        icon: images.raspberypi,
        tag: "Raspberry Pi"
    },
    {
        icon: images.reactjs,
        tag: "React.js"
    },
    {
        icon: images.sass,
        tag: "Sass"
    },
    {
        icon: images.swift,
        tag: "Swift"
    },
    {
        icon: images.terraform,
        tag: "Terraform"
    },
    {
        icon: images.vuejs,
        tag: "Vue.js"
    },
];

export const experiences = [
    {
        icon: <MdOutlineWork />,
        year: "2021 - Present",
        title: "Software Engineer",
        institution: "Environmental Resources Management Inc."
    },
    {
        icon: <GiGraduateCap />,
        year: "2019 - Present",
        title: "Bachelor of Engineering (Honours) (Software)",
        institution: "University of New South Wales"
    },
    {
        icon: <MdOutlineWork />,
        year: "2018 - 19",
        title: "Service Desk Engineer (Intern)",
        institution: "Nexon Asia Pacific"
    }
]

export const projects = [
    {
        category: "Web",
        name: "2048",
        description: "This is a clone I made of the popular 2048 game. I built this in a React.js environment and deployed it on Netlify.",
        chips: ["React.js", "Netlify", "Web"],
        repository: "https://github.com/abara15/2048",
        link: "https://2048-abara15.netlify.app/",
        imgUrl: `${images.proj2048}`
    },
    {
        category: "Other",
        name: "Castle Defence",
        description: "This C program simulates an imaginary Realm under attack. It involved creating Lands in the Realm and building Towers to defend a Castle, as well as managing Enemy movement as they pass through the Lands and the use of Towers against the Enemies and any damage the Castle receives.",
        chips: ["C", "Game", "CLI", "Other"],
        repository: "https://github.com/abara15/castle-defense",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "iOS",
        name: "chatBot",
        description: "This is a real-time iOS messaging app I developed for my HSC Major Work. This app is powered by a Firebase back-end and allows users to log in and send photos and texts to their friends!",
        chips: ["Swift", "Firebase", "iOS"],
        repository: "https://github.com/abara15/chatbot",
        // link: "https://{URL}",
        imgUrl: `${images.projChatBot}`
    },
    {
        category: "Other",
        name: "Cowrie",
        description: "This is a simple shell written in C implementing a small subset of the core functionality typical of a Unix/Linux shell.",
        chips: ["C", "Shell", "CLI", "Other"],
        repository: "https://github.com/abara15/cowrie",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Other",
        name: "Emu",
        description: "Emu is a C program that emulates the MIPS assembly language. It prints and executes MIPS instructions.",
        chips: ["C", "MIPS", "CLI", "Other"],
        repository: "https://github.com/abara15/emu",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Other",
        name: "Girt",
        description: "This Shell program implements a subset of the commands from the version control system, Git.",
        chips: ["Shell", "Git", "CLI", "Other"],
        repository: "https://github.com/abara15/girt",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Other",
        name: "Information Retrieval",
        description: "This information retrieval system written in C gives information on documents including relative term frequency adjusted for document length, inverse document frequency, and tf-idf.",
        chips: ["C", "tf-idf", "CLI", "Other"],
        repository: "https://github.com/abara15/information-retrieval",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Web",
        name: "Portfolio",
        description: "This is my personal portfolio I built in React.js and Sass. It includes fun features such as HOC wrappers and motion animations.",
        chips: ["React.js", "Sass", "Web"],
        repository: "https://github.com/abara15/abara15.github.io",
        link: "https://abara15.github.io",
        imgUrl: `${images.projPortfolio}`
    },
    {
        category: "Other",
        name: "Simple Search Engine",
        description: "This C program built to search a collection of 'web pages' using the Weighted PageRank algorithm. I built a graph structure and calculated Weighted PageRanks, ranking pages based on these values.",
        chips: ["C", "PageRank", "CLI", "Other"],
        repository: "https://github.com/abara15/simple-search-engine",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Python",
        name: "slackr",
        description: "This is a Slack-like platform made as part of a uni group project. Using a pre-built front-end, we wrote functions in the Python back-end dealing with authentication, search, messaging, channels, and users.",
        chips: ["Python", "React.js", "Web"],
        repository: "https://github.com/abara15/slackr",
        // link: "https://{URL}",
        imgUrl: `${images.projSlackr}`
    },
    {
        category: "Web",
        name: "Weather Metrics",
        description: "This is a Flask Web App built as a group uni project. Using the AccuWeather API, relevant weather data is pulled and displayed to the user on a HTML template.",
        chips: ["Python", "Flask", "JS", "API", "Web"],
        repository: "https://github.com/abara15/weathermetrics",
        // link: "https://{URL}",
        imgUrl: `${images.projWeatherMetrics}`
    },
]