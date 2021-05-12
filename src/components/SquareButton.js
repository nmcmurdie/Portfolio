import React from 'react'
import './SquareButton.css'

function SquareButton({ icon, iconURL, alt, link }) {
    return (
        <form action={link}>
            <button title={alt} className={`button button-square button-${alt.toLowerCase()}`}>
                {icon && <span className="material-icons-outlined">{icon}</span>}
                {iconURL && <img className="button-icon" alt={alt} src={`${process.env.PUBLIC_URL}/img/${iconURL}`} />}
            </button>
        </form>
    )
}

export default SquareButton
