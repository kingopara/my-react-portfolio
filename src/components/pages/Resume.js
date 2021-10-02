import React from "react";

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <br/>
            <h4>
                <a href="resume.pdf" download="resume resume.pdf">Download my resume</a>
            </h4>
            <br/>
            <h3>
                Front-End Proficiencies
            </h3>
            <ul>
                <li> HTML </li>
                <li>CSS </li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            
            <br/>
            <h3>
                Back-End Proficiencies
            </h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )

}

export default Resume;