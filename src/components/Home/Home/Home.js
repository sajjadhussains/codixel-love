import React from 'react';
import BuisnessInfo from '../BuisnessInfo/BuisnessInfo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import IdeaSection from '../IdeaSection/IdeaSection';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BuisnessInfo></BuisnessInfo>
           <Services></Services>
           <OurWork></OurWork>
           <IdeaSection></IdeaSection>
           <Footer></Footer>
        </div>
    );
};

export default Home;