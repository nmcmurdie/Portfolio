import React from 'react'
import './SquareButton.css'

function SquareButton({ icon, iconURL, alt, link, simple }) {
    return (
        <form action={link}>
            <button title={alt} className={`button button-square button-${alt.toLowerCase()}${simple ? ' button-simple' : ''}`}>
                {icon && <span className="material-icons-outlined">{icon}</span>}
                {iconURL && <img alt={alt} src={`${process.env.PUBLIC_URL}/img/${iconURL}`} />}
            </button>
        </form>
    )
}

export default SquareButton
