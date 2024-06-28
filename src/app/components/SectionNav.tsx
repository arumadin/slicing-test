import React from 'react'

interface NavProps {
    index: any;
    onShow: any;
}  

export default function SectionNav({index, onShow} : NavProps) {
  return (
        <div className='nav-item' onClick={onShow}></div>
  )
}