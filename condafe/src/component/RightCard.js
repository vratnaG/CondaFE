import React from 'react'
import "../style/rightcard.css"
function RightCard(props) {

    // Check
    //document.getElementById("checkbox").checked = true;
    function setStatus() {
        console.log(props.status.filter(x => x === true).length < 9)
        if (props.status.filter(x => x === true).length < 9 || props.status[props.index]) {
            props.setPlayerStatus(props.index)
        }
        else {
            alert('maximun 9 player select')
        }
    }

    return (
        <div className="all-list" key={props.index}>
            <div className="marg">
                <input id={props.index} type="checkbox" onClick={() => setStatus()} checked={props.status[props.index]} />
            </div>
            <div className="marg namewidth">{props.data.Name}</div>
            <div className="marg imgwidth"><img width="20px" height="20px" src={props.data["Profile Image"]} /></div>
            <div className="marg betwidth">{props.data.Bet}</div>
            <div className="marg winwidth">wins</div>
            <div className="marg losswidth">loses</div>
            <div className="marg pricewidth">{props.data.Price}</div></div>
    )
}

export default RightCard
