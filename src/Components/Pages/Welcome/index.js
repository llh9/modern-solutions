import React from 'react';
import logo from '../../../images/ms-co-bg.png';
import '../../../App.css';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="App">
            <Link to="/Home" style={{ textDecoration: 'none' }}>
            <header className="App-header">                
                <h1 style={{ color: 'black', fontWeight: 'lighter', textShadow: '5px 1px 0px red', border: 'dotted', borderRadius: '10px', background: 'radial-gradient(silver, transparent)'}}>
                    | Modern Solutions |
                </h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h2 style={{ color: 'black', fontWeight: 'lighter', border: 'dotted', borderRadius: '10px', background: 'radial-gradient(silver, transparent)'}}>
                    Welcomes
                </h2>
                <h1 style={{ color: 'grey', fontWeight: 'bold', textShadow: '5px 1px 0px red', border: 'dotted', borderRadius: '10px', borderColor: 'white', background: 'radial-gradient(white, black)'}}>
                    Columbus Ohio
                </h1>
            </header>
            </Link>
        </div>
    )
}
export default Welcome;




