import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'
import {Link} from 'react-scroll'
import Background from '../img/kusimmm.png'
import Fade from 'react-reveal/Fade';

export class Content extends Component {

     render() {
        return (
            <div className="container-fluid main">
                <div className="row align-items-center main-center">
                    <Fade top>
                        <div className="col-12 col-md-6 title-main">
                            <h1 className="display-4">Hello..</h1>
                            <p className="lead" style={{fontWeight:400}}>I'm Surya Muhammad, a <span className="" style={{fontWeight:700}}>Student at Telkom University</span></p>
                            <p className="lead">I'm interested in:</p>
                            <Typewriter
                                className="lead"
                                style={{fontSize:30, fontWeight:700}}
                                options ={{
                                    strings: ['Javascript', 'React js'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="col-12 col-md-6">
                            <img className="img-title" src={Background} alt=""/>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-12 btn-title">
                        <Link className="nav-link"
                                activeClass="active"
                                to="section_portofolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                style={{cursor:'pointer'}}
                            >View My Project
                        </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Content;
