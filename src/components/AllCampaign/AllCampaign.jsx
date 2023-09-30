import { useLoaderData } from 'react-router-dom';
import Campaign from '../Campaign/Campaign';
import PropTypes from 'prop-types';

const AllCampaign = ( {allDonation} ) => {
    const allCampaign = useLoaderData();
    const allDon = allCampaign.map((campaign) =>
    <Campaign key={campaign.id} campaign={campaign}></Campaign>)
    const allFilter = allDonation.map((campaign) =>
    <Campaign key={campaign.id} campaign={campaign}></Campaign>)
    return (
             <div className=' pl-12 lg:pl-0 grid md:grid-cols-2 lg:grid-cols-4 gap-1 my-4' >
            {
                allDonation.length == 0 ? allDon : allFilter
            }
        </div>
    );
};

AllCampaign.propTypes = {

    allDonation: PropTypes.any
};

export default AllCampaign;

 

 
    
 
    
 

 