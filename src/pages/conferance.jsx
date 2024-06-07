// venue, transportation, sponsor
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import placeholder from "../assets/123.jpg"
import chair from "../assets/chair.jpg"
import admin from "../assets/admin.jpg"
import press from "../assets/press.jpg"
import crisis from "../assets/crisis.jpg"
import delegate from "../assets/delegate.jpeg"
import delegate2 from "../assets/delegate2.webp"

export default function Conferance() {

    useEffect(()=>{
        const map = L.map("map").setView([40.761174294310536, 29.896006557671054], 15); // Set initial coordinates and zoom level

        // Add a tile layer (e.g., OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add a marker (optional)
        const customMarker = L.icon({
            iconUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
    
        const marker = L.marker([40.761174294310536, 29.896006557671054], { icon: customMarker }).addTo(map)
            .bindPopup("KCLMUN'24 <br/> Kocaeli Kongre Merkezi ");

        marker.openPopup()
    },[])

    return (
        <div className="min-h-screen  py-20">

            <section className="min-h-screen p-8  bg-black">  
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-white">Application</h2>
                <hr className="w-1/2 mx-auto" />
                <div className=" mx-auto container grid p-12 grid-cols-1 gap-y-12 sm:grid-cols-3">
                    <div class="max-w-sm max-h-sm  border border-gray-200 rounded-lg shadow bg-[#1c1c1c]">
                        <a href="#">
                            <img class="rounded-t-lg sm:h-96 h-48 object-cover w-full" src={delegate} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Individual Delegate</h5>
                            </a>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ffcccb] rounded-lg ">
                                Apply Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm max-h-sm  border border-gray-200 rounded-lg shadow bg-[#1c1c1c]">
                        <a href="#">
                            <img class="rounded-t-lg sm:h-96 h-48 object-cover w-full" src={delegate2} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Delegation</h5>
                            </a>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ffcccb] rounded-lg ">
                                Apply Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm max-h-sm  border border-gray-200 rounded-lg shadow bg-[#1c1c1c]">
                        <a href="https://forms.gle/wzqy4G5c4DKS1Cdf6#">
                            <img class="rounded-t-lg sm:h-96 h-48 object-cover w-full" src={chair} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="https://forms.gle/wzqy4G5c4DKS1Cdf6">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Chairboard Member </h5>
                            </a>
                            <a href="https://forms.gle/wzqy4G5c4DKS1Cdf6" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ffcccb] rounded-lg ">
                                Apply Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm max-h-sm  border border-gray-200 rounded-lg shadow bg-[#1c1c1c]">
                        <a href="#">
                            <img class="rounded-t-lg sm:h-96 h-48 object-cover w-full" src={crisis} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Crisis Team Member</h5>
                            </a>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ffcccb] rounded-lg ">
                                Apply Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm max-h-sm  border border-gray-200 rounded-lg shadow bg-[#1c1c1c]">
                        <a href="https://forms.gle/mBuoCwD3xsaL3Rp96">
                            <img class="rounded-t-lg sm:h-96 h-48 object-cover w-full" src={admin} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="https://forms.gle/mBuoCwD3xsaL3Rp96">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Administrative staff</h5>
                            </a>
                            <a href="https://forms.gle/mBuoCwD3xsaL3Rp96" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ffcccb] rounded-lg ">
                                Apply Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm max-h-sm  border border-gray-200 rounded-lg shadow bg-[#1c1c1c]">
                        <a href="#">
                            <img class="rounded-t-lg sm:h-96 h-48 object-cover w-full" src={press} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Press Member</h5>
                            </a>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00ffcccb] rounded-lg ">
                                Apply Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white">Frequently Asked Questions</h2>
                    <div className="grid pt-8 text-left border-t md:gap-16 border-gray-700 md:grid-cols-2">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    What is mun?
                                </h3>
                                <p className="text-gray-400">MUN stands for Model United Nations. It's an educational simulation where students role-play as delegates representing countries and engage in debates to address global issues, mirroring the workings of the actual United Nations.</p>
                            </div>
                            <div className="mb-10">                        
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Is there a dresscode?
                                </h3>
                                <p className="text-gray-400">Yes, the dress code during KCLMUN’24 is western business attire.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Who can participate?
                                </h3>
                                <p className="text-gray-400">Any delegates attending high school or university are welcomed to our conference.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Accommodation
                                </h3>
                                <p className="text-gray-400">The information about accommodotion options will be published soon</p>
                                
                            </div>
                        </div>



                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    How much is the event fee and what is included?
                                </h3>
                                <p className="text-gray-400">Fees; Early Application 400, Normal Application 450, Late Application 500 Turkish Liras. The conference fee includes a welcome pack, coffee break snacks and lunch for 3 days during the conference. </p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    What are the attendance requirements?
                                </h3>
                                <p className="text-gray-400">Delegates who miss 2 or more sessions will not be able to receive their participation certificate or rewards.</p>  
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Which MUN procedure will KCLMUN follow?
                                </h3>
                                <p className="text-gray-400">KCLMUN’24 will follow the Harvard MUN procedure.</p>
                                
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Is the social event fee included in the conference fee?
                                </h3>
                                <p className="text-gray-400">No, There will be a separate ticket fee for the social event.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="mt-4 mb-4 text-4xl text-center text-white int font-bold">Venue & Transportation</h1>
            {/* <hr className="mx-auto mb-4 border w-2/3" /> */}
            <div id="map" className="container  h-96 mx-auto"></div>
            <ul className="container mx-auto mt-4 text-md grid sm:grid-cols-3 gap-8 text-center text-white">
                <div className="w-2/3 mx-auto">
                    <h3 className="text-2xl my-4 font-bold">Option 1</h3>
                    <li className="border-t">
                        You can come by train, get off at the area closest to the tram stop, then take the tram and get off at the congress center.
                    </li>
                </div>
                <div className="w-2/3 mx-auto">
                    <h3 className="text-2xl my-4 font-bold">Option 2</h3>
                    <li className="border-t">
                        You can use bus number 200, which departs from Kartal Perons, and get off at the area closest to the tram stop.
                    </li>
                </div>
                <div className="w-2/3 mx-auto">
                    <h3 className="text-2xl my-4 font-bold">Option 3</h3>
                    <li className="border-t">
                        You can use our shuttle vehicle that will depart from Tuzla.
                    </li>
                </div>
            </ul>
            {/* <div className="container mx-auto my-8 border rounded-xl bg-[#1c1c1c] min-h-96">
                <p className="mt-16 text-xl text-white font-thin text-center">Our Sponsors Are Yet To Be Displayed...</p>
            </div> */}
        </div>
    )
}