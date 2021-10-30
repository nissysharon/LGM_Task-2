import React from 'react'
import '../components/firsthalf.css'

function Firsthalf({getusers}) {
    return (
        <div className="bg" id="bg">
        <div className="navbar">
            <div className="logo">Talent<span>HUB</span></div>
            <div className="ul">

                <li><a href="#parent">Home</a></li>
                <li><a href="#parent">About</a></li>
                <li><a id="us" href="#parent" onClick={()=>getusers()}>Get Users</a></li>
            </div>
        </div> 
    </div>
    )
}

export default Firsthalf