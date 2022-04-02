import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import AboutUS from '../../AboutUs'
import ContactUs from '../../ContactUs';

function About() {
    return (
        <div className='onBase'>
            <Header/>
            <AboutUS/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}
export default About;