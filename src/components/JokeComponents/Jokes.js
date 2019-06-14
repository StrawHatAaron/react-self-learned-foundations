import React from "react"
import JokeLines from "./JokeLines";


function JokeContent(props){
    return(
    <div>
        {/*if null make the text black*/}
        <p style={{color: !props.joke.question && '#000'}}>Joke #{props.joke.number}</p>
        {/*checks if the object is null*/}
        <h3 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h3>
        <h3 style={{display: props.joke.punchLine ? "block" : "none"}}>Answer: {props.joke.punchLine}</h3>
        <hr/>
    </div>

    )
}

function Jokes(props) {

    const firstName = "Aaron"
    let middleName
    const lastName = "Miller"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const myStyles = {
        fontSize: 30,
        backgroundColor: "#3b3b3b",
        padding: "20px"
    }

    if(firstName=="Aaron" && lastName=="Miller"){middleName = "Jerome"}

    if (hours < 12) {
        timeOfDay = "morning"
        myStyles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        myStyles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        myStyles.color = "#D90000"
    }

    const TheJokes = JokeLines.map(joke => <JokeContent joke={joke} />);

    return (
        <div style={myStyles}>
            {/*Note this below is an example of the ES6 Format Literals Template*/}
            <h1>{`Welcome to ${firstName} ${middleName} ${lastName}'s meme application`}!</h1>
            <h2>I hope you are having a good {timeOfDay}!</h2>
            <hr/>
            <h3>The two jokes of the day</h3>
            {TheJokes}


        </div>
    )
}

export default Jokes