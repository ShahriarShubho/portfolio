import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Projects/>
            <About/>
            <Skill/>
            <Contract/>
        </div>
    );
};

export default Home;