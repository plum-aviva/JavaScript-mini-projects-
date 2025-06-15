import React from "react";

interface ProgressBarProps {
    backgroundColour: string;
    completed: number;
}

const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
}



const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
}

const ProgressBar: React.FC<ProgressBarProps> = ({ backgroundColour, completed }) => {


    const fillerStyles = {
        height: '100%',
        width: `${completed}%`, // Correct!
        backgroundColor: backgroundColour,
        borderRadius: 'inherit',
        textAlign: 'right'
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{completed}%</span>
            </div>
        </div>
    )
}

export default ProgressBar

