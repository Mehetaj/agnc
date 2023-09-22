import React from 'react'
import Button from '@/app/Shared/Button/Button';
import Title from '@/app/Shared/Title/Title';
import DashBanner from './DashBanner';

type Props = {}

const DashLogin = (props: Props) => {
    return (
        <div>
            <DashBanner></DashBanner>
            <div className="flex justify-center items-center my-48">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/3">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3
                            text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button >
                            Sign In
                        </Button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashLogin;