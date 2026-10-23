
import {useState} from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'


function Hero () {
    const photo = {id:"photo-1598216048950-0aec55fac3a1", description: "hungry birds"}
    const {id,description} = photo
    const {src, alt} = heroPhoto ({
        photo:id,
        width:300,
        height:150,
        sat:0,
        description
    })

    return(
        <div>
            <div className = "hero">
                <img src = {src} alt = {alt}/>
                
            </div>
        </div>
    )
}


export default Hero