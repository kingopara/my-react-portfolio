import React from "react";
import Card from "./Card";
import Wrapper from "./Wrapper2";

function Project() {
    return (
        <Wrapper>
            <div>
                <Card
                title='Tech Blog'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body=''
                githubUrl='https://github.com/kingopara/tech-blog'
                />
                <br/>
                <Card
                title='BUDGET TRACKER'
                imageUrl='https://github.com/kingopara/budget-tracker/blob/main/assets/images/budget-tracker.png?raw=true'
                body=''
                />
                <br/>
                <Card
                title='Card Title'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body='this is practice'
                /><br/>
                <Card
                title='Card Title'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body='this is practice'
                /><br/>
                <Card
                title='Card Title'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body='this is practice'
                /><br/>
                <Card
                title='Card Title'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body='this is practice'
                /><br/>
                <Card
                title='Card Title'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body='this is practice'
                /><br/>
                <Card
                title='Card Title'
                imageUrl='https://github.com/kingopara/tech-blog/raw/main/assets/images/techblog.png'
                body='this is practice'
                />
            </div>
        </Wrapper>
    )
}

export default Project;