import React from 'react'
import './PageHeader.css'
import images from '../../constants/images';

export default function PageHeader({title}) {
  return (
    <div className="ghost__pageheader" style={{backgroundImage: `url(${images.backgroundBlack})`}}>
        <h1 className="ghost__pageheader-heading">{title}</h1>
    </div>
  )
}
