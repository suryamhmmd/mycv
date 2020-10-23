/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header2 from './Header2'
import img1 from '../img/bengkel.jpg'
import {Helmet} from 'react-helmet'

// class SecondProject extends Component {

//     render() {
//         return (
//             <div>
//                 <Helmet>
//                     <meta
//                         name="Second Portofolio"
//                     />
//                 </Helmet>
//                <Header2/>
//                 <div className="container" style={{paddingTop:100}}>
//                     <div className="firstProject d-flex flex-column justify-content-center align-items-center mb-5 rounded-lg" style={{backgroundColor:'#458A94'}}>
//                         <h1 className="text-white display-4 mb-3">Vehichle Breakdown Assistance</h1>
//                         <img className="border rounded-lg" src={img1} alt="gambar"/>
//                         <div className="align-self-start w-100 px-5 py-5">
//                             <h4 className="text-white font-weight-bold">Vehicle Breakdown Assistance(Bengkel Online)</h4>
//                             <p className="text-white py-3 my-0">Status: <span><a href="#" target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-success">Not Live:(</button></a></span></p>
//                             <p className="text-white">Technologies:</p>
//                             <div className="d-flex flex-row flex-wrap">
//                                 <button className="btn btn-dark my-2">React + Redux</button>
//                                 <button className="btn btn-dark ml-3 my-2">Node Js</button>
//                                 <button className="btn btn-dark ml-3 my-2">mySql</button>
//                             </div>
//                             <hr className="w-100 border-white"/>
//                             <p className="text-white lead">Website ini dibuat untuk memenuhi tugas besar mata kuliah Basis Data </p>
//                         </div>
//                     </div>
//                 </div> 
//             </div>
//         )
//     }
// }

const SecondProject = () => {
    return (
        <div>
                <Helmet>
                    <meta
                        name="Second Portofolio"
                    />
                </Helmet>
               <Header2/>
                <div className="container" style={{paddingTop:100}}>
                    <div className="firstProject d-flex flex-column justify-content-center align-items-center mb-5 rounded-lg" style={{backgroundColor:'#458A94'}}>
                        <h1 className="text-white display-4 mb-3">Vehichle Breakdown Assistance</h1>
                        <img className="border rounded-lg" src={img1} alt="gambar"/>
                        <div className="align-self-start w-100 px-5 py-5">
                            <h4 className="text-white font-weight-bold">Vehicle Breakdown Assistance(Bengkel Online)</h4>
                            <p className="text-white py-3 my-0">Status: <span><a href="#" target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-success">Not Live:(</button></a></span></p>
                            <p className="text-white">Technologies:</p>
                            <div className="d-flex flex-row flex-wrap">
                                <button className="btn btn-dark my-2">React + Redux</button>
                                <button className="btn btn-dark ml-3 my-2">Node Js</button>
                                <button className="btn btn-dark ml-3 my-2">mySql</button>
                            </div>
                            <hr className="w-100 border-white"/>
                            <p className="text-white lead">Website ini dibuat untuk memenuhi tugas besar mata kuliah Basis Data </p>
                        </div>
                    </div>
                </div> 
            </div>
    )
}
export default SecondProject
