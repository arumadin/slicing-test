'use client'
import { useState, useEffect, ReactNode } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SectionProps {
  isActive: any;
  children: ReactNode;
}

interface sectionDataType {
  id: any,
  section: string,
  data: {
    title: string,
    subtitle: string,
    videoURL: string
  }
};
const sectionData= {
  id: null,
  section: '',
  data: {
    title: '',
    subtitle: '',
    videoURL: ''
  }
};

export default function Section1({isActive, children} : SectionProps) {

    const [dataSection1, setDataSection1] = useState<sectionDataType>(sectionData);
   
    useEffect(() => {

        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                const slide1Data = data.filter((data:any) => data.section == 'slide-1')
                const slide1Content = slide1Data[0]
                // console.log(slide1Content)
                setDataSection1({...dataSection1, ...slide1Content})
            })
        
    }, []);

    useEffect(() => {
      if (isActive === 0 && (dataSection1.id !== null)) {
        startAnim()
      }
    });

    const {contextSafe} = useGSAP();
    const startAnim = contextSafe(() => {
      gsap.set('.slide-1__title, .divider, .slide-1__content p', {
        opacity: 0,
        y: 20
      })
      let tl = gsap.timeline({
          defaults: { 
              duration: 1,
              ease: "power1.inOut" 
          }
      })

      tl.to('.slide-1__title, .divider, .slide-1__content p', 
         {
         opacity: 1,
         y: 0,
         stagger: 0.5
      })
      
  })


  return (
    <>    
      <section className={(isActive === 0 ? 'show ' : 'hide ') + dataSection1.section + ' slides first w-full h-screen overflow-hidden'} >
        <div className="outer">
          <div className="inner"> 
            <div className="bg" >
                <div className="video__wrap">
                    <video className="video" src={dataSection1.data.videoURL} muted autoPlay loop ></video>
                    <div className="video__overlay"></div>
                </div>
                <div className='slide-1__content'>
                    <h1 className="slide-1__title">
                        {dataSection1.data.title}
                    </h1>
                    <div className="divider"></div>
                    <p>
                        {dataSection1.data.subtitle}
                    </p>
                </div>
                {children}
              </div>     
          </div>
        </div>
      </section>
  </>
  )
}
