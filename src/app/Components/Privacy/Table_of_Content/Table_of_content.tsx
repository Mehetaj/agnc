"use client"

import Link from "next/link";

const element = () => [
    {
        text: "Information We Collect",
        path: ""
    },
    {
        text: "Use of Information",
        path: ""
    },
    {
        text: "Information Sharing",
        path: ""
    },
    {
        text: "Security",
        path: ""
    },
    {
        text: "Cookies and Tracking Technologies",
        path: ""
    },
    {
        text: "Your Choices",
        path: ""
    },
    {
        text: "Children’s Privacy",
        path: ""
    },
    {
        text: "Changes to this Privacy Policy",
        path: ""
    },
    {
        text: "What are Cookies?",
        path: ""
    },
    {
        text: "Types of Cookies We Use",
        path: ""
    },
    {
        text: "Managing Cookies",
        path: ""
    },
    {
        text: "Third-Party Websites and Services",
        path: ""
    },
    {
        text: "Changes to this Cookie Policy",
        path: ""
    },
    {
        text: "Contact Us",
        path: ""
    },
]

const Table_of_content = () => {
    return (
        <div className="w-[379px]">
            <h1 className="text-[32px] font-bold">Table of content</h1>
            <div>
                {/* Quick Links of privacy policy contents */}
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Information We Collect</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Use of Information</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Information Sharing</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Security</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Cookies and Tracking Technologies</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Your Choices</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Children’s Privacy</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Changes to this Privacy Policy</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">What are Cookies?</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Types of Cookies We Use</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Managing Cookies</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Third-Party Websites and Services</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Changes to this Cookie Policy</Link>
                   <Link className="mt-[10px] block font-bold text-[#2D3D59] text-[16px]" href="">Contact Us</Link>
            </div>
        </div>
    );
};

export default Table_of_content;