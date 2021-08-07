import React from 'react'
import './Footer.css'
import { useLocation } from 'react-router'

export default function Footer() {
    let location = useLocation()
    console.log(location.pathname)
    if (location.pathname.match(/admin/)){
      return null
    }
    return (
        <div className='footer_container'>
            <div className="footer_icons">
            <i className="fab fa-facebook"></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-instagram'></i>
            </div>
        </div>
    )
}
