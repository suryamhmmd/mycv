import React, { Component } from 'react'
import '../timeline.css'
import img1 from '../img/react.png'
import img2 from '../img/javascript.png'
import img3 from '../img/html-5.png'
import img4 from '../img/css.png'
import img5 from '../img/photoshop.png'
import img6 from '../img/office.png'
import Fade from 'react-reveal/Fade';

const img = [img1, img2, img3, img4, img5, img6]
// console.log(img)

class Skills extends Component {

    renderImg = ()=>{
        let data = img.map(val=>{
            return(
                <Fade key={val} top cascade>
                    <div className="p-4">
                        <img className="py-2" style={{height:150, width:150,}} src={val} alt="img" ></img>
                    </div>
                </Fade>
            )
        })
        return data
    }
    render() {
        return (
            <div id="section_skills" className="m-5 align-items-center skillsSection">
                <h1 className="display-4">Skills</h1>
                <div className="d-flex align-content-around justify-content-around flex-wrap">
                    
                        {this.renderImg()}
                    
                </div>
            </div>
        )
    }
}

export default Skills
