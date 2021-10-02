import React from "react";
import './Card.css'

function Card(props) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.imageUrl} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-body">
                    <p > {props.body} </p>
                </div>
            </div>
            <div className="btn">
                <button className="fab fa-github card-action">
                    <a href="https://github.com/kingopara/tech-blog">
                        Github Repo 
                    </a>
                </button>
                <button className="card-action">
                    <a>
                        Deployed App
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card;