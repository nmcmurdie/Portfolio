import React from 'react'
import Section from '../Section'
import Profile from '../../components/Profile'
import SquareButton from '../../components/SquareButton'
import './TitleSection.css'

function TitleSection() {
    return (
        <Section type="title" title="Nicholas McMurdie">
            <Profile />
            <div className="links-container">
                <SquareButton alt="Email" icon="email" link="mailto:nickmcmurdie@gmail.com" />
                <SquareButton alt="Github" iconURL="github.svg" link="https://www.github.com/nmcmurdie" />
                <SquareButton alt="LinkedIn" iconURL="linkedin.svg" link="https://www.linkedin.com/in/nick-mcmurdie" />
            </div>
        </Section>
    )
}

export default TitleSection
