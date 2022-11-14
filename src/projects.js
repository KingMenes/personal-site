import { FaReact } from 'react-icons/fa'
import {SiTailwindcss, SiFirebase} from 'react-icons/si'

const projects1 = [
    {
        "id":1,
        "title": "Tutoral.org",
        "name":"tutoral",
        "desc": "An online tutoring site aimed to connect parents and clients to in-home tutors in many subjects.",
        "techUsed": [
            {
                "id": 1,
                "icon":<FaReact/>,
                "name":"React",
            },
            {
                "id": 2,
                "icon":<SiTailwindcss/>,
                "name":"Tailwind CSS",
            },
            {
                "id": 3,
                "icon":<SiFirebase/>,
                "name":"Firebase",
            }
        ],
    }
];

export const projects = projects1;