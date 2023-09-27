import AllCampaign from "../AllCampaign/AllCampaign";
import Banner from "../Banner/Banner";

const HomePage = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AllCampaign></AllCampaign>
            </div>

        </div>
    );
};

export default HomePage;