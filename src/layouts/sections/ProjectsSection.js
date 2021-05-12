import React from 'react'
import Card from '../../components/Card'
import Section from '../Section'

function ProjectsSection() {
    return (
        <Section type="projects" title="Projects">
            <div className="cards-container">
                <Card iconURL="quickpage.png" title="QuickPage" link="https://quickpage.sweepkey.net/" linkAlt="Details">
                    <span className="card-title">QuickPage</span>
                    A modern new tab page with powerful widgets
                </Card>
                <Card iconURL="chemtools.png" title="ChemTools" link="https://chemtools.sweepkey.net/" linkAlt="Open">
                    <span className="card-title">ChemTools</span>
                    Visualize chemistry with this suite of useful tools
                </Card>
                <Card iconURL="projects.png" title="Github" link="https://www.github.com/nmcmurdie" linkAlt="Open">
                    <span className="card-title">More Projects</span>
                    More of my personal projects can be found on my Github, linked below
                </Card>
            </div>
        </Section>
    )
}

export default ProjectsSection
