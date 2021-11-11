import './style.css';
import { ReactComponent as Logo } from './Asset/logo.svg'
import { ReactComponent as Orang } from './Asset/orang-duduk.svg';
import { ReactComponent as Petunjuk } from './Asset/Petunjuk-Jalan.svg';

const header = props =>(
    <div className="body">
        <div className="logo">
            <Logo className ="logo"/>
        </div>
        <div className="navbar">
            <ul>
                <li>HOME</li>
                <li>About</li>
                <li>FAQ</li>
                <button className="button button2">Log in</button>
            </ul>
            
        </div>
        <div className="title">
            <b>  
            <p className = "color-1">Find Your Dream, Explore The Future.</p>
            <p className = 'color-2'>BETIS 2022</p>
            </b>    
            <button className="button button2">LOG IN</button>
        </div>
        <Orang className = "Orang"/>
        <Petunjuk className='Petunjuk'/>
        <div className="bar">
            <h1>aa</h1>
        </div>
    </div>
)

export default header;