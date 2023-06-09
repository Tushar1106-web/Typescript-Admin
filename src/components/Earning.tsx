import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';

const Earning = ( ) => {

   const [date, setdate] = useState(new Date());

    
      
    return (
     
      <div className="bg-red-200 p-28">
        <h1 className="text-5xl font-semibold mb-14">Earning Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img alt="" src={require("../images/earn.jpg")} />
            <h1 className="text-4xl font-serif mb-2">Weekly Earn</h1>
            <p className="text-gray-600 font-bold text-4xl">
              Earnings: <FontAwesomeIcon icon={faDollarSign} />
              <CountUp end={100} duration={4}/>
            </p>
            <p className="text-gray-600"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img alt="" src={require("../images/earn.jpg")} />
            <h1 className="text-4xl font-serif mb-2">Monthly Earn</h1>
            <p className="text-gray-600 font-bold text-4xl">
              Earnings: <FontAwesomeIcon icon={faDollarSign} />
              <CountUp end={100} duration={4}/>
            </p>
            <p className="text-gray-600"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img alt="" src={require("../images/earn.jpg")} />
            <h1 className="text-4xl font-serif mb-2">Yearly Earn</h1>
            <p className="text-gray-600 font-bold text-4xl">
              Earnings: <FontAwesomeIcon icon={faDollarSign} />
              <CountUp end={100} duration={4}/>
            </p>
          </div>
          {/* Add more earning cards as needed */}
        </div>
      </div>
    
  );
};

export default Earning;
