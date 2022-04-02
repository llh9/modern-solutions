import React from 'react';
import Header from '../../Header';
import Content from '../../Content';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='onBase'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Home;
