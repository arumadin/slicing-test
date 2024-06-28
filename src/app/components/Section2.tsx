'use client'
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Carousel from './Carousel';

interface SectionProps {
    isActive: any;
}  

const sectionData = {
    id: null,
    background: {},
    section: '',
    slides: {
        title: ''
    }
}

interface sectionDataType {
    id: any,
    background: object,
    section: string,
    slides: {
        title: string
    }
}

export default function Section2({isActive} : SectionProps) {
    const [dataSection2, setDataSection2] = useState<sectionDataType>(sectionData);

    useEffect(() => {

        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                const slide2Data = data.filter((data:any) => data.section == 'slide-2')
                const slide2Content = slide2Data[0]
                setDataSection2({...dataSection2, ...slide2Content})
            })
        
    }, []);

    useEffect(() => {
        if (isActive === 1 && (dataSection2.id !== null)) {
          startAnim()
        }
      });

    const {contextSafe} = useGSAP()
    const startAnim = contextSafe(() => {
        gsap.set('.swiper-btn-prev, .swiper-btn-next', {
            autoAlpha:0,
        })

        let tl = gsap.timeline({
            defaults: { 
                duration: 0.8,
                ease: "power1.inOut" 
            }
        })

        tl.fromTo('.slide-2__title', 
                {
                    autoAlpha: 0,
                    y: -50
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    delay: 1.5
                }
            )

        tl.fromTo('.swiper-slide', 
            {
                autoAlpha: 0,
                y: -20
            },
            {
                autoAlpha: 1,
                y: 0,
                stagger: 0.2
            }
        )

        tl.to('.swiper-btn-prev, .swiper-btn-next', 
            {
                autoAlpha: 1,
            }
        )
        
    })

    
    return (
        <>
            <section className={(isActive === 1 ? 'show ' : 'hide ') + dataSection2.section + ' slides first w-full h-screen overflow-hidden'} >
                <div className="outer">
                    <div className="inner"> 
                        <div className="bg" >
                            <picture className='bg__img'>
                                <source media="(max-width: 800px)" srcSet="/img-800x368.jpg" />
                                <source media="(min-width: 801px) and (max-width: 1920px)" srcSet="/img-1280x800.jpg" />
                                <source media="(min-width: 1921px)" srcSet="/img-1920x1200.jpg" />
                                <img src="/img-1920x1200.jpg" alt="Background image earth" />
                            </picture>
                        </div>  
                        <div className='slide-2__content'>
                            <h1 className='slide-2__title'>
                                {dataSection2.slides.title}
                            </h1>
                            <Carousel></Carousel>
                        </div>   
                    </div>
                </div>    
            </section>
        </>
    
  )
}
