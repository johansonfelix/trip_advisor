import React from "react";
import background from '../../res/images/background.jpg';
import SearchCard from '../SearchCard/SearchCard';
const Hero = ({setShowResults, setType, setCoordinates, address, setAddress}) => {
  return (
    <>
      <header className="sans-serif">
        <div
          className="cover bg-left bg-center-l"
          style={{
            backgroundImage: `url(${background} )`,
          }}
        >
          <div className="w-100 pb5 pt5 pb6-m ">
          
            <div className="w-auto">
             <SearchCard setAddress={setAddress} address={address} setShowResults={setShowResults} setType={setType} setCoordinates={setCoordinates}/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
