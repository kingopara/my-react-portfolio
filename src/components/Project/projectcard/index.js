import React from "react";
import './style.css';

function ProjectCard(props) {
    return (
    <div className="card card-container">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed Project</strong> {props.occupation}
          </li>
          <li className="fab fa-github">
            <strong>Github Repo</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
    );
}

export default ProjectCard;