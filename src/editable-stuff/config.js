// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aditya",
  middleName: "",
  lastName: "Chamoli",
  message: "Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/adichamoli",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/aditya.chamoli",
    },
    {
      image: "fa-kaggle",
      url: "https://www.kaggle.com/adichamoli",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/aditya-chamoli-5514a550/",
    },
    {
      image: "fa-hackerrank",
      url: "https://www.hackerrank.com/adichamoli",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "My name is Aditya Chamoli. I am working as Senior Software Developer in Amdocs India. \
	My work mainly involves Development in C, C#, Unix, Sql, RestFul Web Services. \
	I have deep inclination towards Data Science and Machine Learning. In my free time, I like to \
	learn about new tools and technology. I'm most passionate about giving back to the community, \
	and my goal is to pursue this passion within the field of software engineering. \
	I believe education should be free and reach to everyone, to support i keep on updating \
	my Github Repos and encourage to learn, fork or update to it.\
	Also One should never stop learning.",
  resume: require("../editable-stuff/resume.pdf"),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "adichamoli",
  reposLength: 0,
  specificRepos: ["Data-Structures", "gRPC_Python", "MachineLearning", "DataScience", "SpringBootAngularMongo", "DeepLearning", "ML-Data-Science-Projects", "ProjectEulerHackerrank", "HackerRankPython", "Database"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 80 },
	{ name: "C#", value: 65 },
    { name: "Python", value: 90 },
	{ name: "Java", value: 60 },
    { name: "SQL", value: 75 },
	{ name: "PowerShell", value: 75 },
    { name: "Data Structures", value: 85 },
	{ name: "Pro*C", value: 70 },
    { name: "Configuration Management", value: 80 },
	{ name: "Data Science", value: 60 },
	{ name: "Machine Learning", value: 70 },
	{ name: "Web Services", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
	{ name: "Team Work", value: 90 },
	{ name: "Versatility", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering, Data Science and Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "adichamoli@gmail.com",
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
