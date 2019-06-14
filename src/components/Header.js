import React from 'react'
import Jokes from "./JokeComponents/Jokes";
import JokeLines from "./JokeComponents/JokeLines";
import {NavLink} from 'react-router-dom'
import './Header.css'



function Header(){

    const linkWords = [{word:"jokes"}, {word:"memes"}, {word:"flexbox"}, {word:"todos"}, {word:"specificity"}];
    const linkContent = linkWords.map((c) => {
        return (
            <NavLink to={c.word} activeClassName="active" className="link">
                {c.word}
            </NavLink>
        )
    });

    return(
        <header className="header">
            <div className="header-buttons">
                {linkContent}
            </div>
        </header>
    )
}

export default Header