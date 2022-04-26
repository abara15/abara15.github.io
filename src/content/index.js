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
        category: "Python",
        name: "Article API",
        description: "A simple Article API in Python for a technical test. This takes in endpoints which store articles in the service, retrieve articles from the service, and return summary information on tags.",
        chips: ["Python", "Flask", "API", "MongoDB"],
        repository: "https://github.com/abara15/ArticleAPI-python",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Web",
        name: "2048",
        description: "This is a clone I made of the popular 2048 game. I built this in a React.js environment and deployed it on Netlify.",
        chips: ["React.js", "Netlify"],
        repository: "https://github.com/abara15/2048",
        link: "https://2048-abara15.netlify.app/",
        imgUrl: `${images.proj2048}`
    },
    {
        category: "iOS",
        name: "chatBot",
        description: "This is a real-time iOS messaging app I developed for my HSC Major Work. This app is powered by a Firebase back-end and allows users to log in and send photos and texts to their friends!",
        chips: ["Swift", "Firebase"],
        repository: "https://github.com/abara15/chatbot",
        // link: "https://{URL}",
        imgUrl: `${images.projChatBot}`
    },
    {
        category: "CLI",
        name: "Cowrie",
        description: "This is a simple shell written in C implementing a small subset of the core functionality typical of a Unix/Linux shell.",
        chips: ["C", "Shell"],
        repository: "https://github.com/abara15/cowrie",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "CLI",
        name: "Girt",
        description: "This Shell program implements a subset of the commands from the version control system, Git.",
        chips: ["Shell", "Git"],
        repository: "https://github.com/abara15/girt",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "CLI",
        name: "Information Retrieval",
        description: "This information retrieval system written in C gives information on documents including relative term frequency adjusted for document length, inverse document frequency, and tf-idf.",
        chips: ["C", "tf-idf"],
        repository: "https://github.com/abara15/information-retrieval",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Web",
        name: "Portfolio",
        description: "This is my personal portfolio I built in React.js and Sass. It includes fun features such as HOC wrappers and motion animations.",
        chips: ["React.js", "Sass"],
        repository: "https://github.com/abara15/abara15.github.io",
        link: "https://abara15.github.io",
        imgUrl: `${images.projPortfolio}`
    },
    {
        category: "CLI",
        name: "Simple Search Engine",
        description: "This C program built to search a collection of 'web pages' using the Weighted PageRank algorithm. I built a graph structure and calculated Weighted PageRanks, ranking pages based on these values.",
        chips: ["C", "PageRank"],
        repository: "https://github.com/abara15/simple-search-engine",
        // link: "https://{URL}",
        imgUrl: `${images.projDefault}`
    },
    {
        category: "Python",
        name: "slackr",
        description: "This is a Slack-like platform made as part of a uni group project. Using a pre-built front-end, we wrote functions in the Python back-end dealing with authentication, search, messaging, channels, and users.",
        chips: ["Python", "React.js"],
        repository: "https://github.com/abara15/slackr",
        // link: "https://{URL}",
        imgUrl: `${images.projSlackr}`
    },
    {
        category: "Python",
        name: "Weather Metrics",
        description: "This is a Flask Web App built as a group uni project. Using the AccuWeather API, relevant weather data is pulled and displayed to the user on a HTML template.",
        chips: ["Python", "Flask", "API", "HTML/CSS", "JS"],
        repository: "https://github.com/abara15/weathermetrics",
        // link: "https://{URL}",
        imgUrl: `${images.projWeatherMetrics}`
    },
]