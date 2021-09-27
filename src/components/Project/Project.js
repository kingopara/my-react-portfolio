import React, {useState} from "react";
import Wrapper from "./wrapper/wrapper"
import ProjectCard from "./projectcard";
import projectscards from "./projectscards.json";
import './Project.css';

function Project() {
    
    const [projectList, setProjectList] = useState(projectscards);

    return (
        <Wrapper>
            <h1 className="title">Projects</h1>

            {projectList.map(projectscards => (
                <ProjectCard
                id={projectscards.id}
                key={projectscards.id}
                name={projectscards.name}
                image={projectscards.image}
                occupation={projectscards.occupation}
                location={projectscards.location}
                />
            ))}
        </Wrapper>
    )
}

export default Project;