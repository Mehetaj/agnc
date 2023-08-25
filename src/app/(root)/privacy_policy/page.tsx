import Banner from '@/app/Components/Privacy/Banner/Banner';
import Privacy_intro from '@/app/Components/Privacy/Intro/Privacy_intro';
import Table_of_content from '@/app/Components/Privacy/Table_of_Content/Table_of_content';
import React from 'react';



const privacy_policy = () => {
    return (
        <div>
            <Banner />
            <div className='flex gap-20'>
                <div>
                    <Privacy_intro />
                </div>
                <div>
                    <Table_of_content />
                </div>
            </div>
        </div>
    );
};

export default privacy_policy;