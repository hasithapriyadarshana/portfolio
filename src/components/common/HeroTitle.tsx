import React from 'react'
import "./HeroTitle.css";
type HeroTitleProps = {
    text: string; // Title text 
    className?: string; // Extra styles (optional)

}

function HeroTitle({text, className=""}: HeroTitleProps) {
  return (
    <>
    <h1 className={`herotext ${className}`}>{text}</h1>
    </>
  )
}

export default HeroTitle