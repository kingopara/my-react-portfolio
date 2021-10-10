import React from "react";
import Wrapper from "./wrapper3";
import './Project3.css';

function Project() {

    const projects = [
        {
            title: "Tech Blog",
            src: require("../../assets/Projects/git-it-done.png").default,
            githubRepo: "https://github.com/kingopara/tech-blog",
            deployedApp: "https://tech-blog-app21.herokuapp.com/"
        },
        {
            title: "Pizza-hunt",
            src: require("../../assets/Projects/pizza-hunt.png").default,
            githubRepo: "https://github.com/kingopara/pizza-hut",
            deployedApp: "https://pizza-hunt-app21.herokuapp.com/"
        },
        {
            title: "Note Taker",
            src: require("../../assets/Projects/noteTk2.png").default,
            githubRepo: "https://github.com/kingopara/note-taker",
            deployedApp: "https://note-taker-28.herokuapp.com/"
        },
        {
            title: "Budget-Tracker",
            src: require("../../assets/Projects/budget-tracker.png").default,
            githubRepo: "https://github.com/kingopara/budget-tracker",
            deployedApp: "https://budget-tracker-app-2021.herokuapp.com/"
        },
        {
            title: "Deep-Thoughts",
            src: require("../../assets/Projects/deep-thoughts.png").default,
            githubRepo: "https://github.com/kingopara/deep-thoughts",
            deployedApp: "https://deep-thoughts-app-21.herokuapp.com/"
        },
        {
            title: "Shoppe Shop",
            src: require("../../assets/Projects/shop-shop.png").default,
            githubRepo: "https://github.com/kingopara/shop-shop",
            deployedApp: ""
        },
        {
            title: "Activity Finder",
            src: require("../../assets/Projects/projectPic1.png").default,
            githubRepo: "https://github.com/kingopara/activity-finder",
            deployedApp: "https://kingopara.github.io/activity-finder/"
        },
        {
            title: "Activity Finder2.0",
            src: require("../../assets/Projects/act-finder2.png").default,
            githubRepo: "https://github.com/JaviD17/rpg-racer",
            deployedApp: ""
        }
    ];

    return (
        <Wrapper>
            <div className=" grid">
                {projects.map(({ title, src, githubRepo, deployedApp }) => (
                    <ul
                        key={{ title, src, githubRepo, deployedApp}}>
                            <img 
                                className="img-container"
                                alt=""
                                src={src}>
                            </img>
                            <div className="content">
                                <div>
                                    <h4>{title}</h4>
                                </div>
                                <div>
                                    <a href={githubRepo} className="fab fa-github">Github Repo</a>
                                    <br/>
                                    <a href={deployedApp}>Deployed App</a>
                                </div>
                            </div>
                    </ul>
                ))}

            </div>
        </Wrapper>
    )
}

export default Project;