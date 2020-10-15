import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

class Experience extends Component {

    render() {
        return (
            <div id="section_experience" className="">
               <div className="example-centered">
                    <div className="col-md-12 example-title">
                        <h1 className="display-4">Organization Experience</h1>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 mx-auto">
                        <ul className="timeline timeline-centered">
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <Fade top>
                                    <div className="timeline-content">
                                        <h2 className="timeline-title">Highschool</h2>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade right>
                                    <div className="timeline-info">
                                        <span>2013-2014</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade left>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Wakil Ketua OSIS</h3>
                                        <h6>SMP Negeri 1 Bandung</h6>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span></span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Wakil Ketua OSIS</h3>
                                        <h6>SMA Negeri 9 Bandung</h6>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-info"></div>
                                <div className="timeline-marker"></div>
                                <Fade top>
                                    <div className="timeline-content">
                                        <h2 className="timeline-title">Telkom University</h2>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span>November 2017 - Mei 2018</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Staff Divisi Acara PERFECT 2018</h3>
                                        <p>PERFECT 2018 merupakan kepanitiaan dalam komunitas PERMIB(Perhimpunan Mahasiswa Bandung) yang mengadakan kegiatan Tryout SMB Telkom, Wondercup (Turnamen Baseket antar SMA se-Bandung Raya)</p>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span>Agustus 2018</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Staff Divisi Acara PKKMB 2018 Telkom University</h3>
                                        <p></p>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span>Oktober 2018 - Mei 2019</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Wakil Ketua Pelaksana PERFECT 2019</h3>
                                        <p>PERFECT 2019 merupakan kepanitiaan dalam komunitas PERMIB(Perhimpunan Mahasiswa Bandung) yang mengadakan kegiatan Tryout SMB Telkom, Wondercup (Turnamen Baseket antar SMA se-Bandung Raya)</p>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span>Agustus 2019</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Staff Divisi Acara PKKMB 2018 Telkom University</h3>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span>Agustus 2019-Juli 2020</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Staff Badan Pengawas Pengurus PERMIB</h3>
                                    </div>
                                </Fade>
                            </li>
                            <li className="timeline-item">
                                <Fade left>
                                    <div className="timeline-info">
                                        <span>Februari 2020 - Sekarang</span>
                                    </div>
                                </Fade>
                                <div className="timeline-marker"></div>
                                <Fade right>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Koordinator Divisi Acara Kaderisasi Teknik Komputer</h3>
                                    </div>
                                </Fade>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience
