import React from "react";
import ProfilePhoto from "../assets/ProfilePhoto.png"
import "./ProfilePic.css"

const LearningProfileObject = () => {

    class Learner {
        firstName: string;
        profilePic: React.ReactNode;
        codingLanguage: string;
        beginner: boolean;
        constructor(firstName: string, profilePic: React.ReactNode, codingLanguage: string, beginner: boolean) {
            this.firstName = firstName;
            this.profilePic = profilePic;
            this.codingLanguage = codingLanguage;
            this.beginner = beginner;

        }
        introduceLearner() {
            return (
                <>
                    <p>Hello, my name is {this.firstName}</p>
                    {Plum.beginner ? <p>I am at beginner level in {this.codingLanguage}</p> : <p>I am an experienced coder</p>}
                </>)
        }
    }

    const Plum = new Learner("Plum", <img id="photo" src={ProfilePhoto} alt="Profile" />, "React", true)

    return (
        <>
            <p>{Plum.profilePic}</p>
            <p>{Plum.introduceLearner()}</p>

        </>
    )

}

export default LearningProfileObject