import React, { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'
import {Link, animateScroll as scroll} from 'react-scroll'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem} from 'reactstrap';

import Brand from '../img/logo.png'
// import Content from './Content';
// var prevScrollpos = window.pageYOffset;
// class Header extends Component {

//     state ={
//         isOpen: false,
//         prevScrollpos: window.pageYOffset,
//         top: 0,
//         backgroundNavbar: false
//     }

//     componentDidMount(){
        

//         window.addEventListener('scroll', ()=>{
//             // var prevScrollpos = window.pageYOffset
//             var currentScrollPos = window.pageYOffset;
//             // console.log(window.scrollY)
//             if (this.state.prevScrollpos > currentScrollPos) {
//                 // this.setState({top: 0})
//                 if(window.scrollY >= 110){
//                     this.setState({backgroundNavbar: true})
//                 }else{
//                     this.setState({backgroundNavbar: false})
                    
//                 }
//             } else {
//                 // this.setState({top: -60})
//                 if(window.scrollY >= 110){
//                     this.setState({backgroundNavbar: true})
//                 }else{
//                     this.setState({backgroundNavbar: false})
//                 }
//             }
//             this.setState({prevScrollpos: currentScrollPos})
//             // prevScrollpos = currentScrollPos;
//         })
//     }

//     // componentWillUnmount(){
//     //     window.removeEventListener('scroll', null)
//     // }

//     toogle = ()=>{
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
        
//     }

//     scrollToTop = () => {
//         scroll.scrollToTop();
//     }

//     render() {
//         return (
//             <Navbar className={
//                 this.state.backgroundNavbar ? 'navbar fixed-top navbar-light bg-light shadow-sm p-3 bg-white navbar-scrolled' :
//                 'navbar fixed-top navbar-light bg-transparent p-3 navbar-default'} light expand="md">
//                 <Link to="" className="navbar-brand icon-img"
//                     onClick={this.scrollToTop}
//                 ><span><img src={Brand} alt=""/></span></Link>
//                 <NavbarToggler onClick={this.toogle} />
//                 <Collapse isOpen={this.state.isOpen} navbar>
                    
//                 <Nav className="ml-auto" navbar>
//                     <NavItem>
//                         <Link className="nav-link"
//                             activeClass="active"
//                             to="section_about"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={800}
//                             style={{cursor:'pointer'}}
//                         >
//                             About
//                         </Link>
//                     </NavItem>
//                     <NavItem>
//                         <Link className="nav-link"
//                             activeClass="active"
//                             to="section_experience"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={800}
//                             style={{cursor:'pointer'}}
//                         >
//                             Experience
//                         </Link>
//                     </NavItem>
//                     <NavItem>
//                         <Link className="nav-link"
//                             activeClass="active"
//                             to="section_skills"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={800}
//                             style={{cursor:'pointer'}}
//                         >
//                             Skills
//                         </Link>
//                     </NavItem>
//                     <NavItem>
//                         <Link className="nav-link"
//                             activeClass="active"
//                             to="section_portofolio"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}
//                             style={{cursor:'pointer'}}
//                         >
//                             Portofolio
//                         </Link>
//                     </NavItem>
//                     <NavItem>
//                         <Link className="nav-link"
//                             activeClass="active"
//                             to="section_contact"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}
//                             style={{cursor:'pointer'}}
//                         >
//                             Contact
//                         </Link>
//                     </NavItem> 
//                 </Nav>

//                 </Collapse>
//             </Navbar>
//         )
//     }
// }

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    // const [top, setTop] = useState(0);
    const [backgroundNavbar, setBackgroundNavbar] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    useEffect( () => {
        window.addEventListener('scroll', ()=>{
            // var prevScrollpos = window.pageYOffset
            var currentScrollPos = window.pageYOffset;
            // console.log(window.scrollY)
            if (prevScrollpos > currentScrollPos) {
                // this.setState({top: 0})
                if(window.scrollY >= 110){
                   setBackgroundNavbar(true);
                }else{
                   setBackgroundNavbar(false);
                    
                }
            } else {
                // this.setState({top: -60})
                if(window.scrollY >= 110){
                    setBackgroundNavbar(true);
                }else{
                    setBackgroundNavbar(false);
                }
            }
           setPrevScrollpos(currentScrollPos);
            // prevScrollpos = currentScrollPos;
        })
    },[prevScrollpos])
    return (
        <Navbar className={
            backgroundNavbar ? 'navbar fixed-top navbar-light bg-light shadow-sm p-3 bg-white navbar-scrolled' :
            'navbar fixed-top navbar-light bg-transparent p-3 navbar-default'} light expand="md">
            <Link to="" className="navbar-brand icon-img"
                onClick={scrollToTop}
            ><span><img src={Brand} alt=""/></span></Link>
            <NavbarToggler onClick={toogle} />
            <Collapse isOpen navbar>
                
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link"
                        activeClass="active"
                        to="section_about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        style={{cursor:'pointer'}}
                    >
                        About
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"
                        activeClass="active"
                        to="section_experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        style={{cursor:'pointer'}}
                    >
                        Experience
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"
                        activeClass="active"
                        to="section_skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        style={{cursor:'pointer'}}
                    >
                        Skills
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"
                        activeClass="active"
                        to="section_portofolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{cursor:'pointer'}}
                    >
                        Portofolio
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"
                        activeClass="active"
                        to="section_contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{cursor:'pointer'}}
                    >
                        Contact
                    </Link>
                </NavItem> 
            </Nav>

            </Collapse>
        </Navbar>
    )
}

export default Header
