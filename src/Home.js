import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';

function Home() {
    return (
        <div className='home'>
            <div className="homeContainer">
                <Sidebar/>
                <div className='intro'>
                <div id="landing-info">
                    <div>
                        <h1>India's Leading <span>FOSS &amp; Computer Science Club.</span></h1>
                        <p class="intropara">amFOSS, a student-run community with over 50+ 
                        members from Amrita Vishwa Vidyapeetham, Amritapuri, over the last 14 years, 
                        has helped 100+ passionate students to transform into successful &amp; 
                        innovative engineers who today work across the world in Fortune 500 Companies 
                        loving what they do.</p>
                        <p className='intropara'>Here are the members of the club and the stack in which they are good at.This clarifies
                             your doubts regarding which person can clarify your doubt with ease.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home