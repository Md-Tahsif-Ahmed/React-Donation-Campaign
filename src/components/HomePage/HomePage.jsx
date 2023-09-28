import AllCampaign from "../AllCampaign/AllCampaign";
import Banner from "../Banner/Banner";

const HomePage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <AllCampaign></AllCampaign>
            </div>

        </div>
    );
};

export default HomePage;