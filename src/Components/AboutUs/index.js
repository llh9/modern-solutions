import React from 'react';

function AboutUS() {
    return (
      <div className="aboutMS">
        <div className='aboutUs'>
          <h1 style={{marginLeft: '20px', marginRight: '10px', paddingBottom: '15px', color: "white", fontSize: "35px", textShadow: "2px 2px red", borderBottom: '5px solid'}}>About Us</h1>
        </div>  
        <div className='aboutContent'>
          <h3 className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", textShadow: "2px 2px red"}}>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
              Modern Solutions is a Network of Local Trusted Companies which are featured within one of the many Service Industry Fields we Support. {'\n'}
            </p>
            <h3 className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'bold', textShadow: "2px 2px red", textDecoration: 'underline'}}>
              Our Mission {'\n'} 
            </h3>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
              To provide a list of local companies whith the best consumer reviews and/or most referrals{'\n'}
            </p>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
              To build a Community of Satisfied Consumers who enjoy peace of mind from the support of fellow community members through our platform.{'\n'} 
            </p>
            <h3 className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'bold', textShadow: "2px 2px red", textDecoration: 'underline'}}>
            Platform Highlights{'\n'}
            </h3>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                {'\t'}Personally Responsive - Call Modern Solutions Fouders Directly with questions, feedback, issues and for advice!{'\n'}
            </p>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                {'\t'}Acconutable - NO automated support robots - Real People Only!{'\n'}
            </p>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
                {'\t'}Local - All team members are located locally and will make it a point to help you in-person. Made posible because MS only serves the population of Columbus, Ohio{'\n'}
            </p>
            <p className="about"style={{marginLeft: '20px', marginRight: '10px',color: "white", fontSize: "25px", fontWeight: 'lighter', textShadow: "2px 2px red"}}>
            {'\t'}Secure - Rest assured every company we feature has one of the best track records, super reviews and many referrals! {'\n'}
            </p>
          </h3>
        </div>
      </div>
    )
}

export default AboutUS;