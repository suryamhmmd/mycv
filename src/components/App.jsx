import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FirstProject from './FirstProject'
import SecondProject from './SecondProject'
// import Header2 from './Header2'


import Home from './Home'


class App extends Component {
    
    render() {

        return (
            <div >
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/Event_Management" component={FirstProject}/>
                        <Route path="/bengkel_online" component={SecondProject}/>
                    </Switch>
                </BrowserRouter>
            </div>
            
        )
    }
}

export default App
