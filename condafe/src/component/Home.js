import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Data } from "./API"
import RightCard from './RightCard'
import LeftCard from './LeftCard'
import Page1 from './Page1'
import Page2 from './Page2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function Home() {
    const [players, setPlayers] = useState(Data)
    const [status, setStatus] = useState(Array(players.length).fill(false))

    // const config = {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     }
    // };
    // useEffect(() => {
    //     axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json", config)
    //         .then((res) => {
    //             setPlayers(res.data)
    //             console.log(players)
    //         })
    //         .catch((err) => {
    //             alert('unable to load data', err.message)
    //         })
    // }, [])
    function setPlayerStatus(index) {
        let data = [...status]
        data[index] = status[index] ? false : true
        setStatus(data)
        console.log(status)
    }



    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact render={() => <Page1 players={players} status={status} setPlayerStatus={setPlayerStatus} />} />
                    <Route path="/page2" render={() => <Page2 players={players} status={status} />} />
                </Switch>
            </div>
        </Router>
    )
}

export default Home
