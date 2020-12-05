import React from 'react';
const ideaStyle={
    backgroundColor:'white',
    padding:'16px',
    color:'#15DB91'
}
const buttonStyle={
    position:'relative',
    top:'10px',
    left:'200px'
}

const IdeaSection = () => {
    return (
        <div>
           <div style={{height:'249px',backgroundColor:'#15DB91',marginTop:'200px',borderRadius:'19px'}}className="row d-flex align-items-center justify-content-center">
           <div className="col-md-7">
             <h5 style={{fontSize:'33px',color:'white'}}className="text-center pt-4">Let's visualize your awesome idea with Best Expertise</h5>
            </div>
            <div style={buttonStyle}className="col-md-5">
                <button style={ideaStyle} className="hire-button mt-4">Get a Quote</button>
            </div>
           </div>
        </div>
    );
};

export default IdeaSection;