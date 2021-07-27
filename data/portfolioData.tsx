import RoutineLogo from "../public/svg/routine.svg";
import SecuritySLipLogo from "../public/images/security-slip.png";
import ImmaCrossyBoxLogo from "../public/images/imma-crossy-box.png";
import MateMatirunLogo from "../public/images/matematirun.png"
import KnoledgeLogo from "../public/svg/knoledge.svg";
import LatusLogo from "../public/svg/latus.svg";
import VideoEditing from "../public/svg/video-editing.svg";

import { faAndroid, faPhp, faUnity } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup, faCode, faCube, faVectorSquare, faBurn, faShareAlt, faFileDownload, faDonate, faCopy, faFilm, faClock, faShapes } from "@fortawesome/free-solid-svg-icons";

export default function getData()
{
    return [
        {
            id: "routine",
            name: "Routine.",
            icon: RoutineLogo,
            href: "/portfolio/routine",
            color: "lime",
            desc: "Daily routine reminder and simple digital wellbeing android application",
            longDesc: "Routine is a reminder and simple digital wellbeing application built using Android SDK for our Mobile Application Programming final project. It\'s a simple alarm clock that is repeated automatically corresponding to your daily routine. Featuring simple digital wellbeing to check how consistent you are with your daily routine, we hope that it will help you get more consistent doing your daily routine.\n\nIn this project, I work mainly on the design of the application (UI, UX), and a little bit of backend for the frontend element",
            dcs: [
                {
                    name: "Android SDK",
                    icon: faAndroid
                },
                {
                    name: "Minimum API Level 21",
                    icon: faLayerGroup
                },
                {
                    name: "Open Source",
                    icon: faCode,
                    link: "https://github.com/reaperastrea/Routine"
                }
            ],
            img: [
                {
                    type: "portrait",
                    alt: "Routine splash screen",
                    src: "/images/routine/splash-screen.png",
                    blurSrc: "/images/routine/blur/splash-screen.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine first setup",
                    src: "/images/routine/first-setup.png",
                    blurSrc: "/images/routine/blur/first-setup.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine dashboard panel",
                    src: "/images/routine/dashboard.png",
                    blurSrc: "/images/routine/blur/dashboard.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine list panel",
                    src: "/images/routine/routine-list.png",
                    blurSrc: "/images/routine/blur/routine-list.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine analytics panel",
                    src: "/images/routine/analytics.png",
                    blurSrc: "/images/routine/blur/analytics.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine settings panel",
                    src: "/images/routine/settings.png",
                    blurSrc: "/images/routine/blur/settings.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine add routine",
                    src: "/images/routine/add-routine.png",
                    blurSrc: "/images/routine/blur/add-routine.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine heads up notification",
                    src: "/images/routine/notification-heads-up.png",
                    blurSrc: "/images/routine/blur/notification-heads-up.png",
                    width: 1080,
                    height: 2400,
                },
                {
                    type: "portrait",
                    alt: "Routine notification",
                    src: "/images/routine/notification.png",
                    blurSrc: "/images/routine/blur/notification.png",
                    width: 1080,
                    height: 2400,
                },
            ]
        },
        {
            id: "security-slip",
            name: "Security SLip",
            icon: SecuritySLipLogo,
            href: "/portfolio/security-slip",
            color: "orange",
            desc: "It\'s an \"security- checkup\" based simulation game",
            longDesc: "Security SLip or we like to call it SSL lol, is a simulation game where your job is to make sure all the people who come in, come ou- I mean umm... They have proper entry cards. We got inspired by the game Paper Please, we thought since it\'s a 2D game why not make it 3D with a little bit more twist?\nThis game was built for our Game Design and Development 2 final project. With the limited time given, there are still many game components that are still not yet implemented.\n\nIn this project, I work mainly on the design of the game (UI, UX). I\'m also doing the backend for the game with the rest of the team.",
            dcs: [
                {
                    name: "Unity 2020.3.0f1",
                    icon: faUnity
                },
                {
                    name: "3D",
                    icon: faCube
                },
                {
                    name: "Game Download",
                    icon: faFileDownload,
                    link: "https://umn.itch.io/security-slip"
                },
                {
                    name: "Open Source",
                    icon: faCode,
                    link: "https://github.com/Andrioeffendi31/Security-SLip"
                }
            ],
            img: [
                {
                    type: "landscape",
                    alt: "Security SLip main menu",
                    src: "/images/security-slip/main-menu.png",
                    blurSrc: "/images/security-slip/blur/main-menu.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Security SLip gameplay",
                    src: "/images/security-slip/gameplay.png",
                    blurSrc: "/images/security-slip/blur/gameplay.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Security SLip computer UI",
                    src: "/images/security-slip/computer-ui.png",
                    blurSrc: "/images/security-slip/blur/computer-ui.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Security SLip upgrade UI",
                    src: "/images/security-slip/upgrade-ui.png",
                    blurSrc: "/images/security-slip/blur/upgrade-ui.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Security SLip database searching UI",
                    src: "/images/security-slip/db-searching.png",
                    blurSrc: "/images/security-slip/blur/db-searching.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
            ]
        },
        {
            id: "imma-crossy-box",
            name: "Imma Crossy Box",
            icon: ImmaCrossyBoxLogo,
            href: "/portfolio/imma-crossy-box",
            color: "dayker",
            desc: "It's an \"action- adventure\" based simulation game",
            longDesc: "Imma Crossy Box is a simulation game where you are a box that only had one goal. Deliver itself into someone\’s house. We got inspired by the game crossy road on mobile. From that, we want to make it more challenging and by making the main player a box and controlling it with multiple inputs, we think we reached our goal. This game was built for our Computer Graphics and Animation final project. \n\nIn this project, I work mainly on the design of the game (UI, UX). I\'m also doing the backend for the game with the rest of the team.",
            dcs: [
                {
                    name: "Unity 2020.1.11f1",
                    icon: faUnity
                },
                {
                    name: "3D",
                    icon: faCube
                },
                {
                    name: "Game Download",
                    icon: faFileDownload,
                    link: "https://github.com/negpastalia/Imma-Crossy-Box/releases"
                },
                {
                    name: "Open Source",
                    icon: faCode,
                    link: "https://github.com/negpastalia/Imma-Crossy-Box"
                }
            ],
            img: [
                {
                    type: "landscape",
                    alt: "Imma Crossy Box main menu",
                    src: "/images/imma-crossy-box/main-menu.png",
                    blurSrc: "/images/imma-crossy-box/blur/main-menu.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Imma Crossy Box stage selection screen",
                    src: "/images/imma-crossy-box/stage-select.png",
                    blurSrc: "/images/imma-crossy-box/blur/stage-select.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Imma Crossy Box gameplay stage 1",
                    src: "/images/imma-crossy-box/gameplay-1.png",
                    blurSrc: "/images/imma-crossy-box/blur/gameplay-1.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Imma Crossy Box gameplay fail",
                    src: "/images/imma-crossy-box/fail.png",
                    blurSrc: "/images/imma-crossy-box/blur/fail.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Imma Crossy Box gameplay success",
                    src: "/images/imma-crossy-box/success.png",
                    blurSrc: "/images/imma-crossy-box/blur/success.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Imma Crossy Box gameplay stage 2",
                    src: "/images/imma-crossy-box/gameplay-2.png",
                    blurSrc: "/images/imma-crossy-box/blur/gameplay-2.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Imma Crossy Box gameplay stage 3",
                    src: "/images/imma-crossy-box/gameplay-3.png",
                    blurSrc: "/images/imma-crossy-box/blur/gameplay-3.png",
                    width: 1280,
                    height: 720,
                    layout: "responsive"
                },
            ]
        },
        {
            id: "matematirun",
            name: "MateMatirun",
            icon: MateMatirunLogo,
            href: "/portfolio/matematirun",
            color: "cloud",
            desc: "A math learning based rhythm game with RPG spice into it",
            longDesc: "MateMatirun is a math learning based rhythm game, where you do the rhythm while doing some math questions at the same time until the end of the song. It was built for our Game Design and Development 1 final project. We combined our team ideas into one, and the result is spectacular! at least it\'s what we think.\n\nIn this project, I work mainly on the design of the game (UI, UX). I\'m also doing the backend for the game with the rest of the team.",
            dcs: [
                {
                    name: "Unity 2020.1.11f1",
                    icon: faUnity
                },
                {
                    name: "2D",
                    icon: faVectorSquare
                },
                {
                    name: "Contains Ads",
                    icon: faDonate
                },
                {
                    name: "Android Game",
                    icon: faAndroid,
                    link: "https://play.google.com/store/apps/details?id=com.Negiogeru.MateMatirun"
                },
                {
                    name: "Open Source",
                    icon: faCode,
                    link: "https://github.com/2haus/MateMatirun"
                }
            ],
            img: [
                {
                    type: "portrait",
                    alt: "MateMatirun splash screen",
                    src: "/images/matematirun/splash-screen.png",
                    blurSrc: "/images/matematirun/blur/splash-screen.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun main menu",
                    src: "/images/matematirun/main-menu.png",
                    blurSrc: "/images/matematirun/blur/main-menu.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun song selection menu",
                    src: "/images/matematirun/song-select.png",
                    blurSrc: "/images/matematirun/blur/song-select.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun difficulty selection menu",
                    src: "/images/matematirun/difficulty-select.png",
                    blurSrc: "/images/matematirun/blur/difficulty-select.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun gameplay",
                    src: "/images/matematirun/gameplay.png",
                    blurSrc: "/images/matematirun/blur/gameplay.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun score",
                    src: "/images/matematirun/score.png",
                    blurSrc: "/images/matematirun/blur/score.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun settings",
                    src: "/images/matematirun/settings.png",
                    blurSrc: "/images/matematirun/blur/settings.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
                {
                    type: "portrait",
                    alt: "MateMatirun credits",
                    src: "/images/matematirun/credits.png",
                    blurSrc: "/images/matematirun/blur/credits.png",
                    width: 1080,
                    height: 2400,
                    layout: "responsive"
                },
            ]
        },
        {
            id: "knoledge",
            name: "Knoledge",
            icon: KnoledgeLogo,
            href: "/portfolio/knoledge",
            color: "chocolate",
            desc: "Education Management Web Application made with CodeIgniter 3",
            longDesc: "Knoledge is a web application design for educational institutions to manage either students or employees according to their educational system. Teachers can assign scores, manage re-review requests and see how their students performing throughout their education. The student itself can also be logged in to access and view scores. This project was built for our Web Programming final project\n\nIn this project, I work mainly on the sketch up design for the web application itself (UI, UX), later on, that sketch up design get perfected by my other team member. I\'m also doing the backend for the web application with the rest of the team.",
            dcs: [
                {
                    name: "Code Igniter 3",
                    icon: faBurn
                },
                {
                    name: "Content Management System",
                    icon: faCopy
                },
                {
                    name: "Open Source",
                    icon: faCode,
                    link: "https://github.com/Itsakaseru/Knoledge"
                }
            ],
            img: [
                {
                    type: "landscape",
                    alt: "Knoledge splash screen",
                    src: "/images/knoledge/splash-screen.png",
                    blurSrc: "/images/knoledge/blur/splash-screen.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge homepage",
                    src: "/images/knoledge/home.png",
                    blurSrc: "/images/knoledge/blur/home.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge login",
                    src: "/images/knoledge/login.png",
                    blurSrc: "/images/knoledge/blur/login.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge student dashboard",
                    src: "/images/knoledge/student-dashboard.png",
                    blurSrc: "/images/knoledge/blur/student-dashboard.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge student request review",
                    src: "/images/knoledge/student-request-review.png",
                    blurSrc: "/images/knoledge/blur/student-request-review.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge teacher dashboard",
                    src: "/images/knoledge/teacher-dashboard.png",
                    blurSrc: "/images/knoledge/blur/teacher-dashboard.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge admin dashboard",
                    src: "/images/knoledge/admin-dashboard.png",
                    blurSrc: "/images/knoledge/blur/admin-dashboard.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge admin student list",
                    src: "/images/knoledge/admin-student-list.png",
                    blurSrc: "/images/knoledge/blur/admin-student-list.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge admin subject list",
                    src: "/images/knoledge/admin-subject-list.png",
                    blurSrc: "/images/knoledge/blur/admin-subject-list.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge admin student info",
                    src: "/images/knoledge/admin-student-info.png",
                    blurSrc: "/images/knoledge/blur/admin-student-info.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Knoledge admin student info edit",
                    src: "/images/knoledge/admin-student-info-edit.png",
                    blurSrc: "/images/knoledge/blur/admin-student-info-edit.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                }
            ]
        },
        {
            id: "latus",
            name: "Latus",
            icon: LatusLogo,
            href: "/portfolio/latus",
            color: "lavender",
            desc: "Pure PHP, simple social media website",
            longDesc: "Latus is a very simple social media website built for our Web Programming mid-term project using HTML, CSS and pure PHP. Upon login you can discover \"friends\" that you can visit and comment on their own posts, it\'s kinda like Twitter but more open to the public. You can change your profile picture, change your profile theme, add a background image to your profile, make a post either with text and or a picture added in.\n\nIn this project, I work mainly on the design for the website. I\'m also doing the backend for the website with the rest of the team.",
            dcs: [
                {
                    name: "PHP",
                    icon: faPhp
                },
                {
                    name: "Social Media",
                    icon: faShareAlt
                },
                {
                    name: "Open Source",
                    icon: faCode,
                    link: "https://github.com/Itsakaseru/Latus"
                }
            ],
            img: [
                {
                    type: "landscape",
                    alt: "Latus homepage",
                    src: "/images/latus/homepage.png",
                    blurSrc: "/images/latus/blur/homepage.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Latus login",
                    src: "/images/latus/login.png",
                    blurSrc: "/images/latus/blur/login.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Latus register",
                    src: "/images/latus/register.png",
                    blurSrc: "/images/latus/blur/register.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Latus dashboard",
                    src: "/images/latus/dashboard.png",
                    blurSrc: "/images/latus/blur/dashboard.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Latus profile",
                    src: "/images/latus/profile-1.png",
                    blurSrc: "/images/latus/blur/profile-1.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Latus profile",
                    src: "/images/latus/profile-2.png",
                    blurSrc: "/images/latus/blur/profile-2.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                },
                {
                    type: "landscape",
                    alt: "Latus friend page",
                    src: "/images/latus/friend.png",
                    blurSrc: "/images/latus/blur/friend.png",
                    width: 1920,
                    height: 1080,
                    layout: "responsive"
                }
            ]
        },
        {
            id: "video-editing-konmul",
            name: "Sejarah Video Games",
            icon: VideoEditing,
            href: "/portfolio/video-editing-konmul",
            color: "cyan",
            desc: "All about the history of video games",
            longDesc: "This project was made for our multimedia concept final project. Our main topic was to talk about the history of video games, from and after the 2000s era. Our group worked together to write the script, translate it and prepare for recording sessions.\n\nOther than writing the script, I was in charge of helping with recording voices, video and also editing it together with motion graphics added.",
            dcs: [
                {
                    name: "Premiere Pro",
                    icon: faFilm
                },
                {
                    name: "After Effects",
                    icon: faShapes
                },
                {
                    name: "20 March 2019",
                    icon: faClock
                }
            ],
            video: "MSwIq1I0L88"
        },
        {
            id: "video-editing-lyrics",
            name: "Lyrics Video",
            icon: VideoEditing,
            href: "/portfolio/video-editing-lyrics",
            color: "cyan",
            desc: "Lyrics Video made with after effects",
            longDesc: "This project was made for optional assignments in my multimedia concept courses. The assignment is to make a lyrics video from any songs that I want. I\'m not really good at making motion graphics back then, I can only do simple animations in after effects. But, I decided to make this. I\'m making this to practice my skills in making motion graphics using after effects.\n\nBack then, I was really stocked with the result. Even though it lacks some things that might need to be added like smooth animation, better colour palette, etc...",
            dcs: [
                {
                    name: "After Effects",
                    icon: faShapes
                },
                {
                    name: "7 December 2018",
                    icon: faClock
                }
            ],
            video: "S7FN6Lrn2R0"
        },
        {
            id: "video-editing-civics",
            name: "Iklan Layanan Masyarakat",
            icon: VideoEditing,
            href: "/portfolio/video-editing-civics",
            color: "cyan",
            desc: "Public Service Advertisement for my civics course final project",
            longDesc: "This project is for our civics final project. We got an assignment to make a public service advertisement video from our student creativity program, which was teaching high school students about basic programming. This was a lengthy project. But It was so much fun in the end, I think... Maybe? Ummm.. hehehew\n\nEvery step we do must be documented for use later on when making the video, my friends and I had different roles. I was in charge to teach in one of the sessions, documenting and lastly editing.",
            dcs: [
                {
                    name: "Premiere Pro",
                    icon: faFilm
                },
                {
                    name: "5 December 2018",
                    icon: faClock
                }
            ],
            video: "DY3B9ZTjsIk"
        },
        {
            id: "video-editing-plc2k17",
            name: "PLC2K17",
            icon: VideoEditing,
            href: "/portfolio/video-editing-plc2k17",
            color: "cyan",
            desc: "Video \"Ads\" for my upcoming high school event",
            longDesc: "This project is the result of one of my job being a documenter for my yearly high school event. I was tasked to make a video kinda like an ad for it, or maybe a trailer I guess? frankly, I don\'t really know how to describe it. With the same attitude as when I was making my lyrics video. I\'m doing this to practice my video editing skills.\n\nI\'m only mainly doing the editing works, all the video assets were made by another or previous documenter and given to me. The deadline was really tight on this one, They said it can be extended, but given the date of the event, I felt bad if the video was posted late. It was a fun event in my opinion, but unfortunately, I was sicked after it lol xD. This was the result.",
            dcs: [
                {
                    name: "Premiere Pro",
                    icon: faFilm
                },
                {
                    name: "14 October 2017",
                    icon: faClock
                }
            ],
            video: "8VumGU01xkg"
        }
    ];
}