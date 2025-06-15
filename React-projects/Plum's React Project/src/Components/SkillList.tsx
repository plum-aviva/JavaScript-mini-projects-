import React from "react"
import ProgressBar from "./ProgressBar"

const SkillList = () => {

    const reactSkills: string[] = ["Creating Components", "Passing Props", "UseState", "TypeScript Objects", "Types in TypeScript"]




    return (
        <ul>{reactSkills.map((skill, index) => (<li id={skill + index} key={index}> {index + 1} : {skill} <ProgressBar backgroundColour="blue" completed={75} /> </li>))}</ul>

    )

}

export default SkillList