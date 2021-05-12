import React from 'react'
import './Card.css'

function Card({ iconURL, title, children, link, linkAlt}) {
    return (
        <a className={`card card-${title.toLowerCase()}`} href={link}>
            <img alt={title} className="card-icon" src={`${process.env.PUBLIC_URL}/img/${iconURL}`} />
            <div className="card-content">
                <div className="card-desc">{children}</div>
                <button className="card-link">
                    {linkAlt}<span className="material-icons-outlined">arrow_forward</span>
                </button>
            </div>
        </a>
    )
}

export default Card
