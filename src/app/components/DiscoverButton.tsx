'use client'
import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface DiscoverButtonProps {
    text: string;
    link: string;
    isActive: boolean;
}

interface buttonDataType {
    btnText: string;
    btnLink: string;
    target: string;
};

const buttonData = {
    btnText: '',
    btnLink: '',
    target: ''
};

export default function DiscoverButton({text, link, isActive} : DiscoverButtonProps) {
    const [dataBtn, setDataBtn] = useState<buttonDataType>(buttonData);

    useGSAP(() => {
        gsap.set('.btn-discover', {
            autoAlpha: 0,
            y: -50,
        })
        let tl = gsap.timeline({
            defaults: { 
                duration: 1, 
                delay: 1.5,
                ease: "power1.inOut" 
            }
        })

        tl.to('.btn-discover', {
            y: 0,
            autoAlpha: 1
        })
    }, [isActive])

    useEffect(() => {

        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                const headerData = data.filter((data:any) => data.section == 'header')
                const buttonData = headerData[0].button;
                setDataBtn({...dataBtn, ...buttonData})
            })
        
    }, []);
   
    return (
        <>
            <div className={(isActive ? 'show' : 'hide') + " btn-discover"}>
                <a href={dataBtn.btnLink} target={dataBtn.target}>
                    {dataBtn.btnText}    
                </a>
            </div>  
              
        </>
    )
}