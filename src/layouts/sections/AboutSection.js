import React from 'react'
import Skill from '../../components/Skill'
import Section from '../Section'

function AboutSection() {
    return (
        <Section type="about" title="About Me">
            <div className="skills-container">
                <Skill icon="school">
                    <span className="skill-title">BS in Computer Engineering</span>
                    <br />
                    Minor in Computer Science
                    <br />
                    <i>Brigham Young University</i>
                    <br />
                    Graduating in <span className="highlight">April 2023</span>
                    <br />
                    <span className="highlight">3.76</span> Cumulative GPA
                    <br />
                    <span className="highlight">4.00</span> GPA in Core Java / C++ Courses
                </Skill>
                <Skill icon="code">
                    <span className="skill-title">Web Experience</span>
                    <br />
                    Experienced with <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, and <span className="highlight">JavaScript</span>
                    <br />
                    Designed and developed several websites and Chrome extensions
                    <br />
                    Currently experimenting with <span className="highlight">React.js</span>
                </Skill>
                <Skill icon="android">
                    <span className="skill-title">Java Experience</span>
                    <br />
                    Built a genealogy web server in Java, <br />
                    using a <span className="highlight">REST API</span> and <span className="highlight">SQLite</span> database <span className="skill-spacer" />
                    Developed an <span className="highlight">Android</span> app to interface with the server, <br />
                    used the <span className="highlight">Google Maps API</span> to display geo-information
                </Skill>
                <Skill icon="developer_board">
                    <span className="skill-title">C++ Experience</span>
                    <br />
                    Built a recursive descent parser and executor for <span className="highlight">DataLog</span> code
                    <br />
                    Constructed a <span className="highlight">Relational Database</span> using user defined statements,
                    <br />
                    and efficiently executed a user's queries on the database
                </Skill>
            </div>
        </Section> 
    )
}

export default AboutSection
