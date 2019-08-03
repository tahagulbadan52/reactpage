import React from 'react';
import PropTypes from 'prop-types'

export const Testimonials = (prop) => {
    return (
     
        <div className="Testimonials">
            <img src={prop.img} alt=""/>
            <h3 className="title">{prop.title}</h3>
            <p className="caption">{prop.caption}</p>
        </div>
          
 )
}
    
Testimonials.propType = {
    img: PropTypes.string

}    

 export const TestimonialsGroup = (prop) => {
    return (
      <div className="TestimonialsGroup container">
          
            {prop.children}
             
      </div>
    
    )
  }

export default TestimonialsGroup;



                   



