import React from 'react';
import sl1 from "../assets/Slide1.PNG"
import sl2 from "../assets/Slide2.PNG"
import sl3 from "../assets/Slide3.PNG"
import sl4 from "../assets/Slide4.PNG"
import sl5 from "../assets/Slide5.PNG"
import sl6 from "../assets/Slide6.PNG"
import sl7 from "../assets/Slide7.PNG"
import sl9 from "../assets/Slide9.PNG"
import sl10 from "../assets/Slide10.PNG"
import sl11 from "../assets/Slide11.PNG"
import sl12 from "../assets/Slide12.PNG"
import sl13 from "../assets/Slide13.PNG"
import sl14 from "../assets/Slide14.PNG"
import sl15 from "../assets/Slide15.PNG"
import sl16 from "../assets/Slide16.PNG"
import sl17 from "../assets/Slide17.PNG"
import sl18 from "../assets/Slide18.PNG"
import sl19 from "../assets/Slide19.PNG"
import sl20 from "../assets/Slide20.PNG"
import sl21 from "../assets/Slide21.PNG"
import sl22 from "../assets/Slide22.PNG"
// import video from "../assets/bgvideo.mp4"

export default function About() {
    return (
        <div className="main int mt-20 text-white min-h-screen bg-black">
            
            <section class="bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">OUR TEAM</h1>
                    <p class="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 text-gray-200">As the KCLMUN'24 team, we are a Model United Nations organization founded in 2023, where the most competent MUN participants from Kocaeli and surrounding provinces come together to promote our city in the best possible way.</p>
                    
                </div>
                <div class="bg-gradient-to-b to-transparent from-[#00FFCC] w-full h-[40vh] absolute top-0 left-0 z-0"></div>
            </section>

            <div className="mt-20 pb-20 flex flex-wrap mx-auto justify-center container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl1} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Bera Taner
                            <br/>
                            <span class="job-title">Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl2} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Sadra Mokhtari
                            <br/>
                            <span class="job-title">Deputy Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl3} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Naz Kılıç
                            <br/>
                            <span class="job-title">Directory General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl4} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Demir Barkın Çakmak
                            <br/>
                            <span class="job-title">Directory General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl5} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Merve Sıla Yücel
                            <br/>
                            <span class="job-title">Head Of Admin</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl6} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Selin Güler
                            <br/>
                            <span class="job-title">Head Of Logistics</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl7} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Yağız Efe Yaşılyurt
                            <br/>
                            <span class="job-title">Head Of Press</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl9} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Aras Balıklıkaya
                            <br/>
                            <span class="job-title">Head Of PR</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl10} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Sinan Can Altay
                            <br/>
                            <span class="job-title">Head Of I.T.</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl11} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Alper Gezer
                            <br/>
                            <span class="job-title">Deputy Head Of I.T.</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl12} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Melih Kerim Turan
                            <br/>
                            <span class="job-title">Head Of Security</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl13} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Taylan Göz
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl14} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">İlknur Tezel
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl15} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Hümeyra Yeşilfidan
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl16} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Ece Körpe
                            <br/>
                            <span class="job-title">Academic Assistant</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl17} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Ayten Söylemez
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl18} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Eylül Esin Gürbüz
                            <br/>
                            <span class="job-title">Academic Assistant</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl19} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Kuzey Salman
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl20} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">S.Benjamin Karabaş
                            <br/>
                            <span class="job-title">Academic Assistant</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl21} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Bennu Yıldırım
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-image">
                            <img src={sl22} alt="profile one"/>
                        </div>
                        <div class="details">
                            <h2 class="text-[#fff] text-lg font-bold">Cansu Akbori
                            <br/>
                            <span class="job-title">Under Secretary General</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <hr className='w-screen'/>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 w-full p-8">
                <div className="border-r min-h-96 text-right p-8">
                    <h3 className="text-3xl">Our MISSION</h3>
                    <p className="break-words text-gray-300">
                    Social Skills: To provide teens with skills such as establishing social relationships, improving language skills, awareness of responsibility, self-confidence, entrepreneurship, crisis management, public speaking, and expressing their own opinion.
                    World Views To raise awareness of world problems, to expand diplomatic and political knowledge, to instill awareness of being a world citizen.
                    A Brand-new Experience To increase the prevalence and promote this social event, which is felt to be missing in our city but is loved by our teens, with a large-scale event in Kocaeli.
                    </p>
                </div>
                <div className="border-l min-h-96 p-8">
                    <h3 className="text-3xl">Our VISION</h3>
                    <p className="break-words text-gray-300">
                    To be a pioneer for a youth that is responsible, conscious and aware of environmental problems.
                    Developing young people's analysis and solution skills to international, political and diplomatic problems
                    Ensuring that the new generation gets used to academic activities and environments
                    </p>
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