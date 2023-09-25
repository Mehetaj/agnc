"use client"
import React, { useState } from "react";
import './Portfolio.css'
import { portfolio_data } from '@/app/FakeData/portfolio'
import SingleItem from './SingleItem'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Pagination from '../Pagination/Pagination'

type Props = {}

const Portfolio = (props: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const categorizedData: any = {
        "View all": [...portfolio_data], // Create a "View all" category with a copy of all data
    };

    portfolio_data.forEach(item => {
        const { category, ...rest } = item;
        if (!categorizedData[category]) {
            categorizedData[category] = [];
        }
        categorizedData[category].push(rest);
    });

    let categories = categorizedData;
    //  console.log(categorizedData)

    const handlePageChange = (page: any) =>{
        setCurrentPage(page)
    }
    // const paginatePosts = paginate(posts, currentPage, pageSize);
    return (
        <>
            {/* tab section of portfolio */}

            <Tabs className="w-3/4 mx-auto">
                <TabList className="flex justify-around item-center flex-1  tabContaner">
                    {Object.keys(categories).map((category, idx) => (
                        <Tab key={idx} >
                            {category}
                        </Tab>
                    ))}
                </TabList>

                {/* portfolio section */}

                {Object.values(categories).map((data: any, idx) => (
                    <TabPanel key={idx}>
                        <div className=" grid grid-cols-3 gap-6 ">
                            <SingleItem data={data} currentPage={currentPage} pageSize={pageSize} ></SingleItem>
                        </div>
                        <div className="flex justify-center">
                            <Pagination item={data.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
                        </div>
                    
                    </TabPanel>
                ))}
                
            </Tabs>
        </>
    )
}

export default Portfolio