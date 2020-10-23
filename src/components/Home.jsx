import React  from 'react'
import Content from './Content'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Portofolio from './Portofolio'
import Contact from './Contact'
import Header from './Header'
import {Helmet} from 'react-helmet'


// export class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <Helmet>
//                     <title>{document.title}</title>
//                         <meta
//                             name="Surya Muhammad CV"
//                         />
//                         <meta name="keywords" content="react, developer, jakarta, bandung, indonesia, mysql" />
//                 </Helmet>
//                 <div>
//                     <Header />
//                     <Content />
//                     <About/>
//                     <Experience/>
//                     <Skills/>
//                     <Portofolio/>
//                     <Contact/>
//                 </div>
//             </div>
//         )
//     }
// }

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{document.title}</title>
                    <meta name="Surya Muhammad CV"/>
                    <meta name="keywords" content="react, developer, jakarta, bandung, indonesia, mysql" />
                </Helmet>
                <div>
                    <Header />
                    <Content />
                    <About/>
                    <Experience/>
                    <Skills/>
                    <Portofolio/>
                    <Contact/>
                </div>
        </div>
    )
}

export default Home
