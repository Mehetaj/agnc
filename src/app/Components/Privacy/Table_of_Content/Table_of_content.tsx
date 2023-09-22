"use client"

import Link from "next/link";

const element = [
    {
        text: "Information We Collect",
        path: "#1"
    },
    {
        text: "Use of Information",
        path: "#2"
    },
    {
        text: "Information Sharing",
        path: "#3"
    },
    {
        text: "Security",
        path: "#4"
    },
    {
        text: "Cookies and Tracking Technologies",
        path: "#5"
    },
    {
        text: "Your Choices",
        path: "#6"
    },
    {
        text: "Children’s Privacy",
        path: "#7"
    },
    {
        text: "Changes to this Privacy Policy",
        path: "#8"
    },
    {
        text: "What are Cookies?",
        path: "#9"
    },
    {
        text: "Types of Cookies We Use",
        path: "#10"
    },
    {
        text: "Managing Cookies",
        path: "#11"
    },
    {
        text: "Third-Party Websites and Services",
        path: "#12"
    },
    {
        text: "Changes to this Cookie Policy",
        path: "#13"
    },
    {
        text: "Contact Us",
        path: "#14"
    },
]

const Table_of_content = () => {
    return (
        <div className="w-[379px] bg-[#EBF2FF] p-8 rounded-md">
            <h1 className="text-[32px] font-bold">Table of content</h1>
            <div>
                {/* Quick Links of privacy policy contents */}
                {
                    element.map((item: any,idx:number)=>(
                        <Link key={idx} className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href={item.path}>{item.text}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Table_of_content;