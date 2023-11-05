

const FeaturedRoom = () => {
    return (
        <div className="mt-4">
        <div className="text-center">
            <h3 className="text-5xl font-bold text-orange-600">Our Featured Rooms</h3>
            <p className="text-2xl font-bold">Make your Vacation Beautiful & happy. </p>
        </div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/LCsTySk/S3.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/8zP6K3m/STU3.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/P9PQdJp/D5.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/2sM8sT5/STU4.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
             
        </div>
    );
};

export default FeaturedRoom;