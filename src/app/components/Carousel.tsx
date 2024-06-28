'use client'; 

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper
import 'swiper/css';
import { register } from 'swiper/element/bundle';
import { A11y, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type CarouselItem = {
    itemTitle: string;
    itemText: string;
}

interface SliderProps {
  slides: {
    title: string;
    text: string;
    link: string;
  }[];
}

// register swiper
register();

export default function Carousel() {
    const [carouselData, setCarouselData] = useState([]);

    const getAPI = async () => {
        const response = await fetch("http://localhost:3000/api")
        const data = await response.json();
        const slide2Data = data.filter((data:any) => data.section == 'slide-2')
        const slideItems = slide2Data[0].slides.slideItems;

        setCarouselData(slideItems);
        
      };

    useEffect(() => {

        getAPI();
       
    }, []);


  return (
    <div className=' carousel-wrap'>
        <Swiper
            className="carousel-swiper"
            modules={[A11y, Navigation]}
            slidesPerView={2.5}
            slidesPerGroup={1}
            spaceBetween={0}
            pagination={{
            clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev'
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1.15,
                    spaceBetween: 10,
                },
                769: {
                    slidesPerView: 2.8,
                    spaceBetween: 15,
                },
                1920: {
                    slidesPerView: 2.8,
                    spaceBetween: 30,
                }
                }}
            loop={true}
        >
            {carouselData.map((slide:CarouselItem, i:number) => (
                <SwiperSlide key={`${i}`}>
                    <div>
                        <p className='slide-title'>
                            {slide.itemTitle}
                            </p> 
                            <p>{slide.itemText}</p>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>

        <div className="swiper-btn-prev"></div>
        <div className="swiper-btn-next"></div>
    </div>
  );
};