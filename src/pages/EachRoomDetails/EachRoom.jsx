/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const EachRoom = () => {

    const roomDetails = useLoaderData();

    const { _id, room_type, price_per_night, room_size, special_offers, description, img } = roomDetails;

    return (
        <div className="card card-side bg-base-100 shadow-xl mt-4">
        <figure><img src={img} alt="Movie" /></figure>
        <div className="flex justify-between w-full p-4">
            <div>
                <h2 className="card-title text-3xl"><span className="text-orange-600 font-bold">Name:</span> {room_type}</h2>
                <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Price:</span> ${price_per_night}</p>
                <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Room Size:</span> {room_size}</p>
                <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Availability:</span> Its available. </p>
                <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Description:</span> {description}</p>
                <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Special Offer:</span> {special_offers}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                    <Link to={`roomBooked/${_id}`}>
                    <button className="btn btn-primary">Book Now</button>
                    </Link>
                    {/* <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-500">X</button> */}
                </div>
            </div>
        </div>
    </div>

    );
};


export default EachRoom;

