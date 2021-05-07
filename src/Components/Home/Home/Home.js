import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contract from '../Contract/Contract';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Services/>
            <Blogs/>                    
            <About/>
            <Skill/>
            <Contract/>
        </div>
    );
};

export default Home;