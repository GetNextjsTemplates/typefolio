import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Product Designer, Tailwind",
        location: "Remote",
        startYear: "2022",
        endYear: "Present",
        bulletPoints: [
            "Led end-to-end redesign of dashboard UI, improving user retention by 23%",
            "Collaborated with engineers and product managers to ship features faster",
            "Designed components used in a system adopted by 4+ internal teams"
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX Designer - Asana",
        location: "New York, NY",
        startYear: "2019",
        endYear: "2022",
        bulletPoints: [
            "Created design systems for client projects across finance and healthcare",
            "Conducted user testing and research to validate designs",
            "Helped junior designers grow via mentorship"
        ]
    },
]

export const GET = async () => {
    return NextResponse.json({
        experienceData
    });
};