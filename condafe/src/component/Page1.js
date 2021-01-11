import React, { useState } from 'react'
import "../style/page1.css"
import RightCard from './RightCard'
import LeftCard from './LeftCard'
import { useHistory } from 'react-router-dom'
function Page1(props) {
    const history = useHistory()
    function pageChange() {
        if (props.status.filter(x => x === true).length > 0) {
            history.push('/page2')
        }
        else {
            alert('No player selected')
        }

    }

    return (
        < div className="page1">
            <div className="left-side">
                <div className="title">selected players</div>
                {props.players && props.players.map((data, index) => <LeftCard data={data} index={index} status={props.status[index]} />)}
                <div className="start"><button onClick={() => pageChange()}>start</button></div>
            </div>
            <div className="right-side">
                <div>select 9 playing</div>
                <div className="search">Search</div>
                {props.players &&
                    props.players.map((data, index) => <RightCard data={data} index={index} setPlayerStatus={props.setPlayerStatus} status={props.status} />)}
            </div>
        </div >
    )
}

export default Page1
