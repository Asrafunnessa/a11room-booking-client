import img1 from '../../../assets/images/banner/4.jpeg';
import img2 from '../../../assets/images/banner/5.jpg';


const Newsletter = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={img2} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-2xl font-bold'>SUBSCRIPTION</h3>
                    <h1 className="text-5xl text-orange-500 font-bold">Newsletter</h1>
                    <p className="py-6 font-bold">Class apent taciti sociosqu ad lent per conu bia nostraellus. praesent eget em ante.Class apent taciti sociosqu ad lent per conu bia nostraellus. praesent eget em ante.Class apent taciti sociosqu ad lent per conu bia nostraellus. praesent eget em ante.</p>
                    <p className='py-6 font-bold'>Class apent taciti sociosqu ad lent per conu bia nostraellus.praesent eget em ante.</p>
                    <button className="btn btn-warning">Send Email</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;