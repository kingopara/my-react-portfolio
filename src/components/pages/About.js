import React from "react";
import coverImg from "../../assets/cover/cover-img.png";

function About() {
    return (
        <div className="my-5">
            <h3 id="about">
                About Me
            </h3>
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card-panel grey  z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src={coverImg} className=" circle responsive-img"  alt="cover" />
                        </div>
                        <div className="col s10">
                            <p className="black-text">
                            I'm a full-stack web-developer with a background in Petroleum Engineering working currently in the photomask industry where we transform customer data into actual products.
                            <br/>
                            I see Web-development together with Engineering as the closiest thing to magic and thats what caught my attention and interest.
                            Come work with me lets make some MAGIC!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={coverImg} className="my-2" style={{width: "100%"}} alt="cover" /> */}
        </div>
    );
}

export default About;