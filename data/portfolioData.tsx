import RoutineLogo from "../public/svg/routine.svg";
import SecuritySLipLogo from "../public/images/security-slip.png";
import ImmaCrossyBoxLogo from "../public/images/imma-crossy-box.png";
import MateMatirunLogo from "../public/images/matematirun.png"
import KnoledgeLogo from "../public/svg/knoledge.svg";
import LatusLogo from "../public/svg/latus.svg";

import { faAndroid, faHtml5, faPhp, faUnity } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup, faCode, faCube, faVectorSquare, faBurn, faTasks, faShareAlt } from "@fortawesome/free-solid-svg-icons";

export default function getData()
{
    return [
        {
            id: "routine",
            name: "Routine.",
            icon: RoutineLogo,
            color: "lime",
            desc: "Daily routine reminder and simple digital wellbeing android application",
            longDesc: "Routine merupakan project akhir dari mata kuliah mobile application development",
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
            color: "orange",
            desc: "It's an \"security- checkup\" based simulation game",
            longDesc: "Merupakan description yang panjang sekali?",
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
            color: "dayker",
            desc: "It's an \"action- adventure\" based simulation game",
            longDesc: "Merupakan description yang panjang sekali?",
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
            color: "cloud",
            desc: "A math learning based rhythm game with RPG spice into it",
            longDesc: "Merupakan description yang panjang sekali?",
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
            color: "chocolate",
            desc: "Education Management Web Application made with CodeIgniter 3",
            longDesc: "Merupakan description yang panjang sekali?",
            dcs: [
                {
                    name: "Code Igniter 3",
                    icon: faBurn
                },
                {
                    name: "Content Management System",
                    icon: faTasks
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
            color: "lavender",
            desc: "Pure PHP, simple social media website",
            longDesc: "Merupakan description yang panjang sekali?",
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
        }
    ];
}