/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const EachRoom = () => {

    const roomDetails = useLoaderData();
    const {user} = useContext(AuthContext);

    const { _id, room_type, price_per_night, room_size, special_offers, description, img } = roomDetails;

    const handleRoomBook = event =>{
        event.preventDefault();

        const form = event.target;
        const email = user?.email;
        const date = form.date.value;
        const booking = {
             room_type,
             img,
             email,
             date,
             _id,
             price_per_night
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
               'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Room book successfully')
            }
        })
    }

  
  
    return (
        <form   onSubmit={handleRoomBook}  >
            <div className="card card-side bg-base-100 shadow-xl mt-4">
            <figure  className="w-full h-[600px]"><img src={img} alt="Movie" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title text-3xl"><span className="text-orange-600 font-bold">Name:</span> {room_type}</h2>
                    <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Price:</span> ${price_per_night}</p>
                    <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Room Size:</span> {room_size}</p>
                    <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Availability:</span>available. </p>
                    <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Description:</span> {description}</p>
                    <p className="text-2xl my-4"><span className="text-orange-600 font-bold">Special Offer:</span> {special_offers}</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl text-orange-600 font-bold">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="card-actions justify-end my-4">
                        <div className="btn-group btn-group-vertical space-y-4">
                            {/* <Link to={`confirmBooking/${_id}`}>
                                <button className="btn btn-warning btn-outline">Book Now</button>
                            </Link> */}
                            {/* <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-500">X</button> */}
                        <div className="form-control mt-6">
                    <input className="btn btn-warning btn-block btn-outline" type="submit" value="Book Now" />
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>

    );
};


export default EachRoom;

 