import React from 'react';
import Header from '../Header/Header';
import IdeaSection from '../IdeaSection/IdeaSection';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
           <Services></Services>
           <OurWork></OurWork>
           <IdeaSection></IdeaSection>
        </div>
    );
};

export default Home;