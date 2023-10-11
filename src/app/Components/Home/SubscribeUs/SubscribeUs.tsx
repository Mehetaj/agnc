import Button from '@/app/Shared/Button/Button';
import Component from '@/app/Shared/Component/Component';
import Title from '@/app/Shared/Title/Title';
import React from 'react';

const SubscribeUs = () => {
    return (
        <div className='my-10 text-center'>
            <Component>
                <div className='flex justify-center'>
                <Title>
                    subscribe
                </Title>
                </div>
                <h1 className='text-5xl font-bold mt-2 mb-6'>Lets get <span className='text-primary'>started</span></h1>

                <form className='flex justify-center md:input-group'>
                    <input type="text" name="" id="" className='w-full lg:w-[400px] block lg:flex' placeholder='Your Email' />
                    <Button>
                        Subscribe
                    </Button>
                </form>
            </Component>
        </div>
    );
};

export default SubscribeUs;