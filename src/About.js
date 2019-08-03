import React, { useContext} from 'react';
import {AppContext} from './App';
import RegisterLogin from './RegisterLogin';
import NavBar from './NavBar';

import Footer from './Footer';
import Jumbotron from './Jumbotron';
import SignUp from './SignUp';



 const About = () => {

  const [state, setState] = useContext(AppContext);
     return (
      <div className="About">
             <NavBar />
             <Jumbotron img="img/aboutfitness.jpg"/>
             
          <div className=" text-center py-5 mb-4">
             <div classNameName="container">
              <h1 className="font-weight-bold text-black">What we are all about...</h1>
              <hr />
              <br/>
              <p className=" container text-center">Vogue Fitness was founded in 2014 by expatriates Billy Graham &amp; Patrick Hegarty and is headquartered at Yas Marina, Abu Dhabi, next to the home of the Abu Dhabi Grand Prix, Yas Marina Circuit.

In 2015 Vogue Fitness expanded its services when it launched its Home Personal Training Service. Less than 12 months later Vogue Fitness expanded its operations at Yas Marina and introduced a ladies only fitness facility, ‘Yas Ladies’.

In 2018 Vogue Fitness was selected as the preferred operator for the fitness facilities at the prestigious Cleveland Clinic, Abu Dhabi where it successfully implemented its world class coaching and programs. The same year the company announced new locations at Al Muneera, Al Ghadeer, Marina Mall and Jumeriah Lakes Towers in Dubai. In January of 2019 Vogue published that it will be entering it’s third Emirate, this time in Ras Al Khaimah.

Vogue Fitness offer a multitude of fitness programs ranging from CrossFit &amp; Conditioning to speciality classes including StrongFit, Olympic Weightlifting, Spinning and Gymnastics. Vogue Fitness also offer a range of kids fitness programs including CrossFit Kids and little Rucker’s whilst catering for all ages and abilities with Vogue Fitness Swim.

In 2015, 2016, 2017 and 2018 Vogue Fitness (CrossFit Yas) ranked as the number 1 fitness team in the Middle East and Africa. In 2016 Team CrossFit Yas placed 3rd at the Reebok CrossFit Games becoming the first team outside of the USA to podium at the CrossFit Games. The same year, Coach Jamie Greene won the CrossFit Open.

Vogue Fitness are at the forefront of fitness in the UAE. Evolve your understanding of fitness with Vogue Fitness and join a positive community that will help you achieve real fitness goals.
</p>
<br />
<hr />

             </div>
          </div>

             <SignUp img="img/bg-masthead.jpg" />
             <Footer />
             {state.signUpForm && <RegisterLogin />}
      </div>

     )
 }

 export default About;

 
  
  
  

