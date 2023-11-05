/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const RoomsCard = ({ room }) => {
    const { _id, room_type, img, price_per_night } = room;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{room_type}</h2>
                <p className="text-xl text-orange-500">Price: ${price_per_night}</p>
                <div className="card-actions">
                    <Link to={`/roomsDetails/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;