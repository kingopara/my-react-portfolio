import React from "react";
import coverImg from "../../assets/cover/cover-img.png";

function About() {
    return (
        <div className="my-5">
            <h3 id="about">
                About Me
            </h3>
            <p>
            I'm a full-stack web-developer with a background in Petroleum Engineering working currently in the (photomask) manufacturing industry. I see Web-development together with Engineering as the closiest thing to magic and thats what caught my attention and interest.
            Come work with me lets make some MAGIC!
            </p>
            <img src={coverImg} className="my-2" style={{width: "100%"}} alt="cover" />
        </div>
    );
}

export default About;