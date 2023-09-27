
import Button from '@/app/Shared/Button/Button'
import React from 'react'
import bgImage from '../../../../asset/dashborad/login/Containers.png'
import Image from 'next/image'
type Props = {}

export default function DashLogin({ }: Props) {
    return (
        <div>
            {/* a login system with 1/1 grid. one side with image and other with form */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <Image className="max-w-full " src={bgImage} alt="" />
                </div>
                <div className="w-full">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className='justify-center items-start'>
                            <div className='my-4'>
                                <h1 className="text-3xl font-bold">Welcome to ByteZenith! 👋</h1>
                                <p>Please sign in to your account and start adventure</p>
                            </div>
                            <form className="flex flex-col justify-center items-start">
                                {/* input with label */}
                                <label htmlFor="username">Email or Username</label>
                                <input type="text" placeholder="Username" className="w-96 h-12 border rounded-md px-2 my-2" />
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" className="w-96 h-12 border  rounded-md px-2 my-2" />
                                <Button> Login</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}