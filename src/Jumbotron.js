import React from 'react';


const Jumbotron = (prop) => {

return (
        <div className="jumbotron"
                 style={{backgroundImage: `url('${prop.img}')` }}>
            
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 mx-auto">
                           <h1 className="main-heading text-center text-white">CHALLENGE</h1> 
                        </div>   
                    </div>
                </div>
         </div>
    )
  }
  

export default Jumbotron;

