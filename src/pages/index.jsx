import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Index() {
    const [page, setPage] = useState(0);
    const [showpopup, setShowPopup] = useState(false);

    function HandleTabClick(tab) {
        const currentPage = page;
        setPage(tab);

        if (document.getElementById(currentPage)) {
        document.getElementById(currentPage).classList.remove("text-black");
        document.getElementById(currentPage).classList.remove("bg-white");
        }

        if (document.getElementById(tab)) {
        document.getElementById(tab).classList.add("text-black");
        document.getElementById(tab).classList.add("bg-white");
        }
    }

    function HandleArrowClick() {
        const scrollTarget = document.getElementById("section2");
        if (scrollTarget) {
        scrollTarget.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
        }
    }

    function GetCountdown() {
        var countDownDate = new Date("June 9, 2024 9:00:00").getTime();
        var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (document.getElementById("Cdwn")) {
            document.getElementById("Cdwn").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }

        if (distance < 0) {
            clearInterval(x);
            if (document.getElementById("demo")) {
            document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }
        }, 1000);

        return x; // return the interval ID
    }

    function calculateDaysToJune9th() {
        const today = new Date();
        const june9th = new Date(today.getFullYear(), 5, 9);
        const oneDay = 24 * 60 * 60 * 1000;

        const daysRemaining = Math.round((june9th - today) / oneDay);

        return daysRemaining;
    }

    function updateCountdown() {
        const daysRemaining = calculateDaysToJune9th();
        if (document.getElementById("countdown")) {
        document.getElementById("countdown").innerHTML = daysRemaining;
        }
    }

    function HandlePopUp(val) {
        setShowPopup(val);
        if (val === true) {
        if (document.getElementById("root")) {
            document.getElementById("root").classList.add("overflow-y-hidden");
            document.getElementById("root").classList.add("max-h-screen");
        }
        } else {
        if (document.getElementById("root")) {
            document.getElementById("root").classList.remove("overflow-y-hidden");
            document.getElementById("root").classList.remove("max-h-screen");
        }
        }
    }

    useEffect(() => {
        const countdownInterval = GetCountdown();
        updateCountdown();
        HandlePopUp(true);

        // Clear the interval when the component is unmounted
        return () => {
        clearInterval(countdownInterval);
        };
    }, []);

    return (
        <div className="main int" id="main">
            {showpopup &&(
                <div className=" absolute w-screen h-screen text-white " id="popupbg">
                    <div className="w-[450px] max-h-[600px]  mx-auto mt-36 rounded-xl p-8 bg-[#1c1c1c]" id="popup">
                        <div className="overflow-y-scroll max-h-[500px]" id="popup">
                            <h2 className="text-5xl font-bold text-center">Welcome Letter</h2>
                            <hr className="w-48 text-white mx-auto my-4" />
                            <p className="break-words">
                            We are proud to introduce you to the conference we have come up with as a result of our long-term work and effort. In our conference that we will be holding on June 11-12-13, We are very excited about this conference that we will organize at the Congress Center. In the committees at our conference, our participants will discuss the common solutions  that are best suited for national problems. In between, our pr team will create a wonderful environment for you and adapt to the environment more quickly and allow you to have fun time. We have arranged the specific and important issues to be discussed in the committees for you together with our team. It is very important for us to be able to provide the environment in which you can express yourself in the best way. With our experienced team
                            in this conference, you can look at everything you are curious about thanks to our site and you can reach us for the things you want to ask about our team or conference.
                            </p>
                            <p className="break-words">
                            We look forward to seeing all of you in June!
                            </p>
                            <p className="text-xl"><i>
                            Director General Irmak Naz Kılıç</i>
                            </p>
                            <p className="text-xl"><i>
                            Director General Demir Barkın Çakmak</i>
                            </p>
                        </div>
                        <hr className="w-48 text-white mx-auto my-2" />
                        <button onClick={()=>HandlePopUp(false)} className="rounded-xl ml-[155px] bg-black px-4 py-2">Close</button>
                    </div>
                    
                </div>
            )}
            
            <div className="Jumbotron h-[calc(100vh-80px)] top-[5rem] relative">

                <div className="background absolute h-[calc(100vh-80px)] w-screen"></div> {/* Background */}
                <div className="kule absolute h-[calc(100vh-80px)] w-screen z-30"></div> {/* Kule 30 */}
                <div className="border-8 rounded-3xl absolute h-[calc(100vh-160px)] top-[40px] left-[40px] w-[calc(100vw-80px)] z-20"></div> {/* Border 20 */}

                <div className="bg-gradient-to-t from-[rgba(0,0,0,0.4)] absolute bottom-0 h-96 w-screen z-40"> {/* Gradiyent 40 */}
                    <button onClick={() => { HandleArrowClick() }} id="section2">
                        <div className="absolute bottom-[70px] left-[calc(50%-32px)] z-50 floating"> {/* Down arrow 50 */}
                            <svg className="" xmlns="http://www.w3.org/2000/svg" height="64" width="56" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>
                        </div>
                    </button>
                </div>

                <div className="absolute left-[calc(50%-445px)] top-[200px] z-10"> {/* Countdown Text 10 */}
                    <p className="text-4xl font-bold text-center  text-white">REMAINING TIME</p>
                    <p className="font-bold text-white -translate-y-12" style={{ fontSize: '12rem' }}> <span id="countdown"></span> DAYS</p>
                </div>
            </div>

            <div className=" mt-20 text-white" >
                <div className="h-[500px] bg-[#1c1c1c] py-8 relative">
                    <div className="mun h-[438px] absolute w-screen ">

                    </div>
                    <div className="absolute text-center w-screen top-16">
                        <div id="Cdwn" className="text-2xl fw  border-4 p-4 w-max mx-auto rounded-2xl"></div>
                        <p className="quote text-4xl font-bold mt-8">"No idea can find it's true value, until it's been subjected to a free and genuine debate."</p>
                        <Link href="#_" className="relative inline-block text-xl group mt-12">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                                <span className="relative">Apply Now!</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                    </div>

                </div>
                <div className="grid grid-cols-2 my-12 container mx-auto ">
                    <div className="text-center int">
                        <h2 className="text-5xl font-bold">Secretary Generals Letter</h2>
                        <hr className="w-48 text-white mx-auto my-4" />
                        <p className="mx-auto w-[500px] text-left break-words">
                        Most distinguished participants and esteemed guests,

                        On the behalf of my team, I am honored to welcome you to the first Model United Nations Conference of Kocaeli that will be taking place on 11,12,13 June at Seka Congress Center. In my role as Secretary General, I am thrilled to see this assembly of sharp minds and enthusiastic individuals who
                        are prepared to have meaningful discussions about global affairs.

                        The purpose of this conference is to offer an environment for fruitful discussion,
                        collaborative work, and the creation of creative answers to the issues that are
                        surrounding our world today. As delegates, you have a crucial part that will have an impact on how our hypothetical international discussions go.

                        Our dedicated team has put forth endless effort for making sure that every participant has a memorable MUN experience. I am confident that everyone will utilize the variety of viewpoints in the room, take the chance to work together, and aim for agreement during committee sessions.

                        We all are wishing you a fruitful and successful Model UN conference. May your resolutions be impactful, and diplomatic endeavors be marked by success. 
                        <p className="mx-auto w-[500px] text-left break-words">
                        Sincerely,</p>
                        <p className="mx-auto w-[500px] text-left break-words">
                        Bera Taner,
                        Secretary General</p>
                        </p>
                    </div>

                    <div className="text-center int bg-black rounded-3xl ">
                        <div className="tabs grid grid-cols-9 h-full">
                            <div className="text-lg col-span-2 border-r">
                                <button onClick={() => HandleTabClick(0)} id="0" className="h-1/3 w-full flex justify-center border-b bg-white text-black rounded-tl-3xl">
                                    <span className="h-max my-auto">June 9</span>
                                </button>
                                <button onClick={() => HandleTabClick(1)} id="1" className="h-1/3 w-full flex justify-center ">
                                    <span className="h-max my-auto">June 10</span>
                                </button>
                                <button onClick={() => HandleTabClick(2)} id="2" className="h-1/3 w-full flex justify-center rounded-bl-3xl border-t">
                                    <span className="h-max my-auto">June 11</span>
                                </button>
                            </div>
                            <div className="text-xl col-span-7 mx-auto text-left py-32">
                                {page === 0 && (
                                    <ul className="my-auto gap-y-4 grid h-max">
                                        <li className="">10.00/11.00 - Registration</li>
                                        <li className="">11.00/12.30 - Opening Ceremony</li>
                                        <li className="">12.30/14.00 - Brunch</li>
                                        <li className="">14.00/15.30 - Session I. (Workshop)</li>
                                        <li className="">15.30/16.00 - Coffee Break</li>
                                        <li className="">16.00/17.30 - Session II.</li>

                                    </ul>
                                )}

                                {page === 1 && (
                                    <ul className="my-auto gap-y-4 grid h-max">
                                        <li className="">9.00/10.30 - Session II.</li>
                                        <li className="">10.30/11.00 - Coffee Break</li>
                                        <li className="">11.00/12.30 - Session IV.</li>
                                        <li className="">12.30/14.00 - Lunch Break</li>
                                        <li className="">14.00/15.30 - Session V.</li>
                                        <li className="">15.30/16.00 - Coffee Break</li>
                                        <li className="">16.00/17.30 - Session VI.</li>
                                    </ul>
                                )}

                                {page === 2 && (
                                    <ul className="my-auto gap-y-4 grid h-max">
                                        <li className="">9.00/10.00 - Session VII.</li>
                                        <li className="">10.00/10.30 - Coffee Break</li>
                                        <li className="">10.30/12.00 - Session VIII.</li>
                                        <li className="">12.00/13.30 - Lunch Break</li>
                                        <li className="">13.30/14.30 - Session IX.</li>
                                        <li className="">14.30/15.00 - Coffee Break</li>
                                        <li className="">15.00/16.30 - Session X.</li>
                                        <li className="">16.30/17.00 - Coffee Break</li>
                                        <li className="">17.00/18.30 - Closing Ceremony</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}