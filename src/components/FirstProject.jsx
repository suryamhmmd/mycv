import React, { Component } from 'react'
import Header2 from './Header2'
// import img2 from '../img/lets-eat.png'
import img3 from '../img/EventManagement.jpg'
import {Helmet} from 'react-helmet'


class FirstProject extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <meta
                        name="First Portofolio"
                        content="Final Project, Mata Kuliah Interaksi Manusia Mesin"
                    />
                </Helmet>
                <Header2/>
                <div className="container" style={{paddingTop:100}}>
                    <div className="firstProject d-flex flex-column justify-content-center align-items-center mb-5 rounded-lg" style={{backgroundColor:'#458A94'}}>
                        <h1 className="text-white display-4 mb-3">Event Management App</h1>
                        <img className="border rounded-lg" src={img3} alt="gambar"/>
                        <div className="align-self-start w-100 px-5 py-5">
                            <h4 className="text-white font-weight-bold">Event Management App</h4>
                            <p className="text-white py-3 my-0">Status: <span><a href="#" target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-success"> Not Live:(</button></a></span></p>
                            <p className="text-white">Technologies:</p>
                            <div className="d-flex flex-row flex-wrap">
                                <button className="btn btn-dark my-2">React + Redux</button>
                                <button className="btn btn-dark ml-3 my-2">Node Js</button>
                                <button className="btn btn-dark ml-3 my-2">mySql</button>
                            </div>
                            <hr className="w-100 border-white"/>
                            <p className="text-white lead">Website ini digunakan untuk mengatur sebuah event yang di dalamnya memiliki fitur mengatur keuangan, administrasi, dan timeline kegiatan</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstProject