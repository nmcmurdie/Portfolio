import React from 'react'
import Section from './Section'
import Profile from '../components/Profile'
import './TitleSection.css'

function TitleSection() {
    return (
        <Section type="title" title="Nicholas McMurdie">
            <Profile />
            <div className="links-container">
                
            </div>
        </Section>
    )
}

export default TitleSection
