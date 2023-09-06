import Banner from '@/app/Components/Privacy/Banner/Banner';
import Info_we_collect from '@/app/Components/Privacy/Info_we_collect/Info_we_collect';
import Privacy_intro from '@/app/Components/Privacy/Intro/Privacy_intro';
import Table_of_content from '@/app/Components/Privacy/Table_of_Content/Table_of_content';
import Information_sharing from '@/app/Components/Privacy/information_sharing/Information_sharing';
import Security from '@/app/Components/Privacy/security/Security';
import Use_of_information from '@/app/Components/Privacy/use_of_information/Use_of_information';
import React from 'react';


const privacy_policy = () => {
    return (
        <div>
            <Banner />
            <div className='flex gap-20 mt-20 cnt mx-auto px-10'>
                <div className='text-[#2D3D59] w-[789px] text-[20px]'>
                    <Privacy_intro />
                    <Info_we_collect />
                    <Use_of_information />
                    <Information_sharing />
                    <Security />
                </div>
                <div>
                    <Table_of_content />
                </div> 
             </div>
        </div>
    );
};

export default privacy_policy;