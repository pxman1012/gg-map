// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility"; // Đảm bảo icon hoạt động đúng
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// const center = [10.762622, 106.660172]; // Ví dụ: tọa độ Hồ Chí Minh

// export default function OpenStreetMap() {
//     return (
//         <div style={{ height: "400px", width: "100%" }}>
//             <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
//                 {/* Sử dụng TileLayer để tải bản đồ từ OpenStreetMap */}
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {/* Thêm một marker */}
//                 <Marker position={center}>
//                     <Popup>Đây là Hồ Chí Minh</Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     );
// }

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";

function AddMarker() {
    const [markers, setMarkers] = useState([]);

    useMapEvents({
        click(e) {
            setMarkers((prev) => [...prev, e.latlng]);
        },
    });

    return (
        <>
            {markers.map((position, idx) => (
                <Marker key={idx} position={position}>
                    <Popup>Bạn đã nhấp ở đây!</Popup>
                </Marker>
            ))}
        </>
    );
}

export default function OpenStreetMap() {
    const center = [10.762622, 106.660172];

    return (
        <div style={{ height: "400px", width: "100%" }}>
            <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <AddMarker />
            </MapContainer>
        </div>
    );
}
