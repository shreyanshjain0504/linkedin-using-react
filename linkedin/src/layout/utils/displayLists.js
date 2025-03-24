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
import user4 from '../../assets/user-4.png'
import user5 from '../../assets/user-5.png'
import postImage1 from '../../assets/post-image-1.png'
import postImage2 from '../../assets/post-image-2.png'
import postImage3 from '../../assets/post-image-3.png'
import postImage4 from '../../assets/post-image-4.png'
import { COVER_PIC } from '../constants/constants'

export const profileDetails = [
    { profileActivity: "Your profile views", profileMetrics: 209 },
    { profileActivity: "Your post views", profileMetrics: 540 },
    { profileActivity: "Your connections", profileMetrics: 2918 }
]

export const sideProfileLink = [
    { imgLink: items, text: "My items" },
    { imgLink: premium, text: "Try Premium" }
]

export const recents = [
    { imgLink: recent, text: "Web Development" },
    { imgLink: recent, text: "User Interface" },
    { imgLink: recent, text: "Learn Online" },
    { imgLink: recent, text: "Code Better" },
    { imgLink: recent, text: "Group Learning" }
]

export const groups = [
    { imgLink: group, text: "Web Design Group" },
    { imgLink: group, text: "HTML & CSS Learners" },
    { imgLink: group, text: "Python & Javascript Group" },
    { imgLink: group, text: "Learn Coding Online" }
]

export const hashtags = [    
    { imgLink: hashtag, text: "webdevelopment" },
    { imgLink: hashtag, text: "userinterface" },
    { imgLink: hashtag, text: "onlinelearning" }
]

export const headerLinks = [
    { to: '/', className: "active-link", imgLink: home, text: "Home"},
    { to: 'network', imgLink: network, text: "My Network"},
    { to: 'jobs', imgLink: jobs, text: "Jobs"},
    { to: 'messages', imgLink: message, text: "Messages"},
    { to: 'notifications', imgLink: notification, text: "Notifications"},
]

export const sideBarNews = [
    { link: "https://huroorkee.ac.in/blog/high-demand-skills-for-the-next-10-years/#:~:text=Asked%20Questions%20(FAQ)-,1.,emerging%20technologies%20is%20highly%20beneficial.", text: "High demand for skill manpower", readBy: "1d ago ... 10,321 readers" },
    { link: "https://www.nucamp.co/blog/coding-bootcamp-india-ind-getting-a-job-in-tech-in-india-in-2025-the-complete-guide", text: "Careers growing horizontally too", readBy: "17h ago ... 5,087 readers" },
    { link: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment", text: "Less work visa for US, more on UK", readBy: "10h ago ... 8,675 readers" },
]

export let usefulLinks = [
    { link: "https://tekion.com/about-us", text: "About" },
    { link: "https://tekion.com/blog", text: "Accessibility" },
    { link: "https://tekion.com/trust-portal", text: "Help Center" },
    { link: "https://tekion.com/legal/privacy/privacy-policy", text: "Privacy Policy" },
    { link: "https://tekion.com/blog/tekion-tv-digital-display-option-from-tekion", text: "Advertising" },
    { link: "https://tekion.com/", text: "Get the App" },
    { link: "https://tekion.com/", text: "More" }
]

export let searchList = [
    { "id": 1, "text": "Shreyansh Jain" }, 
    { "id": 2, "text": "Krish Agrawal" }, 
    { "id": 3, "text": "Pankaj Kashyap" }, 
    { "id": 4, "text": "Arvind B." }, 
    { "id": 5, "text": "Sahaj Gupta" }, 
    { "id": 6, "text": "Aarif Khan" }, 
]

export let skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JS" },
]

export const names = [
    "Shreyansh Jain", "Sahaj Gupta", "Krish Agrawal", "Arvind B.", "Pankaj Kashyap"
]

export const roles = [
    "ASE Intern", "SDE Intern", "Quant Developer", "Business Associate", "Data analyst"
]

export const dateList = [
    "19/03/2025", "20/03/2025", "21/03/2025", "22/03/2025", "23/03/2025"
]

export const sortDateList = [
    "2025-03-19", "2025-03-20", "2025-03-21", "2025-03-22", "2025-03-23"
]

export const profileImageList = [
    user1, user2, user3, user4, user5
]

export const postImageList = [
    postImage1, postImage2, postImage3, postImage4, COVER_PIC
]