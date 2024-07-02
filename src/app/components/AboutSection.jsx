// "use client"
// import React, { useTransition, useState } from 'react';
// import { Element } from 'react-scroll';
// import Image from "next/image";
// import TabButton from './TabButton';

// const TAB_DATA = [
//     {
//         title: "Skills",
//         id: "skills",
//         content: (
//             <ul className="list-disc pl-2">
//                 <li>Front-end: HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, React.js, Next.js</li>
//                 <li>Back-end: Node.js, Express.js, Python, Java, C++, Django, Flask, Spring Boot</li>
//                 <li>Database and Version Control: MySQL, PostgreSQL, NoSQL, MongoDB, PrismaDB, Git, NPM</li>
//                 <li>DevOps Tools and Platforms: Docker, Kubernetes, OpenShift, Istio</li>
//                 <li>Software Design: Object-Oriented Programming, Model-View-Controller Architecture</li>
//                 <li>Additional Tools: Postman, Vercel</li>
//             </ul>
//         ),
//     },
//     {
//         title: "Education",
//         id: "education",
//         content: (
//             <ul className="list-disc pl-2">
//                 <li>Software Engineering, Master of Engineering, University of Calgary</li>
//                 <li>Chemical Engineering, Bachelor of Science, University of Calgary</li>
//             </ul>
//         ),
//     },
//     {
//         title: "Certifications",
//         id: "certifications",
//         content: (
//             <ul className="list-disc pl-2">
//                 <li>IBM Full Stack Software Developer Professional Certificate</li>
//             </ul>
//         ),
//     },
// ];

// const AboutSection = () => {
//     const [tab, setTab] = useState("skills");
//     const [isPending, startTransition] = useTransition();

//     const handleTabChange = (id) => {
//         startTransition(() => {
//             setTab(id);
//         });
//     };

//     return (
//         <Element name="about" className="element">
//             <section className="text-white">
//                 <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//                     <Image src="/images/stock.jpg" width={700} height={700} />
//                     <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//                         <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//                         <p className="text-base md:text-lg">
//                             I am a passionate software engineer with an interest in full stack web development.
//                             I enjoy diving into complex problems and creating unique solutions that not only 
//                             meet but exceed expectations. I am a team player and I am excited
//                             to work with others to make meaningful impacts and solutions through technology!
//                         </p>
//                         <div className="flex flex-row justify-start mt-8">
//                             <TabButton
//                                 selectTab={() => handleTabChange("skills")}
//                                 active={tab === "skills"}
//                             >
//                                 {" "}
//                                 Skills{" "}
//                             </TabButton>
//                             <TabButton
//                                 selectTab={() => handleTabChange("education")}
//                                 active={tab === "education"}
//                             >
//                                 {" "}
//                                 Education{" "}
//                             </TabButton>
//                             <TabButton
//                                 selectTab={() => handleTabChange("certifications")}
//                                 active={tab === "certifications"}
//                             >
//                                 {" "}
//                                 Certifications{" "}
//                             </TabButton>
//                         </div>
//                         <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
//                     </div>
//                 </div>
//             </section>
//         </Element>
//     );
// };

// export default AboutSection;
"use client"
import React, { useTransition, useState } from 'react';
import { Element } from 'react-scroll';
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Front-end: HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, React.js, Next.js</li>
                <li>Back-end: Node.js, Express.js, Python, Java, C++, Django, Flask, Spring Boot</li>
                <li>Database and Version Control: MySQL, PostgreSQL, NoSQL, MongoDB, PrismaDB, Git, NPM</li>
                <li>DevOps Tools and Platforms: Docker, Kubernetes, OpenShift, Istio</li>
                <li>Software Design: Object-Oriented Programming, Model-View-Controller Architecture</li>
                <li>Additional Tools: Postman, Vercel</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Engineering, Master of Engineering, University of Calgary</li>
                <li>Chemical Engineering, Bachelor of Science, University of Calgary</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>IBM Full Stack Software Developer Professional Certificate</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const getImageAltText = () => {
        switch (tab) {
            case "skills":
                return "Skills Image";
            case "education":
                return "Education Image";
            case "certifications":
                return "Certifications Image";
            default:
                return "";
        }
    };

    return (
        <Element name="about" className="element">
            <section className="text-white">
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                    <Image
                        src="/images/stock.jpg"
                        alt={getImageAltText()} // Set alt text dynamically based on tab
                        width={700}
                        height={700}
                    />
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                        <p className="text-base md:text-lg">
                            I am a passionate software engineer with an interest in full stack web development.
                            I enjoy diving into complex problems and creating unique solutions that not only 
                            meet but exceed expectations. I am a team player and I am excited
                            to work with others to make meaningful impacts and solutions through technology!
                        </p>
                        <div className="flex flex-row justify-start mt-8">
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                {" "}
                                Skills{" "}
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                {" "}
                                Education{" "}
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("certifications")}
                                active={tab === "certifications"}
                            >
                                {" "}
                                Certifications{" "}
                            </TabButton>
                        </div>
                        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default AboutSection;
