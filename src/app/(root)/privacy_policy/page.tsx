import Banner from "@/app/Shared/Banner/Banner"
import Info_we_collect from '@/app/Components/Privacy/Info_we_collect/Info_we_collect';
import Privacy_intro from '@/app/Components/Privacy/Intro/Privacy_intro';
import Table_of_content from '@/app/Components/Privacy/Table_of_Content/Table_of_content';
import Information_sharing from '@/app/Components/Privacy/information_sharing/Information_sharing';
import Security from '@/app/Components/Privacy/security/Security';
import Use_of_information from '@/app/Components/Privacy/use_of_information/Use_of_information';
import Your_Choices from '@/app/Components/Privacy/Your_Choices/Your_Choices';
import React from 'react';
import Children_Privacy from "@/app/Components/Privacy/Children_Privacy/Children_Privacy";
import Change_to_the_PP from "@/app/Components/Privacy/Change_to_the_PP/Change_to_the_PP";
import Cookies from "@/app/Components/Privacy/Cookies/Cookies";
import Contact_Us from "@/app/Components/Privacy/Contact_Us/Contact_Us";
import Tracking_Technologies from "@/app/Components/Privacy/Tracking_Technologies/Tracking_Technologies";


const privacy_policy = () => {
    return (
        <div className="bg-[#F7FAFF]">
            
            <Banner title="Privacy Policy"/>
            <div className='md:flex md:gap-20 mt-20 cnt mx-auto px-10 '>
                <div className='text-[#2D3D59] md:w-2/3 text-[20px]'>
                    <Privacy_intro />
                    <Info_we_collect />
                    <Use_of_information />
                    <Information_sharing />
                    <Security />
                    <Tracking_Technologies/>
                    <Your_Choices/>
                    <Children_Privacy/>
                    <Change_to_the_PP/>
                    <Cookies/>
                    <Contact_Us/>
                </div>
                <div className="w-1/3 h-[calc(100vh-1.75rem)] sticky top-6 overflow-hidden md:block hidden ">

                    <div className="h-[1000px] ">
                        <Table_of_content />
                    </div> 
                </div>
                
                
            </div>
        </div>
        
    );
};

export default privacy_policy;