import React from 'react'
import './Skill.css'

function Skill({ icon, children}) {
    return (
        <div className="skill">
            <span className="material-icons-outlined skill-icon">{icon}</span>
            <div className="skill-content">{children}</div>
        </div>
    )
}

export default Skill
