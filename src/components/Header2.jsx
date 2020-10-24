import React, { useState } from 'react'
import Brand from '../img/logo.png'
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem} from 'reactstrap';

// export class Header2 extends Component {
//     state ={
//         isOpen: false,
//         prevScrollpos: window.pageYOffset,
//         top: 0,
//         backgroundNavbar: false
//     }

//     toogle = ()=>{
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
        
//     }
    
//     render() {
//         return (
//             <Navbar className="navbar fixed-top navbar-light bg-light shadow-sm p-3 bg-white navbar-scrolled" light expand="md">
//                 <Link to="/" className="navbar-brand icon-img"
//                 ><span><img src={Brand} alt=""/></span></Link>
//                 <NavbarToggler onClick={this.toogle} />
//                 <Collapse isOpen={this.state.isOpen} navbar>
                    
//                 <Nav className="ml-auto" navbar>
                    
//                     <NavItem>
//                         <Link className="nav-link"
//                             to="/"
//                             style={{cursor:'pointer'}}
//                         >
//                             Home
//                         </Link>
//                     </NavItem> 
//                 </Nav>

//                 </Collapse>
//             </Navbar>
//         )
//     }
// }

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    // // const [top, setTop] = useState(0);
    // const [backgroundNavbar, setBackgroundNavbar] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <Navbar className="navbar fixed-top navbar-light bg-light shadow-sm p-3 bg-white navbar-scrolled" light expand="md">
            <Link to="/" className="navbar-brand icon-img"
            ><span><img src={Brand} alt=""/></span></Link>
            <NavbarToggler onClick={toogle} />
            <Collapse isOpen navbar>
                
            <Nav className="ml-auto" navbar>
                
                <NavItem>
                    <Link className="nav-link"
                        to="/"
                        style={{cursor:'pointer'}}
                    >
                        Home
                    </Link>
                </NavItem> 
            </Nav>

            </Collapse>
        </Navbar>
    )
}

export default Header2
