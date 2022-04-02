import React from 'react';
import logo from '../../images/ms-co-bg.png';

function ContactUs() {
    return (
        <div className="contact">
            <div className='contacts'>
                <h1 style={{marginLeft: '10px', width:'100vw', color: "white", fontSize: "35px", textShadow: "2px 2px red", borderBottom: '5px solid', padding: '15px'}}>
                    Contact Us
                </h1>
                <div className='info LandonH'>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <h2><img className="contentLogo"src={logo}  alt="logo" />Landon Hinkle </h2>
                        <p> Software Engineer </p>
                        <p> Phone: (614) 849-5958 </p>
                    </h1>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <a href={"https://www.linkedin.com/in/landon-hinkle-51873b139/"}style={{color: "white"}}>LinkedIn: www.linkedin.com/in/landonh45</a>
                    </h1>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <a href={'https://github.com/llh9'} style={{color: "white"}}>GitHub: github.com/llh9</a>
                    </h1>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <a href={'https://llh9@yahoo.com'} style={{color: "white"}}>email: llh9@yahoo.com</a>
                    </h1>
                </div>
                <div className='info WilliamL'>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <h2><img className="contentLogo"src={logo}  alt="logo" />William Lane </h2>
                            <p> Marketing Specialist </p>
                            <p> Phone: (614) 615-3734 </p>
                    </h1>
                </div>
                <div className='info ChrisC'>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <h2><img className="contentLogo"src={logo}  alt="logo" />Chris Cruceta </h2>
                            <p> Managment / Administration </p>
                            <p> Phone: (614) 984-7410 </p>
                    </h1>
                </div>
                <div className='info RickL'>
                    <h1 className='infoDiv'style={{color: "white", fontSize: "20px", textShadow: "2px 2px red" }}>
                        <h2><img className="contentLogo"src={logo}  alt="logo" />Richard Lane </h2>
                            <p> Computer Repair Services </p>
                            <p> Phone: (614) 218-4070 </p>
                    </h1>
                </div>
            </div> 
        </div> 
    )
}

export default ContactUs;   