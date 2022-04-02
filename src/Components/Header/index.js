import React from 'react';
import logo from '../../images/ms-co-bg.png';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className='header'>
            <div className='headerNav'>
                <div className='headerDiv'>
                    <img className="headerLogo"src={logo}  alt="logo" />
                    <div>
                        <Link to="/Home" style={{ textDecoration: 'none' }}>
                        <h1 className='homeLink' style={{color: "white", fontSize: '65px',  margin: "0", fontWeight: 'lighter', textShadow: '5px 1px 0px red',}}>
                            Modern Solutions      
                        </h1>
                        <h1 style={{color: "white", margin: "0", fontWeight: 'normal'}}>
                            A Network Of Trusted Local Companies
                        </h1>
                        </Link>
                    </div>
                </div>  
                <div  className='navBtns'>
                    <Link to="/About" style={{ textDecoration: 'none' }}>
                        <button className='navBtn'>
                            <p>About MS</p>
                            <hr></hr> 
                            <p>Contact Us</p>
                        </button>
                    </Link>
                    <Link to="/Home" style={{ textDecoration: 'none' }}>
                        <button className='navBtn'>
                            Services
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header;
