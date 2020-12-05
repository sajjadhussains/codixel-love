import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import grouppic from '../../../images/grouppic.png';
import './BuisnessInfo.css';

const BuisnessInfo = () => {
    const infosData=[
        {
            title:'Awesome client',
            numbers:'100+',
            icon:grouppic
        },
        {
            title:'Country',
            numbers:'20+',
            icon:grouppic
        },
        {
            title:'Project completed',
            numbers:'150+',
            icon:grouppic
        }
    ]
    return (
       <section className="row buisness-info w-75 ml-5 mt-5 mb-5 pl-5">
           {
               infosData.map(info=><InfoCard info={info}></InfoCard>)
           }
       </section>
    );
};

export default BuisnessInfo;