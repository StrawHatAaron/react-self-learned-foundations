import React from 'react'
import './Flexbox.css'
import './basic.css'

export default function Flexbox(){

    const array = [{word:"content"},
        {word:"content"},{word:"content"},
        {word:"content"},{word:"content"},
        {word:"content"},{word:"content"},
        {word:"content"},{word:"content"},
        {word:"content"},{word:"content"},
        {word:"content"},{word:"content"},
        {word:"content"},{word:"content"},];

    const content = array.map((c) => {
        return(
            <div className={`size-${Math.floor(Math.random()*Math.floor(3))}`}>
                c.word
            </div>
        )
    });

    return(
        <body>
            <div className="container horizontal-wrap">
                {content}
            </div>

            <br/>
            <hr/>
            <br/>

            <div className="container horizontal">
                <div className="Home">Home</div>
                <div className="Search">Search</div>
                <div className="Logout">Logout</div>
                <div className="More">More</div>
                <div className="Signin">Signin</div>
            </div>

            <br/>
            <hr/>
            <br/>

            <div className="container vertical">
                <div className="Home">Home</div>
                <div className="Search">Search</div>
                <div className="Logout">Logout</div>
                <div className="More">More</div>
                <div className="Signin">Signin</div>
            </div>

            <br/>
            <hr/>
            <br/>

            <div className="container absolute-center">
                <div className="X">X</div>
            </div>

            <br/>
            <hr/>
            <br/>

            <nav>
                <ul className="container got-search">
                    <li>Home</li>
                    <li>Profile</li>
                    <li className="search got-search">
                        <input type="text" className="search-input" placeholder="Search"/>
                    </li>
                    <li>Logout</li>
                </ul>
            </nav>
        </body>
    )
}