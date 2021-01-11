import React from 'react'
import "../style/leftcard.css"
function LeftCard(props) {

    return (
        <div key={props.index} id={props.index}>
            {props.status &&
                <div className="container">
                    <img heiht="40px" width="40px" src={props.data["Profile Image"]} />
                    <div>
                        <div>{props.data.Name}</div>
                        <div className="bet-win">
                            <div className="bet">{props.data.Bet}</div>
                            <div className="win">wins</div>
                        </div>
                    </div>
                    <div className="price">{props.data.Price}</div>
                </div>}
        </div>
    )
}

export default LeftCard
