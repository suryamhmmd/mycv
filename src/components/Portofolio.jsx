import React, { Component } from 'react'
import final_project from '../img/EventManagement.jpg'
import bengkel from '../img/bengkel.jpg'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

class Portofolio extends Component {
    render() {
        return (
            <div id="section_portofolio">
                <section id="team">
                    <div className="container">
                        <div className="row">
                            <Fade right cascade>
                                <div className="col-md-12 col-sm-12 pb-5">
                                    <div className="section-title">
                                        <h2 className="display-4">Portofolio</h2>
                                        {/* <h4>creative, friendly</h4> */}
                                    </div>
                                </div>
                            
                                <div className="col-md-6 justify-content-center align-items-center">
                                    <div className="team-thumb rounded-lg">
                                        <img src={final_project} className="img-responsive" style={{height:250}} alt=""/>
                                            <div className="team-hover">
                                                <div className="team-item">
                                                    <p>Event Management App</p>
                                                    <center>
                                                        <Link to="/Event_Management" className="btn btn-outline-light">View</Link>
                                                    </center>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 justify-content-center align-items-center">
                                    <div className="team-thumb rounded-lg">
                                        <img src={bengkel} className="img-responsive" style={{height:250}} alt=""/>
                                            <div className="team-hover">
                                                <div className="team-item">
                                                    <p>Vehichle Breakdown Assistance</p>
                                                    <center>
                                                        <Link to="/bengkel_online" className="btn btn-outline-light">View</Link>
                                                    </center>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            
                            </Fade>
                                
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portofolio
