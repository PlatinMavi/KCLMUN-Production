// venue, transportation, sponsor
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

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
        <div className="min-h-screen bg-black py-24">
            <h1 className="mt-4 mb-4 text-4xl text-center text-white int font-bold">Venue & Transportation</h1>
            {/* <hr className="mx-auto mb-4 border w-2/3" /> */}
            <div id="map" className="container  h-96 mx-auto"></div>
            <ul className="container mx-auto mt-4 text-md grid grid-cols-3 gap-8 text-center text-white">
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
            <div className="container mx-auto my-8 border rounded-xl bg-[#1c1c1c] min-h-96">
                <p className="mt-16 text-xl text-white font-thin text-center">Our Sponsors Are Yet To Be Displayed...</p>
            </div>
        </div>
    )
}