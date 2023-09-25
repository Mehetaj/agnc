// tsx page component
// import PortfolioBanner from "@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner";
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";
import Portfolio from "@/app/Components/Portfolio/Portfolio/Portfolio";
import DashLogin from "@/app/Components/Dashboard/DashLogin/DashLogin";

const page = () => {
    return (
        <div>
            <Component>
                <DashLogin></DashLogin>
            </Component>
        </div>
    );
};

export default page;
