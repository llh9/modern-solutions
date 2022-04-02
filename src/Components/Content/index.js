import React from 'react';
import logo from '../../images/ms-co-bg.png';

function Content() {
    return (
        // <main className='contentDiv'>
        <div className='services'>
            <h1 className='w-100' style={{marginLeft: '20px', paddingBottom: '25px', color: "white", fontFamily:'Orbitron', fontSize: "35px", textShadow: "2px 2px red", borderBottom: '5px solid white'}}>Featured Services</h1>
            <ul className='content' style={{padding: '0', color: "white", fontWeight: 'normal'}}>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents1'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Photography</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents2'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Home Improvement</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents3'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Mechanics / Engineering</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents4'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Software Engineering / Development</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents5'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Graphic Design</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents6'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Video Production</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents7'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Event Planning</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents8'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>All Types of Flooring</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents9'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Painting Interior / Experior</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents10'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Financial Advisors</span></button></li>
                <li><img className="contentLogo"src={logo}  alt="logo" /><button className='contents contents11'><span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>Plumbing</span></button></li>
            </ul>
        {/* // </main> */}
        </div>
    )
}

export default Content;