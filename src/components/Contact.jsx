import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

export class Contact extends Component {
    render() {
        return (
            <div id="section_contact" className=" p-3 d-flex flex-column justify-content-center contactSection">
                <h1 className="display-4 mx-auto">Social</h1>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <Fade bottom>
                        <a className="text-decoration-none text-black-50" href="https://github.com/suryamhmmd" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x m-3"></i></a>
                    </Fade>
                    <Fade bottom>
                        <a className="text-decoration-none text-black-50" href="https://www.linkedin.com/in/surya-muhammad-a1a4831b1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-3x m-3"></i></a>
                    </Fade>
                    <Fade bottom>
                        <a className="text-decoration-none text-black-50" href="https://www.instagram.com/suryamhmmd" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x m-3"></i></a>
                    </Fade>
                    <Fade bottom>
                        <a className="text-decoration-none text-black-50" href="https://www.facebook.com/surya.mamad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-3x m-3"></i></a>
                    </Fade>
                </div>
                <div className="mx-auto">
                    <p className="m-0">Surya Muhammad © 2020</p>
                </div>
                <div className="mx-auto">
                    <p><span><i className="far fa-envelope"></i></span> suryamhmmd@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default Contact
