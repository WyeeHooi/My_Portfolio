import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  turtleIcon,
  puzzleIcon,
  movieIcon,
  aspNet,
  html,
  css,
  js,
  bootstrap,
  git,
  reactjs,
  wp,
  py,
  java,
  tw,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  resume,
  mockup1,
  mockup2,
  mockup3,
  mockup4,
  mockup5,
  mockup6,
  mockup7,
} from "../assets";

export const baseUrl = "/My_Portfolio/";
export const navigation = [
  {
    id: "0",
    title: "Home",
    url: `${baseUrl}/`,
  },
  {
    id: "1",
    title: "Project",
    url: "#projects",
  },
  {
    id: "2",
    title: "Resume",
    url: `${baseUrl}/WongHooiYeeResume.pdf`,
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Playing with my pets",
    icon: turtleIcon,
  },
  {
    id: "1",
    title: "Building with LEGO bricks",
    icon: puzzleIcon,
  },
  {
    id: "2",
    title: "Watching movies",
    icon: movieIcon,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "ASP.Net",
    icon: aspNet,
    width: 80,
    height: 80,
  },
  {
    id: "1",
    title: "HTML 5",
    icon: html,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "CSS",
    icon: css,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "JavaScript",
    icon: js,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Tailwind CSS",
    icon: tw,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Bootstrap",
    icon: bootstrap,
    width: 38,
    height: 32,
  },
  {
    id: "8",
    title: "Java",
    icon: java,
    width: 34,
    height: 35,
  },
  {
    id: "9",
    title: "Python",
    icon: py,
    width: 34,
    height: 34,
  },
  {
    id: "10",
    title: "Git",
    icon: git,
    width: 34,
    height: 34,
  },
  {
    id: "11",
    title: "React Js",
    icon: reactjs,
    width: 26,
    height: 34,
  },
  {
    id: "12",
    title: "WordPress",
    icon: wp,
    width: 38,
    height: 32,
  },
];



export const projects = [
  {
    id: "0",
    title: "Baby Care E-commerce Website",
    text: "A team project built with PHP, HTML, Tailwind CSS, and JavaScript. I learned session management and JSON for handling user data efficiently.",
    backgroundUrl: card1,
    imageUrl: mockup1,

  },
  {
    id: "1",
    title: "Corporate Website",
    text: "A freelance WordPress project where I developed a professional, responsive site tailored to the client’s branding and business needs.",
    backgroundUrl: card2,
    imageUrl: mockup2,
    pageURL: "https://vibra.com.my",
    light: true,
  },
  {
    id: "2",
    title: "Competition Program Website",
    text: "An internship project focused on revamping an existing site with a more modern and stylish design while preserving its functionality.",
    backgroundUrl: card3,
    imageUrl: mockup3,
    pageURL: "https://ipfc.ucsiuniversity.edu.my",
  },
  {
    id: "3",
    title: "Competition Program Website",
    text: "Similar, an internship project focused on revamping an existing site with a more modern and stylish design while preserving its functionality.",
    backgroundUrl: card4,
    imageUrl: mockup4,
    pageURL: "https://ppc.ucsiuniversity.edu.my/",
    light: true,
  },
  {
    id: "4",
    title: "University Convo Website",
    text: "Transformed a static HTML site into a dynamic ASP.NET framework, improving scalability and ease of content management.",
    backgroundUrl: card5,
    imageUrl: mockup5,
    pageURL: "https://apps.ucsiuniversity.edu.my/convocation2024/",
  },
  {
    id: "5",
    title: "University OpenDay Website",
    text: "Built from scratch based on a Figma design, translating UI/UX concepts into a fully functional website using HTML, CSS, and JavaScript.",
    backgroundUrl: card6,
    imageUrl: mockup6,
    pageURL: "",
  },
  {
    id: "6",
    title: "Organization Website",
    text: "A team-based WordPress project where we developed an engaging platform to effectively showcase the organization’s mission and services.",
    backgroundUrl: card1,
    imageUrl: mockup7,
    pageURL: "https://www.youthbeyondboundaries.com/",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
