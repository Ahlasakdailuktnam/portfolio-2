import React from 'react'

const footer = () => {
  return (
    <div>
        <div className='w-full h-80 bg-white'>
            <div className=' flex flex-col justify-between'>
                <div className='flex lg:flex-row justify-between flex-col gap-8 lg:px-15 px-5 mt-8' >
                    <div>
                    <h2 className='text-4xl text-black p-text font-bold'>Let's do great work together</h2>
                    </div>
                    <div className='flex gap-10 font-semibold p-text '>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-3xl'>SITEMAP</h2>
                            <div className=' flex flex-col gap-1'>
                                <li className=' list-none '>Home</li>
                                <li className=' list-none '>About Me</li>
                                <li className=' list-none '>Servieces</li>
                                <li className=' list-none '>Contact Me</li>
                               
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-3xl'>SOCIAL</h2>
                            <div className='flex flex-col gap-1'>
                                <li className='list-none underline'>FACEBOOK</li>
                                <li className='list-none underline'>TELEGRAM</li>
                                <li className='list-none underline'>TWITTER</li>
                                <li className='list-none underline'>INSTRAGRAM</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-2'>
                    <h1 className='lg:text-[189px] text-[50px] h-text w-full text-blue-800 shadow-sm border-t-3 border-gray-200  '>LANH PHALLA</h1>
                </div>
                <div className='flex justify-between p-text mt lg:px-10 py-4 px-2 font-bold'>
                    <p>@2025 by Lanh Phalla.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer