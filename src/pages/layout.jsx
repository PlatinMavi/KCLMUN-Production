import { Outlet, Link } from "react-router-dom";
import logobar from "../assets/logobar.png"

// BURAYI ELLEME BURA NAVBAR VE FOOTER

const Layout = () => {
    function handledropdown(){
        let menu = document.getElementById("dropdown")
        if (menu.classList.contains("hidden")){
            menu.classList.remove("hidden")
        }else {
            menu.classList.add("hidden")
        }
    }
    return (
        <div className="max-w-screen overflow-x-hidden">
            <nav className="w-screen fixed bg-[#1c1c1c] h-16 sm:h-20 text-white z-50 border-b-2">
                <div className="container flex justify-between mx-auto">
                    <div className="mt-4 gap-x-12 flex font-bold">
                        <Link to={"/"} className="sm:text-5xl text-3xl ml-4 sm:ml-0 font-extrabold">KCLMUN</Link>
                        <Link className=" hidden sm:block text-2xl mt-2" to={"/conferance"}>CONFERANCE</Link>
                        {/* <Link className=" hidden sm:block text-2xl mt-2" to={"/faq"}>FAQ</Link> */}
                        <Link className=" hidden sm:block text-2xl mt-2" to={"/about"}>ABOUT</Link>
                        <Link className=" hidden sm:block text-2xl mt-2" to={"/committes"}>COMMITTES</Link>
                        <button onClick={()=>handledropdown()} className="w-8 -translate-y-1 sm:hidden absolute right-4"><hr className="mt-2 border" /> <hr className="mt-[0.625rem] border" /> <hr className="mt-3 border" /></button>
                    </div>
                    <div className="">
                        <img src={logobar} alt="" srcset="" className="h-[78px] hidden sm:block" />
                    </div>
                </div>
                <div className=" bg-[#1c1c1cec] break-words mt-2 p-4 text-center hidden mx-auto" id="dropdown">
                        <Link className=" text-xl mt-2" to={"/conferance"}>CONFERANCE</Link> <br />
                        <hr className="w-1/2 my-1 mx-auto" />
                        {/* <Link className=" text-xl mt-2" to={"/faq"}>FAQ</Link> <br /> */}
                        {/* <hr className="w-2/3 my-1 mx-auto" /> */}
                        <Link className=" text-xl mt-2" to={"/about"}>ABOUT</Link> <br />
                        <hr className="w-1/2 my-1 mx-auto" />
                        <Link className=" text-xl mt-2" to={"/committes"}>COMMITTES</Link>
                </div>
            </nav>

            <Outlet />

            <div className="container text-white rounded-2xl py-4 px-8 mx-auto bg-black h-20 my-24 flex justify-between">
                <div className="font-bold sm:text-3xl text-2xl">KCLMUN©</div>
                <p className="text-center sm:text-lg text-sm px-4 mt-2 w-max int">
                    Proudly Presented by IT Team
                </p>
                <Link className="" to={"https://www.instagram.com/kclmodelun/"}>
                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                        <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
};

export default Layout;