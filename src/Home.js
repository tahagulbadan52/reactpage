import React, { useContext } from 'react';
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';
import JigSaw from './JigSaw';
import {InfoGroup, Info} from './InfoGroup';
import { Testimonials } from './TestimonialsGroup';
import SignUp from './SignUp';
import RegisterLogin from './RegisterLogin'
import Footer from './Footer';
import { AppContext} from './App';



const Home = () => {
  const [state ,setState] = useContext(AppContext);

  return (
      <div className="Home">
      <NavBar />
      
      <Jumbotron img="https://www.crossfitagoge.com/wp-content/uploads/2018/07/bg-slider2.jpg"/>
      <InfoGroup>
        <Info 
          iconClass="fas fa-dumbbell" 
          title="Fitness" 
          caption="Get the body that you can be proud of!"/>
        <Info 
          iconClass="fas fa-apple-alt" 
          title="Healthy Food" 
          caption="Choose the right food to fuel your body!"/>
        <Info 
          iconClass="fas fa-heartbeat" 
          title="Health" 
          caption="Learn how to recover and prevent any sport injury!"/>
      </InfoGroup>

      <JigSaw 
      order={1}
      img="img/bg-showcase-1.jpg"
      title="Why use our site?"
      caption="Social media is all about engagement. Each social platform gives you the opportunity to get to know your future clients, answer their fitness questions, help them achieve their goals, and provide them with as much value as you can. When you create a social media strategy with the client in mind, you’re much more likely to secure their training business. Social media allows you to connect with clients and prospective gym members on a personal, social level." 
       />
       <JigSaw 
      order={2}
      img="img/bg-showcase-2.jpg"
      title="Choose the healthy choice!"
      caption="Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite. The truth is that while some specific foods or nutrients have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important." 
       />
       <JigSaw 
      order={3}
      img="img/bg-showcase-3.jpg"
      title="How to best recover from and injury!"
      caption="Athletes react to injuries with a wide range of emotions which may include denial, anger, sadness, and even depression. An injury often seems unfair to anyone who has been physically active and otherwise healthy. Although these feelings are real, it’s important to move beyond the negative and find more positive strategies to cope with this setback." 
       />
       
       <InfoGroup title="What people are saying..."> 
       <Testimonials
          img="img/testimonials-1.jpg"
          title="John H"
          caption='"What a great site! Very helpfull in finding ways to relieve my pain from years of playing sports."'
          />
        <Testimonials
          img="img/testimonials-2.jpg"
          title="Tracy C"
          caption='"Awesome network for researching yoga related injuries and also meeting fellow yoga enthusiast."'
          />
        <Testimonials
          img="img/testimonials-3.jpg"
          title="Gerry &amp; Geraldine"
          caption='"Thanks so much for making these free resources available to us! Specially for my wifes back pain and my two partial knee replacements."'
          />
        </InfoGroup>

        <SignUp img="img/bg-masthead.jpg" />
        <Footer />

        {state.signUpForm && <RegisterLogin />}
        
    </div>
    
  );
}

export default Home;



    
     
