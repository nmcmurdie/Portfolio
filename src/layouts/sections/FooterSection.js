import React from 'react'
import SquareButton from '../../components/SquareButton'
import Section from '../Section'
import './FooterSection.css'

function FooterSection() {
    return (
        <Section type="footer">
            <div className="links-container footer-links">
                <SquareButton iconURL="github.svg" link="https://www.github.com/nmcmurdie/portfolio" alt="Github" simple="true" />
            </div>
            Made with ❤️ and React.js
            <span className="spacer" />
            <i>Copyright © 2021 Nicholas McMurdie</i>
        </Section>
    )
}

export default FooterSection
