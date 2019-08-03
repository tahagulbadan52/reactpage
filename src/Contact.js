import React, { useContext} from 'react';
import {AppContext} from './App';
import RegisterLogin from './RegisterLogin';
import NavBar from './NavBar';
import Footer from './Footer';
import SignUp from './SignUp';
import Jumbotron from './Jumbotron';




const Contact = () => {
    const [state, setState] = useContext(AppContext);
    return (
        <div className="Contact">
            <NavBar />
            <Jumbotron img="img/contactfitness.jpg"/>
           <div className="container">
               <div className="text-center bg-white text-dark content-page">
               <h2>HOW CAN WE HELP</h2>
               <p>Our team is available Monday-Friday, 9 A.M. To 6 P.M. (GST)</p>
               <i className="fas fa-map-marker-alt contact-logo"></i>
               <p>
                <br/>
                <strong>Visit us at:</strong><br/>
                Jumeirah Lakes Towers<br/>
                Cluster R<br/>
                Dubai, UAE
                </p>
               <i className="fas fa-phone contact-logo"></i>
               <p>
                   <br/>
                   <strong>Call us at:</strong><br/>
                   <strong>Steve Hughes:</strong> +971 056 987 9870<br/>
                   <strong>Taha Gulbadan:</strong> +971 056 987 9871<br/>
                   <strong>Wassim Bouchiha:</strong> +971 056 987 9872<br/>
                   <strong>Adnan Karimjee:</strong> +971 056 987 9873<br/>

               </p>
               <i class="far fa-envelope-open contact-logo"></i>
               <br />
               <strong>Email us at:</strong><br/>
                   <strong>Steve Hughes:</strong> steveh385@hotmail.com<br/>
                   <strong>Taha Gulbadan:</strong> taha@gmail.com<br/>
                   <strong>Wassim Bouchiha:</strong> wassim@yahoo.ue<br/>
                   <strong>Adnan Karimjee:</strong> adnan@hotmail.com<br/>


            </div>
         </div>
            
            <SignUp img="img/bg-masthead.jpg"/>
            <Footer />
            {state.signUpForm && <RegisterLogin />}

        </div>
    )
}

export default Contact;

