import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const cardClasses = "bg-white p-4 rounded-lg shadow-lg";
const textClasses = "text-card-foreground";
const buttonClasses = "text-muted-foreground";



const CountryCard = ({ flagSrc, countryName, salesAmount, arrowSrc }) => (
  <li className="flex items-center justify-between mb-2">
    <div className="flex items-center">
      <img aria-hidden="true" alt="flag" src={flagSrc} className="mr-3" />
      <p className={textClasses}>{countryName}</p>
    </div>
    <div className="flex items-center">
      <img aria-hidden="true" alt="arrow" src={arrowSrc} className="mr-2" />
      <p className={textClasses}>{salesAmount}</p>
    </div>
  </li>
);

const Analytics2 = () => {
  
  
  const [topCountries, setTopCountries] = useState([]);
  const [salesData, setSalesData] = useState({
    revenue: 37802,
    profit: 28305,
    percentage: 1.56,
  });

  useEffect(() => {
    // Fetch data from the backend in future
    // For now, we use dummy data
   

    setTopCountries([
      {
        flagSrc: "https://openui.fly.dev/openui/24x24.svg?text=IN",
        countryName: "India",
        salesAmount: "1200",
        arrowSrc: "https://openui.fly.dev/openui/24x24.svg?text=📈",
      },
      {
        flagSrc: "https://openui.fly.dev/openui/24x24.svg?text=PK",
        countryName: "Pakisthan",
        salesAmount: "500",
        arrowSrc: "https://openui.fly.dev/openui/24x24.svg?text=📈",
      },
    ]);
  }, []);

 

      <div className={cardClasses}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-card-foreground">
            Top Countries By Sales
          </h2>
          <button className={buttonClasses}>
            <img
              aria-hidden="true"
              alt="view-all"
              src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
            />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-card-foreground">
            ${salesData.revenue}
          </h3>
          <p className="text-green-500 text-sm">
            {salesData.percentage}%{" "}
            <span className="text-muted-foreground">since last weekend</span>
          </p>
        </div>
        <ul>
          {topCountries.map((country, index) => (
            <CountryCard
              key={index}
              flagSrc={country.flagSrc}
              countryName={country.countryName}
              salesAmount={country.salesAmount}
              arrowSrc={country.arrowSrc}
            />
          ))}
        </ul>
      </div>
};

export default Analytics2;
