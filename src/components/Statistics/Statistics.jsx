import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { getStoredDonation } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";

const options = {
  legend: { position: "bottom" },
  colors: ["green", "red", "blue"],
};

const Statistics = () => {
  const donations = useLoaderData();

  useEffect(() => {
    const storedDonationId = getStoredDonation();

    // Check if donations and storedDonationId exist before filtering
    if (donations && storedDonationId) {
      const donationsApplied = donations.filter((donation) =>
        storedDonationId.includes(donation.id)
      );
      console.log(donations, storedDonationId, donationsApplied);
    }
  }, []); 

 
  const storedDonationId = getStoredDonation(); 
  const data = [
    ["Donation", "Number"],
    ["Total Donation", (donations.length-storedDonationId.length)],
    ["Donation", storedDonationId.length],
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
