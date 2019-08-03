import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = (prop) => {
    return (
        <div className="SignUp call-to-action text-white text-center" 
        style={{backgroundImage: `url('${prop.img}')` }}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-xl-7 mx-auto">
                 <h1>READY TO GET STARTED?</h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;

            