import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="text-white carousel w-full h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Punjab</h1>
                        <p className='w-[455px] h-[120px]'>Known for dishes like butter chicken, tandoori chicken, and makki di roti with sarson da saag.</p>
                    </div>
                    <div className='ml-[80px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://static.toiimg.com/thumb/msid-79034915/79034915.jpg?width=500&resizemode=4" alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mt-[30%] ml-[41%]">❮</a>
                        <a href="#slide2" className="btn btn-circle mt-[30%] mr-[50%]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Gujarat</h1>
                        <p className='w-[455px] h-[120px]'>Known for dishes like dhokla, thepla, and undhiyu, which are vegetarian specialties. </p>
                    </div>
                    <div className='ml-[50px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/02/25/627599-1582585202.jpg?itok=oOdI83xa" alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mt-[30%] ml-[41%]">❮</a>
                        <a href="#slide3" className="btn btn-circle mt-[30%] mr-[50%]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Kerala</h1>
                        <p className='w-[455px] h-[120px]'> Known for dishes like appam, puttu, and fish curry, which incorporate coconut and seafood.</p>
                    </div>
                    <div className='ml-[50px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/10/kerala-food.jpg" alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mt-[30%] ml-[41%]">❮</a>
                        <a href="#slide4" className="btn btn-circle mt-[30%] mr-[50%]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className=' mt-[250px] ml-[125px] '>
                        <h1 className='text-7xl font-bold pb-4'>Rajasthan </h1>
                        <p className='w-[455px] h-[120px]'> Known for dishes like dal baati churma, laal maas, and gatte ki sabzi, which are rich in flavor and often spicy. </p>
                    </div>
                    <div className='ml-[50px] mt-[166px]'>
                        <img className=' h-[60%]' src="https://www.holidify.com/images/cmsuploads/compressed/Tastes_from_Rajasthan_20180314222457.jpg" alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mt-[30%] ml-[41%]">❮</a>
                        <a href="#slide1" className="btn btn-circle mt-[30%] mr-[50%]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;