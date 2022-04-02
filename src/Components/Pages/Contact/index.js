import React from 'react';
import logo from '../../../images/ms-co-bg.png';
import '../../../App.css';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Content from '../../Content';
import Footer from '../../Footer';
import ContactUs from '../../ContactUs'

function Contact() {
    return (
        <div className='onBase'>
            <Header/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}
export default Contact;