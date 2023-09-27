import { useLoaderData } from "react-router-dom";
import DonationPage from "../DonationPage/DonationPage";
import { useState } from "react";
const Donation = () => {
    const [dataLength, setDataLength] = useState(4);
    const donations = useLoaderData();
    console.log(donations)


    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
             {
                donations.map((don,idx)=> <DonationPage key={idx} don={don}></DonationPage>)
             }
            </div>
            
            <div className="if(dataLength === donation.length ? 'hidden': '')" >
                <div className="flex justify-center my-4">
                        <button onClick={()=>setDataLength(donations.length)} className="btn bg-green-700 font-bold text-white my-3 ">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;