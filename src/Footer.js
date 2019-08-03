import React from 'react';

const Footer = (prop) => {
    return (
        <div className="Footer bg-light">
            <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul className="list-inline mb-2">
          <li className="list-inline-item">
              <a href="#top">Home</a>
            </li>
          <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#top">About</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#top">Contact</a>
            </li>   
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">© CHALLENGE 2019. All Rights Reserved.</p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter-square fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-instagram fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>



        </div>

    )
}



export default Footer;