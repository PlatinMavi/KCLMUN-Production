import { useEffect, useState } from "react"
import disec from "../assets/disec.webp"
import nato from "../assets/nato.png"
import europeancouncil from "../assets/eu.jpg"
import placeholder from "../assets/123.jpg"
import unesco from "../assets/unesco.jpg"
import hcc from "../assets/hcc.jpg"
import legal from "../assets/legal.jpeg"

export default function Committes(){

    const [currentbg, setCurrentBg] = useState(disec)

    // useEffect(()=>{
    //     const root = document.getElementById("root")
    //     root.classList.add("max-h-screen")
    //     root.classList.add("overflow-y-hidden")
    //     // root.classList.add("overflow-x-scroll")

    //     return(()=>{
    //         root.classList.remove("max-h-screen")
    //         root.classList.remove("overflow-y-hidden")  
    //         // root.classList.add("overflow-x-scroll")
    //     })
    // },[])

    function HandleCommitteClick(toSwitch){
        const h1 = document.getElementById("h1")
        const p1 = document.getElementById("p1")

        // BAK ŞİMDİ BU CASELER VAR YA, BUNLAR BUTON TIKLAMASINDA ÇALIŞIYO ALTTA KOMİTELER İÇİN BUTON VAR ZATEN GÖRÜRSÜN
        // 67.SATIRDA MESELA ONCLİCK İÇİNDEKİ FONKSİYONDA İÇİNDE NE YAZIYOSA O CASE ÇALIŞIR, FOTOLARI BENİM YAPTIĞIM GİBİ İMPORT EDİP SRCLER İÇİNE KOYCAN
        // CASE SONUNA BREAK KOYMAYI UNUTMA KOD YARRA YİYO

        switch(toSwitch){
            case "disec":
                setCurrentBg(disec)
                h1.innerHTML = "DISEC"
                p1.innerHTML = "The Disarmament and International Security Committee (DISEC) is one of the six main committees of the United Nations General Assembly. Established in 1945, DISEC focuses on disarmament, global security, and the prevention of armed conflicts. Its mandate includes addressing issues such as nuclear proliferation, conventional weapons control, and disarmament treaties. DISEC serves as a forum for member states to collaborate on solutions to pressing international security challenges."

                break
            case "nato":
                setCurrentBg(nato)
                h1.innerHTML = "NATO"
                p1.innerHTML = "NATO, the North Atlantic Treaty Organization, is a military alliance formed in 1949 to ensure the collective defense of its member states against external aggression. Comprising 30 member countries as of 2022, NATO serves as a cornerstone of transatlantic security and cooperation. The organization's core principles include collective defense, crisis management, and cooperative security, aimed at maintaining peace and stability in the Euro-Atlantic region. NATO's activities range from joint military exercises and operations to diplomatic dialogue and partnerships with non-member states, contributing to global security efforts."

                break
            case "European Council":
                setCurrentBg(europeancouncil)
                h1.innerHTML = "European Council"
                p1.innerHTML = " The European Council is a key institution of the European Union, composed of the heads of state or government of its member states along with the President of the European Council and the President of the European Commission. Established in 1974, it provides strategic direction and sets the EU's political priorities. The European Council meets regularly to address pressing issues facing the EU, including economic policies, foreign affairs, and major crises. Its decisions shape the course of EU integration and influence policies across a wide range of areas affecting European citizens."

                break
            case "ICC":
                setCurrentBg(placeholder)
                h1.innerHTML = "ICC"
                p1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore minus veritatis officiis soluta earum. Quos dolor tempora veritatis aut labore, voluptates, velit voluptatum dolorum aliquam iste, repudiandae autem libero."

                break
            case "UNESCO":
                setCurrentBg(unesco)
                h1.innerHTML = "UNESCO"
                p1.innerHTML = "UNESCO, Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü, 1945 yılında kurulmuş uluslararası bir kuruluştur. Misyonu, eğitim, bilim, kültür ve iletişim alanlarında işbirliği yaparak barışı desteklemek ve sürdürülebilir kalkınmayı teşvik etmektir. UNESCO, dünya çapında kültürel mirasın korunması, eğitim sisteminin geliştirilmesi ve bilimsel işbirliğinin teşvik edilmesi gibi çeşitli alanlarda faaliyet göstermektedir. Küresel düzeyde eğitim, bilim ve kültür alanlarındaki politika oluşturucu çalışmalarıyla tanınır ve uluslararası işbirliğinin güçlendirilmesine önemli katkılar sağlar."

                break
            case "HCC":
                setCurrentBg(hcc)
                h1.innerHTML = "HCC"
                p1.innerHTML = "Kurtuluş Savaşı'na odaklanan Tarihi Kriz Komitesi (HCC), Türkiye'nin yakın tarihindeki kritik bir döneme ışık tutuyor. 1919-1923 yılları arasındaki çalkantılı süreçte, Türk milletinin bağımsızlık ve özgürlük mücadelesi, katılımcı delegelerin rollerini üstlendiği canlı ve etkileyici bir ortamda ele alınacak. Bu, delegelerin siyasi dehalarını, tarihi figürlerin zorlu kararlarını ve savaşın etkilerini analiz etmelerini sağlayacak dinamik bir platform sunacak. Komite, Cumhuriyetimizin 100. yılı olan bu özel dönemde Kurtuluş Savaşı'nın önemini vurgulayarak, diplomasi ve stratejiyi bir araya getirerek katılımcıları tarihin derinliklerine çekecek."

                break
            case "LEGAL":
                setCurrentBg(legal)
                h1.innerHTML = "LEGAL"
                p1.innerHTML = "The Legal Committee, also known as the Sixth Committee, is a vital component of the United Nations General Assembly. Established in 1946, its primary focus lies in legal matters concerning international law, treaties, and the rule of law at the global level. The committee plays a pivotal role in deliberating on issues ranging from the codification of international law to the settlement of disputes between states. Through its sessions, the Legal Committee fosters dialogue and cooperation among UN member states to promote adherence to legal principles and uphold the foundation of international justice."

                break
            }

    }

    return(
        <div className="pt-20 overflow-x-hidden bg-black">
            <div className="h-screen mx-6 p-4">
                <div className="h-[60%] my-4 relative ">
                    <img className="h-full w-full object-cover rounded-lg opacity-40" src={currentbg} alt="" />
                    <div className="absolute top-12 left-12">
                        <h1 className=" text-white text-4xl font-bold" id="h1">DISEC</h1>
                        <p className="mt-4 text-gray-200 w-1/2 break-words text-lg" id="p1">The Disarmament and International Security Committee (DISEC) is one of the six main committees of the United Nations General Assembly. Established in 1945, DISEC focuses on disarmament, global security, and the prevention of armed conflicts. Its mandate includes addressing issues such as nuclear proliferation, conventional weapons control, and disarmament treaties. DISEC serves as a forum for member states to collaborate on solutions to pressing international security challenges.</p>
                    
                        <button className="bg-red-600 rounded-md px-4 py-2 text-white text-lg mt-4 text-center">Study Guide</button>
                        <button className="border-2 border-red-600 ml-4 rounded-md px-4 py-2 text-white text-lg mt-4 text-center">ROP</button>
                    </div> 
                </div>
                <h2 className="text-4xl text-white my-4 font-bold">
                    Other Committes:
                </h2>
                <div className="grid grid-cols-7 max-w-screen gap-4">
                    <button className="relative" onClick={()=>HandleCommitteClick("disec")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={disec} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            DISEC
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("nato")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={nato} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            NATO
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("European Council")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={europeancouncil} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            European <br /> Council
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("ICC")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={placeholder} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            ICC
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("UNESCO")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={unesco} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            UNESCO
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("HCC")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={hcc} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            HCC
                        </h1>
                    </button>
                    <button className="relative" onClick={()=>HandleCommitteClick("LEGAL")}>
                        <img className="h-44 w-full object-cover rounded-lg opacity-60" src={legal} alt=""/>
                        <h1 className="text-2xl absolute top-0 left-4 text-white my-4 font-semibold">
                            LEGAL
                        </h1>
                    </button>
                </div>
            </div>
        </div>


    )
}