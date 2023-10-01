import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { getStoredDonation } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";

const options = {
  colors: ["#00C49F", "#FF444A", "blue"],
  legend: { position: "bottom" },
  
};

const Statistics = () => {
  const donations = useLoaderData();

  useEffect(() => {
    const storedDonationId = getStoredDonation();
     if (donations && storedDonationId) {
      const donationsApplied = donations.filter((donation) =>
        storedDonationId.includes(donation.id)
      );
      console.log(donations, storedDonationId, donationsApplied);
    }
  }); 

  const storedDonationId = getStoredDonation(); 
  const data = [
    ["Donation", "Number"],
    ["Your Donation", storedDonationId.length],
    ["Total Donation", (donations.length-storedDonationId.length)],
    
  ];

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
