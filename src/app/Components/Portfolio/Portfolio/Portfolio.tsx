"use client"
import React from 'react'
import './Portfolio.css'
import cover1 from '../../../../asset/portfolio/cover1.png'
import cover2 from '../../../../asset/portfolio/cover2.png'
import cover3 from '../../../../asset/portfolio/cover3.png'
import Image from 'next/image'
import Contact from '../../Home/Contact/Contact'
import { portfolio_data } from '@/app/FakeData/portfolio'
import SingleItem from './SingleItem'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Single_portfolio from '../../Home/Portfolio/singleportfolio'

type Props = {}

const Portfolio = (props: Props) => {
    
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

    return (
        <>
            {/* tab section of portfolio */}
            {/* <div className=' w-3/4	'>
                <div className="flex justify-around item-center flex-1  tabContaner">
                    <button className='px-12 font-bold'>View All</button>
                    <button className='px-12'>Graphics</button>
                    <button className='px-12'>UI/UX</button>
                    <button className='px-12'>Wordpress</button>
                    <button className='px-12'>Web Development</button>
                </div>
            </div> */}
            <Tabs className="w-3/4 mx-auto">
                <TabList className="flex justify-around item-center flex-1  tabContaner">
                    {Object.keys(categories).map((category) => (
                        <Tab key={category} >
                            {category}
                        </Tab>
                    ))}
                </TabList>

                {/* <TabPanel>
                    <div className=' md:flex'>
                        dfmfrer
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex'>
                        dfmf111
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' md:flex'>
                        dfmf33
                    </div>
                </TabPanel> */}
                {Object.values(categories).map((category:any, idx) => (
                    
            <TabPanel
              key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">


                5
                {category.map((data:any) => (
                //   <Single_portfolio key={data.id} data={data}></Single_portfolio>
                console.log(data)
                ))}
              </div>
            </TabPanel>
          ))}

            </Tabs>


            {/* portfolio section */}
            <div className='grid grid-cols-6 gap-4 w-full'>
                {/* <SingleItem data={data} /> */}
            </div>



            {/*--------  pagination section here ---------------------to do */}
            <div className="w-full">

            </div>



            {/* contact us banner here ---------------done
            <div className="w-full">
                <Contact />
            </div> */}

        </>
    )
}

export default Portfolio