'use client'
import { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Observer from 'gsap/dist/Observer';

import Section1 from "./Section1";
import Section2 from "./Section2";
import SectionNav from "./SectionNav";
import DiscoverButton from "./DiscoverButton";

export default function SectionSlides() {
  const [activeIndex, setActiveIndex] = useState(0);

  gsap.registerPlugin(Observer);

  useGSAP(() => {

    if (activeIndex === 0) {
      let tl = gsap.timeline({
            defaults: { 
                duration: 1,
                ease: "power1.inOut" 
            }
        })

        tl.to('.slide-2', {
          autoAlpha: 0,
          zIndex: -1
        })

        tl.to('.slide-1', {
          autoAlpha: 1,
          zIndex: 1,
        }, '>-0.5')

    } 

    if (activeIndex === 1) {
      let tl = gsap.timeline({
            defaults: { 
                duration: 1,
                ease: "power1.inOut" 
            }
        })

        tl.to('.slide-1', {
          autoAlpha: 0,
          zIndex: -1
        })

        tl.to('.slide-2', {
          autoAlpha: 1,
          zIndex: 1,
        }, '>-0.5')


        tl.from('.slide-2 .bg', {
          rotate: -45,
          xPercent: -60,
          scale: 1.2,
        })

    } 

    const myObserver = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => {
        setActiveIndex(0)
      },
      onUp: () =>{
        setActiveIndex(1)
      },
      tolerance: 10,
      preventDefault: true
    });
  }, [activeIndex])

  return (
    <>
        <Section1 isActive={activeIndex}>
          <div className="arrow-down" onClick={() => setActiveIndex(1)}></div>
        </Section1>
        <Section2 isActive={activeIndex}/>
        <div className="nav">
            <SectionNav index={0} onShow={() => setActiveIndex(0)}/>
            <SectionNav index={1} onShow={() => setActiveIndex(1)}/>
        </div>
        <DiscoverButton isActive={activeIndex !== 0} text={"Discover More"} link={"#discover-more"} />
    </>
  )
}