import { useLoaderData } from 'react-router-dom';
import Campaign from '../Campaign/Campaign';

const AllCampaign = () => {
    const allCampaign = useLoaderData();
    
    return (
        <div className='grid grid-cols-4 gap-1 my-4'>
            {
                allCampaign.map((campaign) =>
                    <Campaign key={campaign.id} campaign={campaign}></Campaign>
                )
            }
        </div>
    );
};

export default AllCampaign;

