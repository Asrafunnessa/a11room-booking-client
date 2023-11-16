import { useState } from "react";
import { useEffect } from "react";
import RoomsCard from "./RoomsCard";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('https://room-booking-server-two.vercel.app/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h2 className="text-5xl">Explore Our Rooms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {
                    rooms.map(room => <RoomsCard
                        key={room._id}
                        room={room}
                    ></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;

