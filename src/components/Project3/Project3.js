import React from "react";
import Wrapper from "./wrapper3";

function Project() {

    const projects = [
        {
            title: "Tech Blog",
            src: require("../../assets/Projects/git-it-done.png").default,
            githubRepo: "https://github.com/kingopara/tech-blog",
            deployedApp: "https://tech-blog-app21.herokuapp.com/"
        },
        {
            title: "Taskinator",
            src: require("../../assets/Projects/Taskinator.png").default,
            githubRepo: "",
            deployedApp: ""
        },
        {
            title: "",
            src: require("../../assets/Projects/taskmasterpro.png").default,
            githubRepo: "",
            deployedApp: ""
        }
    ];

    return (
        <Wrapper>
            <div className="card card-container">
                {projects.map(({ title, src, githubRepo, deployedApp }) => (
                    <ul
                        key={{ title, src, githubRepo, deployedApp}}>
                            <img 
                                className="img-container"
                                src={src}>
                            </img>
                            <div className="content">
                                <div>
                                    <h4>{title}</h4>
                                </div>
                                <div>
                                    <a href={githubRepo} className="fab fa-github">Github Repo</a>
                                    <a href={deployedApp}>Checkout the Deployed Application</a>
                                </div>
                            </div>
                    </ul>
                ))}

            </div>
        </Wrapper>
    )
}

export default Project;