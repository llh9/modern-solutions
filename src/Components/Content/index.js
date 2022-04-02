import React from 'react';
import logo from '../../images/ms-co-bg.png';
import { Link } from 'react-router-dom';


function Content() {
    return (
        // <main className='contentDiv'>
        <div className='services'>
            <h1 className='w-100' style={{marginLeft: '20px', paddingBottom: '25px', color: "white", fontFamily:'Orbitron', fontSize: "35px", textShadow: "2px 2px red", borderBottom: '5px solid white'}}>Featured Services</h1>
            <ul className='content' style={{padding: '0', color: "white", fontWeight: 'normal'}}>
                <li id="photography">
                    <Link style={{textDecoration: 'none'}} to='/Home/#photography'>
                        <button className='contents contents1'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Photography
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="homeImprovement">
                    <Link style={{textDecoration: 'none'}} to='/Home/#homeImprovement'>
                        <button className='contents contents2'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Home Improvement
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="mechanics">
                    <Link style={{textDecoration: 'none'}} to='/Home/#mechanics'>
                        <button className='contents contents3'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Mechanics / Engineering
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="software">
                    <Link style={{textDecoration: 'none'}} to='/Home/#software'>
                        <button className='contents contents4'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Software Development
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="graphic">
                    <Link style={{textDecoration: 'none'}} to='/Home/#graphic'>
                        <button className='contents contents5'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Graphic Design
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="video">
                    <Link style={{textDecoration: 'none'}} to='/Home/#video'>
                        <button className='contents contents6'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Video Production
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="Events">
                    <Link style={{textDecoration: 'none'}} to='/Home/#events'>
                        <button className='contents contents7'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Event Planning
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="flooring">
                    <Link style={{textDecoration: 'none'}} to='/Home/#flooring'>
                        <button className='contents contents8'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                All Types of Flooring
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="painting">
                    <Link style={{textDecoration: 'none'}} to='/Home/#painting'>
                        <button className='contents contents9'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                                Painting Interior / Experior
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="finances">
                    <Link style={{textDecoration: 'none'}} to='/Home/#finanaces'>
                        <button className='contents contents10'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px2px red"}}>
                            Financial Advisors
                            </span>
                        </button>
                    </Link>
                </li>
                <li id="plumbing">
                    <Link style={{textDecoration: 'none'}} to='/Home/#plumbing'>
                        <button className='contents contents11'>
                            <span style={{color: "white", fontFamily:'Orbitron', fontSize: "35px", fontWeight: 'lighter', textShadow: "2px2px red"}}>
                            Plumbing
                            </span>
                        </button>
                    </Link>
                </li>
            </ul>
        {/* // </main> */}
        </div>
    )
}

export default Content;