import React, { useState } from 'react'
import "../style/page2.css"
import { useHistory } from 'react-router-dom'
import LeftCard from './LeftCard'

function Page2(props) {
    const history = useHistory()
    const oppose = Math.floor(Math.random() * 10) + 1
    return (
        <div >
            <div className="end">
                <button onClick={() => history.push('/')}>End Game</button>
            </div>
            <div className="oppose">
                Oppose:{oppose}
            </div>
            <div className="play">
                {props.players && props.players.map((data, index) => <div className="marg"><LeftCard data={data} index={index} status={props.status[index]} />
                    <div className="result">{props.status[index] ? oppose == data.Bet ? 'Winner' : 'Looser' : null}</div></div>)}
            </div>
        </div>
    )
}

export default Page2
