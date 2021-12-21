import { useState, useEffect } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TempData from './temp-data';
import Profile from './profile';
import DateTime from './date-time';

const WinSwiper = () => {
    const [tempData, setTempData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await axios.get('https://api-micropro.herokuapp.com/temp/');
        setTempData(res.data);
      }

      fetchData();
    }, []);
  
  return (
    <div className='flex justify-center items-center'>
      <div className='w-1/2 p-6 flex flex-wrap'>
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={1}
        >
          {tempData.map((d) => (
            <SwiperSlide key={d.id}>
              <div className='bg-white h-96 p-6 flex justify-start rounded-2xl shadow-2xl'>
                <TempData temp_obj={d.temp_obj} temp_env={d.temp_env} />
                <div className='w-3/5 h-full flex flex-col justify-around items-center'>
                  <Profile image={d.img}/>
                  <DateTime created_at={d.created_at} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WinSwiper;
