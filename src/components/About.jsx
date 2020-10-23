import React from 'react';
import Profile from '../img/profile2.jpg';
import Fade from 'react-reveal/Fade';

// class Footer extends Component {
//     render() {
//         return (
//             <div id ="section_about" className="row py-5 m-5 align-items-center aboutSection shadow">
//                 <Fade left>
//                     <div className="col-12 col-md-6 ">
//                         <img className="border rounded-circle" src={Profile} alt=""/>
//                     </div>
//                 </Fade>
//                 <Fade right>
//                     <div className="col-12 col-md-6 container-fluid">
//                         <h1 className="display-4 border-bottom border-muted">About Me</h1>
//                         <ul className="lead text-left">
//                             <li>Born in 1998, at Bandung, Indonesia</li>
//                             <li>Computer Engineering who has a passion in <span style={{fontWeight: 800}}>Programming, Photography</span></li>
//                             <li>Interest in <span style={{fontWeight: 800}}>Fullstack Developer</span></li>
//                             <li>have the will to learn continuously</li>
//                             <li>Used to develope with React.js</li>
//                         </ul>
//                     </div>
//                 </Fade>
                
//             </div>
//         )
//     }
// }

const Footer = () => {
    return(
        <div id ="section_about" className="row py-5 m-5 align-items-center aboutSection shadow">
            <Fade left>
                <div className="col-12 col-md-6 ">
                    <img className="border rounded-circle" src={Profile} alt=""/>
                </div>
            </Fade>
            <Fade right>
                <div className="col-12 col-md-6 container-fluid">
                    <h1 className="display-4 border-bottom border-muted">About Me</h1>
                    <ul className="lead text-left">
                        <li>Born in 1998, at Bandung, Indonesia</li>
                        <li>Computer Engineering who has a passion in <span style={{fontWeight: 800}}>Programming, Photography</span></li>
                        <li>Interest in <span style={{fontWeight: 800}}>Fullstack Developer</span></li>
                        <li>have the will to learn continuously</li>
                        <li>Used to develope with React.js</li>
                    </ul>
                </div>
            </Fade>  
        </div>
    );
}

export default Footer
