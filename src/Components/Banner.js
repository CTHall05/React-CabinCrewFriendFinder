import React from 'react';
import BannerImage from '../images/airport.jpg';

function Banner() {
  return (
    <section className="Banner-Container">
      <img
        className="Banner-Image"
        src={BannerImage}
        alt="People greeting at Aiport"
      />
      <div className="Text-Overlay">
        <h1>Find Lost Crewmates</h1>
      </div>
    </section>
  );
}

export default Banner;
