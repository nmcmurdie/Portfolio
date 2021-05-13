import React from 'react'
import './SquareButton.css'

function SquareButton({ icon, iconURL, alt, link, simple }) {
    return (
        <a href={link} title={alt} className={`button button-square button-${alt.toLowerCase()}${simple ? ' button-simple' : ''}`}>
            {icon && <span className="material-icons-outlined button-icon">{icon}</span>}
            {iconURL && <img className="button-icon" alt={alt} src={`${process.env.PUBLIC_URL}/img/${iconURL}`} />}
        </a>
    )
}

export default SquareButton
