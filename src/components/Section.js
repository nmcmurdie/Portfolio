import React from 'react'
import './Section.css'

function Section({ children, type, title }) {
    return (
        <div className={`section ${type}`}>
            {
                title && <>
                    <span className="section-title">{title}</span>
                    <br />
                </>
            }
            {children}
        </div>
    )
}

export default Section
