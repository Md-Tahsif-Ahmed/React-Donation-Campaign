import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from 'react-icons/fa';
import {saveDonation} from '../../utility/localstorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Details = () => {
        const donations = useLoaderData();
        const { id } = useParams()
        const idInt = parseInt(id);
        const donation = donations.find((don) => don.id === idInt);
        
 

const { Picture, Title, Description, Price, Text_button_bg } = donation;
const bgStyle = {
    backgroundColor: Text_button_bg,
     
  };
 
    const handleDonate = ()=> {
        saveDonation(idInt);
        toast('Donated Successfully');
    }


  return (
    <div className="max-w-7xl mx-auto my-8 ">
        <div className="relative">
            <img className="w-full h-96 rounded-lg" src={Picture} alt={Title} />
            
            <div className="absolute bottom-0 rounded-lg bg-black opacity-30  h-20 w-full"> </div>
            <div className="absolute bottom-5 left-5">
                 <button onClick={handleDonate} style={bgStyle}  className="btn w-36 normal-case text-center flex items-center justify-center text-white font-semibold rounded border-0" >Donate <span className="flex"><FaDollarSign />{Price}</span></button>
           </div>
        </div>
        <h1 className=" px-6 lg:px-0 text-2xl lg:text-4xl font-bold text-black my-8">{Title}</h1>
        <p className="px-6 lg:px-0 text-gray-500">{Description}</p>
        
        <ToastContainer />    
    </div>
  );
};

export default Details;
