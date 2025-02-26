import items from '../../assets/items.png'
import premium from '../../assets/premium.png'
import recent from '../../assets/recent.png'
import group from '../../assets/group.png'
import hashtag from '../../assets/hashtag.png'
import home from '../../assets/home.png'
import network from '../../assets/network.png'
import jobs from '../../assets/jobs.png'
import notification from '../../assets/notification.png'
import message from '../../assets/message.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import postImage1 from '../../assets/post-image-1.png'
import postImage2 from '../../assets/post-image-2.png'
import postImage3 from '../../assets/post-image-3.png'

export const profileDetails = [
    { colOneDetails: "Your profile views", colTwoDetails: 209 },
    { colOneDetails: "Your post views", colTwoDetails: 540 },
    { colOneDetails: "Your connections", colTwoDetails: 2918 }
];

export const sideProfileLink = [
    { imgLink: items, text: "My items" },
    { imgLink: premium, text: "Try Premium" }
];

export const recents = [
    { imgLink: recent, text: "Web Development" },
    { imgLink: recent, text: "User Interface" },
    { imgLink: recent, text: "Learn Online" },
    { imgLink: recent, text: "Code Better" },
    { imgLink: recent, text: "Group Learning" }
];

export const groups = [
    { imgLink: group, text: "Web Design Group" },
    { imgLink: group, text: "HTML & CSS Learners" },
    { imgLink: group, text: "Python & Javascript Group" },
    { imgLink: group, text: "Learn Coding Online" }
];

export const hashtags = [    
    { imgLink: hashtag, text: "webdevelopment" },
    { imgLink: hashtag, text: "userinterface" },
    { imgLink: hashtag, text: "onlinelearning" }
];

export const headerLinks = [
    { to: '/', className: "active-link", imgLink: home, text: "Home"},
    { to: 'network', imgLink: network, text: "My Network"},
    { to: 'jobs', imgLink: jobs, text: "Jobs"},
    { to: 'messages', imgLink: message, text: "Messages"},
    { to: 'notifications', imgLink: notification, text: "Notifications"},
];

export const sideBarNews = [
    { link: "https://huroorkee.ac.in/blog/high-demand-skills-for-the-next-10-years/#:~:text=Asked%20Questions%20(FAQ)-,1.,emerging%20technologies%20is%20highly%20beneficial.", text: "High demand for skill manpower", readBy: "1d ago ... 10,321 readers" },
    { link: "https://www.nucamp.co/blog/coding-bootcamp-india-ind-getting-a-job-in-tech-in-india-in-2025-the-complete-guide", text: "Careers growing horizontally too", readBy: "17h ago ... 5,087 readers" },
    { link: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment", text: "Less work visa for US, more on UK", readBy: "10h ago ... 8,675 readers" },
];

export let usefulLinks = [
    { link: "https://tekion.com/about-us", text: "About" },
    { link: "https://tekion.com/blog", text: "Accessibility" },
    { link: "https://tekion.com/trust-portal", text: "Help Center" },
    { link: "https://tekion.com/legal/privacy/privacy-policy", text: "Privacy Policy" },
    { link: "https://tekion.com/blog/tekion-tv-digital-display-option-from-tekion", text: "Advertising" },
    { link: "https://tekion.com/", text: "Get the App" },
    { link: "https://tekion.com/", text: "More" }
];

export let searchList = [
    { "id": 1, "text": "Shreyansh Jain" }, 
    { "id": 2, "text": "Aarif Khan" }, 
    { "id": 3, "text": "Deepak Yadav" }, 
    { "id": 4, "text": "Divyansh Pandey" }, 
    { "id": 5, "text": "Shubham Yadav" }, 
    { "id": 6, "text": "Saurabh Raj" }, 
    { "id": 7, "text": "Sahil Mahajan" }, 
    { "id": 8, "text": "Jatin Nair" }, 
    { "id": 9, "text": "Anmol Singhaniya" }
];

const formatDate = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${yyyy}`;
};

export let posts = [
    {
        postTime: "18/02/2025",
        iconImage: user1,
        time: "2025-02-18",
        content: "post1",
        image: postImage1,
        author: {
            name: "Shreyansh Jain",
            designation: "ASE Intern Tekion"
        },
        reactions: 0,
        comments: 0
    },
    {
        postTime: "19/02/2025",
        time: "2025-02-19",
        iconImage: user2,
        content: "post2",
        image: postImage2,
        author: {
            name: "Divyansh Pandey",
            designation: "SDE Intern Amazon"
        },
        reactions: 0,
        comments: 0
    },
    {
        postTime: "20/02/2025",
        time: "2025-02-20",
        iconImage: user3,
        content: "post3",
        image: postImage3,
        author: {
            name: "Shubham Yadav",
            designation: "SDE Intern Oracle"
        },
        reactions: 0,
        comments: 0
    },
    {
        postTime: "21/02/2025",
        time: "2025-02-21",
        iconImage: user2,
        content: "post4",
        image: postImage1,
        author: {
            name: "Divyansh Pandey",
            designation: "SDE Intern Amazon"
        },
        reactions: 0,
        comments: 0
    },
];

export let skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JS" },
];

export let experience = [
    {position: "ASE Intern", company: "Tekion", from: "Jan 2025", to: "Present", desc: "FE Intern", time: 1739877238522, type: "experience"}
]

export let education = [
    {position: "Computer Science and Engineering", company: "NIT Raipur", from: "Dec 2021", to: "June 2025", desc: "Engineering", time: 1739877238522, type: "education"}
]

export let filterArray = [
    
]