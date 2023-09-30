import { useState } from "react";
import AllCampaign from "../AllCampaign/AllCampaign";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
    const [allDonation, setAllDonation] = useState([]);
    const donations = useLoaderData();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const allDonation = donations.filter((donation)=>
        e.target.name.value === donation.Category)
        setAllDonation(allDonation);
   }
    return (
        <div className="">
            <Banner handleSubmit={handleSubmit}></Banner>
            <div className="max-w-7xl mx-auto">
                <AllCampaign allDonation={allDonation}></AllCampaign>
            </div>

        </div>
    );
};

export default HomePage;