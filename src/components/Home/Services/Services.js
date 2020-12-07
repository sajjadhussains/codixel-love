import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Services = () => {
    const serviceInfo=[
        {
            title:'User Experiences Design',
            description:'We understand your pain point and create the best user friendly designs.We work with you to meet your buisness goals',
            border:'first'
        },
        {
            title:'User Experiences Design',
            description:'We understand your pain point and create the best user friendly designs.We work with you to meet your buisness goals',
            border:'second'
        },
        {
            title:'User Experiences Design',
            description:'We understand your pain point and create the best user friendly designs.We work with you to meet your buisness goals',
            border:'third'
        },
        {
            title:'User Experiences Design',
            description:'We understand your pain point and create the best user friendly designs.We work with you to meet your buisness goals',
            border:'fourth'
        }
    ]
    return (
        <div className="container">
            <p style={{fontSize:'40px'}} className="text-center">What we do</p>
            <div className="row" style={{marginTop:'50px'}}>
                {
                    serviceInfo.map(service=><ServiceInfo service={service}></ServiceInfo>)
                }
            </div>
        </div>
    );
};

export default Services;