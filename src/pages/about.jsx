import React from 'react';
import video from "../assets/bgvideo.mp4"

export default function About() {
    return (
        <div className="main int text-white">
            <div className="max-h-screen min-h-screen overflow-hidden grid grid-cols-2">
                <div className="bg-black border-r relative h-full">
                    <div className=" p-4 h-1/3 mt-28 m-12 border-l border-gray-300">
                        <h1 className="text-6xl font-bold">ABOUT US</h1>
                        <hr className='w-24' />


                        <h2 className="text-3xl font-semibold mt-6">Our <span className='italic font-thin underline'>MISSION</span></h2>
                        <p className="text-md my-4 text-left">
                        Social Skills: 
                        To provide teens with skills such as establishing social relationships, improving language skills, awareness of responsibility, self-confidence, entrepreneurship, crisis management, public speaking, and expressing their own opinion.
                        </p>
                        <p className="text-md my-4 text-left">
                        World Views
                        To raise awareness of world problems, to expand diplomatic and political knowledge, to instill awareness of being a world citizen.
                        </p>
                        <p className="text-md my-4 text-left">
                        A Brand-new Experience
                        To increase the prevalence and promote this social event, which is felt to be missing in our city but is loved by our teens, with a large-scale event in Kocaeli.
                        </p>

                        <div className="text-right m-8 border-r p-4 border-gray-300">
                            <h2 className="text-3xl font-semibold mt-6">Our <span className='italic font-thin underline'>VISION</span></h2>
                            <p className="text-md my-4 ">
                            To be a pioneer for a youth that is responsible, conscious and aware of environmental problems. 
                            </p>
                            <p className="text-md my-4 ">
                            Developing young people's analysis and solution skills to international, political and diplomatic problems
                            </p>
                            <p className="text-md my-4 ">
                            Ensuring that the new generation gets used to academic activities and environments
                            </p>
                        </div>
                    </div>
                    <div className="grid w-2 absolute h-full right-0 top-0">
                        <div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div><div className="border-b"></div>
                    </div>
                </div>
                <div className="bg-black h-full relative">
                    <video loop autoPlay muted className='w-full absolute z-0 -translate-y-96 opacity-40'>
                        <source src={video} type="video/mp4"/>
                    </video>

                    <div className=" p-4 h-1/3 mt-28 m-12 w-5/6 border-r text-right z-10 absolute border-gray-300">
                        <h1 className="text-6xl font-bold">OUR TEAM</h1>
                        <hr className='w-24 ml-[85%]' />
                        <p className="text-lg w-96 break-words mt-8 ml-[50%]">
                            As the KCLMUN'24 team, we are a Model United Nations organization founded in 2023, where the most competent MUN participants from Kocaeli and surrounding provinces come together to promote our city in the best possible way. 
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}



{/* <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-white">
            <div className="container mx-auto p-8 flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <h1 className="text-5xl font-bold mb-4 text-center">Our Team</h1>
                    <p className="text-lg text-left">
                    As the KCLMUN'24 team, we are a Model United Nations organization founded in 2023, where the most competent MUN participants from Kocaeli and surrounding provinces come together to promote our city in the best possible way. 
                    </p>
                </div>

                <div className="md:w-1/3">
                    <h2 className="text-5xl font-bold mb-4 text-center">Our Mission</h2>
                    <p className="text-lg text-left"><li>
                    Social Skills: 
                    To provide teens with skills such as establishing social relationships, improving language skills, awareness of responsibility, self-confidence, entrepreneurship, crisis management, public speaking, and expressing their own opinion.
                    </li></p>
                    <p className="text-lg text-left"><li>
                    World Views
                    To raise awareness of world problems, to expand diplomatic and political knowledge, to instill awareness of being a world citizen.
                    </li></p>
                    <p className="text-lg text-left"><li>
                    A Brand-new Experience
                    To increase the prevalence and promote this social event, which is felt to be missing in our city but is loved by our teens, with a large-scale event in Kocaeli.
                    </li></p>
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-5xl font-bold mb-4 text-center">Our Vision</h2>
                    <p className="text-lg text-left"><li>
                    To be a pioneer for a youth that is responsible, conscious and aware of environmental problems. 
                    </li></p>
                    <p className="text-lg text-left"><li>
                    Developing young people's analysis and solution skills to international, political and diplomatic problems
                    </li></p>
                    <p className="text-lg text-left"><li>
                    Ensuring that the new generation gets used to academic activities and environments
                    </li></p>
                </div>
            </div>
        </div> */}