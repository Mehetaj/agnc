"use client"
import ChooseUs from '@/app/Components/About/ChooseUs/ChooseUs';
import { servicesData } from '@/app/FakeData/Service';
import Banner from '@/app/Shared/Banner/Banner';
import Button from '@/app/Shared/Button/Button';
import Component from '@/app/Shared/Component/Component';
import { usePathname } from 'next/navigation';
import Contact from '@/app/Components/Home/Contact/Contact';

interface Service_strategy { title: string; description: string }
interface FAQ_data_type { question: string; answer: string }

const SingleServices = () => {
    const path = usePathname();
    const id = path.split("/")[2]
    console.log(id);
    const serviceData = servicesData;
    const singleData: any = serviceData.find((item: object | string | string[] | any) => item?.id == id);
    console.log(singleData);
    const { banner_description, banner_image, category, common_questions, description, logo, service_strategy } = singleData;
    return (
        <div>
            <Banner title={category} />
            <div className='my-10 bg-[#F7FAFF] dark:bg-[#061126] py-10 '>
                <Component>
                    <div className='lg:flex justify-between px-7 gap-20'>
                        {/* description/ about */}
                        <p className='text-[24px] w-1/2 font-bold'>{description}</p>
                        <p className='text-[20px] w-1/2'>{banner_description}</p>
                    </div>
                    <img src={banner_image} className='w-[1430px] px-7 mt-8 mb-16' alt='Banner image' />

                    <div className='px-7'>
                        <h1 className='text-5xl font-bold my-8 ml-3'>Our services include</h1>

                        {/* Business stratigy */}

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                            {
                                service_strategy?.map((item: Service_strategy, d: number) => (
                                    <div tabIndex={d + 1} className='collapse collapse-arrow' >
                                        <div className='collapse-title'>
                                            <h1 className='text-[24px] font-bold  text-[#202C40] dark:text-white'>{item?.title}</h1>
                                        </div>
                                        <div className='collapse-content'>
                                            <p>{item?.description}</p>

                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Why choose us component */}
                    <div className=''>
                        <ChooseUs />
                    </div>

                    {/* FAQ/ Common asked question */}

                    <div className='bg-[#F7FAFF] dark:bg-[#061126] mt-16 py-10 px-10 flex justify-between'>
                        <div>
                            <h1 className='text-5xl w-[380px] font-bold mb-12'>
                                Need To Know User Common  Questions
                            </h1>
                            <Button>
                                Need to know more
                            </Button>
                        </div>
                        <div className=' '>
                            {
                                common_questions?.map((item: FAQ_data_type, d: number) => (
                                    <div tabIndex={d + 1} className='collapse collapse-arrow' >
                                        <div className='collapse-title'>
                                            <h1 className='text-[24px] font-bold  text-[#202C40] dark:text-white'>{item?.question}</h1>
                                        </div>
                                        <div className='collapse-content'>
                                            <p>{item?.answer}</p>

                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Contact section */}

                </Component>
                    <div className='mt-12'>
                    <Contact/>
                    </div>
            </div>
        </div>
    );
};

export default SingleServices;