// import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
 
  ["Watch TV", 12],
  ["Sleep", 4],
];

export const options = {
    // title: "My Daily Activities",
    legend: { position: "bottom"},
    
    colors: ["green", "red", "blue"] 
  };
  

const Statistics = () => {
    return (
        <div>
             <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"600px"}
                />
        </div>
    );
};

export default Statistics;
 
